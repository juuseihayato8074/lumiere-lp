const questions = document.querySelectorAll(`.faq__question`);

questions.forEach(function(question) {
    question.addEventListener(`click`, function(){
        const answer = this.nextElementSibling;
        answer.classList.toggle(`active`);
    });
});


const hamburger = document.querySelector(`.hamburger`);
const nav = document.querySelector(`.header__nav`);

hamburger.addEventListener(`click`, function(){
    nav.classList.toggle(`active`);
});


const navLinks = document.querySelectorAll(`.nav__links a`);

navLinks.forEach(function(link) {
    link.addEventListener(`click`, function() {
        nav.classList.remove(`active`);
    });
});