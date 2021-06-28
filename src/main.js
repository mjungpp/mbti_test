'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const title = document.querySelector('.mbti__asking');
const questionContent = document.querySelector('.mbti__question.--hide');
const progressBar = document.querySelector('.skill__value');
const selectBtn = document.querySelector('.mbti__selectBtn');
const img = document.querySelector('.mbti__testImg');

// const type = document.querySelector('#type').dataset.value;
// const values = document.querySelectorAll('input');
let questionNum = 1;
const QUESTION_END = 12;

let EIIndex = 0;
let SNIndex = 0;
let TFIndex = 0;
let JPIndex = 0;

// start로 테스트 시작
startBtn.addEventListener('click', startTest);

function startTest(){
    sectionShowHide();
    loadQuestions();
    proceedProgressBar();
}

// 1. start시 메인 영역을 없애고 질문 영역을 보이게 함
function sectionShowHide(){
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
}

// 2. progress bar를 진행 상황에 따라 증가
function proceedProgressBar() {
    progressBar.style.width = `calc(100 / 12 * ${questionNum}%)`;
}

// 3. 질문 초기 셋팅
function loadQuestions() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json =>json.questions);
}

// 4. json으로부터 문항을 받음
loadQuestions()
.then(questions => {
    setTest(questions);
});

// 5. test 문항 보이게 함
function setTest(questions) {
  for(let i = 1; i < questions.length; i++){
      console.log(`i:${i}`);
      console.log(`questionNum:${questionNum}`);
      if( i == questionNum) {
          title.innerHTML = `${questions[questionNum].question}`
      }
  }
  questionContent.addEventListener('click', progressQuestion);
}

function progressQuestion(){
    console.log('progressQuestion 실행');
}

// function countScore() {
//     ++questionNum;
//     console.log(type);
//     values.forEach(value => {
//         if(type == value.dataset.type){
//             console.log(++value.dataset.value);
//         }
//     });
// }

