$(document).ready(function() {
    $("#signup-button").click(function() {
      $("#signup-modal").modal("show");
    });
  });
  // JavaScript
function redirectToHomePage() {
    window.location.href = "/index.html";
    return false;
  }
  