//ACTIVATE TABS
//CREATE VARIABLES
const parentDiv = document.getElementById('tab-container');
const tabs = ['contractions', 'spelling', 'nationality', 'age', 'grammar'];


// //CREATE DIVS
// for(let i = 0; i < tabs.length; i++){
//     const tablinks = document.createElement('div');
//     tablinks.id = tabs[i];
//     tablinks.classList = 'tablinks'
//     tablinks.innerHTML = tablinks.id;
//     parentDiv.appendChild(tablinks);
// };

//CREATE CLASS ON ARRAY ITEMS
let element = document.querySelectorAll('.tablinks');

//LOOP THROUGH ARRAY AND ADD OR REMOVE CLASS
const handleClick = (e) => {
    // e.preventDefault();
    element.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  
  }
  
//ADD EVENT HANDLER TO DIVS
  element.forEach(node => {
    node.addEventListener('click', handleClick)
  });

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
    


