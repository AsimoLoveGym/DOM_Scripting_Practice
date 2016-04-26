function showPic (whichpic){
    source = whichpic.getAttribute("href");
    placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}