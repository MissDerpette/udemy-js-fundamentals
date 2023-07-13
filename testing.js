
let header = document.querySelector('h2')
let body = document.querySelector('.body')
let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('btn')

document.querySelector('.btn').addEventListener('mousemove', onClick)

function onClick(e){
    e.preventDefault()
    header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`
}