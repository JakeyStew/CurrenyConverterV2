(function(){a={_b:0,c:function(){this._b++;return this.b;}};HTMLElement.prototype.pseudoStyle=function(d,e,f){var g="pseudoStyles";var h=document.head||document.getElementsByTagName('head')[0];var i=document.getElementById(g)||document.createElement('style');i.id=g;var j="pseudoStyle"+a.c();this.className+=" "+j;i.innerHTML+=" ."+j+":"+d+"{"+e+":"+f+"}";h.appendChild(i);return this;};})();

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
            var convert = elements[i].innerHTML /= globalData['rates'].GBP;
            elements[i].innerHTML = convert.toFixed(2);
            elements[i].pseudoStyle("before", "content", "'£'");
        }  
    }
    else if (text === "USD")
    {
        for(var i = 0; i < elements.length; i++) {
            convert = elements[i].innerHTML *= globalData['rates'].USD;
            elements[i].innerHTML = convert.toFixed(2);
            elements[i].pseudoStyle("before", "content", "'$'");
        }   
    }
    else if (text === "EUR")
    {
        for(var i = 0; i < elements.length; i++) {
            convert = elements[i].innerHTML *= globalData['rates'].EUR;
            elements[i].innerHTML = convert.toFixed(2);
            elements[i].pseudoStyle("before", "content", "'€'");
        }   
    }
}