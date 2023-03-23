let playerscore=0;
let compscore=0;

const button=document.querySelectorAll('button');
button.forEach(button => button.addEventListener('click',respond))

function respond(e)
{
    const playerchoice=this.classList.value;
    const playerSelection= parseInt(this.id);
    let string=playRound(getComputerChoice(),playerSelection,playerchoice);
    
    const div1=document.querySelector(".output");
    const div=document.querySelector(".game");
    div.textContent="";
    div1.textContent=string;
    const span1=document.querySelector(".compscore");
    const span2=document.querySelector(".playerscore");
    span1.textContent=`Computer Score :- ${compscore} `;
    span2.textContent=`Player Score:- ${playerscore}`;
    if(playerscore===5)
    {
        div.innerHTML=`Player Wins!!<br><br> Refresh the page to play again.`;
        playerscore=0;
        compscore=0;
        button.forEach(button => button.removeEventListener('click',respond));

    }
    else if (compscore===5)
    {
        div.innerHTML=`Computer Wins!!<br><br> Refresh the page to play again.`;
        playerscore=0;
        compscore=0;
        button.forEach(button => button.removeEventListener('click',respond));

    }
   console.log(playerscore);
   console.log(compscore);    
}




function getComputerChoice()
{
    let num=Math.ceil(Math.random()*3);
    return num;
    
}






function playRound(computerSelection,playerSelection,playerchoice) {
    let string;
  
    let compchoice;
    if(computerSelection===1)
    {
        compchoice="Rock";
    }    
    else if(computerSelection===2)
    {
        compchoice="Paper";
    }
    else if(computerSelection===3)
    {
        compchoice="Scissors";
    };
    

    if(playerSelection===computerSelection)
    {
        string="It's a tie!";
        return string;
    }
    else if((playerSelection-computerSelection)===-1){
        string=`You lose, ${compchoice} beats ${playerchoice}!`;
        compscore++
        return string;
    }
    else if((playerSelection-computerSelection)===1){
        string=`You win, ${playerchoice} beats ${compchoice}!`;
        playerscore++
        return string;
    }
    else if((playerSelection-computerSelection)===-2){
        string=`You win, ${playerchoice} beats ${compchoice}!`;
        playerscore++;
        return string;
    }
    else if((playerSelection-computerSelection)===2){
        string=`You lose, ${compchoice} beats ${playerchoice}!`;
        compscore++;
        return string;
    }


    
  }




    