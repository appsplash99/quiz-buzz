import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { Home } from './Pages/Home/Home';
import { QuizBuzzNav } from './components/QuizBuzzNav/QuizBuzzNav';
import { QuizCategories } from './Pages/QuizCategories/QuizCategories';
import { PlayQuestion } from './Pages/PlayQuestion/PlayQuestion';
import { QuizIndividual } from './Pages/QuizIndividual/QuizIndividual';

export const App = () => {
  return (
    <div className="flex flex--column align-items--c">
      <QuizBuzzNav />
      <div className="quiz-app__body p--lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-categories" element={<QuizCategories />} />
          <Route path="/quiz/:categoryId" element={<QuizIndividual />} />
          <Route
            path="/quiz/:categoryId/:quizSetId/:questionNumber"
            element={<PlayQuestion />}
          />
          <Route path="*" element={<>Route Not found</>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
