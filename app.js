var hoursofOperation=[10, 11, 12, 1, 2, 3, 4, 5];
var storeNames= ['Pike Place Market', 'SeaTac Airport', 'Southcenter Mall', 'Bellevue Square Mall', 'Alki'];
var locations=[];
var cookieform= document.getElementById('cookieform');


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

    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  }
}

var pikePlace = new cookieStand(17, 88, 5.2);
pikePlace.calculateDailyTotal();

var seaTac = new cookieStand(6, 44, 1.2);
seaTac.calculateDailyTotal();

var southCenter = new cookieStand(11, 38, 1.9);
southCenter.calculateDailyTotal();

var bellevue = new cookieStand(20, 48, 1.3);
bellevue.calculateDailyTotal();

var alki = new cookieStand(3, 24, 2.6);
alki.calculateDailyTotal();

StoreNames();

function formhandler (event) {
 event.preventDefault();
 console.log(event.target.min.value);
}
cookieform.addEventListener('submit', formhandler);





