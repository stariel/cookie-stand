'use strict';

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
      hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  }
};

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    for (var i = 6; i <= 20; i++) {
      hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  }
};

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    for (var i = 6; i <= 20; i++) {
      hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  }
};

var capHillStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    for (var i = 6; i <= 20; i++) {
      hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  }
};

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);},
  salesModel: function(){
    var totalSales = 0;
    for (var i = 6; i <= 20; i++) {
      hourlySales = Math.round((this.custPerHour() * this.avgCookie));
      totalSales = (totalSales + hourlySales);
      this.dailySales.push(hourlySales);
      console.log (hourlySales);
    }
    console.log (totalSales);
    this.dailySales.push(totalSales);
  }
};

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
