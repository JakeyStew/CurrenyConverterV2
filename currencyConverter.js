// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://data.fixer.io/api/latest?access_key=c58e28bbdfe2bfebc60ff0f56de99bc6', true);

request.responseType = 'json';
// Send request
request.send();

request.onload = function () {
    // Begin accessing JSON data here
    var data = request.response;

    if (request.status >= 200 && request.status < 400) {
        exchangeCurrency(data);
    } else {
        console.log('error');
    }
}

function exchangeCurrency(jsonObject) {
    var data = jsonObject;
    globalData = data;
    var select = document.getElementById("dropdownVal");
    var text = select.options[select.selectedIndex].text;
    var elements = document.getElementsByClassName('price');

    //console.log(data['rates'].GBP);
    if (text === "GBP") 
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = data['rates'].GBP;
        }   
    }
    else if (text === "USD")
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = data['rates'].USD;
        }   
    }
    else if (text === "EUR")
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = data['rates'].EUR;
        }   
    }
};