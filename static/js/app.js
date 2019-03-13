// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// loop through to add to table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select user input and the filter button
var dateInput = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function select(){
    //prevent refresh of page
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInput.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInput.property("value"))
    //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInput.on("change", select)
