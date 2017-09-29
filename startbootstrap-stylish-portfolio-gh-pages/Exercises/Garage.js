"use Strict"

let arrayCars = [];
let arrayGarage = [];

function addCar()
{
    let make = document.getElementById("make").value;
    let colour = document.getElementById("colour").value;
    let reg = document.getElementById("reg").value;
    if (make === "" || colour === "" || reg === "")
    {
        window.alert("Please enter details!");
    }
    let option = document.createElement('option');
    option.innerHTML = reg;
    document.getElementById("carList").appendChild(option);
    let a = {make, colour, reg};
    arrayCars.push(a);
}

function AddGarage()
{
    let List = document.getElementById("carList");
    let CarReg = List.options[List.selectedIndex].value;
    let List2 = document.getElementById("faultList");
    let Fault = List2.options[List2.selectedIndex].value;

    if (CarReg === "Select Car" || Fault === "Select Fault")
    {
        window.alert("Please select a car and fault from the menu!");
    }
        let p1 = document.createElement('h3');
        let p2 = document.createElement('h4');
        let p3 = document.createElement('h4'); 
        let p4 = document.createElement('h3');

        for (let a = 0; a < arrayCars.length; a++)
        {        
            if (CarReg.includes(arrayCars[a].reg))
            {
                    p1.textContent = arrayCars[a].make + "  ";
                    p2.textContent = arrayCars[a].colour + "  ";
                    p3.textContent = arrayCars[a].reg + "  ";
                    p4.textContent = Fault;
                    document.getElementsByTagName('body')[0].appendChild(p1);
                    document.getElementsByTagName('body')[0].appendChild(p2);
                    document.getElementsByTagName('body')[0].appendChild(p3);  
                    document.getElementsByTagName('body')[0].appendChild(p4);
                    let Make = arrayCars[a].make;
                    let Colour = arrayCars[a].colour;
                    let reg = arrayCars[a].reg;
                    let AddGarage = {Make, Colour, reg, Fault};
                    arrayGarage.push(AddGarage);
                    let option = document.createElement('option');
                    option.innerHTML = arrayCars[a].reg;
                    document.getElementById("carListGarage").appendChild(option);
            }
        } 
}

function total()
{
    let List3 = document.getElementById("carListGarage");
    let CarReg2 = List3.options[List3.selectedIndex].value;
    let total = 0;
    if (CarReg2 === "Select Car")
    {
        window.alert("Please select a car from the menu!");
    }
else {
    for (let b = 0; b < arrayGarage.length; b++)
    {
        if (CarReg2.includes(arrayGarage[b].reg))
        {
            if (arrayGarage[b].Fault === "Flat Tyre")
            {   
                total += 15;
                if (arrayGarage[b].make === "BMW" || "Audi" || "RangeRover")
                {
                    total = total+30;
                }             
            }
            else if (arrayGarage[b].Fault === "Paint Job")
            {
                total += 500;
                if (arrayGarage[b].make === "BMW" || "Audi" || "RangeRover")
                {
                    total += 500;
                }  
            }
            else if (arrayGarage[b].Fault === "Dent")
            {
                total += 50;
                if (arrayGarage[b].make === "BMW" || "Audi" || "RangeRover")
                {
                    total += 30;
                }  
            }
            else if (arrayGarage[b].Fault === "Clutch")
            {
                total += 300;
                if (arrayGarage[b].make === "BMW" || "Audi" || "RangeRover")
                {
                    total += 200;
                }  
            }
            else if (arrayGarage[b].Fault === "Gear Box")
            {
                total += 300;
                if (arrayGarage[b].make === "BMW" || "Audi" || "RangeRover")
                {
                    total += 200;
                }  
            }
            document.getElementById("Total").value = total;            
        }
    }
}
}

function OutGarage()
{
    let List3 = document.getElementById("carListGarage");
    let CarReg2 = List3.options[List3.selectedIndex].value;
    let List = document.getElementById("carList");
    let CarReg = List.options[List.selectedIndex].value;

    if (CarReg2 === "Select Car")
    {
        window.alert("Please select a car to checkout!")
    }
    for (let b = 0; b < arrayGarage.length; b++)
    {
        if (CarReg2.includes(arrayGarage[b].reg))
        {
            arrayGarage.splice(arrayGarage[b]);
            document.getElementById('carListGarage').removeChild(reg);
        }
    }
}