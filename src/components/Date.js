export default function showCurrentDate() {
	const div = document.querySelector('#date');
	const date = new Date();
	div.appendChild(date);
}
