function calculate() {
    // Get the input value
    var number = document.getElementById("numberInput").value;

    // Multiply the input value by 12
    var result = number * 200 * 1;

    // Display the result
    document.getElementById("result").innerHTML = "You can earn <span style='color: rgb(76,57,87); font-weight: bold;'>" + result + " AUD</span> more per month.";
}