//QUIZ GAME

const object1 = {
  category : "Football",
  question: "What team won the champions League in 2026?",
  choices: ['Arsenal', 'PSG', 'Bayern Munich'],
  answer: 'PSG'
}

const object2 = {
  category: 'Motorsports',
  question: 'Who won the Italian Grand Prix in 2021?',
  choices: ['Lando Norris', 'Daniel Ricciardo', 'Lewis Hamilton'],
  answer: 'Daniel Ricciardo'
}

const object3 = {
  category: 'NBA',
  question: 'Who won the NBA Championship in 2021?',
  choices: ['Golden States', 'Milwaukee Bucks', 'LA Lakers'],
  answer: 'Milwaukee Bucks'
}

const object4 = {
  category: 'Geography',
  question: 'In which continent is the country Turkey found in?',
  choices: ['Europe', 'Africa', 'Asia'],
  answer: 'Europe'
}

const object5 = {
  category: 'Politics',
  question: 'Which of the following countries is not a part of the european union?',
  choices: ['Britain', 'France', 'Spain'],
  answer: 'Britain'
}


const questions = [object1, object2, object3, object4, object5];



function getRandomQuestion(arrayOfQuestions){
  const randomNumber = Math.floor(Math.random() * arrayOfQuestions.length)
  const selectedObject = arrayOfQuestions[randomNumber];
  return selectedObject;
}



function getRandomComputerChoice(arrayOfChoices){
  // const randomNumber = Math.floor(Math.random() * quizBlock.length)
  // const selectedQuiz = quizBlock[randomNumber];
  // const choices = selectedQuiz.choices;
  // const randomNumber2 = Math.floor(Math.random() * choices.length);
  // return choices[randomNumber2];
  const randomNumber = Math.floor(Math.random() * arrayOfChoices.length);
  const selectedAnswer = arrayOfChoices[randomNumber];
  return selectedAnswer

}

function getResults(questionObject, computerChoice){
  if(questionObject.answer === computerChoice){
    return `The computer's choice is correct!`
  } else {
    return (`The computer's choice is wrong. The correct answer is: ${questionObject.answer}`)
  }
}

const currentQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(currentQuestion.choices);

// console.log(getRandomQuestions(questions));

// console.log(getRandomComputerChoice(getRandomQuestions(questions).choices));

// console.log(getRandomComputerChoice(questions));

console.log(getResults(currentQuestion, computerChoice));


