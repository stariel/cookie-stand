'use strict';

var openHours = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];

var cookieStoreLocations = [];
var grandTotal = 0;

function CookieStore (storeName, minCust, maxCust, avgCookie){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailySales = [];
  this.totalSales = 0;
  this.custPerHour = function() {
    return Math.round((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
  };
  this.salesModel = function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 0; i < openHours.length; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.totalSales = totalSales;
  };
  cookieStoreLocations.push(this);
  this.render = function() {
    this.salesModel();
    var insideTable = document.getElementById('table');
    var newTr = document.createElement('tr');
    var name = this.storeName;
    newTr.id = name;
    newTr.innerText = name;
    insideTable.appendChild(newTr);
    for (var j = 0; j <= this.dailySales.length; j++) {
      if (j < this.dailySales.length) {
        var nameLoc = document.getElementById(name);
        var newTd = document.createElement('td');
        var newString = this.dailySales[j];
        newTd.innerText = newString;
        nameLoc.appendChild(newTd);
      }
      else {
        var nameLoc = document.getElementById(name);
        var newTot = document.createElement('td');
        var totString = this.totalSales;
        newTot.innerText = totString;
        nameLoc.appendChild(newTot);
      }
    }
  };
};

var pikeStore = new CookieStore('1st and Pike', 23, 65, 6.3);
var seatacStore = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seacenStore = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHillStore = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alkiStore = new CookieStore('Alki', 2, 16, 4.6);

var createTableHeader = function() {
  var salesLoc = document.getElementById('sales');
  var table = document.createElement('table');
  salesLoc.appendChild(table);
  table.id = 'table';
  var insideTable = document.getElementById('table');
  var newTr = document.createElement('tr');
  newTr.id = 'heading';
  insideTable.appendChild(newTr);
  var headLoc = document.getElementById('heading');
  var newTh = document.createElement('th');
  headLoc.appendChild(newTh);
  for (var i = 0; i <= openHours.length; i++) {
    if (i < openHours.length) {
      var newTh = document.createElement('th');
      var newString = openHours[i];
      newTh.innerText = newString;
      headLoc.appendChild(newTh);
    }
    else {
      var nameLoc = document.getElementById(name);
      var newTotal = document.createElement('th');
      var totString = 'Total: ';
      newTotal.innerText = totString;
      headLoc.appendChild(newTotal);
    }
  }
};

var createFooter = function() {
  var insideTable = document.getElementById('table');
  var newTr = document.createElement('tr');
  newTr.id = 'footer';
  insideTable.appendChild(newTr);
  var footLoc = document.getElementById('footer');
  var newTd = document.createElement('td');
  newTd.innerText = 'Totals';
  footLoc.appendChild(newTd);
  hourlyTotals();
  var newTd = document.createElement('td');
  newTd.innerText = grandTotal;
  footLoc.appendChild(newTd);
};

var hourlyTotals = function() {
  for (var i = 0; i < openHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < cookieStoreLocations.length; j++) {
      hourlyTotal += cookieStoreLocations[j].dailySales[i];
    }
    var footLoc = document.getElementById('footer');
    var newTd = document.createElement('td');
    newTd.innerText = hourlyTotal;
    footLoc.appendChild(newTd);
    grandTotal += hourlyTotal;
  }
};

createTableHeader();
for (var i = 0; i < cookieStoreLocations.length; i++) {
  cookieStoreLocations[i].render();
}
createFooter();

var form = document.getElementById('form');
form.addEventListener('submit', postNewStore);

function postNewStore(event){
  event.preventDefault();
  var newStore = new CookieStore();
  newStore.storeName = this.elements['storeLoc'].value;
  newStore.minCust = parseInt(this.elements['minCust'].value);
  newStore.maxCust = parseInt(this.elements['maxCust'].value);
  newStore.avgCookie = parseFloat(this.elements['avgCookies'].value);
  newStore.render();
}
