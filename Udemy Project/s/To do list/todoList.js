

const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo-form');
const updateBtn = document.querySelector('#update');
let newTitle = '';
let updateId = null;
function renderList(doc) {
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id', doc.id);
    let div = document.createElement('div');
    let title = document.createElement('span');
    title.textContent = doc.data().title;
    let anchor = document.createElement('a');
    anchor.href = '#modal1';
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
        db.collection('todos').doc(id).delete();
    })
    editBtn.addEventListener('click', e =>{ 
        updateId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        console.log('updateId', updateId)
    })

    todoList.append(li);
}

updateBtn.addEventListener('click', e => {
    newTitle = document.getElementsByName('newtitle')[0].value;
    db.collection('todos').doc(updateId).update({
        title: newTitle
        
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('todos').add({
        title:form.title.value
    })
    form.title.value = '';
})

db.collection('todos').orderBy('title').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()

    changes.forEach(change => {
        if (change.type == 'added') {
            renderList(change.doc)
            console.log(change.doc.data())
        } else if (change.type == 'removed') {
            let li = todoList.querySelector(`[data-id=${change.doc.id}]`)
            todoList.removeChild(li)
        } else if (change.type == 'modified') {
            console.log('modified')
        }
    });
})