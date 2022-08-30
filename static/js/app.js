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


// Filter the table by date
function handleClick() {
    // Select first element that matches with string "#datetime"
    // Look for where date values are stored and hold that information in the "date" variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Apply filter to match datetime value to filtered date value (if a date was entered)
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    buildTable(filteredData);
    
}

// Listen for the form button click and execute handleClick()
d3.selectAll("#filter-btn").on("click", handleClick); 

// Build the table when the page loads
buildTable(tableData);

