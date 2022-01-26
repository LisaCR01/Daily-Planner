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
    myActivity[12] = $("#12").val();
    myActivity[13] = $("#13").val();
    myActivity[14] = $("#14").val();
    myActivity[15] = $("#15").val();
    myActivity[16] = $("#16").val();
    myActivity[17] = $("#17").val();
    // Stringify and set key in localStorage to myActivity array
    localStorage.setItem("myActivity", JSON.stringify(myActivity));
}

// Computer calls will run this function when the page loads. 
function init() {
    // Computer gets stored results from localStorage.
    var storedActivity = JSON.parse(localStorage.getItem("myActivity"));
    // If myActivity were retrieved from localStorage, update the myActivity array to it.
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

    // function is available to the computer after the document is loaded. 
    $(document).ready(function(){
      // computer accesses all of the 'description' classes
    $('.description').each(function(){
      // computer extracts the id associated with the 'description' for each 'description'
        var timeBlock = $(this).attr('id')
        // computer gets rid of the first character within timeBlock and then turns it into an integer.
        var i = parseInt(timeBlock.substring(1));
        // computer compares i to the current hour of the day to whether it is smaller,equal to or larger.
        // if i is smaller it is in the past
        // if i is equal to it is in the present
        // if i is greater than it is in the future
        // the computer then colour co-ordinates the timeblocks to whether they are in the: past, present or future by adding classes.
        if(i<currentHour){$(this).addClass("past")}
        if(i==currentHour){$(this).addClass("present")}
        if(i>currentHour){$(this).addClass("future")}
              });
          });

    // when a user clicks any of the submit buttons it saves the information it updates the data in local storage.
    detailFormEl.on("submit",handleSubmit);

    // computer runs init as the page loads and retrieves data from local storage.
    init()


  


