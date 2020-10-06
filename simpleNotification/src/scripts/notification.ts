const CLASS_WRAPPER_HIDDEN: string = 'notification__wrapper_hidden';

const wrapper: HTMLElement      = document.querySelector('.notification__wrapper');
const acceptButton: HTMLElement = document.querySelector('.notification-content-button_accept');

function appendShowButton(): void {
	const button: HTMLElement = document.createElement('div');
	button.textContent        = 'Открыть уведомление';
	button.classList.add('show-button');

	button.addEventListener('click', () => {
		wrapper.classList.remove(CLASS_WRAPPER_HIDDEN);

		button.remove();
	});

	document.body.appendChild(button);
}

(function(): void {
	const undoButton: HTMLElement = document.querySelector('.notification-content-button_undo');

	undoButton.addEventListener('click', () => {
		location.reload();
	});

	acceptButton.addEventListener('click', () => {
		wrapper.classList.add(CLASS_WRAPPER_HIDDEN);
		appendShowButton();
	});
})();
