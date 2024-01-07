var toTop = document.getElementById("to-top");

toTop.addEventListener("click", topFunction);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        toTop.style.display = "block";
    else
        toTop.style.display = "none";
}
