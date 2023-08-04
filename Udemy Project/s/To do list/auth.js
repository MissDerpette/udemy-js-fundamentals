


auth.onAuthStateChanged(user=>  {
    getTodos();
    setupUI(user);
})

const logout = document.querySelector('#logout');
logout.addEventListener('click', e=>{
    e.preventDefault();
    auth.signOut();
})

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e=> {
    e.preventDefault();
    const email = loginForm.querySelector('#login-email').value;
    const password = loginForm.querySelector('#login-password').value;
    auth.signInWithEmailAndPassword(email,password).then(()=>{
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        signupForm.querySelector('.error').innerHTML = ''
        signupForm.reset();
    }).catch(err=>{
        signupForm.querySelector('.error').innerHTML = err.message
    })
})


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e=> {
    e.preventDefault();
    const email = signupForm.querySelector('#signup-email').value;
    const password = signupForm.querySelector('#signup-password').value;
    auth.createUserWithEmailAndPassword(email,password).then(()=>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.querySelector('.error').innerHTML = ''
        signupForm.reset();
    }).catch(err=>{
        signupForm.querySelector('.error').innerHTML = err.message
    })
})
