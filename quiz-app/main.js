// VARIABLES
const main = document.querySelector('main');
const welcome = document.querySelector('#welcome');
const one = document.querySelector('#question-one');
const two = document.querySelector('#question-two');
const three = document.querySelector('#question-three');
const four = document.querySelector('#question-four');
const five = document.querySelector('#question-five');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.btn');
const welcome_button = document.querySelector('#welcome-btn');
const question_buttons = document.querySelectorAll('.question-btn');
const score = document.querySelector('#score');
const res = document.querySelector('#res');
const count = document.getElementById('count');
let choice = 0;
let marks = 0;

// EVENT LISTENERS
main.addEventListener('click', validate);






// FUNCTIONS

function validate(e) {
    if(e.target.classList.contains('answers') && choice==0) {
        if(e.target.classList.contains('correct')) {
            e.target.style.background = '#00C2A1'
            e.target.style.color = 'white'
            choice += 1;
            marks += 1
            res.textContent = marks;
        } else {
            e.target.style.background = '#C20000';
            e.target.style.color = 'white';
            let lists = e.target.parentElement.children;
            Array.from(lists).forEach((list,index)=>{
                if(list.classList.contains('correct')) {
                    list.style.background = '#00C2A1';
                    list.style.color = 'white';
                }
            })
            choice += 1;
        }
    } else if (e.target.classList.contains('answers') && choice!=0) {
        alert('Answer already picked')
    } else if (e.target.id == 'welcome-btn') {
        e.target.parentElement.parentElement.style.display = 'none';
        e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
        score.style.display= 'block';
        choice = 0;
    } else if(e.target.classList.contains('btn') && choice==0) {
        alert('Pick an answer!');
    } else if (e.target.classList.contains('btn') && choice != 0) {
        if(e.target.classList.contains('btn')&&e.target.id==='last'){
            e.target.parentElement.parentElement.style.display = 'none';
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
            score.style.display = 'none';
            choice = 0;
            // count.textContent = marks;
            if(marks==1) {
                count.textContent = `${marks} question`;
            } else {
                count.textContent = `${marks} questions`;
            }
        } else if (e.target.classList.contains('btn')) {
            e.target.parentElement.parentElement.style.display = 'none';
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
            score.style.display= 'block';
            choice = 0;
        }
    }

    // choice = 0;
}