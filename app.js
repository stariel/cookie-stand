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
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    for (var i = 0; i < this.dailySales.length; i++) {
      var pike = document.getElementById('pike');
      var newLi = document.createElement('li');
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      pike.appendChild(newLi);
    }
  }
};

pikeStore.salesModel();
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
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    for (var i = 0; i < this.dailySales.length; i++) {
      var seaTac = document.getElementById('seaTac');
      var newLi = document.createElement('li');
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      seaTac.appendChild(newLi);
    }
  }
};

seatacStore.salesModel();
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
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    for (var i = 0; i < this.dailySales.length; i++) {
      var seaCen = document.getElementById('seaCen');
      var newLi = document.createElement('li');
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      seaCen.appendChild(newLi);
    }
  }
};

seacenStore.salesModel();
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
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    for (var i = 0; i < this.dailySales.length; i++) {
      var cap = document.getElementById('cap');
      var newLi = document.createElement('li');
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      cap.appendChild(newLi);
    }
  }
};

capHillStore.salesModel();
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
    for (var i = 6; i <= 20; i++) {
      var hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  },
  dataToPage: function() {
    for (var i = 0; i < this.dailySales.length; i++) {
      var alki = document.getElementById('alki');
      var newLi = document.createElement('li');
      var newString = timeOfDay[i] + this.dailySales[i] + ' cookies';
      newLi.innerText = newString;
      alki.appendChild(newLi);
    }
  }
};

alkiStore.salesModel();
alkiStore.dataToPage();
