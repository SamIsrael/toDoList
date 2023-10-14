console.log("----------Welcome to the ToDo project----------");

let i=0;
newList = []

while (i==0) {
    input = prompt("What would you like to do?");

    if (input == "new") {
        newInput = prompt("Enter new todo");
        newList.push(newInput);
    } else if (input == "list") {
        console.log("*"*10);
        for (let i =0; i<newList.length; i++) {
            console.log(`${i}: ${newList[i]}`)
        }
        console.log("*"*10);
    } else if (input == "delete") {
        deleteIndex = prompt ("Enter the index ");
        newList = newList.splice(deleteIndex,1);
    } else if (input == "quit") {
        i+=1;
    }
}