
// let header = document.querySelector('h2')
// let body = document.querySelector('.body')
// let wrapper = document.querySelector('.wrapper')
// let btn = document.querySelector('btn')

// document.querySelector('.btn').addEventListener('mousemove', onClick)

// function onClick(e){
//     e.preventDefault()
//     header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`
// }
document.getElementById('firstName').addEventListener('blur', validateFN)
document.getElementById('lastName').addEventListener('blur', validateLN)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)
document.getElementById('postal').addEventListener('blur', validatePostal)



function validateFN(){
    const firstName = document.getElementById("firstName")
    const re = /^[a-zA-Z]{2,20}$/
    if (!re.test(firstName.value)) {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
    }else{
        firstName.classList.add('is-valid');
        firstName.classList.remove('is-invalid');
    }
}

function validateLN(){
    const lastName = document.getElementById("lastName")
    const re = /^[a-zA-Z]{2,20}$/

    if (!re.test(lastName.value)) {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
    }else{
        lastName.classList.add('is-valid');
        lastName.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById("email")
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/
    console.log('working too!')
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }else{
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById("phone")
    const re = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{3}$/
    console.log('working too!')
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    }else{
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
    }
}

function validatePostal(){
    const postal = document.getElementById("postal")
    const re = /^[0-9]{4}?$/
    console.log('working too!')
    if (!re.test(postal.value)) {
        postal.classList.add('is-invalid');
        postal.classList.remove('is-valid');
    }else{
        postal.classList.add('is-valid');
        postal.classList.remove('is-invalid');
    }
}

