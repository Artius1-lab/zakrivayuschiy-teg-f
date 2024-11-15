const iconButtons = document.querySelectorAll('.card__icon-btn');
const likeButtons = document.querySelectorAll('.card__like-btn');
const hearts = document.querySelectorAll('.like-icon');

const toggleLike = (button, heart) => {
	heart.classList.toggle('is-liked');
	updateButtonText(heart, button);
};

const updateButtonText = (heart, button) => {
	const textElement = button.querySelector('.btn__txt');
	const newText = heart.classList.contains('is-liked') ? 'Unlike' : 'Like';
	setTimeout(() => { textElement.textContent = newText; }, 500);
};

iconButtons.forEach((iconButton, idx) => {
	iconButton.addEventListener('click', () => toggleLike(likeButtons[idx], hearts[idx]));
	iconButton.addEventListener('mouseleave', () => {
		if (!iconButton.matches(':hover')) {
			iconButton.blur();
		}
	});
});

likeButtons.forEach((button, idx) => {
	button.addEventListener('click', () => toggleLike(button, hearts[idx]));
});
