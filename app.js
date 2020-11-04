const addBtn = document.querySelector('.add-list-item');
const shoppingList = document.getElementById('shopping-list');
const input = document.querySelector('.input');

addBtn.addEventListener("click", addItem);

shoppingList.addEventListener("click", deleteItem);

shoppingList.addEventListener("change", checkedItem);

function addItem(e) {
    e.preventDefault(); // Stops the default submit button execution

    let newItem = document.createElement("li"); // Create a new li
    newItem.className = "list-item"; // Give new li a class of list-item
    shoppingList.appendChild(newItem); // Append the li to the ul

    let tickBox = document.createElement("input");
    tickBox.className = "tick";
    tickBox.type = "checkbox";
    newItem.appendChild(tickBox);

    let text = document.createTextNode(input.value);
    newItem.appendChild(text);
    
    let delBtn = document.createElement("button"); // Create a new delete button
    delBtn.className = "delete-list-item"; // Give the delete button a class 
    delBtn.textContent = "Delete"; // Add text content to delete button
    newItem.appendChild(delBtn); // Append the delete button to the li
    
    // Opens an alert if no value is passed to the input field
    if (input.value == "") {
        shoppingList.removeChild(newItem)
        newItem.removeChild(delBtn);
        alert("Please enter an item! ¯\\_(ツ)_/¯");
    }

    if(e.target == addBtn) {
        input.value = "";
    }
}

function deleteItem(e) {
    if(e.target.classList.contains("delete-list-item")) {
        let li = e.target.parentElement;
        shoppingList.removeChild(li);
    }
}

function checkedItem(e) {
    if(e.target.classList.contains("tick") && e.target.checked === true) {
        let checkbox = e.target.parentElement;
        checkbox.style.textDecoration = "line-through";
    } else {
        let checkbox = e.target.parentElement;
        checkbox.style.textDecoration = "none"
    }
}
