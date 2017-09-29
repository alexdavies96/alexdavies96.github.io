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