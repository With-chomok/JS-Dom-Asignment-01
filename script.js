
// select items
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");


    // Add To-Do
  const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
      alert("Please enter a task!");
      return;
    }

    const listItem = document.createElement("li");
    listItem.className = "flex justify-between items-center p-2 border rounded-md bg-gray-50";

    listItem.innerHTML = `
      <span class="flex-grow">${todoText}</span>
      <button class="editBtn text-blue-500 hover:underline">Edit</button>
      <button class="deleteBtn text-red-500 hover:underline">Remove</button>
    `;



    // Add Edit remove functionality codes
    listItem.querySelector(".editBtn").addEventListener("click", () => {
        const span = listItem.querySelector("span");
        const currentText = span.textContent;
        span.innerHTML = `<input type="text" value="${currentText}" class="p-1 border rounded-md">`;
        listItem.querySelector(".editBtn").textContent = "Save";
  
        listItem.querySelector(".editBtn").addEventListener("click", () => {
          const updatedText = span.querySelector("input").value.trim();
          if (updatedText === "") {
            alert("Task cannot be empty!");
          } else {
            span.textContent = updatedText;
            listItem.querySelector(".editBtn").textContent = "Edit";
          }
        }, { once: true });
      });

       // Add Delete functionality
    listItem.querySelector(".deleteBtn").addEventListener("click", () => {
        todoList.removeChild(listItem);
      });
  
      todoList.appendChild(listItem);
      todoInput.value = "";
    };
  


    
    // Event Listeners
  addTodoBtn.addEventListener("click", addTodo);

  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });
});
