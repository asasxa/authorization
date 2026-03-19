import React from 'react';

export interface AdminPanelProps {
  title?: string;
  onLogout?: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  title = 'Админская панель',
  onLogout
}) => {
  return (
    <div style={{
      padding: '24px',
      background: '#f0f9ff',
      border: '1px solid #7dd3fc',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ margin: '0 0 16px', color: '#0369a1' }}>
        🔐 {title}
      </h2>
      <p style={{ color: '#0c4a6e', marginBottom: '20px' }}>
        Добро пожаловать! Это защищённый раздел, доступный только авторизованным пользователям.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
        <button
          onClick={() => alert('Действие администратора')}
          style={{
            padding: '10px 20px',
            background: '#0284c7',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Выполнить действие
        </button>

        {onLogout && (
          <button
            onClick={onLogout}
            style={{
              padding: '10px 20px',
              background: '#64748b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;