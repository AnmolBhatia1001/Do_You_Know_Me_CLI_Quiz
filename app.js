

var readlineSync = require('readline-sync');

var questionlist = [
  {
    question: "What is my middle name ? ",
    answer: "singh"
  },
  {
    question: "Which city i live in ? ",
    answer: "rajnandgaon"
  },
  {
    question: "Which laptop brand i use ? ",
    answer: "asus"
  },
  {
    question: "Who is my fav superhero ? ",
    answer: "flash"
  },
  {
    question: "Which mobile brand i use ? ",
    answer: "mi"
  },
]

var score = 0;

var playerName = readlineSync.question("Enter Your Name : ")

var letsPlay = (question, answer) => {
  var userAnswer = readlineSync.question(question)
  if (answer.toLowerCase() === userAnswer.toLowerCase()) {
    score++;
    console.log(
      `
      You're Right !!!
      `
    )
  }else {
    console.log(
      `
      You're Wrong !!!
      `)
  }
}


console.log(`
Welcome ${playerName} 
To DO YOU KNOW ME !!! 
MINI CLI Program`)

for (var i =0; i <questionlist.length ; i++){
console.log(`
Question no. ${i+1}`)
  letsPlay(questionlist[i].question,questionlist[i].answer)
}


console.log(
`
Your Final Score is ${score}



`)

