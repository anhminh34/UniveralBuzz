document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.querySelector('.button');
    const displayNameInput = document.querySelector('.input:nth-child(2) .label');
    const displayName = document.querySelector('.text-wrapper');

    saveButton.addEventListener('click', function () {
        displayName.textContent = displayNameInput.value;
    });
});