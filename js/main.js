let player="X";
let btn = document.querySelector("#reset-button");
let result=document.querySelector(".result");
let cells = document.querySelectorAll(".cell");
let arr = Array.from(cells);

function winStates(i,j,k) {
    return arr[i].innerHTML!=="" && arr[i].innerHTML==arr[j].innerHTML && arr[j].innerHTML==arr[k].innerHTML;
    };

function checkWin(){
  if(winStates(0,1,2)||winStates(3,4,5)||winStates(6,7,8)||winStates(0,3,6)||
    winStates(1,4,7)||winStates(2,5,8)||winStates(0,4,8)||winStates(2,4,6)){
    if(player=='O'){
      result.style.visibility = 'visible';
      result.style.backgroundColor="pink"
      result.innerHTML="The winner is X";
    }
    else{
     result.style.visibility = 'visible';
      result.style.backgroundColor="pink";
     result.innerHTML="The winner is O";
    }
    disable();
  }
  else {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML === "") {
            flag = false;
            break;
        }
    }
    if (flag) {
      result.style.visibility = 'visible';
      result.style.backgroundColor="pink";
     result.innerHTML="Fair Game ";
    }
}  
}

function game(id) {
    let cel = document.getElementById(id);
    if (player === "X" && cel.innerHTML === "") {
        cel.innerHTML = "X";
         player = "O";
    } else if (player === "O" && cel.innerHTML === "") {
        cel.innerHTML = "O";
        player = "X";
    }  
    checkWin();   
}
  btn.addEventListener("click",restart);
  function restart() {
    location.reload();
  }

  function disable() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = "none"; 
    }
    player = ""; 
}

  
 







  




