var modalNoButton = document.querySelector('.modal__button--select-no');
var modal = document.querySelector('.modal');
var backDrop = document.querySelector('.back-drop');
var chooseButtons = document.querySelectorAll('.button');
var toogleButton = document.querySelector('.toogle-button');
var mobileNav = document.querySelector('.mobile-nav');

var openModal = function() {
    modal.style.display = 'block';
    backDrop.style.display = 'block';
};

var closeModal = function() {
    if(modal) {
        modal.style.display = 'none';
    }
    backDrop.style.display = 'none';
    mobileNav.style.display = 'none';
};

chooseButtons.forEach(element => {
    element.addEventListener('click', openModal);
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

backDrop.addEventListener('click', closeModal);

toogleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backDrop.style.display = 'block';
});