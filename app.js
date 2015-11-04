var hoursofOperation=['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace={
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
  },
  displayTotal: function() {
     documents.createElement(Id);
  }
};

var seaTac={
  minCustHr: 6,
  maxCustHr: 44,
  avgCookiesCust: 1.2,
  hourlyTotals:[],
  randomNumCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustHr-this.minCustHr + 1))+this.minCustHr;
  },
  calculateHourlyTtl: function(){
    return this.avgCookiesCust*this.randomNumCustomer();

  },
  calculateDailyTotal: function(){
    var total=0;
    for (var i=0; i<hoursofOperation.length; i++) {
      this.hourlyTotals.push(Math.ceil(this.calculateHourlyTtl()));
      console.log(hoursofOperation[i]+this.hourlyTotals[i]);
    }
  }
};

var southcenter={
  minCustHr: 11,
  maxCustHr: 38,
  avgCookiesCust: 1.9,
  hourlyTotals:[],
  randomNumCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calculateHourlyTtl: function(){
    return this.avgCookiesCust*this.randomNumCustomer();
  },
  calculateDailyTotal: function(){
    var total=0;
    for (var i=0; i<hoursofOperation.length; i++) {
      this.hourlyTotals.push(Math.ceil(this.calculateHourlyTtl()));
      console.log(hoursofOperation[i]+this.hourlyTotals[i]);
    }
  }
};

makeList: function(){
  this.cookiePerHr();
  var tbl=document.createElement('table');

  var trElement=document.createElement('tr');

  for (var i=0; i<hours.length; i++) {
    var thElement=document.createElement('th');
    thElement.textContent=hours[i];
    trElement.append
  }

}




