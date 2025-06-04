"use client"

import { useState, useMemo } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ChapterList } from '@/components/ChapterList';
import { mockChapters } from '@/data/mockData';
import { allSubjectsChapters } from '@/data/allSubjectsData';
import { FilterState } from '@/types';

const Index = () => {
  const [activeSubject, setActiveSubject] = useState<'Physics' | 'Chemistry' | 'Mathematics'>('Physics');
  const [filters, setFilters] = useState<FilterState>({
    subject: 'Physics',
    classes: [],
    units: [],
    status: [],
    showWeakChapters: false,
    sortBy: 'name',
    sortOrder: 'asc'
  });

  const handleSubjectChange = (subject: 'Physics' | 'Chemistry' | 'Mathematics') => {
    setActiveSubject(subject);
    setFilters(prev => ({
      ...prev,
      subject,
      classes: [],
      units: [],
      status: [],
      showWeakChapters: false
    }));
  };

  const handleFiltersChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredChapters = useMemo(() => {
    let filtered = allSubjectsChapters.filter(chapter => {
      // Filter by subject
      if (chapter.subject !== activeSubject) return false;
      
      // Filter by classes
      if (filters.classes.length > 0 && !filters.classes.includes(chapter.class)) return false;
      
      // Filter by units
      if (filters.units.length > 0 && !chapter.units.some(unit => filters.units.includes(unit))) return false;
      
      // Filter by status
      if (filters.status.length > 0 && !filters.status.includes(chapter.status)) return false;
      
      // Filter by weak chapters
      if (filters.showWeakChapters && !chapter.isWeak) return false;
      
      return true;
    });

    // Sort chapters
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'questions':
          comparison = a.questions2025 - b.questions2025;
          break;
        case 'difficulty':
          const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
          break;
        default:
          comparison = 0;
      }
      
      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [activeSubject, filters]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar 
          activeSubject={activeSubject} 
          onSubjectChange={handleSubjectChange} 
        />
        
        <div className="flex-1">
          <Header
            activeSubject={activeSubject}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            chaptersCount={filteredChapters.length}
          />
          
          <main className="p-6">
            <ChapterList chapters={filteredChapters} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
