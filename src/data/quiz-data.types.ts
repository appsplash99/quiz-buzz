/**
 * Rules for Each Quiz Set of each category
 */
export type QuizRules = {
  type?: 'multiple' | 'boolean';
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  totalQuestions?: number;
  correctAnswerPoints?: number;
  inCorrectAnswerPoints?: number;
  totalPoints?: number;
};

/**
 * INdividual Option within Question Object
 */
export type Option = {
  option: string | number;
  isRight: boolean;
};

/**
 * Single Question present within a QuizSet's Questions Array
 */
export type QuizQuestion = {
  _id?: string;
  questionNumber?: number;
  question: string;
  // correctAnswer?: string;
  // incorrectAnswers?: string[];
  options: Option[];
};

/**
 * Individual Quiz Set
 */
export type QuizSet = {
  category: 'General Knowledge' | 'Computer Science' | 'Natural Science';
  questions: QuizQuestion[];
  rules: QuizRules;
};

/**
 * collection of QuizSet of sungle category
 */
export type QuizCompleteSet = {
  set1: QuizSet;
  set2: QuizSet;
  set3: QuizSet;
};

/**
 * Each Object within Categories Array
 */
export type QuizCategory = {
  id: string;
  name: 'General Knowledge' | 'Computer Science' | 'Natural Science';
  quiz: QuizCompleteSet;
};

/**
 * All Quiz Categories
 */
export type QuizCategories = QuizCategory[];
