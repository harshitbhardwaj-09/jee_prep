import React from 'react';

export function MobileHeader({ theme, setTheme }: { theme: string | undefined, setTheme: (t: string) => void }) {
  const isDark = theme === 'dark';
  return (
    <div className="mobile-header w-full flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-gray-900">
      <button className="text-2xl" aria-label="Back">←</button>
      <span className="font-bold text-lg">JEE Main</span>
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle dark mode">
        {isDark ? '🌙' : '☀️'}
      </button>
    </div>
  );
} 