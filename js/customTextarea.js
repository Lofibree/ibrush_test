let customTextareas = document.querySelectorAll('.form__textarea-wrapper');
customTextareas.forEach((textarea) => {
    textarea.addEventListener('click', () => {
        console.log(textarea.children[1].value)
        if (textarea.classList.contains('active') && textarea.children[1].value === '') {
            textarea.classList.remove('active')
        } else if (textarea.classList.contains('active') && textarea.children[1].value !== '') {
            return;
        } if (!textarea.classList.contains('active')) {
            textarea.classList.add('active')
        }
    })
})
window.addEventListener('click', (e) => {
    customTextareas.forEach((textarea) => {
        if (e.target.closest(`.form__textarea-wrapper#${textarea.id}`) === null && textarea.children[1].value === '') textarea.classList.remove('active')
    })
})