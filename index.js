let boxes = document.querySelectorAll(".box")

var winning_combination = [
    [0 ,1 ,2],
    [3 ,4 ,5],
    [6 ,7 ,8],
    [0, 4, 8],
    [2, 4, 6],
    [0 ,3, 6],
    [1 ,4, 7],
    [2 ,5 ,8]
];

var x_Attempts = [];
var o_Attempts = [];

var result = document.getElementById("result");
var message = document.getElementById("message");
var button = document.getElementById("button");

boxes.forEach(box =>{
    box.onclick = handleclick;
})
var click = 0;
function handleclick(e){
    console.log("e", e)
    var id_d = e.target.id;

    var text_to_be_inserted = document.createElement("p");
    boxes[id_d -1].append(text_to_be_inserted);
    
    if(click % 2 == 0){
        x_Attempts.push(id_d -1);
        text_to_be_inserted.innerHTML = "X";
        text_to_be_inserted.style.color = "red";
        checkResult (winning_combination, x_Attempts, "X");
    }else{
        o_Attempts.push(id_d -1);
        text_to_be_inserted.innerHTML = "O";
        text_to_be_inserted.style.color = "red";
        checkResult(winning_combination, o_Attempts, "O"); 
    }
    click++;
} 


if (click == 9){
    result.style.visibility = "visible";
    message.innerHTML = "It's a tie!";
}

function checkResult(winning_combination, Attempts, player){

    var ans = [];
    var count = 0;
    for(var i=0; i<winning_combination.length; i++){
        if(Array.isArray(winning_combination[i])){
            checkResult(winning_combination[i], Attempts, player);
        }else{
            if(Attempts.includes(winning_combination[i])){
                ans.push(true);
                count++;
            }else{
                ans.push(false);
            }
        }
    }

    if(ans.every((answer) => answer == true) && count > 2){
        result.style.visibility = "visible";
        message.innerHTML = `${player} won the game!`;
    }

    button.onclick = () => {
        window.location.reload();
    }
}




