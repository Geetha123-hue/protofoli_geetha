document.addEventListener('DOMContentLoaded', () => {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const body = document.body;
	const toggle = document.getElementById('themeToggle');
	const saved = localStorage.getItem('theme');
	if (saved === 'light') body.classList.add('light');

	if (toggle) {
		toggle.addEventListener('click', () => {
			body.classList.toggle('light');
			localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
		});
	}
});