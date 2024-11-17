// Объявление переменных
const actionButton = document.querySelector('.action-bar__btn');
const dialog = document.getElementById('dialog-confirm');
const closeButton = document.querySelector('.dialog__button');

// При клике на 'actionButton' открываем 'dialog'
actionButton.addEventListener('click', function () {
	dialog.showModal();
});

// При клике на 'closeButton' закрываем 'dialog'
closeButton.addEventListener('click', function () {
	dialog.close();
});
