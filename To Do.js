// To Do.

const todosNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");

let todos = [];                                                    // <--- To add in this empty array the new "Task".

function addTodo(text) {                                           // <--- To put a text.
  const todo = {
    text,
    done: false,                                                   // <--- Default status of "Task" is false.
    id: `${Math.random()}`,                                        // <--- "Task" should have an unique id.
  };

  todos.push(todo);                                                // <--- The method to add "Task". 
  
    if (text === "") {
    alert("You must write something :I");
  }
  
}

function deleteTodo(id) {                                       // <--- To delete "Task".  
  todos.forEach((todo) => {                                     // <--- Then in array, find that "Task" and change the status - Done.
    if (todo.id === id) {
      todo.done = true;
    }
  });
}

function render() {                                             // <--- Displays the current state of the data.
  console.log(todos);
  let html = "";
                  
                                                                // <--- "Task" will be shown on class="js-todos". 
  
  todos.forEach((todo) => {                                     // <--- Marked as "Done", it will not appear in render.
    if (todo.done) {
      return;
    }

    html += `<div>
        ${todo.text}
        <button class="done" data-id="${todo.id}">Done</button>
    </div>`;
  });
                                                                    // <--- "Task" will be cleared, if you click "Done".
  todosNode.innerHTML = html;
}

btnNode.addEventListener("click", () => {                           // <--- "Add task" button.
  const text = inputNode.value;

  addTodo(text);

  render();
});

todosNode.addEventListener("click", (event) => {                     // <--- "Done" button.
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const id = event.target.dataset.id;                               // <--- Take "Task" id, which clicked.

  deleteTodo(id);                                                   //  <--- and clear it.
                
  render();
});
