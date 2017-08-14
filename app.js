'use strict';

var pikeStore = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  salesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  salesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  salesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var capHillStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  salesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  salesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};
