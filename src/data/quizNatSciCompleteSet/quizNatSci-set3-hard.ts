import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizNatSciSet3Hard: QuizSet = {
  category: 'Natural Science',
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
        'What common name is given to the medial condition, tibial stress syndrome (MTSS)?',
      options: [
        {
          option: 'Tennis Elbow',
          isRight: false,
        },
        {
          option: 'Carpal Tunnel',
          isRight: false,
        },
        {
          option: "Housemaid's Knee",
          isRight: false,
        },
        {
          option: 'Shin Splints',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question:
        'An organic compound is considered an alcohol if it has what functional group?',
      options: [
        {
          option: 'Carbonyl',
          isRight: false,
        },
        {
          option: 'Alkyl',
          isRight: false,
        },
        {
          option: 'Aldehyde',
          isRight: false,
        },
        {
          option: 'Hydroxyl',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question:
        'All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:',
      options: [
        {
          option: 'Haplogroup L',
          isRight: false,
        },
        {
          option: 'Haplogroup T',
          isRight: false,
        },
        {
          option: 'Haplogroup J',
          isRight: false,
        },
        {
          option: 'Haplogroup U',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question: 'What is the scientific name of the knee cap?',
      options: [
        {
          option: 'Femur',
          isRight: false,
        },
        {
          option: 'Foramen Magnum',
          isRight: false,
        },
        {
          option: 'Scapula',
          isRight: false,
        },
        {
          option: 'Patella',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'What is isobutylphenylpropanoic acid more commonly known as?',
      options: [
        {
          option: 'Morphine',
          isRight: false,
        },
        {
          option: 'Ketamine',
          isRight: false,
        },
        {
          option: 'Aspirin',
          isRight: false,
        },
        {
          option: 'Ibuprofen',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question: 'Which of these is a stop codon in DNA?',
      options: [
        {
          option: 'ACT',
          isRight: false,
        },
        {
          option: 'ACA',
          isRight: false,
        },
        {
          option: 'GTA',
          isRight: false,
        },
        {
          option: 'TAA',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: 'What is the unit of electrical inductance?',
      options: [
        {
          option: 'Weber',
          isRight: false,
        },
        {
          option: 'Coulomb',
          isRight: false,
        },
        {
          option: 'Mho',
          isRight: false,
        },
        {
          option: 'Henry',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question:
        "Which of the following is the term for 'surgical complications resulting from surgical sponges left inside the patient's body?",
      options: [
        {
          option: 'Gongoozler',
          isRight: false,
        },
        {
          option: 'Jentacular',
          isRight: false,
        },
        {
          option: 'Meupareunia',
          isRight: false,
        },
        {
          option: 'Gossypiboma',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question: 'Which scientific unit is named after an Italian nobleman?',
      options: [
        {
          option: 'Pascal',
          isRight: false,
        },
        {
          option: 'Ohm',
          isRight: false,
        },
        {
          option: 'Hertz',
          isRight: false,
        },
        {
          option: 'Volt',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question:
        'Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?',
      options: [
        {
          option: 'Cough',
          isRight: false,
        },
        {
          option: 'Yawn',
          isRight: false,
        },
        {
          option: 'Hiccup',
          isRight: false,
        },
        {
          option: 'Sneeze',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question: "The word 'science' stems from the word 'scire' meaning what?",
      options: [
        {
          option: 'To measure',
          isRight: false,
        },
        {
          option: 'To live',
          isRight: false,
        },
        {
          option: 'To count',
          isRight: false,
        },
        {
          option: 'To know',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question:
        'Which of the following elements is typically used in the doping of the semiconductor silicon?',
      options: [
        {
          option: 'Oxygen',
          isRight: false,
        },
        {
          option: 'Carbon',
          isRight: false,
        },
        {
          option: 'Iron',
          isRight: false,
        },
        {
          option: 'Boron',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'Which of the following is a major muscle of the back?',
      options: [
        {
          option: 'Trapezium',
          isRight: false,
        },
        {
          option: 'Trapezoid',
          isRight: false,
        },
        {
          option: 'Triquetrum',
          isRight: false,
        },
        {
          option: 'Trapezius',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question:
        'In quantum physics, which of these theorised sub-atomic particles has yet to be observed?',
      options: [
        {
          option: 'Z boson',
          isRight: false,
        },
        {
          option: 'Tau neutrino',
          isRight: false,
        },
        {
          option: 'Gluon',
          isRight: false,
        },
        {
          option: 'Graviton',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question:
        'In physics, conservation of energy and conservation of momentum are both consequences of which of the following?',
      options: [
        {
          option: "Bell's Theorem",
          isRight: false,
        },
        {
          option: "Wick's Theorem",
          isRight: false,
        },
        {
          option: "Carnot's Theorem",
          isRight: false,
        },
        {
          option: "Noether's Theorem",
          isRight: true,
        },
      ],
    },
  ],
};
