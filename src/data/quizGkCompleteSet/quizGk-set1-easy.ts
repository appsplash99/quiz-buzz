import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizGkSet1Easy: QuizSet = {
  category: 'General Knowledge',
  rules: {
    type: 'multiple',
    difficulty: 'Easy',
    totalQuestions: 15,
    correctAnswerPoints: 2,
    inCorrectAnswerPoints: 0,
    totalPoints: 30,
  },
  questions: [
    {
      _id: faker.datatype.uuid(),
      questionNumber: 1,
      question:
        'Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?',
      options: [
        {
          option: 'Alan Sugar',
          isRight: false,
        },
        {
          option: 'Donald Trump',
          isRight: false,
        },
        {
          option: 'Bill Gates',
          isRight: false,
        },
        {
          option: 'Richard Branson',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question:
        'Which company did Valve cooperate with in the creation of the Vive?',
      options: [
        {
          option: 'Oculus',
          isRight: false,
        },
        {
          option: 'Google',
          isRight: false,
        },
        {
          option: 'Razer',
          isRight: false,
        },
        {
          option: 'HTC',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question: 'What is the first book of the Old Testament?',
      options: [
        {
          option: 'Exodus',
          isRight: false,
        },
        {
          option: 'Leviticus',
          isRight: false,
        },
        {
          option: 'Numbers',
          isRight: false,
        },
        {
          option: 'Genesis',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question: 'What is the largest organ of the human body?',
      options: [
        {
          option: 'Heart',
          isRight: false,
        },
        {
          option: 'large Intestine',
          isRight: false,
        },
        {
          option: 'Liver',
          isRight: false,
        },
        {
          option: 'Skin',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question:
        "What word represents the letter 'T'; in the NATO phonetic alphabet?",
      options: [
        {
          option: 'Target',
          isRight: false,
        },
        {
          option: 'Taxi',
          isRight: false,
        },
        {
          option: 'Turkey',
          isRight: false,
        },
        {
          option: 'Tango',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question: 'Which American president appears on a one dollar bill?',
      options: [
        {
          option: 'Thomas Jefferson',
          isRight: false,
        },
        {
          option: 'Abraham Lincoln',
          isRight: false,
        },
        {
          option: 'Benjamin Franklin',
          isRight: false,
        },
        {
          option: 'George Washington',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: 'What geometric shape is generally used for stop signs?',
      options: [
        {
          option: 'Hexagon',
          isRight: false,
        },
        {
          option: 'Circle',
          isRight: false,
        },
        {
          option: 'Triangle',
          isRight: false,
        },
        {
          option: 'Octagon',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        'Which of these colours is NOT featured in the logo for Google?',
      options: [
        {
          option: 'Yellow',
          isRight: false,
        },
        {
          option: 'Blue',
          isRight: false,
        },
        {
          option: 'Green',
          isRight: false,
        },
        {
          option: 'Pink',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question: 'What do the letters in the GMT time zone stand for?',
      options: [
        {
          option: 'Global Meridian Time',
          isRight: false,
        },
        {
          option: 'General Median Time',
          isRight: false,
        },
        {
          option: 'Glasgow Man Time',
          isRight: false,
        },
        {
          option: 'Greenwich Mean Time',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'What do the letters of the fast food chain KFC stand for?',
      options: [
        {
          option: 'Kentucky Fresh Cheese',
          isRight: false,
        },
        {
          option: 'Kibbled Freaky Cow',
          isRight: false,
        },
        {
          option: 'Kiwi Food Cut',
          isRight: false,
        },
        {
          option: 'Kentucky Fried Chicken',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question:
        'Which of the following card games revolves around numbers and basic math?',
      options: [
        {
          option: 'Go Fish',
          isRight: false,
        },
        {
          option: 'Twister',
          isRight: false,
        },
        {
          option: 'Munchkin',
          isRight: false,
        },
        {
          option: 'Uno',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question:
        'What machine element is located in the center of fidget spinners?',
      options: [
        {
          option: 'Axles',
          isRight: false,
        },
        {
          option: 'Gears',
          isRight: false,
        },
        {
          option: 'Belts',
          isRight: false,
        },
        {
          option: 'Bearings',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'Which sign of the zodiac comes between Virgo and Scorpio?',
      options: [
        {
          option: 'Gemini',
          isRight: false,
        },
        {
          option: 'Taurus',
          isRight: false,
        },
        {
          option: 'Capricorn',
          isRight: false,
        },
        {
          option: 'Libra',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question:
        'Which country, not including Japan, has the most people of japanese decent?',
      options: [
        {
          option: 'China',
          isRight: false,
        },
        {
          option: 'South Korea',
          isRight: false,
        },
        {
          option: 'United States of America',
          isRight: false,
        },
        {
          option: 'Brazil',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'What nuts are used in the production of marzipan?',
      options: [
        {
          option: 'Peanuts',
          isRight: false,
        },
        {
          option: 'Walnuts',
          isRight: false,
        },
        {
          option: 'Pistachios',
          isRight: false,
        },
        {
          option: 'Almonds',
          isRight: true,
        },
      ],
    },
  ],
};
