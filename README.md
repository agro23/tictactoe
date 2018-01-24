## Specs

1. Take an input X or O
Input: X or O
Output: You are player 1 or 2, other player is player opposite

2. Program constructs single square board on screen
Input: Start Program
Output: Board graphic with one square

3. Program puts an X or O on the board
Input: X or O
Output: X or O on the board somewhere

4. Program constructs tic tac toe board on screen
Input: Start Program
Output: Board graphic

5. Program establishes space object
Input coordinate/space#, marker
Output: Accessible object in the spaces array in Board object

6. Program puts an X or O on the board
Input: X or O
Output: X or O on the board randomly

7. Program establishes player object
Input: X (or O), win state, num games won
Output: Accessible object

8. Program establishes board object
Input: array of space objects, fills spaces by some method
Output: Accessible object

9. Program/board appropriately displays Xs & Os where players click on board <--
Input: X or O player clicks on space
Output: X or O displays on screen in right space

9. Program checks for win condition (3 X or 3 O in a row) horizontally or vertically
Input: 3 X or O in a row horizontally or vertically on board
Output: "You Win!"

10. Program checks for win condition (3 X or 3 O in a row) diagonally
Input: 3 X or O in a row diagonally on board
Output: "You Win!"


-----
Other stuff

Note that this project is extra challenging; only begin with this if both you and your partner are fully on board. Or, consider tackling Tic Tac Toe if you finish Pig Dice with time to spare.

Create a Tic Tac Toe game for two players. Don't forget to write plain English specifications with example inputs and outputs before you begin coding!

Consider making four constructors/prototypes: Player, Space, Board, and Game. The objects created from these could include some of the following features:

A player should know whether it's an X or an O and be able to report that (e.g. player.mark() could return "X" or "O").
A space should know its coordinates and be able to be marked by a player (e.g., space.mark(player_X)).
A space should be able to report who it's marked by (e.g. space.markedby() could return "X" or "O", or it could return a player object - player1 or player2).
A board should create 9 spaces with the proper coordinates, and tell if there are three in a row marked by the same player. A board should be able to return a space by its coordinates (e.g., board.find(1, 2)).
A game should create 2 players and a board, be able to move to the next turn, know which player's turn it is, and be able to tell if the game is over or not.

extra
Give users the option to play the computer at one of two levels: easy or hard.

Easy: Computer randomly selects squares.
Hard: Computer uses strategy (see strategy section in Tic Tac Toe).
