import './main.scss'
import $ from 'jquery'


const img = $('img')
const srcs = ['Almeida Summer by Redjuice.jpg', 'Guild Wars 2, 1.jpg', 'Screenshot (27).png']
let count = 1
function next() {
    img.prop('src', `/img/${srcs[count - 1]}`)
    setTimeout(() => {
        count++
        if (count > 3) {
            count = 1
        }
        next()
    }, 2000);
}
next(srcs, count)


const on = $('#on')
const off = $('#off')
function onFn(e) {
    console.log(e, e.data)
}
on.on('click', { a: 1, b: 2 }, onFn)
off.on('click', () => {
    on.off('click', onFn)
})