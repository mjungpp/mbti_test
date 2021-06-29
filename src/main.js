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

// start로 테스트 시작
startBtn.addEventListener('click', startTest);

// replay로 테스트 다시 시작
replayBtn.addEventListener('click', startTest);

function startTest() {
    sectionShowHide();
    proceedProgressBar();
    if(questionNum == QUESTION_END){
        finishTest();
    }
}

function sectionShowHide(){
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
}

function proceedProgressBar() {
    progressBar.style.width = `calc(100 / 12 * ${questionNum+1}%)`;
}

function loadQuestions() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json =>json.questions)
    .catch(console.error);
}

loadQuestions()
.then(questions => {
    progressTest(questions);
    setEventListners(questions);
});

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

function setEventListners(questions){
    questionContent.addEventListener('click', (event) => {
        if(event.target.id == 'A' || event.target.id == 'B'){
            ++questionNum;
            proceedProgressBar();
            progressTest(questions);
            countScore(event.target.id);
        }
    });
}

function countScore(id){

    if(id == 'A'){
       console.log('button a 클릭');
    }
    if(id =='B'){
        return;
    }
}

function finishTest() {
    console.log('finishTest 수행됨');
    resultSectionShow();
}

// 결과 영역을 보여줌
function resultSectionShow() {
    startContent.classList.add('--hide');
    resultContent.classList.remove('--hide');
}

