

const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo-form');
const updateBtn = document.querySelector('#update');
const logoutItems = document.querySelectorAll('.logged-out');
const loginItems = document.querySelectorAll('.logged-in');

let currentUser = null;
let newTitle = '';
let updateId = null;

function setupUI(user){
    if(user){
        loginItems.forEach(item=>item.style.display = 'block');
        logoutItems.forEach(item=>item.style.display = 'none');
    } else {
        loginItems.forEach(item=>item.style.display = 'none');
        logoutItems.forEach(item=>item.style.display = 'block');
    }
}

function renderList(doc) {
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id', doc.id);
    let div = document.createElement('div');
    let title = document.createElement('span');
    title.textContent = doc.data().title;
    let anchor = document.createElement('a');
    anchor.href = '#modal-edit';
    anchor.className = 'modal-trigger secondary-content red-text';
    let editBtn = document.createElement('i');
    editBtn.className = 'material-icons';
    editBtn.innerText = 'edit';
    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'material-icons secondary-content red-text';
    deleteBtn.innerText = 'delete';
    anchor.appendChild(editBtn);
    div.appendChild(title);
    div.appendChild(deleteBtn);
    div.appendChild(anchor);
    li.appendChild(div);
deleteBtn.addEventListener('click', e =>{ 
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('alltodos').doc(currentUser.uid).collection('todos').doc(id).delete();
    })
editBtn.addEventListener('click', e =>{ 
        updateId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    })

    todoList.append(li);
}

updateBtn.addEventListener('click', e => {
    newTitle = document.getElementsByName('newtitle')[0].value;
    db.collection('alltodos').doc(currentUser.uid).collection('todos').doc(updateId).update({
        title: newTitle
        
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('alltodos').doc(currentUser.uid).collection('todos').add({
        title:form.title.value
    })
    form.title.value = '';
})

function getTodos(){
    todoList.innerHTML = '';
    currentUser = auth.currentUser;

    document.querySelector('#user-email').innerHTML = (currentUser != null ? currentUser.email : '');

    if(currentUser === null){
        todoList.innerHTML = '<h3 class="center-align">Please login to get todos</h3>';
        return;
    }
    db.collection('alltodos').doc(currentUser.uid).collection('todos').orderBy('title').onSnapshot(snapshot => {
        let changes = snapshot.docChanges()
        changes.forEach(change => {
            if (change.type == 'added') {
                renderList(change.doc)
                // console.log(change.doc.data())
            } else if (change.type == 'removed') {
                let li = todoList.querySelector(`[data-id=${change.doc.id}]`)
                todoList.removeChild(li)
            } else if (change.type == 'modified') {
                let li = todoList.querySelector(`[data-id=${change.doc.id}]`)
                li.getElementsByTagName('span')[0].textContent = newTitle;
                newTitle = '';
            }
        });
    })

}

