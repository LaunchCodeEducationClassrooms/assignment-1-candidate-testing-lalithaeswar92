
//1.1 candidateName

const input = require('readline-sync');

//const input = require('readline-sync');
// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.1b Ask for candidates name

function askForName() {
    candidateName = input.question("Enter your Name : ");
};

askForName();

//TODO 1.1c. Underneath it, write a message to the console greeting the user using the name they just provided.
console.log("Good Evening, ", candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO 1.2b. Using your question variable, display the question and prompt the candidate for their answer. Store their response in one of the variables you defined just above.

function askForAnswer() {
    candidateAnswer = input.question("Who was the first American woman in space? ");
};

askForAnswer();

// TODO 1.2c, check the candidate's answer to see if it is correct. Provide basic feedback to the candidate, letting them know if their answer is correct or not.

if(candidateAnswer == correctAnswer)  {
  console.log("Answer is correct.")
} else {
  console.log("Your answer is wrong.")
};


// Part 2: Multiple Questions
//1.

let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

//2.

function askForAnswers() {
    for (let i = 0; i<5; i++)
    candidateAnswers[i] = input.question(questions[i]);
};

askForAnswers();
console.log(candidateAnswers);

//3.

for (let i=0; i<5; i++) {
  console.log(`Candidate response is, ${candidateAnswers[i]}, and the correct answer is ${correctAnswers[i]}`);
};

//Part 3: Grade the Quiz

let percentage;
let pass = 0;
let fail = 0;

console.log();
console.log("******Quiz Results******");
console.log();
console.log(`Candidate Name: ${candidateName}`);

for (let i=0; i<5; i++) {
  console.log(`${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`)
  console.log();
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
    pass = pass + 1;

  } else {
    fail = fail + 1;
  }
 };

console.log("");
if (pass >= 4){
  console.log(`>>> Overall Grade: ${pass*20}% (${pass} of 5 responses correct) <<<`);
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(`>>> Overall Grade: ${fail*20}% (${fail} of 5 responses correct) <<<`);
  console.log(">>> Status: FAILED <<<");
}
