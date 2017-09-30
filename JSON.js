"use strict"
window.onload = function(){
    //importJSONfile();
    //importJSONfile2();
}
function importJSONfile()
{
    let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function() {
    let requestData = request.response;
    let myh1 = document.createElement('h1');
    myh1.textContent = requestData['squadName'];
    document.getElementsByTagName("portfolio").appendChild(myh1);

    let myh2 = document.createElement('h2');
    myh2.textContent = requestData['homeTown'];
    document.getElementsByTagName("portfolio").appendChild(myh2);

    let myh3 = document.createElement('h3');
    myh3.textContent = requestData['formed'];
    document.getElementsByTagName("portfolio").appendChild(myh3);

    let myh4 = document.createElement('h4');
    myh4.textContent = requestData['secretBase'];
    document.getElementsByTagName("portfolio").appendChild(myh4);

    let myh5 = document.createElement('h5');
    myh5.textContent = requestData['active'];
    document.getElementsByTagName("portfolio").appendChild(myh5);

    let brea = document.createElement('br');    
    for (let i = 0; i < requestData['members'].length; ++i) {
        let myh5 = document.createElement('h5');
        myh5.textContent =requestData['members'][i].name + " , ";
        document.getElementsByTagName("portfolio").appendChild(myh5);
    }
    for (let j = 0; j < requestData['members'].length; ++j) {
        let myh6 = document.createElement('h6');
        myh6.textContent =requestData['members'][j].age + " , ";
        document.getElementsByTagName("portfolio").appendChild(myh6);
    }
    for (let j = 0; j < requestData['members'].length; ++j) {
        let myh6 = document.createElement('h6');
        myh6.textContent =requestData['members'][j].secretIdentity + " , ";
        document.getElementsByTagName("portfolio").appendChild(myh6);
    }
    for (let j = 0; j < requestData['members'].length; ++j) {
        let myh6 = document.createElement('h6');
        myh6.textContent =requestData['members'][j].powers + " , ";
        document.getElementsByTagName("portfolio").appendChild(myh6);
    }
    }
}

function SearchJSONFile()
{
    let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function() {
        let requestData = request.response;  
        for (let i = 0; i < requestData.length; ++i) {
            if (requestData[i].nm.toLowerCase().includes(document.getElementById("UserInput").value.toLowerCase()))
            {
                loadText(i);
            }
            else if (requestData[i].cty.toLowerCase().includes(document.getElementById("UserInput").value.toLowerCase()))
            {
                loadText(i);
            }
            else if (requestData[i].hse.toLowerCase().includes(document.getElementById("UserInput").value.toLowerCase()))
            {
                loadText(i);
            }
            else if (requestData[i].yrs.toLowerCase().includes(document.getElementById("UserInput").value.toLowerCase()))
            {
                loadText(i);
            }
        }
        function loadText(i){
            let myh1 = document.createElement('h1');
            let myh2 = document.createElement('h2');
            let myh3 = document.createElement('h3');
            let myh4 = document.createElement('h4');            
            myh1.textContent =requestData[i].nm + " , ";
            myh2.textContent =requestData[i].cty + " , ";
            myh3.textContent =requestData[i].hse + " , "; 
            myh4.textContent =requestData[i].yrs + " , ";            
            document.getElementsByTagName("portfolio").appendChild(myh1);
            document.getElementsByTagName("portfolio").appendChild(myh2);
            document.getElementsByTagName("portfolio").appendChild(myh3);
            document.getElementsByTagName("portfolio").appendChild(myh4);
        }
    }
}
