
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
}

export function FilterDropdown({
  label,
  options,
  selectedValues,
  onSelectionChange
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (value: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedValues, value]);
    } else {
      onSelectionChange(selectedValues.filter(v => v !== value));
    }
  };

  const displayText = selectedValues.length > 0 
    ? selectedValues.length === 1 
      ? selectedValues[0] 
      : `${selectedValues.length} selected`
    : label;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="justify-between min-w-[120px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          {displayText}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={option}
                checked={selectedValues.includes(option)}
                onCheckedChange={(checked) => handleValueChange(option, checked as boolean)}
              />
              <label
                htmlFor={option}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
