//constantes do HTML
const button = document.querySelector(".button-add-task") //button
const input = document.querySelector(".input-task") //input
const fullList = document.querySelector('.list-tasks') //ul

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addNewTask()
    }
})

//lista onde serão adicioadas as tarefas
let myItemList = []

//função para adicionar tarefas na lista myItemList
function addNewTask() {
    if (input.value == '') {
        alert("Tarefa em branco!")
    } else {
        myItemList.push({
            task: input.value,
            done: false
        })
    }

    input.value = ''

    showTasks()
}

//insere codigo HTML no gerando a pagina com a lista de tarefas presentes na lista myItemList
function showTasks() {
    let newLi = ''
    myItemList.forEach((item, index) => {
        newLi += `
        
        <li class="task ${item.done && "done"}">
            <img src="./img/checked.png" alt="checked-na-tarefa" onclick="doneTask(${index})">
            <p>${item.task}</p> 
            <img src="./img/trash.png" alt="trash-na-tarefa" onclick="deleteItem(${index})">
        </li>
        
        `
    })

    fullList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myItemList))
}

//altera o valor done a cada click no icone check do item para que haja a estilização caso done = true
function doneTask(index) {
    myItemList[index].done = !myItemList[index].done

    showTasks()
}

//deleta itens da lista myItemList
function deleteItem(index) {
    myItemList.splice(index, 1)

    showTasks()
}

//mantem tarefas salvas no localstorage
function reloadTask() {
    const localStorageTasks = localStorage.getItem('list')
    if (localStorageTasks) {
        myItemList = JSON.parse(localStorageTasks)
    }

    showTasks()
}

reloadTask()

button.addEventListener('click', addNewTask)
