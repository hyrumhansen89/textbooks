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
    let id = e.target.classList.value;
    const classes = id.split(' ');
    routes = classes.find(x => x != link);
    window.location.href = `../routes/${routes}.html`;
}
