
import { useState } from 'react';
import Square from'./Square';

const  GameBoard = () => {

    const [currentPlayer, setCurrentPlayer] =useState("X");
    const [moves,setMoves] =useState(0);
    const emptyGame = [
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null}
    ];
    const [gameState, setGameState] = useState([
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null},
        {value : null}
        
    ]);

    const executeMove = index => {
        let newGameState = gameState;
        if(newGameState[index].value === null){
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
            let nextPlayer = currentPlayer === "X" ? "0" : "X";
            setCurrentPlayer(nextPlayer);
            let result = checkWinOrDraw();
            if(result !== false){
                alert(`Yay! ${result} Won the match`);
            }
            let moveNumber = moves + 1;
            setMoves(moveNumber);
            if(moveNumber === 9){
                alert("Game is draw");
            }
        }

        //console.table(gameState);
    }
    const checkWinOrDraw = () =>{
        let win = false;
        if(gameState[0].value!==null && gameState[1].value!==null && gameState[2].value!==null && gameState[0].value === gameState[1].value && gameState[1].value===gameState[2].value){
            win= gameState[0].value;
        }else if(gameState[4].value!==null && gameState[5].value!==null && gameState[6].value!==null && gameState[3].value === gameState[4].value && gameState[4].value===gameState[5].value){
           win= gameState[3].value;
       }else if(gameState[6].value!==null && gameState[7].value!==null && gameState[8].value!==null && gameState[6].value === gameState[7].value && gameState[7].value===gameState[8].value){
            win= gameState[6].value;
        }else if(gameState[0].value!==null && gameState[3].value!==null && gameState[6].value!==null && gameState[0].value === gameState[3].value && gameState[3].value===gameState[6].value){
            win= gameState[0].value;
        }else if(gameState[1].value!==null && gameState[4].value!==null && gameState[7].value!==null && gameState[1].value === gameState[4].value && gameState[4].value===gameState[7].value){
            win = gameState[1].value;
        }else if(gameState[2].value!==null && gameState[5].value!==null && gameState[8].value!==null && gameState[2].value === gameState[5].value && gameState[5].value===gameState[8].value){
            win= gameState[2].value;
        }else if(gameState[0].value!==null && gameState[4].value!==null && gameState[8].value!==null && gameState[0].value === gameState[4].value && gameState[4].value===gameState[8].value){
            win= gameState[0].value;
        }else if(gameState[2].value!==null && gameState[4].value!==null && gameState[6].value!==null && gameState[2].value === gameState[4].value && gameState[4].value===gameState[6].value){
            win= gameState[2].value;
        }
        // console.log(win);
        return win;
    }
    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h2>Current Player :{currentPlayer}</h2>
                <button onClick={e => {setGameState(emptyGame);setCurrentPlayer("X");setMoves(0)}}>Restart</button>
            </div>
            
            <div className="bg-white col-md-6 offset-md-3 gameBoard
            shadow-sm row p-4">
                { gameState.map((square, key) => (
                    <Square key={key} index={key} gameState={gameState} executor={executeMove} />
                ))}
            </div>
        </>
    );
}

export default GameBoard;