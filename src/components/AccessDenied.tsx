import React from 'react';

export interface AccessDeniedProps {
  message?: string;
}

export const AccessDenied: React.FC<AccessDeniedProps> = ({
  message = 'У вас нет прав для просмотра этого раздела.'
}) => {
  return (
    <div
      style={{
        padding: '24px',
        background: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        color: '#991b1b',
        textAlign: 'center' as const,
        maxWidth: '400px',
        margin: '0 auto'
      }}
      role="alert"
    >
      <span style={{ fontSize: '24px', marginRight: '8px' }}>🔒</span>
      {message}
    </div>
  );
};

export default AccessDenied;