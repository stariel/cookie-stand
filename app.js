var pikeStore = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
};

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
};

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
};

var capHillStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
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
