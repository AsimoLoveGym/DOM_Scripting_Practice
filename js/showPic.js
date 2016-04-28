function prepareGallery(){
    if (!document.getElementByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementByTagName("a");
    for(var i=0; i<links.length;i++){
        links[i].onclick = function(){
            return showPic(this)? false: true;
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")){
        var title = whichpic.getAttribute("title");
        var description = document.getElementById("description");
    //    alert(title + description.firstChild.nodeValue);
        if (description.nodeType == 3){
            description.firstChild.nodeValue = title;
        }
    }
    return true;
}