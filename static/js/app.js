// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table
function buildTable(data) {

    // Clear existing data
    tbody.html("");

    // Loop through objects in data
    data.forEach((dataRow) => {
        
        // Append rows
        let row = tbody.append("tr");

        // Loop through each field in dataRow
        Object.values(dataRow).forEach((val) => {
        
        // Append data
        let cell = row.append("td");

        // Add the values
        cell.text(val);

        });

    });



};

