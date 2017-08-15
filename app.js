'use strict';

var openHours = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];

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
  this.dataToPage = function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    var name = this.location;
    newH2.id = name;
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i <= this.dailySales.length; i++) {
      if (i < this.dailySales.length) {
        var nameLoc = document.getElementById(name);
        var newLi = document.createElement('li');
        var newString = openHours[i] + this.dailySales[i] + ' cookies';
        newLi.innerText = newString;
        nameLoc.appendChild(newLi);
      }
      else {
        var nameLoc = document.getElementById(name);
        var newLi = document.createElement('li');
        var newString = 'Total: ' + this.totalSales + ' cookies';
        newLi.innerText = newString;
        nameLoc.appendChild(newLi);
      }
    }
  };
};

var pikeStore = new CookieStore('1st and Pike', 23, 65, 6.3);
var seatacStore = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seacenStore = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHillStore = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alkiStore = new CookieStore('Alki', 2, 16, 4.6);

var storeLocations = [pikeStore, seatacStore, seacenStore, capHillStore, alkiStore];

for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].dataToPage();
}
