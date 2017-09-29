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