//Example 3.5...
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //check the data
            console.log(myData)
            console.log('Data can be accessed within the fetch')
        }) 

    //check the data
    console.log(myData)
    console.log('Data cannot be accessed outside of the fetch')
};

document.addEventListener('DOMContentLoaded',jsAjax)