import React, { memo } from 'react';
import type { Role, WithAuthorizationProps } from '../types';
import { AccessDenied } from '../components/AccessDenied';

/**
 * Higher-Order Component для ограничения доступа по ролям
 *
 * @param WrappedComponent - Компонент для защиты
 * @param allowedRoles - Массив ролей, которым разрешён доступ
 * @returns Компонент с проверкой авторизации
 */
export function withAuthorization<P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Role[]
): React.FC<P & WithAuthorizationProps> {

  const WithAuthorizationComponent = memo(function WithAuthorizationComponent(
    props: P & WithAuthorizationProps
  ) {
    const { currentUser, ...restProps } = props;

    const hasAccess = React.useMemo(() => {
      if (!currentUser?.roles || !Array.isArray(currentUser.roles)) {
        return false;
      }
      return allowedRoles.some(role => currentUser.roles.includes(role));
    }, [currentUser, allowedRoles]);

    if (hasAccess) {
      return <WrappedComponent {...(restProps as P)} />;
    }

    return <AccessDenied />;
  });

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithAuthorizationComponent.displayName = `withAuthorization(${componentName})`;

  return WithAuthorizationComponent;
}

export default withAuthorization;