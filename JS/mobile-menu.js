const mobile_button = document.getElementById('check')
const mobile_bar = document.getElementById('mobile')

mobile_button.addEventListener('click', function () {
    mobile_bar.classList.toggle("expand")
})

for (let i = 0; i <= mobile_bar.childElementCount; i++) {
    mobile_bar.children[i].addEventListener('click', function () {
        mobile_bar.classList.toggle("expand")
    })

}