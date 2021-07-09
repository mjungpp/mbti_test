'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const title = document.querySelector('.mbti__asking');
const questionContent = document.querySelector('.mbti__question.--hide');
const resultSection = document.querySelector('.mbti__result.--hide');
const progressBar = document.querySelector('.skill__value');
const buttonA = document.querySelector('#A');
const buttonB = document.querySelector('#B');
const replayBtn = document.querySelector('.result__replay');
const img = document.querySelector('.mbti__testImg');
const resultContent = document.createElement('div');

let questionNum = 0;
const QUESTION_END = 20;

let EIScore = 0;
let SNScore = 0;
let TFScore = 0;
let JPScore = 0;
let resultType = undefined;

function startTest(questions) {
    sectionShowHide();
    proceedProgressBar();
    progressTest(questions);
}


function initTest(questions){
    EIScore = 0;
    SNScore = 0;
    TFScore = 0;
    JPScore = 0;
    questionNum = 0;
    startTest(questions);
    resultSection.classList.add('--hide');
    resultContent.innerHTML = '';
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
        initTest(questions);
    });
}

function proceedProgressBar() {
    progressBar.style.width = `calc(100 / ${QUESTION_END} * ${questionNum+1}%)`;
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
        if(questionNum < 6) {
            EIScore = EIScore + 1;
        }
        if(questionNum >= 6 && questionNum < 11){
            SNScore = SNScore + 1;
        }
        if(questionNum >=11 && questionNum < 16){
            TFScore = TFScore + 1;
        }
        if(questionNum >= 16 && questionNum < 21){
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
    resultSection.classList.remove('--hide');
}

function loadResults() {
    return fetch('data/result.json')
    .then(response => response.json())
    .then(json =>json.results)
    .then(results => viewResult(results))
    .catch(console.error);
}

function calculateMBTI(){
        if(EIScore >= 4){
            resultType = 'E';
        }else{
            resultType = 'I';
        }
        if(SNScore >= 4){
            resultType += 'S';
        }else {
            resultType += 'N';
        }
        if(TFScore >= 4){
            resultType += 'T';
        }else {
           resultType += 'F';
        }if(JPScore >= 4){
            resultType += 'J';
        }else {
            resultType += 'P';
        }
    loadResults();
}

function viewResult(results){
    results.forEach(result => {
       if(resultType == result.type){
        resultContent.innerHTML = 
            `            
            <h2 class="result__title">나의 유형은..❓</h2>
            <h3 class="result__character">${result.character}, (${result.type})</h3>
            <img class="result__img" src="${result.imgPath}">
            <span class="result__explanation">${result.explanation}</span>
            <span class="result__matching__title">네 마음이 내 마음! 최고의 조합💕</span>
            <span class="result__matching__character">${result.matchingCharacter}</span><br>
            <span class="result__unmatching__title">파국이야! 최악의 조합💢</span>
            <span class="result__unmatching__character">${result.unmatchingCharacter}</span><br>
            `;
            resultSection.insertBefore(resultContent, replayBtn);
       }
   })
}