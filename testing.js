
document.querySelector('.btn').addEventListener('click', onClick)

function onClick(e){
    e.preventDefault()
    let msg = 'button is clicked';
    console.log(msg)
}