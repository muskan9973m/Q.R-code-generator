const quiz = [
    {
        question: "What is the most used programming language in 2021?",
         ans1text: "java",
         ans1text: "C",
         ans1text: "Python",
         ans1text: "javaScript",
         answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
         ans1text: "Joe Biden",
         ans1text: "Donald Trump",
         ans1text: "Barack Obama",
         ans1text: "George Bush",
        answer: "Joe Biden",
    },
    {
        question: "What does HTML stand for?",
         ans1text: "Hyper Text Markup Language",
         ans1text: "Cascading style Sheet",
         ans1text: "Jason Object Notation",
         ans1text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hyper Text markup Language",
    },
    {
        question: "What year was JavaScript launched?",
          ans1text: "1996",
         ans1text: "1995",
         ans1text: "1994",
         ans1text: "None of these",
        answer: "1995",
    },
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll("");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("Submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);
                                                         
question.textContent = quiz[currentquestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click",() => {
    const checkedAns = document.querySelector('input{type ="radio"}:checked)
        console.log(checkedAns);
        comsole.log(checkedAns.nextElementSibling.textContent);
        if(checkedAns === null){
            alert("please select an answer");
        }
        else{
            if(checkedAns.nextElementSibling.textContent === quiz)
        }

});