const link = 'link'

//INITIALIZE HEADER MENU
const headerLinks = document.querySelector('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    //get individual ids
    let id = e.target.classList.value;
    const classes = id.split(' ');
    individualClass = classes.find(x => x != link);
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {
    console.log(individualClass);
//             loadpage(e);  
        })
    })
}


// function loadpage(e) {
//     let id = e.target.classList.value;
//     const classes = id.split(' ');
//     individualClass = classes.find(x => x != link);
//             if(individualClass.includes('home')){
//               
//     window.location.href = `beehiveeducation.github.io/textbooks`
//                }
