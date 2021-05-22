import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizCsSet1Easy: QuizSet = {
  category: 'Computer Science',
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
        'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
      options: [
        {
          option: 'Microsoft',
          isRight: false,
        },
        {
          option: 'Atari',
          isRight: false,
        },
        {
          option: 'Commodore',
          isRight: false,
        },
        {
          option: 'Apple',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question:
        'In any programming language, what is the most common way to iterate through an array?',
      options: [
        {
          option: "'If' Statements",
          isRight: false,
        },
        {
          option: "'Do-while' loops",
          isRight: false,
        },
        {
          option: "'While' loops",
          isRight: false,
        },
        {
          option: "'For' loops",
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question: "What does the 'MP' stand for in MP3?",
      options: [
        {
          option: 'Music Player',
          isRight: false,
        },
        {
          option: 'Multi Pass',
          isRight: false,
        },
        {
          option: 'Micro Point',
          isRight: false,
        },
        {
          option: 'Moving Picture',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question:
        'According to the International System of Units, how many bytes are in a kilobyte of RAM?',
      options: [
        {
          option: '512',
          isRight: false,
        },
        {
          option: '1024',
          isRight: false,
        },
        {
          option: '500',
          isRight: false,
        },
        {
          option: '1000',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question:
        'When Gmail first launched, how much storage did it provide for your email?',
      options: [
        {
          option: '512MB',
          isRight: false,
        },
        {
          option: '5GB',
          isRight: false,
        },
        {
          option: 'Unlimited',
          isRight: false,
        },
        {
          option: '1GB',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question:
        "The programming language 'Swift' was created to replace what other programming language?",
      options: [
        {
          option: 'C#',
          isRight: false,
        },
        {
          option: 'Ruby',
          isRight: false,
        },
        {
          option: 'C++',
          isRight: false,
        },
        {
          option: 'Objective-C',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question:
        'Which computer hardware device provides an interface for all other connected devices to communicate?',
      options: [
        {
          option: 'Central Processing Unit',
          isRight: false,
        },
        {
          option: 'Hard Disk Drive',
          isRight: false,
        },
        {
          option: 'Random Access Memory',
          isRight: false,
        },
        {
          option: 'Motherboard',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        'What is the most preferred image format used for logos in the Wikimedia database?',
      options: [
        {
          option: '.png',
          isRight: false,
        },
        {
          option: '.jpeg',
          isRight: false,
        },
        {
          option: '.gif',
          isRight: false,
        },
        {
          option: '.svg',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question: 'In web design, what does CSS stand for?',
      options: [
        {
          option: 'Counter Strike: Source',
          isRight: false,
        },
        {
          option: 'Corrective Style Sheet',
          isRight: false,
        },
        {
          option: 'Computer Style Sheet',
          isRight: false,
        },
        {
          option: 'Cascading Style Sheet',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'How many kilobytes in one gigabyte (in decimal)?',
      options: [
        {
          option: '1024',
          isRight: false,
        },
        {
          option: '1000',
          isRight: false,
        },
        {
          option: '1048576',
          isRight: false,
        },
        {
          option: '1000000',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question:
        'The numbering system with a radix of 16 is more commonly referred to as ',
      options: [
        {
          option: 'Binary',
          isRight: false,
        },
        {
          option: 'Duodecimal',
          isRight: false,
        },
        {
          option: 'Octal',
          isRight: false,
        },
        {
          option: 'Hexidecimal',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question:
        'The C programming language was created by this American computer scientist. ',
      options: [
        {
          option: 'Tim Berners Lee',
          isRight: false,
        },
        {
          option: 'al-Khwārizmī',
          isRight: false,
        },
        {
          option: 'Willis Ware',
          isRight: false,
        },
        {
          option: 'Dennis Ritchie',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question:
        'Which programming language shares its name with an island in Indonesia?',
      options: [
        {
          option: 'Python',
          isRight: false,
        },
        {
          option: 'C',
          isRight: false,
        },
        {
          option: 'Jakarta',
          isRight: false,
        },
        {
          option: 'Java',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: 'In computing, what does LAN stand for?',
      options: [
        {
          option: 'Long Antenna Node',
          isRight: false,
        },
        {
          option: 'Light Access Node',
          isRight: false,
        },
        {
          option: 'Land Address Navigation',
          isRight: false,
        },
        {
          option: 'Local Area Network',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'What does the computer software acronym JVM stand for?',
      options: [
        {
          option: 'Java Vendor Machine',
          isRight: false,
        },
        {
          option: 'Java Visual Machine',
          isRight: false,
        },
        {
          option: 'Just Virtual Machine',
          isRight: false,
        },
        {
          option: 'Java Virtual Machine',
          isRight: true,
        },
      ],
    },
  ],
};
