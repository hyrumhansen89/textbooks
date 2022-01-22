//ACTIVATE TABS

$(document).ready(function() {
$(".tablinks").click(function () {
    $(".tablinks").removeClass("active");
    // $(".tablinks").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});
});

//MATCH IMAGES WITH AUDIO
$(function(){
    		$(".square").draggable({
    			snap:"#dropzone",
    			snapmode:"inner"
    		});
    	});

        $("#draggable").draggable();
        $("#dropzone").droppable(
        
        {
            drop: function(event, ui) {
                $(this).css('background', );
            },
            over: function(event, ui) {
                $(this).css('background', '#D3D3D3');
            },
            out: function(event, ui) {
                $(this).css('background', 'white');
            }
        });
    
