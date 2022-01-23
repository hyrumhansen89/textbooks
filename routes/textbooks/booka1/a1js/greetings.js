//ACTIVATE TABS
const tabs = document.querySelectorAll('.tablinks') 

tabs.forEach(tablinks => {
  tablinks.addEventListener('click', addAClass);
});

function addAClass() {
	tabs.classList.toggle("active");
}

//GREETINGS EXERCISE 1
$(document).ready(function(){})

//CREATE RANDOM SENTENCES AND JUMBLE WORDS
	const formalGreetings = ["Hello I'm Isabella", "Hi my name is Mason", "Hi my name's Emma", "Hey I am William", "Hi my name's Tiffany", "Hi I'm Clark",];

	
	const _randomIndex = Math.floor(Math.random() * formalGreetings.length);

	let copyWords = formalGreetings[_randomIndex].split(" ");
	let originalWords = formalGreetings[_randomIndex].split(" ");
	let wrappedWords = "";
	
	while(copyWords.length) {
		let _randomIndex = Math.floor(Math.random() * copyWords.length);
		let _word = copyWords.splice(_randomIndex, 1)[0]
		
		wrappedWords = wrappedWords + '<span data-position="' + originalWords.indexOf(_word) +'">' + _word  + '</span>';
	}

	for (let j = 0; j < words.length; j++ ){ 
		wrappedWords = wrappedWords + '<span data-position="' + j +'">' + words[j] + '</span>';
	}

 	$(wrappedWords).appendTo('.emptyPlaceHolder');
	
	
// CLICK SPAN AND APPEND TO QUESTIONS DIV

	$(function(){
    	$("span").click(function(){
        $(this).appendTo(".questionsDiv");        
    }); 
});
	



//Loop through empties and call drag events


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
    


