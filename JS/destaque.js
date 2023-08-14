const buttons = document.getElementsByClassName('tab-dest')
const lists = document.getElementsByClassName('lista-dest')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        lists[i].classList.toggle('visivel');
        if (lists[i].classList.contains('visivel')) {
            buttons[i].children[1].textContent = '-'
        } else {
            buttons[i].children[1].textContent = '+'
        }
    })
}