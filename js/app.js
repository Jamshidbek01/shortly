let btn = document.querySelector('button')
btn.addEventListener('click', function (e) {
    e.preventDefault()
    let input = document.querySelector('.input').value.trim()
    if (input.length <= 3) {
        document.querySelector('form').classList.add("add");
        document.querySelector('.small').innerHTML = 'Please add a link'
    } else if (input.length >= 4) {
        document.querySelector('form').classList.remove("add");
        document.querySelector('.small').innerHTML = ''
    }
})
document.querySelector('.burger-btn').addEventListener('click', burger);

function burger() {
    document.querySelector('.mobil-menu').classList.toggle('active');
    document.querySelector('.burger-btn').classList.toggle('open');
}
let copyBtn = document.querySelector('.copy-btn')
let copyText = document.querySelector('.short-link')
copyBtn.addEventListener('click', function func(e) {
    copyBtn.innerHTML = 'Copied!'
    copyBtn.style = 'background-color: #3A3054;'
    navigator.clipboard.writeText(copyText.textContent);
})

