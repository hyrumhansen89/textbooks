//INITIALIZE HEADER MENU
const headerLinks = document.querySelectorAll('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {
            let individualClass = e.target.classList.value;
            console.log(individualClass)
            loadpage(e);  
        })
    })
}

function loadpage(e) {
    let id = e.target.classList.value;
    const classes = id.split(' ');
    individualClass = classes.find(x => x != link);
    window.location.href = `../routes/${individualClass}.html`;

}
