let mydate = new Date();
console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

// let mycreated_date = new Date(2023,11,8)
// console.log(mycreated_date.toString());


// Get the current date
let today = new Date();

// Extract the day, month, and year
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let year = today.getFullYear();

// Combine to create the dd-mm-yyyy format
let currentDate = `${day}-${month}-${year}`;

// Display the result
console.log(currentDate);