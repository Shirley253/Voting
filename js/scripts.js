$(document).ready(function() {
  var age = parseInt(prompt("Are you old enough to vote?. What is your age?"));

  if (age >= 18) {
    $('#mayVote').show();
  } else {
    $('#under-18').show();
  }
});
