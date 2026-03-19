import { useState } from 'react';
import type { CurrentUser } from './types';
import { withAuthorization } from './hoc/withAuthorization';
import { AdminPanel } from './components/AdminPanel';

const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin', 'moderator']);

const App = () => {
  // Состояние текущего пользователя
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>({
    roles: ['user'] // По умолчанию — обычная роль
  });

  // Переключение ролей для демо
  const switchRole = (roles: string[]) => {
    setCurrentUser({ roles });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      background: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>🔐 HOC withAuthorization Demo</h1>
        <p>
          Текущие роли:{' '}
          <strong>{currentUser?.roles?.join(', ') || 'не авторизован'}</strong>
        </p>
      </header>

      {/* Переключатель ролей для тестирования */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => switchRole(['user'])}
          disabled={currentUser?.roles?.includes('user')}
          style={{
            padding: '8px 16px',
            background: currentUser?.roles?.includes('user') ? '#94a3b8' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          👤 User
        </button>
        <button
          onClick={() => switchRole(['moderator'])}
          disabled={currentUser?.roles?.includes('moderator')}
          style={{
            padding: '8px 16px',
            background: currentUser?.roles?.includes('moderator') ? '#94a3b8' : '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          ⚡ Moderator
        </button>
        <button
          onClick={() => switchRole(['admin'])}
          disabled={currentUser?.roles?.includes('admin')}
          style={{
            padding: '8px 16px',
            background: currentUser?.roles?.includes('admin') ? '#94a3b8' : '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          👑 Admin
        </button>
        <button
          onClick={() => switchRole(['admin', 'user'])}
          disabled={currentUser?.roles?.includes('admin') && currentUser?.roles?.includes('user')}
          style={{
            padding: '8px 16px',
            background: currentUser?.roles?.includes('admin') && currentUser?.roles?.includes('user') ? '#94a3b8' : '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          🎭 Admin+User
        </button>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            background: '#64748b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          🚪 Выйти
        </button>
      </div>

      {/* Защищённый компонент */}
      <AdminPanelWithAuth 
        currentUser={currentUser}
        title="Панель управления"
        onLogout={handleLogout}
      />

      <footer style={{ marginTop: 'auto', paddingTop: '20px', opacity: 0.7, textAlign: 'center' }}>
        <small>HOC withAuthorization • React + TypeScript</small>
      </footer>
    </div>
  );
};

export default App;