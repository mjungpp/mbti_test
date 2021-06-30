'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const title = document.querySelector('.mbti__asking');
const questionContent = document.querySelector('.mbti__question.--hide');
const resultContent = document.querySelector('.mbti__result.--hide');
const progressBar = document.querySelector('.skill__value');

const buttonA = document.querySelector('#A');
const buttonB = document.querySelector('#B');
const replayBtn = document.querySelector('.result__replay');
const img = document.querySelector('.mbti__testImg');

let questionNum = 0;
const QUESTION_END = 12;

let EIScore = 0;
let SNScore = 0;
let TFScore = 0;
let JPScore = 0;

function startTest(questions) {
    sectionShowHide();
    proceedProgressBar();
    progressTest(questions);

}

function initTest(questions){
    questionNum = 0;
    EIScore = 0;
    SNScore = 0;
    TFScore = 0;
    JPScore = 0;
    resultContent.classList.add('--hide');
    startTest(questions);
}

function sectionShowHide(){
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
}

function loadQuestions() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json =>json.questions)
    .catch(console.error);
}

loadQuestions()
.then(questions => {
    setEventListners(questions);
});

function setEventListners(questions){
    startBtn.addEventListener('click', () => {
        startTest(questions);
    });
    questionContent.addEventListener('click', (event) => {
        if(event.target.id == 'A' || event.target.id == 'B'){
            ++questionNum;
            proceedProgressBar();
            countScore(event.target.id);
            progressTest(questions);
        }
    });
    replayBtn.addEventListener('click', () => {
        initTest();
    });
}

function proceedProgressBar() {
    progressBar.style.width = `calc(100 / 12 * ${questionNum+1}%)`;
}

function progressTest(questions) {
  for(let i = 0; i < QUESTION_END; i++){
      if( i == questionNum) {
          title.innerHTML = `${questions[questionNum].question}`;
          buttonA.innerHTML = `${questions[questionNum].A}`;
          buttonB.innerHTML = `${questions[questionNum].B}`;
          img.src = `${questions[questionNum].imgPath}`;
      }
  }
}

function countScore(id){
    if(id == 'A') {
        if(questionNum < 4) {
            console.log(questionNum);
            EIScore = EIScore + 1;
        }
        if(questionNum >= 4 && questionNum < 7){
            console.log(questionNum);
            SNScore = SNScore + 1;
        }
        if(questionNum >=7 && questionNum < 10){
            console.log(questionNum);
            TFScore = TFScore + 1;
        }
        if(questionNum >= 10 && questionNum < 13){
            console.log(questionNum);
            JPScore = JPScore + 1;
        }
    }
    if(questionNum == QUESTION_END){
        finishTest();
    }
}

function finishTest() {
    resultSectionShow();
    calculateMBTI();
}
// 결과 영역을 보여줌
function resultSectionShow() {
    questionContent.classList.add('--hide');
    resultContent.classList.remove('--hide');
}

function calculateMBTI(){
    
}