// JavaScript
$(document).ready(function() {
    // Make the header sticky
    var header = $("header");
    var headerOffset = header.offset().top;
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > headerOffset) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  });
  // JavaScript
$(document).ready(function() {
    // Make the header sticky
    var header = $("header");
    var headerOffset = header.offset().top;
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > headerOffset) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  
    // Make the About section visible
    $(".about").hide();
  
    $("a[href='/about']").click(function() {
      $(".about").slideDown(300);
      return false;
    });
  
    $("a[href='/learn-more']").click(function() {
      $(".about").slideUp(300);
      return false;
    });
  });
  // JavaScript

  
  // JavaScript
$(document).ready(function() {
    // Make the Personalized Workout Plans section visible
    $("#personalized-workout-plans").hide();
  
    $("a[href='/personalized-workout-plans']").click(function() {
      $("#personalized-workout-plans").slideDown(300);
      return false;
    });
  });
  const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("keyup", function(event) {
  const searchTerm = event.target.value;

  const tableBody = document.querySelector("#table-body");
  const tableRows = tableBody.querySelectorAll("tr");

  tableRows.forEach((tableRow) => {
    const workoutPlanName = tableRow.querySelector("td:first-child").textContent;

    if (workoutPlanName.includes(searchTerm)) {
      tableRow.style.display = "block";
    } else {
      tableRow.style.display = "none";
    }
  });
});
// JavaScript
$(document).ready(function() {
    // Make the Exercise Library section visible
    $("#exercise-library").hide();
  
    $("a[href='/exercise-library']").click(function() {
      $("#exercise-library").slideDown(300);
      return false;
    });
  });
  // JavaScript
$(document).ready(function() {
    // Make the Workout Tracking section visible
    $("#workout-tracking").hide();
  
    $("a[href='/workout-tracking']").click(function() {
      $("#workout-tracking").slideDown(300);
      return false;
    });
  
    // Load the workout tracking data from the database
    $.ajax({
      url: "/workout-tracking/data",
      method: "GET",
      success: function(data) {
        // Populate the workout tracking table with the data
        data.forEach(function(workout) {
          const row = $("<tr></tr>");
  
          row.append($("<td>" + workout.date + "</td>"));
          row.append($("<td>" + workout.workout_plan + "</td>"));
          row.append($("<td>" + workout.duration + "</td>"));
          row.append($("<td>" + workout.notes + "</td>"));
  
          $("#workout-tracking-table-body").append(row);
        });
      }
    });
  });
  // JavaScript
$(document).ready(function() {
    // Make the Nutrition Advice section visible
    $("#nutrition-advice").hide();
  
    $("a[href='/nutrition-advice']").click(function() {
      $("#nutrition-advice").slideDown(300);
      return false;
    });
  });
  