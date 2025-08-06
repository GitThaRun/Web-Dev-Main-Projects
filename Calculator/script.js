const display = document.getElementById("display");
let justCalculated = false;

function toAppend(input){

    if(justCalculated){
        display.value = "";
        justCalculated = false;
    }
    display.value += input;
}

function toClear(){
    display.value = "";
    justCalculated = false;
}

function toDelete(){
    display.value = display.value.slice(0, -1);
    justCalculated = false;
}

function calculate(){

    if(display.value.includes("/0") || display.value.includes("%0")){
        display.value = "Error";
        justCalculated = true;
        return;
    }
    try{
        display.value = eval(display.value);
        justCalculated = true;
    }
    catch(error){
        display.value = "Error";
        justCalculated = true;
    }
}