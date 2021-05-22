import faker from 'faker';
import { QuizCategories } from './quiz-data.types';
import { quizCsCompleteSet } from './quizCsCompleteSet';
import { quizGkCompleteSet } from './quizGkCompleteSet';
import { quizNatSciCompleteSet } from './quizNatSciCompleteSet';

export const quizCategories: QuizCategories = [
  {
    id: faker.datatype.uuid(),
    name: 'General Knowledge',
    quiz: quizGkCompleteSet,
  },
  {
    id: faker.datatype.uuid(),
    name: 'Computer Science',
    quiz: quizCsCompleteSet,
  },
  {
    id: faker.datatype.uuid(),
    name: 'Natural Science',
    quiz: quizNatSciCompleteSet,
  },
];
