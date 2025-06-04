
export interface Chapter {
  id: string;
  name: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  class: string;
  units: string[];
  status: 'Not Started' | 'In Progress' | 'Completed';
  isWeak: boolean;
  questions2025: number;
  questions2024: number;
  totalQuestions: number;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface FilterState {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  classes: string[];
  units: string[];
  status: string[];
  showWeakChapters: boolean;
  sortBy: 'name' | 'questions' | 'difficulty';
  sortOrder: 'asc' | 'desc';
}
