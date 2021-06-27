'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const title = document.querySelector('.mbti__asking');
const questionContent = document.querySelector('.mbti__question.--hide');
const progressBar = document.querySelector('.skill__value');
const selectBtn = document.querySelector('.mbti__selectBtn');
const type = document.querySelector('#type').dataset.value;
const values = document.querySelectorAll('input');
let questionNum = 1;

// start로 테스트 시작
startBtn.addEventListener('click', startTest);

function startTest(){
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
    proceedProgressBar();
    selectBtn.addEventListener('click',countScore);
}

// progress bar를 진행 상황에 따라 증가
function proceedProgressBar() {

}

function setTest(questions) {
  for(let i = 1; i < questions.length; i++){
      console.log(questions);
    title.innerHTML = `${questions[i].question}`
  }

}

function countScore() {
    console.log('initScore 실행');
    console.log(type);
    values.forEach(value => {
        if(type == value.dataset.type){
            console.log(++value.dataset.value);
        }
    });
}

function loadQuestions() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json =>json.questions);
}

loadQuestions()
.then(questions => {
    setTest(questions);
});
