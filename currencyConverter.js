// Create a request variable and assign a new XMLHttpRequest object to it.
var globalData;
var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://data.fixer.io/api/latest?access_key=c58e28bbdfe2bfebc60ff0f56de99bc6', true);

// Send request
request.send();

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(request.response);

    if (request.status >= 200 && request.status < 400) {
        globalData = data;
        console.log("Success");
    } else {
        console.log('error');
    }
}

function currencyExchange(selfTarget) {
    var text = selfTarget.options[selfTarget.selectedIndex].text;
    var elements = document.getElementsByClassName('price');

    if (text === "GBP") 
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = globalData['rates'].GBP;
            console.log(elements);
        }  
    }
    else if (text === "USD")
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = globalData['rates'].USD;
        }   
    }
    else if (text === "EUR")
    {
        for(var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = globalData['rates'].EUR;
        }   
    }
}