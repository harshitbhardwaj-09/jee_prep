import React from 'react';

const subjects = [
  { id: 'Physics', label: 'Phy', icon: '🟧', color: 'text-orange-500' },
  { id: 'Chemistry', label: 'Chem', icon: '🧪', color: 'text-green-600' },
  { id: 'Mathematics', label: 'Math', icon: '🧮', color: 'text-blue-500' },
];

export function SubjectTabs({ activeSubject, onSubjectChange }: { activeSubject: string, onSubjectChange: (s: any) => void }) {
  return (
    <div className="flex justify-around items-center border-b bg-white dark:bg-gray-900">
      {subjects.map(sub => (
        <button
          key={sub.id}
          className="flex flex-col items-center flex-1 py-2 relative"
          onClick={() => onSubjectChange(sub.id)}
        >
          <span className={`text-2xl ${activeSubject === sub.id ? sub.color : 'text-gray-400'}`}>{sub.icon}</span>
          <span className={`text-xs mt-1 ${activeSubject === sub.id ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>{sub.label}</span>
          {activeSubject === sub.id && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-1 bg-blue-500 rounded-full mt-1"></span>
          )}
        </button>
      ))}
    </div>
  );
} 