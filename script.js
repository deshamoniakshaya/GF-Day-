// Open the first letter page

function openLetter(){

    document
    .getElementById("intro")
    .classList.remove("active");


    document
    .getElementById("page1")
    .classList.add("active");


    // Start background music after user interaction

    let music = document.getElementById("bgMusic");

    music.play();

}



// Move between pages

function nextPage(pageNumber){

    let currentPage = document.querySelector(".page.active");


    if(currentPage){

        currentPage.classList.remove("active");

    }


    let next = document.getElementById("page" + pageNumber);


    if(next){

        next.classList.add("active");

    }

}