// const prompt = require("prompt-sync")();
console.log("----------Welcome to the ToDo project----------");

let breaki = 0;
newList = [];
while (breaki == 0) {
    let input = prompt("What would you like to do? ");

    if (input == "new") {
        newInput = prompt("Enter new todo ");
        newList.push(newInput);
    } else if (input == "list") {
        console.log("*".repeat(10));
        if(newList.length <= 0) {
            console.log("There are no items in the list");
        }
        for (let i = 0; i < newList.length; i++) {
            console.log(`${i}: ${newList[i]}`)
        }
        console.log("*".repeat(10));
    } else if (input == "delete") {
        let deleteIndex = prompt("Enter the index ");
        newList.splice(deleteIndex, 1);
    } else if (input == "quit") {
        breaki += 1;
    }
}