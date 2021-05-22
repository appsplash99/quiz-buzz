import { QuizSet } from '../../data/quiz-data.types';
// import { ACTIONTYPE } from '../../reducer/quiz-reducer';

export type InitialState = {
  currentQuiz: QuizSet;
  totalQuestionsAttempted: number;
  currentQuestion: number;
  userScore: number;
};

// export type DispatchType = {
//   action?: ACTIONTYPE;
//   payload?: object;
// };

export type ContextType = {
  state: InitialState;
  dispatch: React.Dispatch<any>;
};
