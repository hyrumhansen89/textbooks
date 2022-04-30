const link = 'link'

//INITIALIZE HEADER MENU
const headerLinks = document.querySelector('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {
            loadpage(e);  
        })
    })
}


// function loadpage(e) {
    const home = document.querySelector('.home').setAttribute('href', 'beehiveeducation.github.io/textbooks/')
    const schedule = document.querySelector('.schedule').setAttribute('href', 'beehiveeducation.github.io/textbooks/routes/schedule.html')
    const books = document.querySelector('.books').setAttribute('href', 'beehiveeducation.github.io/textbooks/routes/books.html')
    const literature = document.querySelector('.literature').setAttribute('href', 'beehiveeducation.github.io/textbooks/routes/literature.html')
    const games = document.querySelector('.games').setAttribute('href', 'beehiveeducation.github.io/textbooks/routes/games.html')
    
    window.location.href = "beehiveeducation.github.io/textbooks"
}
