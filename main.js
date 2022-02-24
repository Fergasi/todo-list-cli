// input prompt-sync

const prompt = require('prompt-sync')({ sigint: true });

// list of Variables 
//----------------------------------------------------------------------------------

let array = [];
let arrayTime = [];
let option1 = 1;
let option2 = 2;
let option3 = 3;
let option4 = 4;
let option5 = 5;
let toDo = true;

// opening statement
//----------------------------------------------------------------------------------

console.log('Welcome to the To-Do List Manager Application!');

//Home loop (to get a input from user and perfom a action) 
//----------------------------------------------------------------------------------

while(toDo){

    if(array.length == 0){
        console.log('Your to-do list is empty.');

    } 
    
    else if (array.length > 0){
        console.log('You have ',array.length,' to-do item(s).');

        for (let i = 0; i < array.length; i++){

            const completed = array[i].completed ? 'complete' : 'incomplete'; // True or False statments. if True display complete, else display Incomplete. 

            if (completed === 'incomplete') {

                console.log(i + 1 + '.  ['+ completed + '] ' + array[i].todo); // Display Action for Incomplete TODO items.
            }

            else if (completed === 'complete') {
                 
                console.log(i + 1 + '.  ['+ completed + '] ' + array[i].todo + ' - ' + arrayTime[i]); // Display Action for Complete TODO items + timestamp.
            }
        }
    }

    //To-do menu + prompt
    //----------------------------------------------------------------------------------
    
    console.log();
    console.log('~ Select an action ~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    console.log('[3] Delete a to-do item');
    console.log('[4] Uncomplete a to-do item')
    console.log('[5] Exit application')
    let answer = Number(prompt(''));
    
    //Response to menu options + user answers
    //----------------------------------------------------------------------------------
    
    if (answer == option1) {
        console.log('~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');
        createToDo = prompt(''); // store inputs
        let newTodo = {'todo': createToDo, 'complete' : false}; //multi arrays.
        array.push(newTodo); // add arrays to  main array.

    } else 
    
    if (answer == option2){
        console.log('~ Completing a to-do item ~');
        console.log('Which to-do item would you like to complete?');
        let done = Number(prompt(''));

        if (done > array.length){
            Error ();
        } else

        array[done - 1].completed == true; // change false statment to true, incomplete to complete.

        // Stretch goal of adding timestamp to complete items
        var currentdate = new Date(); 
        arrayTime[done - 1] = "Finished: " + currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    } else
    
    if (answer == option3){
        console.log('~ Deleting a to-do item ~');
        console.log('Which to-do item would you like to Delete?');
        let done = Number(prompt(''));
        array.splice(done - 1, 1); // used to remove one item from the TODO list.   

    } else 
    
    if (answer == option4){
        console.log('~ Uncomplete a complete to-do item ~');
        console.log('Which to-do item would you like to Uncomplete?');
        let done = Number(prompt(''));
        array[done - 1].completed = false; // change true statment to false, incomplete to complete.
    } else
    
    if (answer == option5){
        toDo = false;
    } else

    Error ();
}

function Error () {
    console.log('----------------------------------' + '\n' + 'Error: Invalid entry' + '\n' + '\n' + 'Please try again' + '\n' + '----------------------------------');
}