let currentlyPlaying = false;
let FirstPlayerTurn = true;
let gameSize = document.getElementById("gameSize");
let place = document.getElementById("GameTable");
let CurrentPlayerText = document.getElementById("CurrentPlayerText");
let goalText = document.getElementById("GoalText");
let ChangeGoalButton = document.getElementById("GoalButton");
let PreviousTurnButton = document.getElementById("OneStepBack");
let gameSizeText = document.getElementById("gameSizetext");
let gameIsSet = false;
var UsedElementsMap = new Map();
let turnsCounter = 0;
let GamingTRs = [];
let GameIsFinished = false;
let MaxTurns = 0;
let inARowToWin = 0;

ResetGameSize();

function ResetGameSize()
{
    if(gameIsSet)
    {
        for(var q = 0; q < GamingTRs.length; q++ )
        {
            GamingTRs[q].remove();
        }
    }
    UsedElementsMap = new Map();
    turnsCounter = 0;
    FirstPlayerTurn = true;
    GameIsFinished = false;
    CurrentPlayerText.innerText = "";
    goalText.innerText = `The goal is to set ${gameSize.value} in a row` ;
    gameSizeText.innerText = `Current sise is: ${gameSize.value}`;
    inARowToWin = gameSize.value;
    ChangeGoalButton.disabled = false;
    PreviousTurnButton.disabled = false;
    createBoard();
}

function createBoard()
{
    for(var i = 0; i < gameSize.value; i++)
    {   
        GamingTRs.push(newElement = document.createElement("tr"));
        newElement.className = "GameTR";
        newElement.id = i;
        place.append(newElement); 
        for(var z = 0; z < gameSize.value; z++)
        {
            var newElementChild = document.createElement("td");
            newElementChild.id = `${i}${z}`;
            newElement.append(newElementChild);
            newElementChild.setAttribute("onclick","PlayersTurn(this.id);");
        }
    }
    gameIsSet = true;
    MaxTurns = gameSize.value*gameSize.value;
}

function OneStepBack()
{
    if(!GameIsFinished && turnsCounter > 0)
    {
        let keys = Array.from( UsedElementsMap.keys() );
        let lastElement = keys[keys.length - 1];
         var Elem = document.getElementById(lastElement);
        UsedElementsMap.delete(lastElement);
        Elem.className = "";
        var child = Elem.lastElementChild; 
        while (child) {
        Elem.removeChild(child);
        child = Elem.lastElementChild;
    }
    turnsCounter--;
    if(turnsCounter < 1)
    {
        ChangeGoalButton.disabled = false;
    }
    FirstPlayerTurn = !FirstPlayerTurn;
    CurrentPlayerText.innerText = `${FirstPlayerTurn? "First" : "Second"} player turn. (${FirstPlayerTurn? "X" : "O"})`;
    }
}

function SetNewGoal()
{
    var newGoal = parseInt(document.getElementById("goalInput").value);
    if((parseInt(newGoal) < 3) || (parseInt(newGoal) > gameSize.value))
    {
        if(newGoal < 3)
        {
            alert("The minimum goal is 3");
        }
        if(newGoal > gameSize.value)
        {
            alert("Cant set goal bigger than size of the board");
        }
    }
    else{
        inARowToWin = newGoal;
        goalText.innerText = `The goal is to set ${inARowToWin} in a row` ;
    }
}

function PlayersTurn(ElementID)
{
    var ClicedElement = document.getElementById(`${ElementID}`);

    if(!UsedElementsMap.has(ClicedElement.id) && !GameIsFinished)
    {
        var MySVG = document.createElement("img");
        MySVG.src = FirstPlayerTurn? "GameIcons/iconmonstr-x-mark-1.SVG" : "GameIcons/iconmonstr-shape-20.SVG";

        ClicedElement.append(MySVG);

        ClicedElement.className = FirstPlayerTurn? "First" : "Second";
        UsedElementsMap.set(ClicedElement.id,FirstPlayerTurn? "First" : "Second");
        console.log(UsedElementsMap);
        turnsCounter++;
        if(turnsCounter >= 5)
        {
            CheckWiningCondition(ClicedElement.id, FirstPlayerTurn);
        }
        FirstPlayerTurn = !FirstPlayerTurn;
        if(!GameIsFinished) CurrentPlayerText.innerText = `${FirstPlayerTurn? "First" : "Second"} player turn. (${FirstPlayerTurn? "X" : "O"})`;
        if(turnsCounter == MaxTurns)
        {
            Teko();
        }
    }
    if(turnsCounter >= 1)
    {
        ChangeGoalButton.disabled = true;
    }
}

function CheckWiningCondition(ClicedElement, FirstPlayerTurn)
{
    var HorizontalPos = parseInt(ClicedElement[1]);
    var VerticallPos = parseInt(ClicedElement[0]);
    var counter = 0;
    var CheckingPlayer = FirstPlayerTurn? "First" : "Second";
    //all axes check
    var Line = [];
    Line.push(ClicedElement);
    for(var i = 0; i < 4; i++)
    {
        Line = [];
        Line.push(ClicedElement);
        if(i==0)
        {
            var innerCounter1 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos)}`) === CheckingPlayer)
                {
                    innerCounter1++;
                    Line.push(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos)}`);
                }
                else
                    break;
            }
            
            var innerCounter2 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos)}`) === CheckingPlayer)
                {
                    innerCounter2++;
                    Line.push(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos)}`);
                }
                else
                    break; 
            }
            if(innerCounter1 + innerCounter2 >= inARowToWin -1 )
            {
                Win(FirstPlayerTurn, Line);
                break;  
            }
        }
        if(i==1)
        {
            var innerCounter1 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos)}${parseInt(HorizontalPos + q)}`) === CheckingPlayer)
                {
                    innerCounter1++;
                    Line.push(`${parseInt(VerticallPos)}${parseInt(HorizontalPos + q)}`);
                }
                else
                    break;
            }
            var innerCounter2 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if( UsedElementsMap.get(`${parseInt(VerticallPos)}${parseInt(HorizontalPos - q)}`) === CheckingPlayer)
                {
                    innerCounter2++;
                    Line.push(`${parseInt(VerticallPos)}${parseInt(HorizontalPos - q)}`);
                }
                else
                    break; 
            }
            if(innerCounter1 + innerCounter2 >= inARowToWin -1 )
            {
                Win(FirstPlayerTurn, Line);
                break;  
            }
        }
        if(i==2)
        {
        var innerCounter1 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos + q)}`) === CheckingPlayer)
                {
                    innerCounter1++;
                    Line.push(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos + q)}`);
                }
                else
                    break;
            }
            

            var innerCounter2 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos - q)}`) === CheckingPlayer)
                {
                    innerCounter2++;
                    Line.push(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos - q)}`);
                }
                else
                    break; 
            }
            if(innerCounter1 + innerCounter2 >= inARowToWin -1 )
            {
                Win(FirstPlayerTurn, Line);
                break;  
            }
        }
        if(i == 3)
        {
                var innerCounter1 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos + q)}`) === CheckingPlayer)
                {
                    innerCounter1++;
                    Line.push(`${parseInt(VerticallPos - q)}${parseInt(HorizontalPos + q)}`);
                }
                else
                    break;
            }
            
            var innerCounter2 = 0;
            for(var q = 1; q <= inARowToWin; q++)
            {
                if(UsedElementsMap.get(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos - q)}`) === CheckingPlayer)
                {
                    innerCounter2++;
                    Line.push(`${parseInt(VerticallPos + q)}${parseInt(HorizontalPos - q)}`);
                }
                else
                    break; 
            }
            if(innerCounter1 + innerCounter2 >= inARowToWin -1 )
            {
                Win(FirstPlayerTurn, Line);
                break;  
            }
        }
    }
}

    function Win(FirstPlayerTurn, line)
    {
        GameIsFinished = true;
        CurrentPlayerText.innerText = `${FirstPlayerTurn ? "First" : "Second"}` + " player WINS!!!";
        PreviousTurnButton.disabled = true;
        line.forEach(element => {
            var elem = document.getElementById(`${element}`);
            elem.firstChild.className += " winingLine";
        });
    }

    function Teko()
    {
        GameIsFinished = true;
        CurrentPlayerText.innerText = "Teko";
        PreviousTurnButton.disabled = true;
    }