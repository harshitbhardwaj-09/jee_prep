import { Chapter } from '@/types';
import rawData from '../../all_subjects_chapter_data.json';

// Helper function to generate icon and difficulty (dummy logic, customize as needed)
const getIcon = (subject: string) => {
  if (subject === 'Physics') return 'atom';
  if (subject === 'Chemistry') return 'molecule';
  return 'equals';
};
const getDifficulty = (questionCount: number) => {
  if (questionCount >= 8) return 'Hard';
  if (questionCount >= 4) return 'Medium';
  return 'Easy';
};

export const allSubjectsChapters: Chapter[] = (rawData as any[]).map((item, idx) => ({
  id: (idx + 1).toString(),
  name: item.chapter,
  subject: item.subject,
  class: item.class.replace('Class ', ''),
  units: [item.unit],
  status: item.status,
  isWeak: item.isWeakChapter,
  questions2025: item.yearWiseQuestionCount?.['2025'] || 0,
  questions2024: item.yearWiseQuestionCount?.['2024'] || 0,
  totalQuestions: Object.values(item.yearWiseQuestionCount || {}).reduce((a: number, b: number) => a + (b as number), 0),
  icon: getIcon(item.subject),
  difficulty: getDifficulty(item.yearWiseQuestionCount?.['2025'] || 0)
})); 