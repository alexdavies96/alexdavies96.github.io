'use strict'
function make(){
    //window.alert("hello");
    let para = document.createElement("p");
    para.id="paragraphNew"
    let node = document.createTextNode("This is new.");
    para.appendChild(node);
    let element = document.getElementById("div1");
    element.appendChild(para);
}

function change(){
    let input = document.getElementById("input").value;
    document.getElementById("paragraphNew").innerHTML = input;
}

function deleteParagraph(){
    let x = document.getElementById("paragraphNew");
    x.remove(x.selectedIndex);
}
