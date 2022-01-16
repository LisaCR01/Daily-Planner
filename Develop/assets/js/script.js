var now =moment().format('dddd, MMMM Do');
$("#currentDay").text(now);

const detailTextEl = $('#detail_text');
const detailFormEl = $('#detail_form');

const handleSubmit = function (event){
    event.preventDefault();
    const detailItem = detailTextEl.val()
    if(detailItem !==''){
        const storedDetails =$('<textarea>').text(detailItem)
    }
}
detailFormEl.on("submit",handleSubmit)

$(".saveBtn").click(
    function() {
       // must stringify the object before save
       localStorage.setItem('storedDetails', JSON.stringify(storedDetails));
    }
);




