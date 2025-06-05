import { Chapter } from '@/types';

export const mockChapters: Chapter[] = [
  {
    id: '1',
    name: 'Gravitation',
    subject: 'Physics',
    class: '11',
    units: ['Mechanics'],
    status: 'In Progress',
    isWeak: false,
    questions2025: 8,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'planet',
    difficulty: 'Medium'
  },
  {
    id: '2',
    name: 'Math in Physics',
    subject: 'Physics',
    class: '11',
    units: ['Mathematical Methods'],
    status: 'Completed',
    isWeak: true,
    questions2025: 2,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'function',
    difficulty: 'Hard'
  },
  {
    id: '3',
    name: 'Units and Dimensions',
    subject: 'Physics',
    class: '11',
    units: ['Physical World'],
    status: 'Completed',
    isWeak: false,
    questions2025: 6,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'ruler',
    difficulty: 'Easy'
  },
  {
    id: '4',
    name: 'Motion in One Dimension',
    subject: 'Physics',
    class: '11',
    units: ['Kinematics'],
    status: 'In Progress',
    isWeak: false,
    questions2025: 8,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'arrow-right',
    difficulty: 'Medium'
  },
  {
    id: '5',
    name: 'Motion in Two Dimensions',
    subject: 'Physics',
    class: '11',
    units: ['Kinematics'],
    status: 'Completed',
    isWeak: false,
    questions2025: 8,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'arrows-out-cardinal',
    difficulty: 'Medium'
  },
  {
    id: '6',
    name: 'Laws of Motion',
    subject: 'Physics',
    class: '11',
    units: ['Laws of Motion'],
    status: 'Completed',
    isWeak: false,
    questions2025: 8,
    questions2024: 6,
    totalQuestions: 205,
    icon: 'scale',
    difficulty: 'Hard'
  },
  {
    id: '7',
    name: 'Organic Chemistry Basics',
    subject: 'Chemistry',
    class: '11',
    units: ['Organic Chemistry'],
    status: 'Not Started',
    isWeak: true,
    questions2025: 5,
    questions2024: 4,
    totalQuestions: 150,
    icon: 'molecule',
    difficulty: 'Medium'
  },
  {
    id: '8',
    name: 'Atomic Structure',
    subject: 'Chemistry',
    class: '11',
    units: ['Structure of Atom'],
    status: 'In Progress',
    isWeak: false,
    questions2025: 7,
    questions2024: 8,
    totalQuestions: 180,
    icon: 'atom',
    difficulty: 'Hard'
  },
  {
    id: '9',
    name: 'Algebra Fundamentals',
    subject: 'Mathematics',
    class: '11',
    units: ['Algebra'],
    status: 'Completed',
    isWeak: false,
    questions2025: 12,
    questions2024: 10,
    totalQuestions: 250,
    icon: 'equals',
    difficulty: 'Easy'
  },
  {
    id: '10',
    name: 'Trigonometry',
    subject: 'Mathematics',
    class: '11',
    units: ['Trigonometry'],
    status: 'In Progress',
    isWeak: true,
    questions2025: 9,
    questions2024: 7,
    totalQuestions: 220,
    icon: 'triangle',
    difficulty: 'Medium'
  }
];

export const getUniqueClasses = (subject: string): string[] => {
  const chapters = mockChapters.filter(chapter => chapter.subject === subject);
  return [...new Set(chapters.map(chapter => chapter.class))].sort();
};

export const getUniqueUnits = (subject: string, _selectedClasses: string[] = []): string[] => {
  const chapters = mockChapters.filter(chapter => chapter.subject === subject);
  const allUnits = chapters.flatMap(chapter => chapter.units);
  return [...new Set(allUnits)].sort();
};
