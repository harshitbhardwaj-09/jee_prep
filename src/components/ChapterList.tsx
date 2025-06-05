import { Chapter } from '@/types';
import { ChapterCard } from './ChapterCard';

interface ChapterListProps {
  chapters: Chapter[];
  highlightWeak?: boolean;
}

export function ChapterList({ chapters, highlightWeak }: ChapterListProps) {
  if (chapters.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No chapters found</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Try adjusting your filters to see more results
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 chapter-list">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.id} chapter={chapter} highlightWeak={highlightWeak} />
      ))}
    </div>
  );
}
