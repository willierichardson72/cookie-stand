var hoursofOperation=[10, 11, 12, 1, 2, 3, 4, 5];

// var pikePlace= {
//   minCustHr: 17,
//   maxCustHr: 88,
//   avgCookiesCust: 5.2,
//   hourlyTotals:[],
//   randomNumCustomer: function() {
//     return Math.floor(Math.random()*(this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calculateHourlyTtl: function() {
//     return this.avgCookiesCust * this.randomNumCustomer();

//   },
//   calculateDailyTotal: function() {
//     var total=0;
//     for (var i=0; i<hoursofOperation.length; i++) {
//       this.hourlyTotals.push(Math.ceil(this.calculateHourlyTtl()));
//       console.log(hoursofOperation[i] + this.hourlyTotals[i]);
//     }
//   }
// };

function cookieStand (minCustHr, maxCustHr, avgCookiesCust) {
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesCust = avgCookiesCust;
  this.hourlyTotals = [];
  this.total = 0;

  this.randomNumCustomer = function() {
    return Math.floor(Math.random()*(this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  }
  this.calculateHourlyTtl = function() {
    return Math.floor(this.avgCookiesCust * this.randomNumCustomer());

  }
  this.calculateDailyTotal = function() {
    for (var i=0; i<hoursofOperation.length; i++) {
      var calcTemp = Math.ceil(this.calculateHourlyTtl());
      this.hourlyTotals.push(calcTemp);
      this.total = this.total + calcTemp;
      //console.log(hoursofOperation[i] + this.hourlyTotals[i]);
    }
  }
  this.render = function() {
    var list = document.createElement('ul');
    for (var i = 0; i < hoursofOperation.length; i++) {
      list = document.createElement('li');
      list.innerHTML = hoursofOperation[i] + ': ' + this.hourlyTotals[i];
      document.body.appendChild(list);
    }
    list = document.createElement('li');
    list.innerHTML = this.total;
    document.body.appendChild(list);
  }
  this.makeList = function() {
    //this.calculateDailyTotal();

    //document.body.appendChild(tbl);
    var trElement = document.createElement('tr');
    //document.body.appendChild(trElement);
    for (var i = 0; i < hoursofOperation.length; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent=this.hourlyTotals[i];
      trElement.appendChild(tdElement);
    }
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);

  }
}

var tbl = document.createElement('table');
for (var i = 0; i < hoursofOperation.length; i++) {
  var thElement = document.createElement('th');
  thElement.textContent=hoursofOperation[i];
  tbl.appendChild(thElement);
}

var pikePlace = new cookieStand(17, 88, 5.2);
pikePlace.calculateDailyTotal();
pikePlace.makeList();
var seaTac = new cookieStand(6, 44, 1.2);
seaTac.calculateDailyTotal();
seaTac.makeList();
var southCenter = new cookieStand(11, 38, 1.9);
southCenter.calculateDailyTotal();
southCenter.makeList();
var bellevue = new cookieStand(20, 48, 1.3);
bellevue.calculateDailyTotal();
bellevue.makeList();
var alki = new cookieStand(3, 24, 2.6);
alki.calculateDailyTotal();
alki.makeList();



