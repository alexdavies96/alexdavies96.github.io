
function exampleFunc(input) {
    document.getElementById("changeme").innerHTML = input;
}

function buttonFunction() {
    exampleFunc(document.getElementById("txt1").value)
    exampleFunc(document.getElementById("txt2").value)
    exampleFunc(document.getElementById("txt3").value);
}
