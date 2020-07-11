var catalog = [];




function fetchCatalog() {
    // ajax request to /catalog/getCatalog
    // print the response from the server
    $.ajax({
        type: "GET",
        url: "/catalog/getCatalog",
        success: function (res) {
            console.log("Server says: ", res);
            catalog = res;
            displayCars();
        },
        error: function (error) {
            console.log("Error loading data", error);
        }
    });
}

function displayCars() {
    // travel the catalog array
    // get each car from the array
    // create the html syntax to display the car
    // add the syntax to a container

    for (let i = 0; i < catalog.length; i++) {
        var car = catalog[i];

        var syntax =
            `<div class="car" onclick="displayModal(${i})">
            <img src="${car.image}">
    
            <div>
                <label class="name">${car.year} ${car.make} ${car.model}</label>   
                <label class="price">Price: $${car.price.toFixed(2)}</label>
                
            </div>
        </div>`;

        $("#catalog-container").append(syntax);
    }
}

function displayModal(index) {
    var car = catalog[index];
    console.log("User want to see a car", index);

    // change the values in the modal
    $("#md1Title").text(`${car.year} ${car.make} ${car.model}`);
    $("#md1Content").html(`<img src="${car.image}">`);
    $("#md1Price").text(`$ ${car.price.toFixed(2)}`);
    $("#md1Cat").text(car.category);
    $('#mdlColor').text(`${car.color}`);
    $('#mdlMiles').text(`${car.miles}`);
    $('#mdlMpg').text(`${car.mpg}`);

    var transmissionType = car.isManual ? "Manual" : "Automatic";
    $("#md1Trans").text(transmissionType);

    $("#popup").modal(); // show the modal
}

function init() {
    console.log("Catalog page");


    fetchCatalog();

}


window.onload = init;