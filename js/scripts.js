function getUser() {
  var user = "";
  while (user !== "X" && user !== "O") {
    user = prompt("Do you want to be X or O?").toUpperCase();
   }
  return user;
}

function buildSpace() {
  var spaceTemplate = "<div>_</div>";
  return spaceTemplate;
}

function displaySpace(thing) {
  $(".board").html(thing);
}

$(document).ready(function() {
  var userType = getUser();
  alert("you chose " + userType + ", great job");

  displaySpace(buildSpace());
});
