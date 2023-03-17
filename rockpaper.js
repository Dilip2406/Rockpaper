
function getComputerChoice()
{
    let num=Math.ceil(Math.random()*3);
    return num;
    
}

function getPlayerChoice()
{
    let num=Math.ceil(Math.random()*3);
    
    return num;
}


function playRound(playerSelection, computerSelection) {
    let string;
    let playerchoice;
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
    
    if(playerSelection===1)
    {
        playerchoice="Rock";
    }    
    else if(playerSelection===2)
    {
        playerchoice="Paper";
    }
    else if(playerSelection===3)
    {
        playerchoice="Scissors";
    };

    if(playerSelection===computerSelection)
    {
        string="It's a tie!";
        return string;
    }
    else if((playerSelection-computerSelection)===-1){
        string=`You lose ${compchoice} beats ${playerchoice}!`;
        return string;
    }
    else if((playerSelection-computerSelection)===1){
        string=`You win ${playerchoice} beats ${compchoice}!`;
        return string;
    }
    else if((playerSelection-computerSelection)===-2){
        string=`You win ${playerchoice} beats ${compchoice}!`;
        return string;
    }
    else if((playerSelection-computerSelection)===2){
        string=`You lose ${compchoice} beats ${playerchoice}!`;
        return string;
    }
  }


function game()
{
    let player=0;
    let computer=0;
    let NumberofRounds=prompt("Enter number of rounds:");
    for(let i=0;i<NumberofRounds;i++)
    {
        string=playRound(getComputerChoice(),getPlayerChoice());
        console.log(string);
        if(string[4]==='W')
        {
            player++;
        }
        else if(string[4]=='L')
        {
            computer++;
        }
    };
    if (player===computer)
    {
        console.log("Game:It's a tie!");
    }
    else if (computer>player)
    {
        console.log("Computer Wins!");
    }
    else if(player>computer)
    {
        console.log("Player wins!");
    };
}


game();