$(document).ready(function() {


//navigation bar 
let navWidth = $("nav").width();
$("nav").css("left", `-${navWidth}px`);
$("nav").css("display", 'block');



$("#navOpen").click(function() {

    if ($("#navOpen").css("left") == "10px") {
    $("#navOpen").animate({left: `${10+navWidth}px`}, 1000);
    $("nav").animate({left: `0px`}, 1000);
}
})

$("#closeNav").click(function(){
    $("#navOpen").animate({left: "10px"}, 2000);
    $("nav").animate({left: `-${navWidth}px`}, 2000);
}
)
//site navigation 

$(".item a").click( function() {
let linkSrc = $(this).attr("href");
let sectionOffset = $(`${linkSrc}`).offset().top;
$("html, body").animate({scrollTop: sectionOffset}, 1000);
})


//accordion list 
$(".singer").slideUp(500);
$(".singers h4").click(function() {

    if ($(this).next().css("display") == "none") {
        $(this).siblings("div").slideUp(500);
        $(this).next().slideDown(500);
        
    }
    else {
        $(this).next().slideUp(500);
    }}
 )

//countdown
function countDown() {

var currentDate = new Date();
//event date is the new year

var eventDate = new Date(2020, 11, 31);
var timeDifference = eventDate.getTime() - currentDate.getTime();

//values with float

let diffInDays = timeDifference/1000/60/60/24;
let hoursDiff = (diffInDays*24) % 24; 
let minDiff = (hoursDiff *60)  % 60;  
let secDiff = (minDiff *60)  % 60; 

//echoing values as integers

$("#days h4").text(`Days: ${parseInt(diffInDays)}`);
$("#hours h4").text(`Hours: ${parseInt(hoursDiff)}`);
$("#minutes h4").text(`Minutes: ${parseInt(minDiff)}`);
$("#seconds h4").text(`Seconds: ${parseInt(secDiff)}`);

if (timeDifference <= 0) {
    clearInterval(interval);
    $(".counters").html(`<h2 class="p-5 mt-3 mb-3">Happy New Year!</h2>`);
}
}
var interval = setInterval(countDown, 1000);


//Message chars count

$('textarea').keyup(function() {
let textValue = $('textarea').val();
let remainder = 100 - textValue.length;
if (textValue.length <= 100) {

 $('#count').text(remainder);

} else  {
    $('#count').text("You have exceeded the");

}

})
});