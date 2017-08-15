'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

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
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
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
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
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
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
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
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
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
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      alkiLoc.appendChild(newLi);
    }
  }
};

alkiStore.dataToPage();
