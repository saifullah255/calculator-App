function getData(num){
    var input = document.getElementById("cal-Input");
    input.value += num;
}

function getAns(){
    var input = document.getElementById("cal-Input");
    input.value = eval(input.value);
    
}


function clearScreen(){
    var input = document.getElementById("cal-Input");
    input.value = ("");
    
}