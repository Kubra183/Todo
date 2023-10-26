const btnEkle = document.querySelector(".btn-ekle");
const taskList =  document.querySelector(".task-list");
const txtTask = document.querySelector(".card-footer .txt-task");
const btnKaldır = document.querySelectorAll(".btn-kaldır");
const txteditTaskID = document.querySelector(".txt-edittaskid");
const txteditTask = document.querySelector(".txt-edittask");
const btnGüncelle = document.querySelector(".btn-güncelle");
let tasks = document.querySelectorAll(".task");
   
console.log(tasks);

function addTask(task)
{   
    if(task==""){
        alert("Görev giriniz");
    }
    else{

        let html = `
        <li itemid="${tasks.length}" class="task list-group-item d-flex justify-content-between align-items-center"">
            <p> ${task}</p>
            <button onclick="removetask(this.parentElement)" class="btn-kaldır btn btn-danger">X</button>
        </li>
        `;
        
        taskList.insertAdjacentHTML("beforeend",html);
    }

}

function removetask(item)
{
    taskList.removeChild(taskList.children[item.getAttribute("itemid")]);
}

const editTodo = (newtask,id) => {
    let html = `
            
        <p>${newtask}</p>
        <button class="btn-kaldır btn btn-danger">X</button>
            
    `;

    tasks[id-1].innerHTML = html;
}

btnEkle.addEventListener("click",()=>{

    addTask(txtTask.value);
});

btnGüncelle.addEventListener("click",()=>{
    
    editTodo(txteditTask.value,txteditTaskID.value);
    
});
