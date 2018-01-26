function getUser() {
  var user = "";
  while (user !== "X" && user !== "O") {
    user = prompt("Do you want to be X or O?").toUpperCase();
   }
   user = switchUser(user); // swithc user back to the actual choice for now
  return user;
}

function buildSpace(coordinate) {
  var spaceTemplate = "<div id='space" + coordinate + "'>_</div>";
  return spaceTemplate;
}

// function displaySpace(thing) {
//   $(".board").html(thing);
// }

function Player(name, userType, iWon, winTotal, isHuman) {
  this.name = name;
  this.userType = userType;
  this.iWon = iWon;
  this.winTotal = winTotal;
  this.isHuman = isHuman;
}

Player.prototype.setName = function(name) {
  // if (this.name === "" || this.name === null ) {
  //   var name = prompt("What is your name?");
  // }
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

Space.prototype.checkEmpty = function() {
  if (this.marker === "_") {
    return true;
  } else {
    return false;
  }
}


function Board(spaces) {
  this.spaces = spaces; //array of spaces
}

Board.prototype.buildBoard = function() {
  for (var i = 0; i < 9; i++) {
    // this.spaces.push(buildSpace(i));
    var space = new Space(i, "_");
    this.spaces.push(space);
  }
  return this.spaces;
}

function putMarkerInDiv(board, userType, divNum){
  // console.log("Called me!");
  board.spaces[divNum].updateMarker(userType);
  switchGlobal = 2; // should be set elsewhere!

  // for (var n=0; n <9; n++){
  //   console.log(n +" = " + board.spaces[n].spaceNum);
  // }
  // displayBoard(board);
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
  return board; // just to see
}

function updateDiv(mySpace, myUserType) {
  var newSpace = "#space"+mySpace;
  // console.log("Parent = " + newSpace.parent());
  $(newSpace).html(myUserType);
}

function switchUser(myUserType) {
  console.log("i'm in the function" + myUserType);
  if (myUserType === "X") {
    myUserType = "O";
    $("#turn-update").html("<h2>It's O's turn</h2>");
    return myUserType;
  }
  if (myUserType === "O") {
    myUserType = "X";
    $("#turn-update").html("<h2>It's X's turn</h2>");
    return myUserType;
  }
}


function checkWinner(myBoard) {
//  console.log(myBoard.spaces[0].marker);
  if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[3].marker === "X") && (myBoard.spaces[6].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
    return true;
  } else if ((myBoard.spaces[1].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[7].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "X") && (myBoard.spaces[5].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[1].marker === "X") && (myBoard.spaces[2].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[3].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[5].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[6].marker === "X") && (myBoard.spaces[7].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[8].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "X") && (myBoard.spaces[4].marker === "X") && (myBoard.spaces[6].marker === "X")) {
    $("#turn-update").html("<h2>X is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[3].marker === "O") && (myBoard.spaces[6].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[1].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[7].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "O") && (myBoard.spaces[5].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[1].marker === "O") && (myBoard.spaces[2].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[3].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[5].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[6].marker === "O") && (myBoard.spaces[7].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[0].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[8].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ((myBoard.spaces[2].marker === "O") && (myBoard.spaces[4].marker === "O") && (myBoard.spaces[6].marker === "O")) {
    $("#turn-update").html("<h2>O is the winner!</h2>");
  } else if ( (myBoard.spaces[0].marker != "_") && (myBoard.spaces[1].marker != "_") && (myBoard.spaces[2].marker != "_") && (myBoard.spaces[3].marker != "_") && (myBoard.spaces[4].marker != "_") && (myBoard.spaces[5].marker != "_") && (myBoard.spaces[6].marker != "_") && (myBoard.spaces[7].marker != "_") && (myBoard.spaces[8].marker != "_") ) {
    $("#turn-update").html("<h2>It's a draw!</h2>");
  }
}

$(document).ready(function() {
  // var userType = getUser();

  userType="X"; // first player is auto X
  var turn = 1;
  console.log("user type = " + userType);
  var player1 = new Player("", userType, false, 0, true);
  var player2 = new Player("", "O", false, 0, true);
  var clickEnabled = false;
  var switchGlobal = 1;
  //displayßSpace(buildSpace(0));
  // placeInSpace(userType, 0);
  var boardArray = [];
  var board = new Board(boardArray);
  board.buildBoard();
  displayBoard(board);
  var q = 1;
  // console.log("board space 1 = " + board.spaces[1]);

  // space1 = new Space(1, "_");
  // console.log("Space starts as:" + space1.marker);
  // space1.updateMarker(userType);
  // console.log("Space is now:" + space1.marker);

  // var x = prompt("Which space to put a marker in?");
  // board.spaces[x].updateMarker(userType);
  // displayBoard(board);
  // Input: X (or O), win state, num games won
  // player1 = new Player(name, userType, iWon, winTotal);
  // player1.getName();
  // if (userType === "X") {
  //   userType = "O";
  // } else {
  //   userType = "X";
  // }
  // var player2 = new Player("", userType, false, 0);

  // player2.getName()

  // for (var i = 0; i < 9; i++) {
  //   console.log("Space " + i + "= " + board.spaces[i].spaceNum);
  // }

//   $(function() {   // this was approach 2
//     $("#start-button").click(function(){
//       var winner = false;
//       var win =0;
//       var switchGlobal = false;
// var q = 1;
//       if (player1.name != null && player1.name != "" && player2.name != null && player2.name != "") {
//         do {
//           if (turn === 1) {
//             if (player1.name != "COMPUTER") {
//               console.log("it's human player 1's turn");
//               clickEnabled = true;
//               // console.log("click is enabled!");
//               console.log("SG: " + switchGlobal);
//               // for (var i= 0; i <5000; i++){
//               //   if (switchGlobal === true) {console.log("It was set!");}
//               // }
//               while(switchGlobal === false) {
//                 console.log("It was set!");
//                 // $(".experiment div").click(function() { switchGlobal = true; });
//                 q = q + 1;
//                 if ( q > 5 ) {switchGlobal = true;}
//               }
//               console.log("It was un-set");
//
//               // $(".experiment div").trigger("click"); // ***************
//               //clicking
//             } else {
//               console.log("it's computer player 1's turn");
//               //random logic
//             }
//             turn = 2;
//           } else {
//             if (player2.name != "COMPUTER") {
//               console.log("it's human player 2's turn");
//               clickEnabled = true;
//               console.log("click is enabled!");
//               //clicking
//             } else {
//               console.log("it's computer player 2's turn");
//               //random logic
//             }
//             turn = 1;
//             win = win + 1;
//             winner = true; //test loop condition
//           }
//         // } while (!winner);
//       } while (win < 2);
//
//         //process winner
//       }
//     });
// });
//
// $(function() {
//   $(".experiment div").click(function(){
//     var divNum = 0;
//     if (clickEnabled){
//       divNum = this.id[this.id.length-1];
//       putMarkerInDiv(board, userType, divNum);
//       updateDiv(divNum, userType);
//       switchGlobal = true;
//       console.log("Switch on click.");
//       userType = switchUser(userType);
//       if (checkWinner(board)) { clickEnabled = false; }
//       // clickEnabled = false;
//       // console.log("click is disabled!");
//     } // user can click
//   });
// });
// var turn = 1;
// //Test copy of version 1  VERSION 3
//   $(function() {
//     $(".experiment div").click(function(){
//       var divNum = 0;
//
//       // if ( this).attr
//       // //  console.log("The div was clicked!");
//       //  var divName = this.id[this.id.length];
//
//       if (player1.name != null && player1.name != "" && player2.name != null && player2.name != "") {
//         //assume X goes first, and userType is already X
//         //player1 is human and player 2 is computer
//         if (turn === 1) {
//             divNum = this.id[this.id.length-1];
//             console.log("turn is " + turn);
//             turn = 2 ;
//           } else {
//             var test = 1;
//             //while (test === 1) {
//                 var x = Math.floor(Math.random() * 8);
//                 console.log("our random number is " + x);
//                 console.log("the board space object selected is " + board.spaces[x].spaceNum);
//                 if (board.spaces[x].checkEmpty()) {
//                   board.spaces[x].updateMarker(userType);
//                   divNum = x;
//                   test = 0;
//                   // $("#space" + divNum).trigger("click");
//                   console.log("the random number assigned to divNum is " + divNum);
//                 }
//               //}
//             console.log("turn is " + turn);
//             turn = 1;
//           }
          //console.log("this is turn 1 and player 1 name is " + player1.name + " player 2 name is " + player2.name);
        //
        // } else {
        //   if (player2.name != "COMPUTER") {
        //     divNum = this.id[this.id.length-1];
        //   } else {
        //     do {
        //       var x = Math.floor(Math.random() * 8);
        //       console.log(x);
        //       if (board.spaces[x].checkEmpty()) {
        //         board.spaces[x].updateMarker(userType);
        //         divNum = x;
        //         $("#space" + divNum).trigger("click");
        //         break;
        //       }
        //     } while (board.spaces[x].checkEmpty());
        //   }
        //   turn = 1;
        //   console.log("this is turn 2 and player 1 name is " + player1.name + " and player 2 name is " + player2.name);
        // }

//       putMarkerInDiv(board, userType, divNum);
//       updateDiv(divNum, userType);
//
//       userType = switchUser(userType); // don't switch user at the beginning.
//       console.log("user is now " + userType);
//
//         if (checkWinner(board)) {
//           console.log("process winner and offer new game. Also disable/unbind all clicks first.")
//         };
//         // $(this).attr("disabled", "disabled");
//         $(this).unbind("click");   // this unbinds ... how to reset
//         // console.log("Board is : " + board.spaces[divNum].spaceNum);
// }
//
//     });
//   });




  $(function() {   // this was approach 4
    $("#start-button").click(function(){
      var winner = false;
      var win = 0;
      // var switchGlobal = false;
      var turn = 1;

      if (player1.name != null && player1.name != "" && player2.name != null && player2.name != "") {
        while ( winner < 10) {
        if (turn === 1) {
            console.log ("This was player 1s turn");
            while (switchGlobal != 2) {
              // while (q < 20000) {
          console.log("Switch global: " + switchGlobal);
              q = q + 1;
              if (q > 10000) { break; }
            }
            console.log("turn is " + turn);
            turn = 2 ;
          } else {
            var test = 1;

            //while (test === 1) {
                var x = Math.floor(Math.random() * 8);
                console.log("our random number is " + x);
                console.log("the board space object selected is " + board.spaces[x].spaceNum);
                if (board.spaces[x].checkEmpty()) {
                  board.spaces[x].updateMarker(userType);
                  divNum = x;
                  test = 0;
                  $("#space" + divNum).trigger("click");
                  console.log("space num " + "space"+divNum);
                  console.log("the random number assigned to divNum is " + divNum);
                }
              //}
            console.log("turn is " + turn);
            turn = 1;
          }
          winner = winner + 1;
        } // end while
        putMarkerInDiv(board, userType, divNum);
        updateDiv(divNum, userType);
        userType = switchUser(userType); // don't switch user at the beginning.
        console.log("user is now " + userType);
        // $(this).unbind("click");   // this unbinds ... how to reset
        console.log(board);
        displayBoard(board);
      }
    });
  });

  $(function() {
    $(".experiment div").click(function(){
      var divNum = 0;
      if (clickEnabled){
        divNum = this.id[this.id.length-1];
        putMarkerInDiv(board, userType, divNum);
        updateDiv(divNum, userType);
        switchGlobal = 2;
        alert("Switch Global is: " + switchGlobal);
        console.log("Switch on click.");
        userType = switchUser(userType);
        // if (checkWinner(board)) { clickEnabled = false; }
        // clickEnabled = false;
        // console.log("click is disabled!");
      } // user can click
    });
  });




  //Copy of version 1
  //   $(function() {
  //     $(".experiment div").click(function(){
  //       var divNum = 0;
  //       // if ( this).attr
  //       // //  console.log("The div was clicked!");
  //       //  var divName = this.id[this.id.length];
  //
  // if (player1.name != null && player1.name != "" && player2.name != null && player2.name != "") {
  //
  //       // if  ( (player1.isHuman === true) || (player2.isHuman === true) ) {   // need to know which player
  //       if ((player1.name != "COMPUTER")  &&  (player2.name != "COMPUTER")) {
  //         divNum = this.id[this.id.length-1];
  //         // both are human who cares who uses the mouse
  //       } else if ((player1.name === "COMPUTER")  &&  (player2.name != "COMPUTER")) {
  //
  //         do {
  //           var x = Math.floor(Math.random() * 8);
  //           if (board.spaces[x].checkEmpty()) {
  //             board.spaces[x].updateMarker(userType);
  //             divNum = x;
  //           }
  //         } while (board.spaces[x].checkEmpty());
  //
  //         // dumb computer player1 gets a random number until that space has a "_" then put userType in space.
  //         // else smart computer 1 picks from optimum move list
  //         // RETURNING: correct divNum
  //         console.log("This would be the computer player1's turn!");
  //       //  divNum = this.id[this.id.length-1]; some random possible div
  //
  //       } else if ((player1.name != "COMPUTER")  &&  (player2.name === "COMPUTER")) {
  //         // computer as 2 takes a turn.
  //         console.log("This would be the computer player2's turn!");
  //         do {
  //           var x = Math.floor(Math.random() * 8);
  //           console.log(x);
  //           if (board.spaces[x].checkEmpty()) {
  //             board.spaces[x].updateMarker(userType);
  //             divNum = x;
  //           //  $("#space" + divNum).trigger("click");
  //           }
  //         } while (board.spaces[x].checkEmpty());
  //         // divNum = this.id[this.id.length-1]; some random possible div
  //       } else {
  //         // whichever computer takes a turn.
  //       }
  //
  //       putMarkerInDiv(board, userType, divNum);
  //       updateDiv(divNum, userType);
  //       userType = switchUser(userType); // don't switch user at the beginning.
  //       console.log("user is now " + userType);
  //
  //         if (checkWinner(board)) {
  //           console.log("process winner and offer new game. Also disable/unbind all clicks first.")
  //         };
  //         // $(this).attr("disabled", "disabled");
  //         $(this).unbind("click");   // this unbinds ... how to reset
  //         // console.log("Board is : " + board.spaces[divNum].spaceNum);
  // }
  //
  //     });
  //   });



  $(function() {
    $("#player1-name").submit(function(event){
      event.preventDefault();
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the SUBMIT button for player 1.");
      $("#player1-name").hide();
      console.log("Got player 1 submit");
      var htmlString = "<div class='col-md-10'><h2>Player 1: " + $("#player-1").val() + "</h2></div>";
      player1.setName($("#player-1").val());
      $("#player1").html(htmlString);
      console.log("Player1's name is: " + player1.name + " they chose " + player1.userType);

      $(this).unbind("submit");   // Do we need this?
    });
  });

  $(function() {
    $("#player2-name").submit(function(event){
      event.preventDefault();
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the SUBMIT button for player 2.");
      $("#player1-name").hide();
      console.log("Got player 2 submit");
      var htmlString = "<div class='col-md-10'><h2>Player 2: " + $("#player-2").val() + "</h2></div>";
      player2.setName($("#player-2").val());
      $("#player2").html(htmlString);
      console.log("Player2's name is: " + player2.name + " they have " + player2.userType);

      $(this).unbind("submit");   // Do we need this?
    });
  });

  $(function() {
    $("#p1-human").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the human button for player 1.");
      $(".player1-visible").hide();
      $("#player1-name").show();

      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p2-human").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the human button for player 2.");
      $(".player2-visible").hide();
      $("#player2-name").show();
      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p1-computer").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the computer button for player 1.");

      var htmlString = "<div class='col-md-10'><h2>Player 1: COMPUTER</h2></div>";
      player1.setName("COMPUTER");
      $("#player1").html(htmlString);
      console.log("Player1's name is: " + player1.name + " they chose " + player1.userType);

      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

  $(function() {
    $("#p2-computer").click(function(){
      // var divNum = this.id[this.id.length-1];
      console.log("Clicked the computer button for player 2.");

      var htmlString = "<div class='col-md-10'><h2>Player 2: COMPUTER</h2></div>";
      player2.setName("COMPUTER");
      $("#player2").html(htmlString);
      console.log("Player2's name is: " + player2.name + " they chose " + player2.userType);
      // putMarkerInDiv(board, userType, divNum);
      // updateDiv(divNum, userType);
      // userType = switchUser(userType);
      // console.log("user is now" + userType);
      // checkWinner(board);
      // // $(this).attr("disabled", "disabled");
      $(this).unbind("click");   // this unbinds ... how to reset
      // console.log("Board is : " + board.spaces[divNum].spaceNum);
    });
  });

});
