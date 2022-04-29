const link = 'link'
const homebtn = document.querySelectorAll('.homebtn');

//INITIALIZE HOME BUTTONS
function initHomeButtons() {
    homebtn.addEventListener('click', function(){
        window.location.href = "/textbooks/";
    })
}

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
    let id = e.target.classList.value;
    const classes = id.split(' ');
    individualClass = classes.find(x => x != link);
    window.location.href = `/textbooks/routes/${individualClass}.html`;
}
