function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var title = whichpic.getAttribute("title");
    var description = document.getElementById("description");
//    alert(title + description.firstChild.nodeValue);
    description.firstChild.nodeValue = title;
}