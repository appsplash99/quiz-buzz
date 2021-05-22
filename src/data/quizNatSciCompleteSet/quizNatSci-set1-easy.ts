import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizNatSciSet1Easy: QuizSet = {
  category: 'Natural Science',
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
      question: 'Which Apollo mission was the first one to land on the Moon?',
      options: [
        {
          option: 'Apollo 10',
          isRight: false,
        },
        {
          option: 'Apollo 9',
          isRight: false,
        },
        {
          option: 'Apollo 13',
          isRight: false,
        },
        {
          option: 'Apollo 11',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question: 'Which of these bones is hardest to break?',
      options: [
        {
          option: 'Cranium',
          isRight: false,
        },
        {
          option: 'Humerus',
          isRight: false,
        },
        {
          option: 'Tibia',
          isRight: false,
        },
        {
          option: 'Femur',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question: "What does the letter 'S' stand for in 'NASA'?",
      options: [
        {
          option: 'Science',
          isRight: false,
        },
        {
          option: 'Society',
          isRight: false,
        },
        {
          option: 'Star',
          isRight: false,
        },
        {
          option: 'Space',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question:
        'This element, when overcome with extreme heat and pressure, creates diamonds.',
      options: [
        {
          option: 'Nitrogen',
          isRight: false,
        },
        {
          option: 'Oxygen',
          isRight: false,
        },
        {
          option: 'Hydrogen',
          isRight: false,
        },
        {
          option: 'Carbon',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'How many planets are in our Solar System?',
      options: [
        {
          option: 'Nine',
          isRight: false,
        },
        {
          option: 'Seven',
          isRight: false,
        },
        {
          option: 'Ten',
          isRight: false,
        },
        {
          option: 'Eight',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question: 'What is the standard SI unit for temperature?',
      options: [
        {
          option: 'Fahrenheit',
          isRight: false,
        },
        {
          option: 'Celsius',
          isRight: false,
        },
        {
          option: 'Rankine',
          isRight: false,
        },
        {
          option: 'Kelvin',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: 'How many planets make up our Solar System?',
      options: [
        {
          option: '7',
          isRight: false,
        },
        {
          option: '9',
          isRight: false,
        },
        {
          option: '6',
          isRight: false,
        },
        {
          option: '8',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        "Alzheimer's disease primarily affects which part of the human body?",
      options: [
        {
          option: 'Lungs',
          isRight: false,
        },
        {
          option: 'Skin',
          isRight: false,
        },
        {
          option: 'Heart',
          isRight: false,
        },
        {
          option: 'Brain',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question:
        'What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?',
      options: [
        {
          option: 'Soyuz 7K-OK',
          isRight: false,
        },
        {
          option: 'Zenit-2',
          isRight: false,
        },
        {
          option: 'Voskhod 3KV',
          isRight: false,
        },
        {
          option: 'Sputnik 1',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'Who is the chemical element Curium named after?',
      options: [
        {
          option: 'The Curiosity Rover',
          isRight: false,
        },
        {
          option: 'Curious George',
          isRight: false,
        },
        {
          option: 'Stephen Curry',
          isRight: false,
        },
        {
          option: 'Marie & Pierre Curie',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question: 'The asteroid belt is located between which two planets?',
      options: [
        {
          option: 'Jupiter and Saturn',
          isRight: false,
        },
        {
          option: 'Mercury and Venus',
          isRight: false,
        },
        {
          option: 'Earth and Mars',
          isRight: false,
        },
        {
          option: 'Mars and Jupiter',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question: 'What is the unit of electrical resistance?',
      options: [
        {
          option: 'Mho',
          isRight: false,
        },
        {
          option: 'Tesla',
          isRight: false,
        },
        {
          option: 'Joule',
          isRight: false,
        },
        {
          option: 'Ohm',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'What is the speed of light in a vacuum?',
      options: [
        {
          option: '50,461 m/s',
          isRight: false,
        },
        {
          option: '308,215,043 m/s',
          isRight: false,
        },
        {
          option: '751,665,014,151 m/s',
          isRight: false,
        },
        {
          option: '299,792,458 m/s',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: 'Which noble gas has the lowest atomic number?',
      options: [
        {
          option: 'Neon',
          isRight: false,
        },
        {
          option: 'Argon',
          isRight: false,
        },
        {
          option: 'Krypton',
          isRight: false,
        },
        {
          option: 'Helium',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'Which of these Elements is a metalloid?',
      options: [
        {
          option: 'Tin',
          isRight: false,
        },
        {
          option: 'Bromine',
          isRight: false,
        },
        {
          option: 'Rubidium',
          isRight: false,
        },
        {
          option: 'Antimony',
          isRight: true,
        },
      ],
    },
  ],
};
