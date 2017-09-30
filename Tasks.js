'use Strict'

function changeToUp(){
    let input = "He said \"my name is Alex\" ";
    let up = input.toUpperCase();
    document.getElementById("change1").innerHTML=up;
}
//<p id="change">He said my name is Alex</p>


function concatNum(){
    let input = "concat a number on to the end: ";
    let num = input.concat('1');
    document.getElementById("change2").innerHTML=num;
}

function arraysPrint(){
    let example = ["cat", "dog", "rat"];
    let add = example.concat("monkey");
    add.pop();
    document.getElementById("change3").innerHTML=add.join(" ");
}

function person() {
    let name = document.getElementById("textBox1").value;
    let age = document.getElementById("textBox2").value;
    let occupation = document.getElementById("textBox3").value;
    document.getElementById("change4").innerHTML=name;
    document.getElementById("change5").innerHTML=age;
    document.getElementById("change6").innerHTML=occupation;
    if (age > 20 && age < 40)
    {
        document.getElementById("change7").innerHTML= true;
    }
    else 
    {
        document.getElementById("change7").innerHTML= false;        
    }

}


function ForLoop() {
    let StringArray = [];
    for (let i = 1; i <= 10; i++)
    {
        if (i%2 === 0)
        {
            StringArray[i]=i;            
        }
    }
    document.getElementById("loop").innerHTML = StringArray.join(" ");    
}


//Level 2 intermediate
//iteration 3 FIZZ BUZZ 
function FizzBuzz(){
    let FizzBuzzArray = [];
    let Buzz = "Buzz";
    let Fizz = "Fizz";
    for (let i = 1; i <= 100; i++)
    {
        if (i%3 === 0)
        {
            FizzBuzzArray[i]=Fizz;
        }
        else if (i%5 === 0)
        {
            FizzBuzzArray[i]=Buzz;
        }
        else
        {
            FizzBuzzArray[i] = i;
        }
        document.getElementById("FizzBuzz").innerHTML = FizzBuzzArray.join(" ")
    }
}


//iteration 4
function number(a) {
let iterations = [];
let num = [];
    while (a !== 1)
    {
        if (a%3 === 0)
        {
            a /= 3
            iterations = iterations.concat("Divided by 3")
            num = num.concat(a);
        }
        else 
        {
            if (a+1%3 === 0)
            {
                a+=1
                iterations = iterations.concat("Add 1")
                num = num.concat(a);                
            }
            else
            {
                a-=1
                iterations = iterations.concat("Minus 1")
                num = num.concat(a);                
            }
        }
    }
    document.getElementById("num").innerHTML = num.join(" ");    
    document.getElementById("Iterations").innerHTML = iterations.join(" ");
}

//Strings 4
function Strings4()
{
    let tripple = [];
    let trippleFound = 0;
    let trippleValue = [];
    tripple = document.getElementById("input").value;
    for (let i = 0; i < tripple.length; i++)
    {
        if (tripple[i] === tripple[i+1])
        {
            if (tripple[i+1] === tripple[i+2])
            {
                trippleFound += 1;
                trippleValue = trippleValue.concat(tripple[i]);
            }
        }
    }
    document.getElementById("value").innerHTML = trippleValue.join(" ");
    document.getElementById("tripple").innerHTML = trippleFound;    
}


//DOM 1
function make(){
    //window.alert("hello");
    var newParagraph = document.createElement('p');
    newParagraph.id = "paragraph";
    document.getElementById("paragraph").innerHTML = "this is a paragraph";
    document.getElementById("portfolio").appendChild(p1);
}

function change(){
    let input = document.getElementById("create").value;
    
    document.getElementById("paragraph").innerHTML = input;
}

function deleteParagraph(){
    document.getElementById("newPara").deleteParagraph;
}
