'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const title = document.querySelector('.mbti__asking');
const questionContent = document.querySelector('.mbti__question.--hide');
const resultContent = document.querySelector('.mbti__result.--hide');
const progressBar = document.querySelector('.skill__value');
const selectBtn = document.querySelector('.mbti__selectBtn');
const replayBtn = document.querySelector('.result__replay');
const img = document.querySelector('.mbti__testImg');
const oneBtn = document.querySelector('#A');
const twoBtn = document.querySelector('#B');

let questionNum = 1;
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
    // progressTest();
    if(questionNum == QUESTION_END){
        finishTest();
    }
}

function sectionShowHide(){
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
}

function proceedProgressBar() {
    console.log('questionNum : ', questionNum);
    progressBar.style.width = `calc(100 / 12 * ${questionNum}%)`;
}

function loadQuestions() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json =>json.questions)
    .catch(console.error);
}

loadQuestions()
.then(questions => {
    proceedProgressBar();
    progressTest(questions);
    resultContent.addEventListener('click', (questions) => {
        console.log('result 클릭');
        progressTest(questions);
    });
});

function progressTest(questions) {
  for(let i = 1; i < QUESTION_END; i++){
      if( i == questionNum) {
          title.innerHTML = `${questions[questionNum].question}`;
          oneBtn.innerHTML = `${questions[questionNum].A}`;
          twoBtn.innerHTML = `${questions[questionNum].B}`;
          img.src = `${questions[questionNum].imgPath}`;
      }
  }
  ++questionNum;
//   questionContent.addEventListener('click', progressTest);
}


function finishTest() {
    resultSectionShow();
}

// 결과 영역을 보여줌
function resultSectionShow() {
    startContent.classList.add('--hide');
    resultContent.classList.remove('--hide');
}

