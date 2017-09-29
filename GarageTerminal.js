"use Strict"
let arrayCars = [];
let arrayGarage = [];

function GarageTerminalFunction(event)
{
    let input = document.getElementById("terminal").value; 
    if (event.keyCode === 13)
    {        
        if (input === "create car")
        {                       
                window.alert("Enter Attributes one after the other");  
                let CarAtt = input              
                let inputAdd = [];
                inputAdd = input;
                arrayCars.push(inputAdd);

                for (let i = 0; i < arrayCars.length; i++)
                {
                    document.getElementById("TextArea").innerHTML = arrayCars[i];
                }
        }
        else if (input === "add car")
        {
                window.alert("Adding Car"); 
        }   
        else if (input === "faults")
        {
                window.alert("Adding Faults")                    
        }
        else if (input === "remove")
        {
                window.alert("Removing Car")
        }
        else 
        {
            window.alert("Not a recognised command");
        }
    }
}
