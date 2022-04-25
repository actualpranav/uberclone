window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if(scroll>180){
        document.getElementById("main-nav").style.backgroundColor = "white";
        document.getElementsByClassName("search-bar").style.display = "none";
    }if(scroll<180){
        document.getElementById("main-nav").removeAttribute("style");
        document.getElementsByClassName("search-bar").removeAttribute("style");
    }
});