$( document ).ready(function() {
	// Determine the current Semester and Year
	var currentDate = new Date();

	if(currentDate.getMonth() < 6)
		$("h2").html("Spring " + currentDate.getFullYear());
	else
		$("h2").html("Fall " + currentDate.getFullYear());
});

function revealAbout()
{
	$('#about').reveal({
     animation: 'fadeAndPop',                   //fade, fadeAndPop, none
     animationspeed: 300,                       //how fast animtions are
     closeonbackgroundclick: true,              //if you click background will modal close?
     dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
 });
}

function showResources() {
	$("#description").slideUp();
	$("#resources").slideDown();

}

function showDescription() {
	$("#resources").slideUp();
	$("#description").slideDown();
}