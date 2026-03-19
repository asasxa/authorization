export interface CurrentUser {
  roles: string[];
  [key: string]: unknown;
}

export interface WithAuthorizationProps {
  currentUser?: CurrentUser | null;
  [key: string]: unknown;
}

export type Role = string;

export const THEME_STYLES: ThemeStyles = {
  light: {
    background: '#ffffff',
    color: '#1a1a1a',
    border: '#cccccc',
  },
  dark: {
    background: '#1a1a1a',
    color: '#ffffff',
    border: '#444444',
  },
};