// TODO: figure out what info we need to display
// * Store Location
// * Hours of Operation
// * Minimum Number of Customers per Hour
// * Maximum Number of Customers per Hour
// * Average Number of Cookies Sold

// ********** GLOBALS **********
// console.log('hello world'); <-- proof of life
let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// window to DOM
let salesSection = document.getElementById('sales-section');
// TODO: grab elmement by id from sales.html
let salesForm = document.getElementById('salesForm');
// creates table element attached to HTML section
let table = document.createElement('table');
salesSection.appendChild(table);

let storeLocation = []; // stores all location objects


// ********** HELPER FUNCTIONS/UTILITIES **********
function renderAll() {
  for (let i = 0; i < storeLocation.length; i++) {
    storeLocation[i].numCust();
    storeLocation[i].avgCookies();
    storeLocation[i].render();
  }
}

function salmonLogo() {
  let imgElem = document.createElement('img');
  console.log(imgElem);
  imgElem.src = './src/assets/chinook.jpg';
  salesSection.appendChild(imgElem);
}

function header() {
  let row1 = document.createElement('tr'); // empty row being attached to table
  table.appendChild(row1);

  let th1Elem = document.createElement('th'); // th attaches to row, creates store names
  row1.appendChild(th1Elem);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = hoursOfOperation[i];
    row1.appendChild(td1Elem);
  }
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = 'Daily Total';
  row1.appendChild(dailyTotal);
}

// TODO: create a function to create hourly total and store values. It's going to require two for loops. One loop iterates through the hours of operation array, and the other loop iterates through the global store list.

function footer() {
  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);

  let footerRow = document.createElement('tr');
  tfoot.appendChild(footerRow);

  let footerCell = document.createElement('td');
  footerCell.textContent = 'Hourly Totals';
  footerRow.appendChild(footerCell);

  let grandTotal = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeLocation.length; j++) {
      hourlyTotal += storeLocation[j].cookiesPurchased[i];
      grandTotal += storeLocation[j].cookiesPurchased[i];
      console.log(hourlyTotal);
    }
    let totalElem = document.createElement('td');
    totalElem.textContent = hourlyTotal;
    footerRow.appendChild(totalElem);
  }
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = grandTotal;
  footerRow.appendChild(grandTotalCell);
}




// ********** CONSTRUCTOR FUNCTION **********
function StoreGenerator(name, minCust, maxCust, avgCookiesPurchased) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPurchased = avgCookiesPurchased;
  this.cookiesPurchased = [];
  this.dailyTotal = 0;
}

// ********** PROTOTYPE METHODS **********
StoreGenerator.prototype.numCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreGenerator.prototype.numOfCookies = function () {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  }
};

StoreGenerator.prototype.render = function () {
  let row1 = document.createElement('tr'); // empty row being attached to table
  table.appendChild(row1);

  let th1Elem = document.createElement('th'); // th attaches to row, creates store names
  th1Elem.textContent = this.name;
  row1.appendChild(th1Elem);

  for (let i = 0; i < this.cookiesPurchased.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.cookiesPurchased[i];
    row1.appendChild(td1Elem);
  }
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.dailyTotal;
  row1.appendChild(dailyTotal);
};

// ********** FORM HANDLING **********
function handleSubmit(event) {
  event.preventDefault();
  let storeLoc = event.target.storeLoc.value;
  console.log(storeLoc);
  let minCap = +event.target.minCap.value;
  console.log(minCap);
  let maxCap = +event.target.maxCap.value;
  console.log(maxCap);
  let custAvgPurchase = +event.target.custAvgPurchase.value;
  console.log(custAvgPurchase);

  // TODO: create a new store with form input values
  console.log(storeLoc, minCap, maxCap, custAvgPurchase);
  let newStore = new StoreGenerator(storeLoc, minCap, maxCap, custAvgPurchase);
  // TODO: Temporarily remove footer from table
  document.querySelector('tfoot').remove();
  console.log(table);

  newStore.numCust();
  newStore.numOfCookies();
  newStore.render();

  // TODO: bring footer back to table
  storeLocation.push(newStore);
  footer();
  salesForm.reset();
}

// ********** NEW CONSTRUCTOR EXECUTION **********
console.log(storeLocation);
renderAll();

// ********** EVENT LISTENERS **********
salesForm.addEventListener('submit', handleSubmit);


// ********** EXECUTABLE CODE **********
salmonLogo();

header();


let seattle = new StoreGenerator('Seattle', 23, 65, 6.3);
console.log(seattle);

let tokyo = new StoreGenerator('Tokyo', 3, 24, 1.2);
console.log(tokyo);

let dubai = new StoreGenerator('Dubai', 11, 38, 3.7);
console.log(dubai);

let paris = new StoreGenerator('Paris', 20, 38, 2.3);
console.log();

let lima = new StoreGenerator('Lima', 2, 16, 4.6);
console.log(lima);

storeLocation.push(seattle, tokyo, dubai, paris, lima);
console.log(storeLocation);

function renderAllLocations() {
  for (let i = 0; i < storeLocation.length; i++) {
    storeLocation[i].numCust();
    storeLocation[i].numOfCookies();
    storeLocation[i].render();
  }
}

renderAllLocations();

footer();