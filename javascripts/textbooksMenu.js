const textBooks = document.querySelectorAll('.textbook');
initTextbooks();
//Initialize textbooks
function initTextbooks() {
    textBooks.forEach(x => {
        x.addEventListener('click', function (e) {
            loadpage(e);  
        })
    })
}


function loadpage(e) {
    let id = e.target.classList.value;
    const classes = id.split(' ');
    books = classes.find(x => x != textbook);
    window.location.href = `../textbooks/routes/textbooks/${books}.html`;
}
