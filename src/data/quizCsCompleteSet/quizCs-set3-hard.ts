import faker from 'faker';
import { QuizSet } from '../quiz-data.types';
export const quizCsSet3Hard: QuizSet = {
  category: 'Computer Science',
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
        'The Harvard architecture for micro-controllers added which additional bus?',
      options: [
        {
          option: 'Address',
          isRight: false,
        },
        {
          option: 'Data',
          isRight: false,
        },
        {
          option: 'Control',
          isRight: false,
        },
        {
          option: 'Instruction',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question: 'How many Hz does the video standard PAL support?',
      options: [
        {
          option: '59',
          isRight: false,
        },
        {
          option: '60',
          isRight: false,
        },
        {
          option: '25',
          isRight: false,
        },
        {
          option: '50',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question:
        'The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?',
      options: [
        {
          option: 'Fiji',
          isRight: false,
        },
        {
          option: 'Tuvalu',
          isRight: false,
        },
        {
          option: 'Marshall Islands',
          isRight: false,
        },
        {
          option: 'Micronesia',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question: 'What port does HTTP run on?',
      options: [
        {
          option: '53',
          isRight: false,
        },
        {
          option: '443',
          isRight: false,
        },
        {
          option: '23',
          isRight: false,
        },
        {
          option: '80',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'Which data structure does FILO apply to?',
      options: [
        {
          option: 'Queue',
          isRight: false,
        },
        {
          option: 'Heap',
          isRight: false,
        },
        {
          option: 'Tree',
          isRight: false,
        },
        {
          option: 'Stack',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question:
        'Which of the following is the oldest of these computers by release date?',
      options: [
        {
          option: 'Commodore 64',
          isRight: false,
        },
        {
          option: 'ZX Spectrum',
          isRight: false,
        },
        {
          option: 'Apple 3',
          isRight: false,
        },
        {
          option: 'TRS-80',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question:
        'What is the name of the process that sends one qubit of information using two bits of classical information?',
      options: [
        {
          option: 'Super Dense Coding',
          isRight: false,
        },
        {
          option: 'Quantum Entanglement',
          isRight: false,
        },
        {
          option: 'Quantum Programming',
          isRight: false,
        },
        {
          option: 'Quantum Teleportation',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        'Which of these is not a key value of Agile software development?',
      options: [
        {
          option: 'Individuals and interactions',
          isRight: false,
        },
        {
          option: 'Customer collaboration',
          isRight: false,
        },
        {
          option: 'Responding to change',
          isRight: false,
        },
        {
          option: 'Comprehensive documentation',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question: 'Which RAID array type is associated with data mirroring?',
      options: [
        {
          option: 'RAID 0',
          isRight: false,
        },
        {
          option: 'RAID 10',
          isRight: false,
        },
        {
          option: 'RAID 5',
          isRight: false,
        },
        {
          option: 'RAID 1',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question:
        "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
      options: [
        {
          option: 'Puma',
          isRight: false,
        },
        {
          option: 'Tiger',
          isRight: false,
        },
        {
          option: 'Leopard',
          isRight: false,
        },
        {
          option: 'Cheetah',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question: "The acronym 'RIP' stands for which of these?",
      options: [
        {
          option: 'Runtime Instance Processes',
          isRight: false,
        },
        {
          option: 'Regular Interval Processes',
          isRight: false,
        },
        {
          option: 'Routine Inspection Protocol',
          isRight: false,
        },
        {
          option: 'Routing Information Protocol',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question: 'What was the name of the first Bulgarian personal computer?',
      options: [
        {
          option: 'Pravetz 82',
          isRight: false,
        },
        {
          option: 'Pravetz 8D',
          isRight: false,
        },
        {
          option: 'IZOT 1030',
          isRight: false,
        },
        {
          option: 'IMKO-1',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question:
        'What type of sound chip does the Super Nintendo Entertainment System (SNES) have?',
      options: [
        {
          option: 'FM Synthesizer',
          isRight: false,
        },
        {
          option: 'Programmable Sound Generator (PSG)',
          isRight: false,
        },
        {
          option: 'PCM Sampler',
          isRight: false,
        },
        {
          option: 'ADPCM Sampler',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question:
        'What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?',
      options: [
        {
          option: 'Sandy Bridge',
          isRight: false,
        },
        {
          option: 'Skylake',
          isRight: false,
        },
        {
          option: 'Broadwell',
          isRight: false,
        },
        {
          option: 'Coffee Lake',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'Who is the founder of Palantir?',
      options: [
        {
          option: 'Mark Zuckerberg',
          isRight: false,
        },
        {
          option: 'Marc Benioff',
          isRight: false,
        },
        {
          option: 'Jack Dorsey',
          isRight: false,
        },
        {
          option: 'Peter Thiel',
          isRight: true,
        },
      ],
    },
  ],
};
