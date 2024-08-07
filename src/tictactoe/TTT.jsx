import React, { useState, useEffect } from 'react';

function TTT() {
  const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [turn, setTurn] = useState('X');
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return
    }

    console.log('Board:', board);

    // check if the board is empty if ya then return
    if (board.every(row => row.every(cell => cell === null))) {
      return;
    }
    // Send the board to the API when it's 'O' turn
      handleSubmit();
  }, [turn]);

  const handleSubmit = async () => {
    const url = 'https://zg6g2j5eq4.execute-api.us-east-1.amazonaws.com/dev/TTT';
    const payload = {
      board: board,
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log('Data:', data);
      const body = JSON.parse(data.body);
      console.log('Response:', body);
      
      const nextMove = body['next_move'];
      const winner = body['winner'];
      const game_over = body['game_over'];

      if (game_over) {
        if (winner === 'Draw') {
          alert('Draw!');
          reset();
          return;
        } else {
          alert(`Winner: ${winner}`);
          reset();
          return;
        }
      }

      if (turn === 'X') {
        return;
      }
      const updatedBoard = [...board];
      updatedBoard[nextMove[0]][nextMove[1]] = 'O';
      setBoard(updatedBoard);
      setTurn('X');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function Box(i, j) {
    return (
      <button className="box" onClick={() => handleClick(i, j)}>
        {board[i][j]}
      </button>
    );
  }

  function handleClick(i, j) {
    if (board[i][j] !== null || turn === 'O') {
      return;
    }
    // Update the board with the next move
    const updatedBoard = [...board];
    updatedBoard[i][j] = turn;
    setBoard(updatedBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  function reset() {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
    setTurn('X');
  }

  return (
    <div>
      <div className="board-row">
        {Box(0, 0)}
        {Box(0, 1)}
        {Box(0, 2)}
      </div>
      <div className="board-row">
        {Box(1, 0)}
        {Box(1, 1)}
        {Box(1, 2)}
      </div>
      <div className="board-row">
        {Box(2, 0)}
        {Box(2, 1)}
        {Box(2, 2)}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default TTT;
