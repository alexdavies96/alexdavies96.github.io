window.onload = function(){
    
}

function person (name, age, occupation)
{
    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.occupation = occupation;
    let myObject = obj("Alex", 21, "Consultant Trainee");
    document.getElementById("demo").innerHTML = myObject;
}