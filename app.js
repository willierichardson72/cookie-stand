var hoursofOperation=[10, 11, 12, 1, 2, 3, 4, 5];

var pikePlace= {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTotals:[],
  randomNumCustomer: function() {
    return Math.floor(Math.random()*(this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calculateHourlyTtl: function() {
    return this.avgCookiesCust * this.randomNumCustomer();

  },
  calculateDailyTotal: function() {
    var total=0;
    for (var i=0; i<hoursofOperation.length; i++) {
      this.hourlyTotals.push(Math.ceil(this.calculateHourlyTtl()));
      console.log(hoursofOperation[i] + this.hourlyTotals[i]);
    }
  }
};




