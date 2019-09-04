

// ===========================================
var ui = { 
	texFrame:true, 
	dispBuffer:true,
	dispSquare:true
};
// ===========================================



// ===========================================
$(document).ready(function(){

	$('input[id=fbuf]').prop("checked", ui.texFrame);
	$('input[id=text]').prop("checked", !ui.texFrame);
	$('input[id=ftex]').prop("checked", ui.dispBuffer);
	$('input[id=esquare]').prop("checked", ui.dispSquare);
	
			
	$('input[name=rFrame]').click(function(){
		ui.texFrame=!ui.texFrame;
		$('input[id=fbuf]').prop("checked", ui.texFrame);
		$('input[id=text]').prop("checked", !ui.texFrame);
	});
	

		
	$('input[name=rFrame]').click(function(){
		ui.texFrame=!ui.texFrame;
		$('input[id=fbuf]').prop("checked", ui.texFrame);
		$('input[id=text]').prop("checked", !ui.texFrame);
	});
	






		
	$('#ftriangle').click(function(){
        alert("skdjhdfsjh");
		ui.texFrame=!ui.texFrame;
		$('input[id=fbuf]').prop("checked", ui.texFrame);
		$('input[id=text]').prop("checked", !ui.texFrame);
	});
	



	$('input[id=ftex]').click(function(){
		ui.dispBuffer = !ui.dispBuffer;
		$('input[id=ftex]').prop("checked", ui.dispBuffer);
	});
	
	
	$('input[id=esquare]').click(function(){
		ui.dispSquare = !ui.dispSquare;
		$('input[id=esquare]').prop("checked", ui.dispSquare);
	});
});
// ===========================================












