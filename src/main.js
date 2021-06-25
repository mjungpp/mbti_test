'use strict';

const startBtn = document.querySelector('.mbti__startBtn');
const startContent = document.querySelector('.mbti__start');
const questionContent = document.querySelector('.mbti__question.--hide');
console.log(questionContent);

startBtn.addEventListener('click', () => {
    startContent.classList.add('--hide');
    questionContent.classList.remove('--hide');
});

