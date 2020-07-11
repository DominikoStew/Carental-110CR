// year is received string
function Car(year, make, model, miles, cat, color, mpg, price, image, isManual) {
    this.year = parseInt(year) || 0; // parse the string into int
    this.make = make;
    this.model = model;
    this.miles = parseInt(miles) || 0;
    this.category = cat;
    this.color = color;
    this.mpg = parseInt(mpg) || 0;
    this.price = parseFloat(price) || 0.00;
    this.image = image;
    this.isManual = isManual;

}


function register() {
    var year = $("#txtYear").val(); // read year as string
    var model = $("#txtModel").val();
    var make = $("#txtMake").val();
    var miles = $("#txtMiles").val();
    var cat = $("#selCategory").val();
    var color = $("#txtColor").val();
    var mpg = $("#txtMPG").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var isManual = $("#rdbTrans_1").is(":checked");

    // create the object
    var car = new Car(year, model, make, miles, cat, color, mpg, price, image, isManual);
    console.log('the car info', car);

    // send the object to Back-end
    $.ajax({
        type: 'POST',
        url: '/catalog/registerCar',
        data: JSON.stringify(car),
        contentType: 'application/json',
        success: function (res) {
            console.log("Server says: ", res);
        },
        error: function (errorDetails) {
            console.log("There is an error", errorDetails);
        }
    });

    // clear the form

}

function init() {
    alert("working")

    $("#btnSave").click(register);
}

window.onload = init;


// catch the click event
// call a register fn
// get the values from the inputs on variables
// create an object with those variables
// note: the object prop.. should be names like the Car model class
// console log the object