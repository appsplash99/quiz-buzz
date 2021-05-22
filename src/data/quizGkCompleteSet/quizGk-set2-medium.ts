import faker from 'faker';
import { QuizSet } from '../quiz-data.types';

export const quizGkSet2Medium: QuizSet = {
  category: 'General Knowledge',
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
      question: "What is the world's most expensive spice by weight?",
      options: [
        {
          option: 'Cinnamon',
          isRight: false,
        },
        {
          option: 'Cardamom',
          isRight: false,
        },
        {
          option: 'Vanilla',
          isRight: false,
        },
        {
          option: 'Saffron',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 2,
      question: 'Which river flows through the Scottish city of Glasgow?',
      options: [
        {
          option: 'Tay',
          isRight: false,
        },
        {
          option: 'Dee',
          isRight: false,
        },
        {
          option: 'Tweed',
          isRight: false,
        },
        {
          option: 'Clyde',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 3,
      question: 'Which language is NOT Indo-European?',
      options: [
        {
          option: 'Russian',
          isRight: false,
        },
        {
          option: 'Greek',
          isRight: false,
        },
        {
          option: 'Latvian',
          isRight: false,
        },
        {
          option: 'Hungarian',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 4,
      question:
        'Which essential condiment is also known as Japanese horseradish?',
      options: [
        {
          option: 'Mentsuyu',
          isRight: false,
        },
        {
          option: 'Karashi',
          isRight: false,
        },
        {
          option: 'Ponzu',
          isRight: false,
        },
        {
          option: 'Wasabi ',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 5,
      question: 'In 2013 how much money was lost by Nigerian scams?',
      options: [
        {
          option: '$95 Million',
          isRight: false,
        },
        {
          option: '$956 Million',
          isRight: false,
        },
        {
          option: '$2.7 Billion',
          isRight: false,
        },
        {
          option: '$12.7 Billion',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 6,
      question:
        'What is the name given to Indian food cooked over charcoal in a clay oven?',
      options: [
        {
          option: 'Biryani',
          isRight: false,
        },
        {
          option: 'Pani puri',
          isRight: false,
        },
        {
          option: 'Tiki masala',
          isRight: false,
        },
        {
          option: 'Tandoori',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 7,
      question: "Who is the founder of 'The Lego Group'?",
      options: [
        {
          option: ' Jens Niels Christiansen',
          isRight: false,
        },
        {
          option: 'Kirstine Christiansen',
          isRight: false,
        },
        {
          option: ' Gerhardt Kirk Christiansen',
          isRight: false,
        },
        {
          option: 'Ole Kirk Christiansen',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 8,
      question: 'When was Nintendo founded?',
      options: [
        {
          option: 'October 19th, 1891',
          isRight: false,
        },
        {
          option: 'March 4th, 1887',
          isRight: false,
        },
        {
          option: 'December 27th, 1894',
          isRight: false,
        },
        {
          option: 'September 23rd, 1889',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 9,
      question:
        "Which of the General Mills Corporation's monster cereals was the last to be released in the 1970's?",
      options: [
        {
          option: 'Count Chocula',
          isRight: false,
        },
        {
          option: 'Franken Berry',
          isRight: false,
        },
        {
          option: 'Boo-Berry',
          isRight: false,
        },
        {
          option: 'Fruit Brute',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 10,
      question: 'When was Hubba Bubba first introduced?',
      options: [
        {
          option: '1984',
          isRight: false,
        },
        {
          option: '1972',
          isRight: false,
        },
        {
          option: '1980',
          isRight: false,
        },
        {
          option: '1979',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 11,
      question: "What was Mountain Dew's original slogan?",
      options: [
        {
          option: 'Give Me A Dew',
          isRight: false,
        },
        {
          option: 'Do The Dew',
          isRight: false,
        },
        {
          option: "Get' that barefoot feelin' drinkin' Mountain Dew",
          isRight: false,
        },
        {
          option: "Yahoo! Mountain Dew... It'll tickle your innards!",
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 12,
      question: 'What is real haggis made of?',
      options: [
        {
          option: "Sheep's Heart, Kidneys and Lungs",
          isRight: false,
        },
        {
          option: "Sheep's Liver, Kidneys and Eyes",
          isRight: false,
        },
        {
          option: 'Whole Sheep',
          isRight: false,
        },
        {
          option: "Sheep's Heart, Liver and Lungs",
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 13,
      question: 'Whose greyscale face is on the kappa emoticon on Twitch?',
      options: [
        {
          option: 'Justin DeSeno',
          isRight: false,
        },
        {
          option: 'John DeSeno',
          isRight: false,
        },
        {
          option: 'Jimmy DeSeno',
          isRight: false,
        },
        {
          option: 'Josh DeSeno',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 14,
      question: "Which of these words means 'idle spectator'?",
      options: [
        {
          option: 'Gossypiboma',
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
          option: 'Gongoozler',
          isRight: true,
        },
      ],
    },
    {
      _id: faker.datatype.uuid(),
      questionNumber: 15,
      question: 'Which country drives on the left side of the road?',
      options: [
        {
          option: 'Germany',
          isRight: false,
        },
        {
          option: 'Russia',
          isRight: false,
        },
        {
          option: 'China',
          isRight: false,
        },
        {
          option: 'Japan',
          isRight: true,
        },
      ],
    },
  ],
};
