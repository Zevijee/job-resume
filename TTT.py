import json

def lambda_handler(event, context):
    board = event.get('board')
    
    # Debug: Print the received board
    print("Received board:", board)
    
    if not board or len(board) != 3 or any(len(row) != 3 for row in board):
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Invalid board configuration'})
        }
    
    def check_winner(board):
        for i in range(3):
            if board[i][0] == board[i][1] == board[i][2] and board[i][0] is not None:
                return board[i][0]
            if board[0][i] == board[1][i] == board[2][i] and board[0][i] is not None:
                return board[0][i]
        if board[0][0] == board[1][1] == board[2][2] and board[0][0] is not None:
            return board[0][0]
        if board[0][2] == board[1][1] == board[2][0] and board[0][2] is not None:
            return board[0][2]
        return None
    
    def is_full(board):
        return all(all(cell is not None for cell in row) for row in board)
    
    def minimax(board, depth, is_maximizing, alpha, beta):
        winner = check_winner(board)
        if winner == 'O':
            return 1
        if winner == 'X':
            return -1
        if is_full(board):
            return 0
        
        if is_maximizing:
            max_eval = -float('inf')
            for i in range(3):
                for j in range(3):
                    if board[i][j] is None:
                        board[i][j] = 'O'
                        eval = minimax(board, depth + 1, False, alpha, beta)
                        board[i][j] = None
                        max_eval = max(eval, max_eval)
                        alpha = max(alpha, eval)
                        if beta <= alpha:
                            break
            return max_eval
        else:
            min_eval = float('inf')
            for i in range(3):
                for j in range(3):
                    if board[i][j] is None:
                        board[i][j] = 'X'
                        eval = minimax(board, depth + 1, True, alpha, beta)
                        board[i][j] = None
                        min_eval = min(eval, min_eval)
                        beta = min(beta, eval)
                        if beta <= alpha:
                            break
            return min_eval
    
    def next_move(board):
        # If it's the first move for 'O' and 'X' has taken the center, choose a corner
        if board[1][1] == 'X' and sum(cell is None for row in board for cell in row) == 8:
            return (0, 0)  # Choosing the top-left corner
        
        best_score = -float('inf')
        move = None
        for i in range(3):
            for j in range(3):
                if board[i][j] is None:
                    board[i][j] = 'O'
                    score = minimax(board, 0, False, -float('inf'), float('inf'))
                    board[i][j] = None
                    print(f"Evaluating move ({i}, {j}): score = {score}")  # Debug
                    if score > best_score:
                        best_score = score
                        move = (i, j)
        return move
    
    winner = check_winner(board)
    if winner:
        return {
            'statusCode': 200,
            'body': json.dumps({
                'next_move': None,
                'game_over': True,
                'winner': winner
            })
        }
    
    if is_full(board):
        return {
            'statusCode': 200,
            'body': json.dumps({
                'next_move': None,
                'game_over': True,
                'winner': 'Draw'
            })
        }
    
    move = next_move(board)
    
    # Debug: Print the next move
    print("Next move:", move)
    
    if move:
        return {
            'statusCode': 200,
            'body': json.dumps({
                'next_move': move,
                'game_over': False,
                'winner': None
            })
        }
    
    return {
        'statusCode': 400,
        'body': json.dumps({
            'message': 'Invalid board state'
        })
    }
