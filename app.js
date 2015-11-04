var hoursofOperation=[10, 11, 12, 1, 2, 3, 4, 5];
var storeNames= ['Pike Place Market', 'SeaTac Airport', 'Southcenter Mall', 'Bellevue Square Mall', 'Alki'];
var locations=[];
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
  locations.push(this);

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

    }
  }
  // this.makeList = function() {
  //   var trElement = document.createElement('tr');
  //   for (var i = 0; i < hoursofOperation.length; i++) {
  //     var tdElement = document.createElement('td');
  //     tdElement.textContent=this.hourlyTotals[i];
  //     trElement.appendChild(tdElement);
  //   }
  //   tbl.appendChild(trElement);
  //   document.body.appendChild(tbl);
  // }

  }
  function StoreNames () {
    var tbl = document.createElement('table');
    var trElement = document.createElement('tr');
    tbl.appendChild(trElement);
    var thElement = document.createElement('th');
    thElement.textContent= '';
    trElement.appendChild(thElement);
    for (var m = 0; m < hoursofOperation.length; m++) {
      var thElement = document.createElement('th');
      thElement.textContent=hoursofOperation[m];
      trElement.appendChild(thElement);
    }
    var thElement = document.createElement('th');
    thElement.textContent= 'Totals';
    trElement.appendChild(thElement);
    for (var i = 0; i < storeNames.length; i++) {
    var trElement = document.createElement('tr');
      var thElement = document.createElement('th');
      thElement.textContent=storeNames[i];
      trElement.appendChild(thElement);
      for (var j = 0; j < hoursofOperation.length; j++) {
        var tdElement = document.createElement('td');
        tdElement.textContent=locations[i].hourlyTotals[j];
        trElement.appendChild(tdElement);
     }
     var tdElement = document.createElement('td');
      tdElement.textContent=locations[i].total;

      trElement.appendChild(tdElement);
      document.body.appendChild(trElement);

    // }
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  }
}


// var tbl = document.createElement('table');
// for (var i = 0; i < hoursofOperation.length; i++) {
//   var thElement = document.createElement('th');
//   thElement.textContent=hoursofOperation[i];
//   tbl.appendChild(thElement);
//   }

var pikePlace = new cookieStand(17, 88, 5.2);
pikePlace.calculateDailyTotal();
// pikePlace.makeList();
// pikePlace.StoreNames();
var seaTac = new cookieStand(6, 44, 1.2);
seaTac.calculateDailyTotal();
// seaTac.makeList();
// seaTac.StoreNames();
var southCenter = new cookieStand(11, 38, 1.9);
southCenter.calculateDailyTotal();
// southCenter.makeList();
// southCenter.StoreNames[2]
var bellevue = new cookieStand(20, 48, 1.3);
bellevue.calculateDailyTotal();
// bellevue.makeList();
// bellevue.StoreNames()
var alki = new cookieStand(3, 24, 2.6);
alki.calculateDailyTotal();
// alki.makeList();
// alki.StoreNames();
StoreNames();



