
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSubject: 'Physics' | 'Chemistry' | 'Mathematics';
  onSubjectChange: (subject: 'Physics' | 'Chemistry' | 'Mathematics') => void;
}

const subjects = [
  { id: 'Physics', name: 'Physics PYQs', icon: '⚛️', color: 'bg-orange-500' },
  { id: 'Chemistry', name: 'Chemistry PYQs', icon: '🧪', color: 'bg-green-500' },
  { id: 'Mathematics', name: 'Mathematics PYQs', icon: '📐', color: 'bg-blue-500' }
] as const;

export function Sidebar({ activeSubject, onSubjectChange }: SidebarProps) {
  return (
    <div className="w-80 bg-gray-900 dark:bg-gray-950 text-white p-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
          <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
          JEE Main
        </h1>
        <p className="text-gray-400 text-sm">2025 - 2009 | 173 Papers | 15825 Qs</p>
      </div>

      <nav className="space-y-2">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSubjectChange(subject.id as typeof activeSubject)}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200",
              activeSubject === subject.id
                ? "bg-gray-800 dark:bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800 hover:text-white"
            )}
          >
            <span className={cn("w-6 h-6 rounded-full flex items-center justify-center text-sm", subject.color)}>
              {subject.icon}
            </span>
            <span className="font-medium">{subject.name}</span>
            <span className="ml-auto text-gray-400">›</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
