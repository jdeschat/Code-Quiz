var body = document.body;

// ADD TIMER START

// ADD TIMER END





// Add a list of question 1 answers START
var dataTypes = document.createElement('h1');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

dataTypes.textContent = 'Commonly used data types DO NOT include:';
li1.textContent = "Strings"
li2.textContent = "Booleans"
li3.textContent = "Alerts"
li4.textContent = "Numbers"

// dataTypes.setAttribute('style', 'font-size:20px;');
// listEl.setAttribute('style', 'background: #888888; padding: 20px;');

body.appendChild(dataTypes);
dataTypes.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Add a list of question 1 answers END