import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizGkSet3Hard: QuizSet = {
  category: 'General Knowledge',
  rules: {
    type: 'multiple',
    difficulty: 'Hard',
    totalQuestions: 15,
    correctAnswerPoints: 6,
    inCorrectAnswerPoints: -3,
    totalPoints: 90,
  },
  questions: [
    {
      _id: faker.datatype.uuid(),
      questionNumber: 1,
      question:
        "Electronic music producer Kygo's popularity skyrocketed after a certain remix. Which song did he remix?",
      options: [
        {
          option: 'Marvin Gaye - Sexual Healing',
          isRight: false,
        },
        {
          option: 'Coldplay - Midnight',
          isRight: false,
        },
        {
          option: 'a-ha - Take On Me',
          isRight: false,
        },
        {
          option: 'Ed Sheeran - I See Fire',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question: 'When was &quot;YouTube&quot; founded?',
      options: [
        {
          option: 'May 22, 2004',
          isRight: false,
        },
        {
          option: 'September 12, 2005',
          isRight: false,
        },
        {
          option: 'July 19, 2009',
          isRight: false,
        },
        {
          option: 'February 14, 2005',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question:
        'Before the 19th Century, the &quot;Living Room&quot; was originally called the...',
      options: [
        {
          option: 'Open Room',
          isRight: false,
        },
        {
          option: 'Sitting Room',
          isRight: false,
        },
        {
          option: 'Loft',
          isRight: false,
        },
        {
          option: 'Parlor',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question: 'What year was Queen Elizabeth II born?',
      options: [
        {
          option: '1923',
          isRight: false,
        },
        {
          option: '1929',
          isRight: false,
        },
        {
          option: '1930',
          isRight: false,
        },
        {
          option: '1926',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'Sciophobia is the fear of what?',
      options: [
        {
          option: 'Eating',
          isRight: false,
        },
        {
          option: 'Bright lights',
          isRight: false,
        },
        {
          option: 'Transportation',
          isRight: false,
        },
        {
          option: 'Shadows',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question:
        'Which of these banks are NOT authorized to issue currency notes in Hong Kong?',
      options: [
        {
          option: 'HSBC',
          isRight: false,
        },
        {
          option: 'Standard Chartered',
          isRight: false,
        },
        {
          option: 'Bank of China',
          isRight: false,
        },
        {
          option: 'OCBC',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: 'What is the romanized Korean word for &quot;heart&quot;?',
      options: [
        {
          option: 'Aejeong',
          isRight: false,
        },
        {
          option: 'Jeongsin',
          isRight: false,
        },
        {
          option: 'Segseu',
          isRight: false,
        },
        {
          option: 'Simjang',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        "Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
      options: [
        {
          option: 'Gus',
          isRight: false,
        },
        {
          option: 'Phineas',
          isRight: false,
        },
        {
          option: 'Ezra',
          isRight: false,
        },
        {
          option: 'Harry',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question:
        'Which of the following languages does NOT use gender as a part of its grammar?',
      options: [
        {
          option: 'German',
          isRight: false,
        },
        {
          option: 'Danish',
          isRight: false,
        },
        {
          option: 'Polish',
          isRight: false,
        },
        {
          option: 'Turkish',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question:
        'According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?',
      options: [
        {
          option: '13%',
          isRight: false,
        },
        {
          option: '20%',
          isRight: false,
        },
        {
          option: '7%',
          isRight: false,
        },
        {
          option: '28%',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question: 'What was Bank of America originally established as?',
      options: [
        {
          option: 'Bank of Long Island',
          isRight: false,
        },
        {
          option: 'Bank of Pennsylvania',
          isRight: false,
        },
        {
          option: 'Bank of Charlotte',
          isRight: false,
        },
        {
          option: 'Bank of Italy',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question:
        'Which product did Nokia, the telecommunications company, originally sell?',
      options: [
        {
          option: 'Phones',
          isRight: false,
        },
        {
          option: 'Computers',
          isRight: false,
        },
        {
          option: 'Processors',
          isRight: false,
        },
        {
          option: 'Paper',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question:
        'Originally another word for poppy, coquelicot is a shade of what?',
      options: [
        {
          option: 'Green',
          isRight: false,
        },
        {
          option: 'Blue',
          isRight: false,
        },
        {
          option: 'Pink',
          isRight: false,
        },
        {
          option: 'Red',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: 'Nephelococcygia is the practice of doing what?',
      options: [
        {
          option: 'Sleeping with your eyes open',
          isRight: false,
        },
        {
          option: 'Breaking glass with your voice',
          isRight: false,
        },
        {
          option: 'Swimming in freezing water',
          isRight: false,
        },
        {
          option: 'Finding shapes in clouds',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question:
        'The Quadrangularis Reversum is best described as which of the following?',
      options: [
        {
          option: 'A building in Oxford University',
          isRight: false,
        },
        {
          option: 'A chess move',
          isRight: false,
        },
        {
          option: 'A geometric theorem',
          isRight: false,
        },
        {
          option: 'A percussion instrument',
          isRight: true,
        },
      ],
    },
  ],
};
