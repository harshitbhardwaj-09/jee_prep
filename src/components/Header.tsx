
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon, ArrowUpDown } from 'lucide-react';
import { FilterDropdown } from './FilterDropdown';
import { getUniqueClasses, getUniqueUnits } from '@/data/mockData';
import { FilterState } from '@/types';

interface HeaderProps {
  activeSubject: 'Physics' | 'Chemistry' | 'Mathematics';
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  chaptersCount: number;
}

export function Header({ activeSubject, filters, onFiltersChange, chaptersCount }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const classes = getUniqueClasses(activeSubject);
  const units = getUniqueUnits(activeSubject, filters.classes);

  const statusOptions = ['Not Started', 'In Progress', 'Completed'];

  const toggleSort = () => {
    onFiltersChange({
      sortOrder: filters.sortOrder === 'asc' ? 'desc' : 'asc'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
              ⚛️
            </span>
            {activeSubject} PYQs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Chapter-wise Collection of {activeSubject} PYQs
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <FilterDropdown
          label="Class"
          options={classes}
          selectedValues={filters.classes}
          onSelectionChange={(values) => onFiltersChange({ classes: values })}
        />
        
        <FilterDropdown
          label="Units"
          options={units}
          selectedValues={filters.units}
          onSelectionChange={(values) => onFiltersChange({ units: values })}
        />

        <FilterDropdown
          label="Status"
          options={statusOptions}
          selectedValues={filters.status}
          onSelectionChange={(values) => onFiltersChange({ status: values })}
        />

        <Button
          variant={filters.showWeakChapters ? "default" : "outline"}
          onClick={() => onFiltersChange({ showWeakChapters: !filters.showWeakChapters })}
          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          Weak Chapters
        </Button>

        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Showing all chapters ({chaptersCount})
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSort}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>
    </div>
  );
}
