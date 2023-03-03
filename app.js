$(document).ready(function () {
  // Waits until the page is ready

  // hide the gameover div at the beginning
  $(".gameover").hide();

  // Creation of 9 div (holes with img of holes and dinos within)
  for (let i = 0; i < 9; i++) {
    $grid = $(".grid").append(
      '<div class="hole"><img class="imgHole" id="imgHole-' +
        i +
        '" src="assets/hole.png"><img class="imgDino" id="imgDino-' +
        i +
        '" src="assets/dino.png"></div>'
    );
  }

  // Creating a boolean to set when if game is running or not
  let isGameRunning = false;

  // Score counter to zero
  let count = 0;

  // Show one dino while hiding corresponding hole
  function showDinos() {
    if (isGameRunning === true) {
      j = Math.floor(Math.random() * 9);
      $("#imgDino-" + j).show("slow");
      $("#imgHole-" + j).hide("slow");
      setTimeout(function () {
        $("#imgDino-" + j).hide();
      }, 1000);
      setTimeout(function () {
        $("#imgHole-" + j).show();
      }, 1000);

      // Counting points when click on dinos
      $("#imgDino-" + j).click(function () {
        console.log(count);
        count++;
        $("#score").html(count);
      });
    }
  }
  // Creating a boolean to set when if game is running or not
  let isTimerRunning = false;

  // Timer to zero
  let timer = 30;

  // Timer function : from 30 to zero
  function timerOn() {
    if (isTimerRunning === true) {
      timer--;
      $("#timer").html(timer);
    }
  }

  // Start the game = call showDinos function + call timerOn function + call gameOver function on a timeout
  $("#startBtn").click(function () {
    console.log("start");
    isGameRunning = true;
    isTimerRunning = true;
    setInterval(showDinos, 3000);
    setInterval(timerOn, 1000);
    setTimeout(gameOver, 30000);
  });

  // Gameover function : hiding grid and showing Gameover message
  function gameOver() {
    isGameRunning = false;
    isTimerRunning = false;
    $(".grid").hide();
    $(".gameover").show();
  }

  // Play again : refreshing page
  $("#playAgainBtn").click(function () {
    console.log("playagain");
    $(".grid").show();
    $(".gameover").hide();
    $("#score").html(0);
    $("#timer").html(30);
  });
});
