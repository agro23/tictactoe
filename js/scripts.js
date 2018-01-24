function setUser() {
  var user = prompt("Do you want to be X or O?");
  return user;
}

$(document).ready(function() {
  var userType = setUser();
  alert("you chose " + userType + ", great job");
});
