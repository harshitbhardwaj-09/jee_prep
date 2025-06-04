
import { Chapter } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
}

const iconMap: Record<string, string> = {
  'planet': '🪐',
  'function': '𝑓',
  'ruler': '📏',
  'arrow-right': '→',
  'arrows-out-cardinal': '⤴',
  'scale': '⚖️',
  'molecule': '🧪',
  'atom': '⚛️',
  'equals': '=',
  'triangle': '△'
};

export function ChapterCard({ chapter }: ChapterCardProps) {
  const questionChange = chapter.questions2025 - chapter.questions2024;
  const isIncrease = questionChange > 0;
  
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg">
          {iconMap[chapter.icon] || '📚'}
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">{chapter.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            {chapter.isWeak && (
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs">
                Anurag
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-sm">
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 dark:text-gray-100">2025: {chapter.questions2025}Qs</span>
            {questionChange !== 0 && (
              <span className={cn(
                "flex items-center gap-1",
                isIncrease ? "text-green-600" : "text-red-600"
              )}>
                {isIncrease ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              </span>
            )}
            <span className="text-gray-500 dark:text-gray-400">| 2024: {chapter.questions2024}Qs</span>
          </div>
        </div>
        <div className="text-gray-500 dark:text-gray-400 min-w-[80px] text-right">
          {chapter.totalQuestions}/{chapter.totalQuestions} Qs
        </div>
      </div>
    </div>
  );
}
