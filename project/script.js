document.addEventListener('DOMContentLoaded', (event) => {
    const userInput = document.getElementById('userInput');
    const defaultText = document.querySelector('.default-text');

    userInput.addEventListener('input', () => {
        if (userInput.value.length > 0) {
            defaultText.style.visibility = 'hidden';
        } else {
            defaultText.style.visibility = 'visible';
        }
    });
});