var quesArr = [
    {
      num: 1,
      question: "HTML stand for...?",
      options: {
        a: "Hyper text markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      correctAns: "Hyper text markup Language",
    },
    {
      num: 2,
      question: "Which type of JavaScript Languages is",
      options: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      correctAns: "Object-Base",
    },
    {
      num: 3,
      question: "How many Programming languages are There ?:",
      options: {
        a: "700+ programming languages",
        b: "500 programming languages",
        c: "150 programming languages",
        d: "None of the above",
      },
      correctAns: "700+ programming languages",
    },
    {
      num: 4,
      question: "CSS Stands For ?",
      options: {
        a: "Cascading Super Sheet",
        b: "Cool Style Sheet",
        c: "Cascading Style Sheet",
        d: "Cofee Script Sheet",
      },
      correctAns: "Cascading Style Sheet",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      options: {
        a: "6",
        b: "5",
        c: "3",
        d: "1",
      },
      correctAns: "5",
    },
  ];

  /*Getting Question Element*/
var uiQuestion = document.getElementById("Quiz-Question");

/*Getting Question No*/
var quesNum = document.getElementById("Ques-Num");
var quesJs = 1;
  /*Getting Question Element*/
var Quizoption = document.getElementsByClassName("Quiz-option");

  /*Getting Button Element*/
var nextBtn = document.getElementById("nextBtn");

  /*Getting Result Box*/
var resultBox = document.getElementById("resultBox");
var totalQues = document.getElementById("totalQues");
var correctAns = document.getElementById("correctAns");
var wrongQues = document.getElementById("wrongQues");
var mainBox = document.getElementsByClassName("mainBox")[0];

  /*set onclick event options*/
for(var i = 0 ; i < Quizoption.length ; i++){
    Quizoption[i].setAttribute("onclick" , "checkAnswer(this)");
}

/*Creating Counter*/
var counter = 0;
var Scorecounter = 0;
var wrongCounter = 0;

/*Function To Start Quiz*/

function startQuiz(){
  /*set ques*/ 

  uiQuestion.innerHTML = quesArr[counter].question

  /*set options*/
  Quizoption[0].innerHTML = quesArr[counter].options.a
  Quizoption[1].innerHTML = quesArr[counter].options.b
  Quizoption[2].innerHTML = quesArr[counter].options.c
  Quizoption[3].innerHTML = quesArr[counter].options.d

  nextBtn.style.display = "none"

}

/*Set Button Element*/

function nextQues(){
  if( counter < quesArr.length -1){
    counter++
    startQuiz()
  }
  else{
    console.log("khatam....");
    resultBox.style.display = "block"
    mainBox.style.display = "none"
    totalQues.innerHTML = quesArr.length
    correctAns.innerHTML = Scorecounter
    wrongQues.innerHTML = wrongCounter
  }


  for(var i = 0 ; i<Quizoption.length ; i++){
    Quizoption[i].style.pointerEvents = "visible";
    Quizoption[i].style.backgroundColor = "transparent";
    Quizoption[i].style.color = "#000";
    Quizoption[i].style=":hover { color: red; }";
  }
  quesJs++;
  quesNum.innerHTML=quesJs;
}

/* Checking Answers*/

function checkAnswer(li){

  if(li.innerHTML === quesArr[counter].correctAns){
      /*console.log("true ans")*/
      Scorecounter++
      /*console.log("Scorecounter" , Scorecounter);*/
      li.style.backgroundColor = "green"
      li.style.color = "#fff"
    }
    else{
      wrongCounter++
    /*console.log("false");*/
    li.style.backgroundColor = "red"
    li.style.color = "#fff"
  }

  for(var i = 0 ; i<Quizoption.length ; i++){
      Quizoption[i].style.pointerEvents = "none"
  }
  nextBtn.style.display = "block"
}

/* Creating Timer */

var min = document.getElementById("min");
var sec = document.getElementById("sec");


var minjs = 0;
var secjs = 0;
min.innerHTML = minjs;

var interval = setInterval(function(){
    secjs++
    sec.innerHTML = secjs
      if(secjs ==60){
      minjs--

      min.innerHTML = minjs
    }
    if(minjs < 0){
        resultBox.style.display = "block";
        mainBox.style.display = "none";
        totalQues.innerHTML = quesArr.length;
        correctAns.innerHTML = Scorecounter;
        wrongQues.innerHTML = wrongCounter;
    }
} , 1000);