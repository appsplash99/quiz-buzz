import React from 'react';
import { useQuiz } from '../../context/quiz-context/quiz-context';
import { quizCategories } from '../../data/quiz-data';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { Btn } from 'morphine-ui';

export const QuizCategories = () => {
  const { state, dispatch } = useQuiz();

  return (
    <div className="flex flex--column align-items--c">
      <div className="mb--md text--xxl font-weight--500 text-align--c">
        Select a Quiz Category
      </div>
      <div className="flex flex--column justify-content--c gap--lg my ">
        {quizCategories.map((quizObj) => {
          return (
            <Btn
              size="lg"
              shape="capsule"
              variant="secondary"
              key={faker.datatype.uuid()}
              onClick={() => {
                /**
                 * NEED THIS TO PASS PARTICULAR CATEGORY TO     PAYLOAD VIA DISPATCH WITH TYPE: SET_QUIZ_CATEGORY
                 *
                 */
                return console.log(quizObj.name, quizObj.quiz);
              }}
              style={{
                boxShadow: 'var(--card-box-shadow)',
              }}>
              <Link
                to={`/quiz/${quizObj.id}`}
                className="text-decoration--none text--dark">
                {quizObj.name}
              </Link>
            </Btn>
          );
        })}
      </div>
    </div>
  );
};
