const counter = document.querySelector('#counter')
const decrease = document.querySelector('#decrease')
const reset = document.querySelector('#reset')
const increase = document.querySelector('#increase')

decrease.addEventListener('click', function () {
    let num = Number(counter.textContent) - 1;
    counter.textContent = num;
    counter.style.color = colorChange(num);
})

reset.addEventListener('click', function () {
    counter.textContent = 0;
    counter.style.color = colorChange(0)
})

increase.addEventListener('click', function () {
    let num = Number(counter.textContent) + 1
    counter.textContent = num;
    counter.style.color = colorChange(num)

})

function colorChange(number) {
    if (number < 0) {
        return 'red';
    }
    if (number === 0) {
        return 'black';
    }
    if (number > 0) {
        return 'limegreen';
    }
}