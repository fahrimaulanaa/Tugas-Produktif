function tepung(){
    document.getElementById("tepung").innerHTML="<img src='img/tepung.jpg' width='100px' height='100px'>";
    //make close button
    var close = document.createElement("button");
    var t = document.createTextNode("Close");
    close.appendChild(t);
    close.setAttribute("class","close");
    close.setAttribute("onclick","closeTepung()");
    document.getElementById("tepung").appendChild(close);
}