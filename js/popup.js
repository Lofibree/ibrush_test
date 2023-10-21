let proposalBtn = document.querySelector('.proposal__btn ');
let popup = document.querySelector('.popup');
let popupClose = document.getElementById('popupClose');

proposalBtn.addEventListener('click', () => popup.classList.add('popup-active'))
popupClose.addEventListener('click', () => popup.classList.remove('popup-active'))


window.addEventListener("click", function (e) {
    if (popup.classList.contains('popup-active') && e.target.closest(".popup__wrapper") === null && e.target.closest(".proposal__btn") === null) {
        popup.classList.remove('popup-active')
    }
});