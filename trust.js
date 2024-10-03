


// The calculateDetails does the magic of calculation when the button is clicked 
function calculateDetails() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    



    // newDate is used to get current Date, 
    // getFullYear is used to get current year, wow
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;



    // Approximate number of days lived.
    var daysLived = age * 365 ;
    


    // Display the result inside the result <p></p> tag, thats why its is innerHTML
    document.getElementById("result").innerHTML = 
        `Hello ${name}, you were born in ${birthYear} and you have lived approximately ${daysLived} days on earth. Do you think this life is all there is?`;
}
