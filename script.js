
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
