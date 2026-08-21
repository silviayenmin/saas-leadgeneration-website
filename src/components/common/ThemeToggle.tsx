import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <div className="theme-toggle-icon">
        {theme === 'dark' ? (
          <Sun size={18} className="text-amber" />
        ) : (
          <Moon size={18} className="text-teal" />
        )}
      </div>
      <span className="theme-toggle-label">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};
