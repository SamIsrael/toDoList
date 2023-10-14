const prompt = require("prompt-sync")();
console.log("----------Welcome to the ToDo project----------");

let breaki = 0;
newList = [];

while (breaki == 0) {
    let input = prompt("What would you like to do? ");

    if (input == "new") {
        newInput = prompt("Enter new todo ");
        newList.push(newInput);
        console.log(`${newInput} added to the list.`);
    } else if (input == "list") {
        console.log("*".repeat(10));
        if (newList.length <= 0) {
            console.log(`There are no items in the list`);
        }
        for (let i = 0; i < newList.length; i++) {
            console.log(`${i}: ${newList[i]}`)
        }
        console.log("*".repeat(10));
    } else if (input == "delete") {
        if (newList.length > 0) {
            let deleteIndex = parseInt(prompt("Enter the index "));
            while (Number.isNaN(deleteIndex) || deleteIndex > newList.length) {
                deleteIndex = parseInt(prompt("Enter a valid index ")); 
            } 
            console.log(`${newList[deleteIndex]} deleted from the list.`);
            newList.splice(deleteIndex, 1);  
        } else {
            console.log(`There are no items in the list`);
        }
    } else if (input == "quit") {
        console.log(`Okay, you quit. Thanks for playing the game.`);
        breaki += 1;
    }
}


