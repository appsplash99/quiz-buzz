import React, { createContext, useContext, useReducer } from 'react';
import { quizCategories } from '../../data/quiz-data';
import { quizReducer } from '../../reducer/quiz-reducer';
import { ContextType, InitialState } from './quiz-context.types';

const initialState: InitialState = {
  // currentQuiz: quizCategories.gk.set1,
  currentQuiz: quizCategories[0].quiz?.set1,
  totalQuestionsAttempted: 0,
  currentQuestion: 0,
  userScore: 0,
};

/**
 * context starts here
 */
const QuizContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
