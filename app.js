'use strict';

var openHours = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: '];

function CookieStore (location, minCust, maxCust, avgCookie){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.salesModel = function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  };
};

var pikeStore = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  dailySales: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    newH2.id = 'pikeLoc';
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i < this.dailySales.length; i++) {
      var pikeLoc = document.getElementById('pikeLoc');
      var newLi = document.createElement('li');
      var newString = openHours[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      pikeLoc.appendChild(newLi);
    }
  }
};

pikeStore.dataToPage();

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  dailySales: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    newH2.id = 'seatacLoc';
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i < this.dailySales.length; i++) {
      var seatacLoc = document.getElementById('seatacLoc');
      var newLi = document.createElement('li');
      var newString = openHours[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      seatacLoc.appendChild(newLi);
    }
  }
};

seatacStore.dataToPage();

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  dailySales: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    newH2.id = 'seacenLoc';
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i < this.dailySales.length; i++) {
      var seacenLoc = document.getElementById('seacenLoc');
      var newLi = document.createElement('li');
      var newString = openHours[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      seacenLoc.appendChild(newLi);
    }
  }
};

seacenStore.dataToPage();

var capHillStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  dailySales: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    newH2.id = 'capLoc';
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i < this.dailySales.length; i++) {
      var capLoc = document.getElementById('capLoc');
      var newLi = document.createElement('li');
      var newString = openHours[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      capLoc.appendChild(newLi);
    }
  }
};

capHillStore.dataToPage();

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  dailySales: [],
  liText: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    this.dailySales = [];
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
    }
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    this.salesModel();
    var salesLoc = document.getElementById('sales');
    var newH2 = document.createElement('h2');
    newH2.id = 'alkiLoc';
    newH2.innerText = this.location;
    salesLoc.appendChild(newH2);
    for (var i = 0; i < this.dailySales.length; i++) {
      var alkiLoc = document.getElementById('alkiLoc');
      var newLi = document.createElement('li');
      var newString = openHours[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      alkiLoc.appendChild(newLi);
    }
  }
};

alkiStore.dataToPage();
