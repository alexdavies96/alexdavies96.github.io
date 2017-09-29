function make(){
    //window.alert("hello");
    var newParagraph = document.createElement('p');
    newParagraph.id = "paragraph";
    document.getElementById("paragraph").innerHTML = "this is a paragraph";
    document.getElementsByTagName('thisbody')[0].appendChild(p1);
}

function change(){
    let input = document.getElementById("create").value;
    
    document.getElementById("paragraph").innerHTML = input;
}

function deleteParagraph(){
    document.getElementById("newPara").deleteParagraph;
}
