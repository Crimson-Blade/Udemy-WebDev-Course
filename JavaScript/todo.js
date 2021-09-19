const todoList = [];
let input;
// new list delete quit

while (true) {
  input = prompt("What would you like to do?");
  if (input.toLowerCase() === 'new') {
    todoList.push(prompt("Add Item to list"));
    console.log("Item added");
  }
  else if (input.toLowerCase() === 'list') {
    console.log("===========");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("===========");
  }
  else if (input.toLowerCase() === 'delete') {
    console.log(todoList.splice(prompt("Enter the index of the item to be deleted"), 1) + " has been deleted");
  }
  else if (input.toLowerCase() === 'quit')
    break;
  else
    console.log("Incorrect Choice");
}
console.log('Good Bye');