//query selectors
let body = document.body;
const addTaskBtn = document.querySelector(".add_btn");
const list = document.querySelector(".task_list");
const task_title = document.querySelector(".task_title");
const task_description = document.querySelector(".task_description");
const completion_time = document.querySelector(".completion_time");

//event listener for the add button
addTaskBtn.addEventListener('click', createTask);
list.addEventListener('click', deleteTask)


function createTask(event){
    event.preventDefault();

    
    let div = document.createElement("div");
    div.classList.add('todoDiv');
    body.appendChild(div);

    let taskItem = document.createElement("li");
    taskItem.classList.add('todoItem');
    taskItem.innerText = task_title.value;
    div.appendChild(taskItem);//append the li to the div

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    div.appendChild(deleteBtn);


    //append the div to the parent ul in the html
    list.appendChild(div);

    var todo_delete = deleteBtn;
}

function deleteTask(e){
    list.remove();
    
}















//ffunc to change text color
// function color(){
//     text.style.color = 'yellow';
// }