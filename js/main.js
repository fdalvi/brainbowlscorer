$( document ).ready(function() {
	// Determine the current Semester and Year
	var currentDate = new Date();

	if(currentDate.getMonth() < 6)
		$("h2").html("Spring " + currentDate.getFullYear());
	else
		$("h2").html("Fall " + currentDate.getFullYear());

	$(".increaseScore").click(function() {
		var currentScore = parseInt($(this).parent().children(".score")[0].innerHTML);
		$(this).parent().children(".score")[0].innerHTML = (currentScore+1) +  '' ;
	});

	$(".decreaseScore").click(function() {
		var currentScore = parseInt($(this).parent().children(".score")[0].innerHTML);
		$(this).parent().children(".score")[0].innerHTML = (currentScore-1) +  '' ;
	});
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

function toggleEditMode()
{
	console.log($(".teamname").attr('contentEditable') );
	if($(".teamname").attr('contentEditable') == undefined || $(".teamname").attr('contentEditable') == 'false')
	{
		$(".teamname").attr('contentEditable','true');
		$(".teamname").addClass('shake');
		$(".teamname").addClass('bordered');
	}
	else
	{
		$(".teamname").attr('contentEditable','false');
		$(".teamname").removeClass('shake');
		$(".teamname").removeClass('bordered');
	}
}

function revealSettings()
{
	$('#settings-dialog').reveal({
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
