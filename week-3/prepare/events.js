let task = []


function renderTasks(tasks) {
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    tasks.forEach((task) => {
      listElement.innerHTML += `
      <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>`;
    });
  }




function newTask(){
    //get the value entered into the #todo input
    // add it to our arrays task
    // render out the list.

    const task = document.querySelector("input#todo").value
    task.puch({detais: task, completed: false})
    renderTask(task);
}

function completeTask(taskElement){
  //In this case we need to find the index of the task so we can modify it
  
  const taskIndex = task.findIndex((taks) => task.detail === taskElement.childNodes[0].innerText);
  /*
  once we have the index we can modify teb complete field
  task[taskIdex]. complte? false : true is a ternary expression.
  If teh firt part is true (left of the ?), then the value on the left of the: will get 
  returned, othewise the value on the right of the: will be returned.

  */
 task[taskIndex].completed = task[taskIndex].completed ? false : true;

 taskElement.classList.toggle('strike')
 console.log(task)

}

function manageTask(event){
  console.log(event.target);
  const parent = event.target.closest("li");

  if(event.target.dataset.function == "complete") {
   completeTask(parent) 
  }


}
document.getElementById("submitTask").addEventListener('click', newTask)
document.getElementById('todoList').addEventListener("click", manageTask)

renderTasks(task)