const changeTheme = (theme) => {
	document.documentElement.className = '';
	if (theme === 'auto') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
	} else {
		document.documentElement.classList.add(`theme-${theme}`);
	}
	localStorage.setItem('theme', theme);
};

const applyAutoTheme = () => {
	const theme = localStorage.getItem('theme');
	if (theme === 'auto') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.className = '';
		document.documentElement.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
	}
};

(function initTheme() {
	const theme = localStorage.getItem('theme') || 'auto';
	changeTheme(theme);

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyAutoTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
	const themeButtons = document.querySelectorAll('.theme-switcher__button');


	const setDisabled = (theme) => {
		themeButtons.forEach((item) => {
			item.disabled = item.getAttribute('data-theme') === theme;
		});
	};

	const initialTheme = localStorage.getItem('theme') || 'auto';
	setDisabled(initialTheme);


	themeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const selectedTheme = button.getAttribute('data-theme');
			changeTheme(selectedTheme);
			setDisabled(selectedTheme);
			if (selectedTheme === 'auto') {
				applyAutoTheme();
			}
		});
	});
});
