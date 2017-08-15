'use strict';

var openHours = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];

var cookieStoreLocations = [];

function CookieStore (location, minCust, maxCust, avgCookie){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailySales = [];
  this.totalSales = 0;
  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
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
};

var pikeStore = new CookieStore('1st and Pike', 23, 65, 6.3);
var seatacStore = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seacenStore = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHillStore = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alkiStore = new CookieStore('Alki', 2, 16, 4.6);

var createTable = function() {
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
  };
  for (var i = 0; i < cookieStoreLocations.length; i++) {
    cookieStoreLocations[i].salesModel();
    var newTr = document.createElement('tr');
    var name = cookieStoreLocations[i].location;
    newTr.id = name;
    newTr.innerText = name;
    insideTable.appendChild(newTr);
  };
  for (var i = 0; i < cookieStoreLocations.length; i++) {
    for (var j = 0; j <= cookieStoreLocations[i].dailySales.length; j++) {
      if (j < cookieStoreLocations[i].dailySales.length) {
        name = cookieStoreLocations[i].location;
        var nameLoc = document.getElementById(name);
        var newTd = document.createElement('td');
        var newString = cookieStoreLocations[i].dailySales[j];
        newTd.innerText = newString;
        nameLoc.appendChild(newTd);
      }
      else {
        var nameLoc = document.getElementById(name);
        var newTot = document.createElement('td');
        var newString = cookieStoreLocations[i].totalSales;
        newTot.innerText = newString;
        nameLoc.appendChild(newTot);
      }
    };
  };
};

createTable();

//
//  var newTr =
//   var name = this.location;
//   newTr.id = name;
//   newTr.innerText = name;
//   insideTable.appendChild(newTr);
//   for (var i = 0; i <= this.dailySales.length; i++) {
//     if (i < this.dailySales.length) {
//       var nameLoc = document.getElementById(name);
//       var newTd = document.createElement('td');
//       var newString = this.dailySales[i] + ' cookies';
//       newTd.innerText = newString;
//       nameLoc.appendChild(newTd);
//     }
//     else {
//       var nameLoc = document.getElementById(name);
//       var newLi = document.createElement('td');
//       var newString = 'Total: ' + this.totalSales + ' cookies';
//       newLi.innerText = newString;
//       nameLoc.appendChild(newLi);
//     }
//   }
// };
//
