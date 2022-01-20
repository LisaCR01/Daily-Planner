//displays the current date
var now =moment().format('dddd, MMMM Do');
$("#currentDay").text(now);
var currentHour=moment().format("HH")

const detailTextEl = $('#detail_text');
const detailFormEl = $('#detail_form');
//Details written by user into each time block. 
var myActivity=[];

// Every time user presses submit handleSubmit function occurs
const handleSubmit = function (event){
    event.preventDefault();
    // myActivity array
    myActivity[9] = $("#9").val();
    myActivity[10] = $("#10").val();
    myActivity[11] = $("#11").val();
    myActivity[12] = $("#9").val();
    myActivity[13] = $("#11").val();
    myActivity[14] = $("#12").val();
    myActivity[15] = $("#13").val();
    myActivity[16] = $("#14").val();
    myActivity[17] = $("#15").val();
    // Stringify and set key in localStorage to myActivity array
    localStorage.setItem("myActivity", JSON.stringify(myActivity));
}

// Computer calls will run this function when the page loads. 
function init() {
    // Computer gets stored results from localStorage
    var storedActivity = JSON.parse(localStorage.getItem("myActivity"));
    // If myActivity were retrieved from localStorage, update the myActivity array to it
    if (storedActivity !== '') {
        myActivity = storedActivity;
        $('textarea[name="t09"]').val(myActivity[9]);
        $('textarea[name="t10"]').val(myActivity[10]);
        $('textarea[name="t11"]').val(myActivity[11]);
        $('textarea[name="t12"]').val(myActivity[12]);
        $('textarea[name="t13"]').val(myActivity[13]);
        $('textarea[name="t14"]').val(myActivity[14]);
        $('textarea[name="t15"]').val(myActivity[15]);
        $('textarea[name="t16"]').val(myActivity[16]);
        $('textarea[name="t17"]').val(myActivity[17]);
      } 
    }

    $(document).ready(function(){
    $('.description').each(function(){
        var id = $(this).attr('id')
        var i = parseInt(id.substring(1));
        console.log(i)
        console.log(i-currentHour);
        if(i<currentHour){$(this).addClass("past")}
        if(i==currentHour){$(this).addClass("present")}
        if(i>currentHour){$(this).addClass("future")}
              });
          });

    detailFormEl.on("submit",handleSubmit);

    init()


  


