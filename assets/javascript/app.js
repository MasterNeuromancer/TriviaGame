
// create array for correct answers
var correctAns = ["Neil Armstrong", "Krypton", "5", "Africa", "Football", "James Cameron", "Paris", "Frog", "Socrates", "2019"]

var tickerID;

// prevents the clock from being sped up unnecessarily
var stopWatch = false;
var time = 0;

$(".form-group").on("click", function () {
    console.log("real");
    function start() {

        if (!stopWatch) {
            tickerID = setInterval(count, 1000);
            stopWatch = true;
        }
    }
    
    function count() {
    
        // DONE: increment time by 1, remember we cant use "this" here.
        time++;
      
        // DONE: Get the current time, pass that into the timeConverter function,
        //       and save the result in a variable.
        var converted = timeConverter(time);
        console.log(converted);
      
        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#counter").text(converted);
      }
      function timeConverter(t) {
      
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
})


  