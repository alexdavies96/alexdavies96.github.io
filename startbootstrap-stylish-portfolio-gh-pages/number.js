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
    