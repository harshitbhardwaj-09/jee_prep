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
  isMobile?: boolean;
}

export function Header({ activeSubject, filters, onFiltersChange, chaptersCount, isMobile }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const classes = getUniqueClasses(activeSubject);
  const units = getUniqueUnits(activeSubject, []);

  const statusOptions = ['Not Started', 'In Progress', 'Completed'];

  const toggleSort = () => {
    onFiltersChange({
      sortOrder: filters.sortOrder === 'asc' ? 'desc' : 'asc'
    });
  };

  if (isMobile) {
    // Default filter state for clearing
    const defaultFilters = {
      classes: [],
      units: [],
      status: [],
      showWeakChapters: false,
      sortBy: 'name' as const,
      sortOrder: 'asc' as const,
    };
    return (
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-2">
        <div className="flex items-center gap-2 flex-nowrap overflow-x-auto filters">
          <FilterDropdown
            label="Class"
            options={['11', '12']}
            selectedValues={filters.classes}
            onSelectionChange={(values) => onFiltersChange({ classes: values })}
            buttonClass="rounded-full px-4 py-1 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <FilterDropdown
            label="Units"
            options={units}
            selectedValues={filters.units}
            onSelectionChange={(values) => onFiltersChange({ units: values })}
            buttonClass="rounded-full px-4 py-1 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <FilterDropdown
            label="Status"
            options={statusOptions}
            selectedValues={filters.status}
            onSelectionChange={(values) => onFiltersChange({ status: values })}
            buttonClass="rounded-full px-4 py-1 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <button
            className={`rounded-full px-4 py-1 text-sm font-medium border ${filters.showWeakChapters ? 'bg-blue-100 text-blue-700 border-blue-400 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 border-gray-200 dark:border-gray-700'}`}
            onClick={() => onFiltersChange({ showWeakChapters: !filters.showWeakChapters })}
          >
            Weak
          </button>
          <button
            className="rounded-full px-3 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => onFiltersChange(defaultFilters)}
          >
            Clear All
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
              Showing all chapters ({chaptersCount})
            </span>
            <span
              onClick={toggleSort}
              className="flex items-center gap-1 text-blue-600 cursor-pointer select-none"
            >
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </span>
          </div>
        </div>
      </div>
    );
  }
  // Desktop layout
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6 header-main">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 header-title">
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
      <div className="flex items-center gap-4 flex-wrap filters">
        <FilterDropdown
          label="Class"
          options={['11', '12']}
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
        <button
          className="rounded-full px-3 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => onFiltersChange({
            classes: [],
            units: [],
            status: [],
            showWeakChapters: false,
            sortBy: 'name' as const,
            sortOrder: 'asc' as const,
          })}
        >
          Clear All
        </button>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Showing all chapters ({chaptersCount})
          </span>
          <span
            onClick={toggleSort}
            className="flex items-center gap-1 text-blue-600 cursor-pointer select-none"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </span>
        </div>
      </div>
    </div>
  );
}
