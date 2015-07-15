$(document).ready(function(){
	for(i=0; i<10; i++){
		$('div#first').after("<br>");
		for(j=0; j<10; j++){
			$('div#first').after("<div></div>");
		}
	}
	$('div div').mouseenter(function(){
		$(this).css("background-color","black");
	});
});