import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizCsSet2Medium: QuizSet = {
  category: 'Computer Science',
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
      question:
        "Which internet company began life as an online bookstore called 'Cadabra'?",
      options: [
        {
          option: 'eBay',
          isRight: false,
        },
        {
          option: 'Overstock',
          isRight: false,
        },
        {
          option: 'Shopify',
          isRight: false,
        },
        {
          option: 'Amazon',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question: "When was the programming language 'C#' released?",
      options: [
        {
          option: '1998',
          isRight: false,
        },
        {
          option: '1999',
          isRight: false,
        },
        {
          option: '2001',
          isRight: false,
        },
        {
          option: '2000',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question:
        'What five letter word is the motto of the IBM Computer company?',
      options: [
        {
          option: 'Click',
          isRight: false,
        },
        {
          option: 'Logic',
          isRight: false,
        },
        {
          option: 'Pixel',
          isRight: false,
        },
        {
          option: 'Think',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question:
        'All of the following programs are classified as raster graphics editors EXCEPT:',
      options: [
        {
          option: 'Paint.NET',
          isRight: false,
        },
        {
          option: 'GIMP',
          isRight: false,
        },
        {
          option: 'Adobe Photoshop',
          isRight: false,
        },
        {
          option: 'Inkscape',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question:
        'What did the name of the Tor Anonymity Network orignially stand for?',
      options: [
        {
          option: 'The Only Router',
          isRight: false,
        },
        {
          option: 'The Orange Router',
          isRight: false,
        },
        {
          option: 'The Ominous Router',
          isRight: false,
        },
        {
          option: 'The Onion Router',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question: 'What was the first commerically available computer processor?',
      options: [
        {
          option: 'Intel 486SX',
          isRight: false,
        },
        {
          option: 'TMS 1000',
          isRight: false,
        },
        {
          option: 'AMD AM386',
          isRight: false,
        },
        {
          option: 'Intel 4004',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question:
        'Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?',
      options: [
        {
          option: 'Enigma Machine',
          isRight: false,
        },
        {
          option: 'Skipjack',
          isRight: false,
        },
        {
          option: 'Nautilus',
          isRight: false,
        },
        {
          option: 'Clipper Chip',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        'Generally, which component of a computer draws the most power?',
      options: [
        {
          option: 'Hard Drive',
          isRight: false,
        },
        {
          option: 'Processor',
          isRight: false,
        },
        {
          option: 'Power Supply',
          isRight: false,
        },
        {
          option: 'Video Card',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question:
        'Which one of these is not an official development name for a Ubuntu release?',
      options: [
        {
          option: 'Trusty Tahr',
          isRight: false,
        },
        {
          option: 'Utopic Unicorn',
          isRight: false,
        },
        {
          option: 'Wily Werewolf',
          isRight: false,
        },
        {
          option: 'Mystic Mansion',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'In the server hosting industry IaaS stands for...',
      options: [
        {
          option: 'Internet as a Service',
          isRight: false,
        },
        {
          option: 'Internet and a Server',
          isRight: false,
        },
        {
          option: 'Infrastructure as a Server',
          isRight: false,
        },
        {
          option: 'Infrastructure as a Service',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question:
        'In programming, the ternary operator is mostly defined with what symbol(s)?',
      options: [
        {
          option: '??',
          isRight: false,
        },
        {
          option: 'if then',
          isRight: false,
        },
        {
          option: '?',
          isRight: false,
        },
        {
          option: '?:',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question: 'Which of these people was NOT a founder of Apple Inc?',
      options: [
        {
          option: 'Steve Jobs',
          isRight: false,
        },
        {
          option: 'Ronald Wayne',
          isRight: false,
        },
        {
          option: 'Steve Wozniak',
          isRight: false,
        },
        {
          option: 'Jonathan Ive',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'How many bytes are in a single Kibibyte?',
      options: [
        {
          option: '2400',
          isRight: false,
        },
        {
          option: '1000',
          isRight: false,
        },
        {
          option: '1240',
          isRight: false,
        },
        {
          option: '1024',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: 'What is the number of keys on a standard Windows Keyboard?',
      options: [
        {
          option: '64',
          isRight: false,
        },
        {
          option: '94',
          isRight: false,
        },
        {
          option: '76',
          isRight: false,
        },
        {
          option: '104',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question:
        'How many bits make up the significand portion of a single precision floating point number?',
      options: [
        {
          option: '8',
          isRight: false,
        },
        {
          option: '53',
          isRight: false,
        },
        {
          option: '15',
          isRight: false,
        },
        {
          option: '23',
          isRight: true,
        },
      ],
    },
  ],
};
