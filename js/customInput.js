let customInputs = document.querySelectorAll('.form__input-wrapper');
customInputs.forEach((input) => {
    input.addEventListener('click', () => {
        console.log(input.children[1].value)
        if (input.classList.contains('active') && input.children[1].value === '') {
            input.classList.remove('active')
        } else if (input.classList.contains('active') && input.children[1].value !== '') {
            return;
        } if (!input.classList.contains('active')) {
            input.classList.add('active')
        }
    })
})
window.addEventListener('click', (e) => {
    customInputs.forEach((input) => {
        if (e.target.closest(`.form__input-wrapper#${input.id}`) === null && input.children[1].value === '') input.classList.remove('active')
    })
})