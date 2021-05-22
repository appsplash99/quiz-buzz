import React from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../../context/quiz-context/quiz-context';
import { quizCategories } from '../../data/quiz-data';

export const QuizIndividual = () => {
  const { state, dispatch } = useQuiz();

  const { categoryId } = useParams();
  console.log(categoryId);

  const desiredQuizCategory = quizCategories.find(
    (quizObj) => quizObj.id === categoryId
  );

  console.log({ desiredQuizCategory });
  // const urlFriendlyCategoryName = categoryName
  //   .replace(/\s+/g, '-')
  //   .toLowerCase();

  return (
    <div>
      <div className="mb--md text--xxl font-weight--500 text-align--c">
        Select a Quiz Set
      </div>
      <>{JSON.stringify(categoryId)}</>
    </div>
  );
};
