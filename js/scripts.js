function getUser() {
  var user = "";
  while (user !== "X" && user !== "O") {
    user = prompt("Do you want to be X or O?").toUpperCase();
   }
  return user;
}

function buildSpace(coordinate) {
  var spaceTemplate = "<div id='space" + coordinate + "'>_</div>";
  return spaceTemplate;
}

// function displaySpace(thing) {
//   $(".board").html(thing);
// }

function Player(name, userType, iWon, winTotal) {
  this.name = name;
  this.userType = userType;
  this.iWon = iWon;
  this.winTotal = winTotal;
}

Player.prototype.getName = function(name) {
  if (this.name === "" || this.name === null ) {
    var name = prompt("What is your name?");
  }
  this.name = name;
  return name;
}

// Player prototypes:
// Did I win?
// changeUserType -- do they want to be X or O this time?
// changeName
// am I Human?
// get my name

function Space(spaceNum, marker) {
  this.spaceNum = spaceNum;
  this.marker = marker;
}

Space.prototype.updateMarker = function(marker) {
  this.marker = marker;
  return this.marker;
}


function Board(spaces) {
  this.spaces = spaces; //array of spaces
}

Board.prototype.buildBoard = function() {
  for (var i = 1; i < 10; i++) {
    // this.spaces.push(buildSpace(i));
    var space = new Space(i, "_");
    this.spaces.push(space);
  }
  return this.spaces;
}




// function placeInSpace(thing, coordinate) {
//   $("#space" + coordinate).text(thing);
// }

function displayBoard(board) {
  var tempBoardString = "<div class='experiment'>";
  for (var i = 0; i < board.spaces.length; i++) {
    tempBoardString += "<div id='space" + i + "'>" + board.spaces[i].marker + "</div>";
    if (i === 2 || i === 5) {
      tempBoardString += "</div><div class='experiment'>";
    }
  }
  tempBoardString += "</div>"
  $(".board").html(tempBoardString);
}

$(document).ready(function() {
  var userType = getUser();
  console.log("user type = " + userType);

  //displayßSpace(buildSpace(0));
  // placeInSpace(userType, 0);
  var boardArray = [];
  var board = new Board(boardArray);
  board.buildBoard();
  displayBoard(board);
  // console.log("board space 1 = " + board.spaces[1]);

  space1 = new Space(1, "_");
  console.log("Space starts as:" + space1.marker);
  space1.updateMarker(userType);
  console.log("Space is now:" + space1.marker);

  var x = prompt("Which space to put an X in?");
  board.spaces[x].updateMarker(userType);
  displayBoard(board);
  // Input: X (or O), win state, num games won
  // player1 = new Player(name, userType, iWon, winTotal);
  var player1 = new Player("", userType, false, 0);
//  var player2 = new Player("", "", false, 0);
  player1.getName();
  console.log("Player1's name is: " + player1.name);
});
