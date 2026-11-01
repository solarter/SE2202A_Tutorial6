let nextPlayer = 'X'; 
document.getElementById("next-lbl").innerText=nextPlayer;

createGameBoard()

function createGameBoard()
{
    let cells = document.querySelectorAll('td');
    for (let x = 0; x<cells.length;x++)
    {
        cells[x].innerHTML = '<button>[]</button>';
    }

    let btns = document.querySelectorAll('button');
    for (let i=0; i<btns.length; i++)
    {
        btns[i].addEventListener('click',takeCell);
    }
}

function takeCell(event)
{
    let btn = event.target;
    btn.innerText = '['+nextPlayer+']';

    btn.disabled = true;
    nextPlayer= (nextPlayer ==='X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;


    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
 
}

function isGameOver()
{
    let btns = document.querySelectorAll('button');
    for (let x = 0; x<btns.length;x++)
    {
        if (btns[x].disabled==false)
        {
            return false;
        }
    }
    return true;
}
