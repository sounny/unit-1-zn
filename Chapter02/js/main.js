//initialize function called when script loads
function initialize(){
    cities();
};

function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

     //change the text color
    document.querySelector('#mydiv').style.color = 'green';

     //change the text size and alignment
    document.querySelector('#mydiv').style.fontSize = '1em';
    document.querySelector('#mydiv').style.textAlign = 'left';
    
    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#mydiv').style.color;
    //document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);

    document.querySelector("#mydiv").appendChild(table);
};
    
window.onload = initialize();

//named handler function for removable listener
function clickme(){
    alert('Yeah Green Bay! Go Packers!');
};

//add the event listener
document.querySelector("table").addEventListener('click', clickme);

