// Function Declaration
function calcDiscount() {
    let price = 100;
    let discount = 20;
    let final = price - discount;
    document.getElementById("output").innerHTML = 
        "<b>Function Declaration</b><br>Price after discount: ₹" + final;
}

// Function Expression
const calcFare = function() {
    let km = 15;
    let rate = 10;
    let fare = km * rate;
    document.getElementById("output").innerHTML = 
        "<b>Function Expression</b><br>Auto fare for " + km + "km: ₹" + fare;
};

// Arrow Function
const calcAverage = () => {
    let marks = [85, 90, 78, 92, 88];
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    let avg = total / marks.length;
    document.getElementById("output").innerHTML = 
        "<b>Arrow Function</b><br>Average marks: " + avg;
};

// Anonymous Function
function calcGST() {
    let bill = 500;
    
    let addGST = function() {
        return bill + (bill * 0.18);
    };
    
    document.getElementById("output").innerHTML = 
        "<b>Anonymous Function</b><br>Bill with 18% GST: ₹" + addGST();
}

// Callback Function
function printOrders() {
    let items = ["Apple", "Mango", "Banana"];
    
    function getOrder(item) {
        return "Order: " + item;
    }
    
    function printOrder(callback, item) {
        return callback(item);
    }
    
    let result = "<b>Callback Function</b><br>";
    for (let i = 0; i < items.length; i++) {
        result += printOrder(getOrder, items[i]) + "<br>";
    }
    document.getElementById("output").innerHTML = result;
}
