//initialize function called when script loads
function initialize(){
addColumns()
};    

//Creates an array of objects for each city
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

	//attaches the table to the mydiv element in the index
	document.querySelector("#mydiv").appendChild(table);
	//function to add column and values to the hmtl table
	function addColumns(){
		//retrieves all table row elements
		document.querySelectorAll("tr").forEach(function(row, i){
			//if first row adds the column header
			if (i === 0){
	
				row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			} else {
				//calculates the values for each city based on population
				var citySize;
	
				if (cityPop[i-1].population < 100000){
					citySize = 'Small';
	
				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';
	
				} else {
					citySize = 'Large';
				};
				//inserts the results into the rows
				row.insertAdjacentHTML('beforeend', ('<td>' + citySize + '</td>'));
			};
		});
	};


//adds a dynamic listener to the table element when mouse is over it
document.querySelector("table").addEventListener("mouseover",function(){
	//assigns a random color to the table
	var color = "rgb("
	for (var i=0; i<3; i++){
		
		var random = Math.floor(Math.random()*255);

		color += random;

		if (i<2){
			color += ",";
				
		} else {
			color += ")";
		};
		this.style.color = color
	}});
//adds a dynamic listener to the table element when mouse is not over it
document.querySelector("table").addEventListener("mouseout",function(){
	this.style.color = "black"
	
	});
//defines function to launches a pop up message when clisked
function clickme(){

	alert('Hey, you clicked me!');
};
//when table is clicked launches a pop up message
document.querySelector("table").addEventListener("click", clickme)

window.onload = initialize()