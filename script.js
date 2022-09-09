// Variables
const modal = document.querySelector('.modal'),
        modalContent = document.querySelector('.modal-content'),
        btn = document.querySelector('.btn'),
        close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// open modal
function openModal(evt) {
    evt.preventDefault();
    modal.style.display = "block";
}
//close modal
function closeModal() {
    modalContent.classList.add('slide-up')
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove('slide-up')
    }, 500)
}