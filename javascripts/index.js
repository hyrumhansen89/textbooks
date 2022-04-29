//INITIALIZE HEADER MENU
const headerLinks = document.querySelectorAll('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    books.forEach(x => {
        x.addEventListener('click', function (e) {
            let individualClass = e.target.classList.value;
            console.log(individualClass)
            loadpage(e);  
        })
    })
}

// homebtn.addEventListener('click', function(){
//   location.href = "https://beehiveeducation.github.io/textbooks/";
  
// })
