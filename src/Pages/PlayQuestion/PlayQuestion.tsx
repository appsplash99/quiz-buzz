import React from 'react';
import { useParams } from 'react-router';

export const PlayQuestion = () => {
  const { categoryName, questionNumber } = useParams();

  return (
    <div>
      <>Individual Question Page</>
      <>quiz category: {JSON.stringify(categoryName)}</>
      <>question number: {JSON.stringify(questionNumber)}</>
    </div>
  );
};
