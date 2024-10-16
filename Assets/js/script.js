// seleziono il form per aggiungere il task
const form = document.querySelector("form");
// evento per gestire il submit del form
form.onsubmit = function (event) {
  event.preventDefault(); // previene il refresh
  //prendo il valore inserito nell'input tramite id
  const taskInput = document.getElementById("new-Task");
  const taskName = taskInput.value; // Assegna il valore del taskName
  //console.log(taskName);
  // seleziono il contenitore dove saranno visualizzati i task
  const taskContainer = document.getElementById("tasks-container");
  // creo un nuovo elemento div per rappresentare un singolo task
  const newTask = document.createElement("div"); //Creo nuovo div per il task
  // aggiungo la classe "list-content" al div
  newTask.classList.add("list-content"); //
  // imposto l'HTML del nuovo task, inserendo un titolo (h3) e un pulsante "Delete"
  newTask.innerHTML += `
         
          <h3>${taskName}</h3>
          <button class="delete">X</button>
`;
  // aggiungo il nuovo task (il div) al contenitore dei task
  taskContainer.appendChild(newTask);
  // seleziono il pulsante "Delete" appena creato all'interno del nuovo task
  const deleteButton = newTask.querySelector(".delete");
  // aggiungo un event al pulsante "Delete"
  deleteButton.onclick = function () {
    newTask.remove();
  };
  // DA FINIRE - evento per rendere il nome task sbarrato se completato
  const taskTitle = document.querySelector("h3");
  taskTitle.onclick = function () {
    taskTitle.style.textDecoration = "line-through";
  };
  taskInput.value = ""; //Resetto il campo input dopo l'aggiunta
};
