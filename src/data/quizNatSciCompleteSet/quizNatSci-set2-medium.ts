import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizNatSciSet2Medium: QuizSet = {
  category: 'Natural Science',
  rules: {
    type: 'multiple',
    difficulty: 'Medium',
    totalQuestions: 15,
    correctAnswerPoints: 4,
    inCorrectAnswerPoints: -2,
    totalPoints: 60,
  },
  questions: [
    {
      _id: faker.datatype.uuid(),
      questionNumber: 1,
      question: 'What mineral has the lowest number on the Mohs scale?',
      options: [
        {
          option: 'Quartz',
          isRight: false,
        },
        {
          option: 'Diamond',
          isRight: false,
        },
        {
          option: 'Gypsum',
          isRight: false,
        },
        {
          option: 'Talc',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question:
        'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
      options: [
        {
          option: '6 Minutes',
          isRight: false,
        },
        {
          option: '2 Minutes',
          isRight: false,
        },
        {
          option: '12 Minutes',
          isRight: false,
        },
        {
          option: '8 Minutes',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question: 'What is the chemical formula for ammonia?',
      options: [
        {
          option: 'CO2',
          isRight: false,
        },
        {
          option: 'NO3',
          isRight: false,
        },
        {
          option: 'CH4',
          isRight: false,
        },
        {
          option: 'NH3',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question:
        'The medical condition osteoporosis affects which part of the body?',
      options: [
        {
          option: 'Skin',
          isRight: false,
        },
        {
          option: 'Brain',
          isRight: false,
        },
        {
          option: 'Heart',
          isRight: false,
        },
        {
          option: 'Bones',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'What is the atomic number of the element Strontium?',
      options: [
        {
          option: '73',
          isRight: false,
        },
        {
          option: '47',
          isRight: false,
        },
        {
          option: '11',
          isRight: false,
        },
        {
          option: '38',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question: 'The human right lung has how many lobes?',
      options: [
        {
          option: '4',
          isRight: false,
        },
        {
          option: '2',
          isRight: false,
        },
        {
          option: '1',
          isRight: false,
        },
        {
          option: '3',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: 'In Chemistry, how many isomers does Butanol (C4H9OH) have?',
      options: [
        {
          option: '3',
          isRight: false,
        },
        {
          option: '5',
          isRight: false,
        },
        {
          option: '6',
          isRight: false,
        },
        {
          option: '4',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        'What stage of development do the majority of eukaryotic cells remain in for most of their life?',
      options: [
        {
          option: 'Prophase',
          isRight: false,
        },
        {
          option: 'Stasis',
          isRight: false,
        },
        {
          option: 'Telophase',
          isRight: false,
        },
        {
          option: 'Interphase',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question: 'Who made the discovery of X-rays?',
      options: [
        {
          option: 'Thomas Alva Edison',
          isRight: false,
        },
        {
          option: 'James Watt',
          isRight: false,
        },
        {
          option: 'Albert Einstein',
          isRight: false,
        },
        {
          option: 'Wilhelm Conrad Roentgen',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'What do you study if you are studying entomology?',
      options: [
        {
          option: 'Humans',
          isRight: false,
        },
        {
          option: 'the Brain',
          isRight: false,
        },
        {
          option: 'Fish',
          isRight: false,
        },
        {
          option: 'Insects',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question:
        'On the periodic table of elements, what is the symbol for Tin?',
      options: [
        {
          option: 'Ti',
          isRight: false,
        },
        {
          option: 'Ni',
          isRight: false,
        },
        {
          option: 'Na',
          isRight: false,
        },
        {
          option: 'Sn',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question: 'Where did the Great Storm of 1987 make landfall at, first?',
      options: [
        {
          option: 'Surrey',
          isRight: false,
        },
        {
          option: 'Wales',
          isRight: false,
        },
        {
          option: 'The Midlands',
          isRight: false,
        },
        {
          option: 'Cornwall',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'Which of the following is NOT a passive electrical component?',
      options: [
        {
          option: 'Resistor',
          isRight: false,
        },
        {
          option: 'Capacitor',
          isRight: false,
        },
        {
          option: 'Inductor',
          isRight: false,
        },
        {
          option: 'Transistor',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: 'When was the first mammal successfully cloned?',
      options: [
        {
          option: '2009',
          isRight: false,
        },
        {
          option: '1999',
          isRight: false,
        },
        {
          option: '1985',
          isRight: false,
        },
        {
          option: '1996',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'How old is the universe?',
      options: [
        {
          option: '4.5 Billion Years',
          isRight: false,
        },
        {
          option: '7.9 Billion Years',
          isRight: false,
        },
        {
          option: '16.2 Billion Years',
          isRight: false,
        },
        {
          option: '13.8 Billion Years',
          isRight: true,
        },
      ],
    },
  ],
};
