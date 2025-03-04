// CLI To-do App

import readline from "readline";
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const todos = [];
const showMenu = () =>{
    console.log("\n1. Add a task");
    console.log("2. View Tasks");
    console.log("3. Exit");
    rl.question("Choose an option : ",handleinput);
};

const handleinput = (option) =>{
    if(option == "1"){
        rl.question("\nEnter the task : ",(task)=>{
            todos.push(task);
            console.log("Task added : ",task);
            showMenu();
        })
    }
    else if(option == 2){
        console.log("\nYour To-DO list : ");
        todos.forEach((task, index)=>{
            console.log(`${index+1}. ${task}`);
        })
        showMenu();
    }
    else if(option == 3){
        console.log("\nBest of luck for your tasks.\nGoodbye!");
        rl.close();
    }
    else{
        console.log("\nInvalid option.\nTry again");
        showMenu();
    }
}

showMenu();