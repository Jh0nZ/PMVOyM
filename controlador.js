
const buttons = document.querySelector('.btn-box').children;
const contents = document.querySelector('.content-box').children;
const buttonLine = document.querySelector('.btn-line')

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', (e) => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        button.classList.add('active');
        buttonLine.style.width = button.offsetWidth + "px"
        buttonLine.style.left = button.offsetLeft + "px"
        for (let i = 0; i < contents.length; i++) {
            contents[i].classList.remove('active');
        }
        contents[index].classList.add('active')
    })

}