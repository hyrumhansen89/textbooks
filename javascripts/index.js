const link = 'link'

//INITIALIZE HEADER MENU
const headerLinks = document.querySelectorAll('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {

            loadpage(e);  
        })
    })
}


function loadpage(e) {
    var home = document.querySelector('.home') ? document.querySelector("home").setAttribute("href", "https://beehiveeducation.github.io/textbooks/") : null;
    var schedule = document.querySelector('.schedule') ? document.querySelector("schedule").setAttribute("href", "https://beehiveeducation.github.io/textbooks/routes/schedule.html") : null;
    var books = document.querySelector('.books') ? document.querySelector("books").setAttribute("href", "https://beehiveeducation.github.io/textbooks//routes/books.html") : null;
    var literature = document.querySelector('.literature') ? document.querySelector("literature").setAttribute("href", "https://beehiveeducation.github.io/textbooks/routes/literature.html") : null;
    var games = document.querySelector('.games') ? document.querySelector("games").setAttribute("href", "https://beehiveeducation.github.io/textbooks/routes/games.html") : null;




//     let id = e.target.classList.value;
//     const classes = id.split(' ');
//     individualClass = classes.find(x => x != link);
//             if(individualClass.includes('home')){
//                loadHomePage(e);
               }
