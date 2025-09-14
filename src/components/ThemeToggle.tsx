import React from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className="w-10 h-10 p-0 border-2 border-blue-200 dark:border-gray-600"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-500" />
      )}
    </Button>
  );
}