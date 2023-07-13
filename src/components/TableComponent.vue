<template>
  <div>
    <img src="@/assets/frosted-cookie.jpg" alt="Salmon Logo" />
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="hour in hoursOfOperation" :key="hour">{{ hour }}</th>
          <th>Daily Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in storeLocation" :key="location.name">
          <th>{{ location.name }}</th>
          <td v-for="cookiesPurchased in location.cookiesPurchased" :key="cookiesPurchased">{{ cookiesPurchased }}</td>
          <td>{{ location.dailyTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Hourly Totals</td>
          <td v-for="hourlyTotal in hourlyTotals" :key="hourlyTotal">{{ hourlyTotal }}</td>
          <td>{{ grandTotal }}</td>
        </tr>
      </tfoot>
    </table>
    <form @submit="handleSubmit">
      <fieldset>
        <legend>New Store Generator</legend>
        <label for="storeLoc">Store Location:</label>
        <input type="text" id="storeLoc" name="storeLoc">

        <label for="minCap">Minimum Capacity:</label>
        <input type="number" id="minCap" name="minCap">

        <label for="maxCap">Maximum Capacity:</label>
        <input type="number" id="maxCap" name="maxCap">

        <label for="custAvgPurchase">Average Cookies Purchased per Customer:</label>
        <input type="number" id="custAvgPurchase" name="custAvgPurchase">
      </fieldset>
      <button type="submit">Add Store Location</button>
    </form>
  </div>
</template>

<script>
function StoreGenerator(name, minCust, maxCust, avgCookiesPurchased, hoursOfOperation) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPurchased = avgCookiesPurchased;
  this.cookiesPurchased = [];
  this.dailyTotal = 0;
  this.hoursOfOperation = hoursOfOperation;
  this.numOfCookies();
}

StoreGenerator.prototype.numCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreGenerator.prototype.numOfCookies = function () {
  for (let i = 0; i < this.hoursOfOperation.length; i++) {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  }
};

export default {
  data() {
    return {
      hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      storeLocation: [
        {
          name: 'Seattle',
          minCust: 23,
          maxCust: 65,
          avgCookiesPurchased: 6.3,
          cookiesPurchased: [],
          dailyTotal: 0
        },
        {
          name: 'Tokyo',
          minCust: 3,
          maxCust: 24,
          avgCookiesPurchased: 1.2,
          cookiesPurchased: [],
          dailyTotal: 0
        },
        {
          name: 'Dubai',
          minCust: 11,
          maxCust: 38,
          avgCookiesPurchased: 3.7,
          cookiesPurchased: [],
          dailyTotal: 0
        },
        {
          name: 'Paris',
          minCust: 20,
          maxCust: 38,
          avgCookiesPurchased: 2.3,
          cookiesPurchased: [],
          dailyTotal: 0
        },
        {
          name: 'Lima',
          minCust: 2,
          maxCust: 16,
          avgCookiesPurchased: 4.6,
          cookiesPurchased: [],
          dailyTotal: 0
        }
      ]
    };
  },
  computed: {
    hourlyTotals() {
      const totals = [];
      for (let i = 0; i < this.hoursOfOperation.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < this.storeLocation.length; j++) {
          hourlyTotal += this.storeLocation[j].cookiesPurchased[i];
        }
        totals.push(hourlyTotal);
      }
      return totals;
    },
    grandTotal() {
      let total = 0;
      for (let j = 0; j < this.storeLocation.length; j++) {
        total += this.storeLocation[j].dailyTotal;
      }
      return total;
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const storeLoc = event.target.storeLoc.value;
      const minCap = +event.target.minCap.value;
      const maxCap = +event.target.maxCap.value;
      const custAvgPurchase = +event.target.custAvgPurchase.value;

      const newStore = new StoreGenerator(storeLoc, minCap, maxCap, custAvgPurchase, this.hoursOfOperation);
      this.storeLocation.push(newStore);
      event.target.reset();
    }
  }
};
</script>


<!-- <template>
  <div>
    <img src="@/assets/frosted-cookie.jpg" alt="Salmon Logo" />
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="hour in hoursOfOperation" :key="hour">{{ hour }}</th>
          <th>Daily Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in storeLocation" :key="location.name">
          <th>{{ location.name }}</th>
          <td v-for="cookiesPurchased in location.cookiesPurchased" :key="cookiesPurchased">{{ cookiesPurchased }}</td>
          <td>{{ location.dailyTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Hourly Totals</td>
          <td v-for="hourlyTotal in hourlyTotals" :key="hourlyTotal">{{ hourlyTotal }}</td>
          <td>{{ grandTotal }}</td>
        </tr>
      </tfoot>
    </table>
    <form @submit="handleSubmit">
      <fieldset>
        <legend>New Store Generator</legend>
        <label for="storeLoc">Store Location:</label>
        <input type="text" id="storeLoc" name="storeLoc">

        <label for="minCap">Minimum Capacity:</label>
        <input type="number" id="minCap" name="minCap">

        <label for="maxCap">Maximum Capacity:</label>
        <input type="number" id="maxCap" name="maxCap">

        <label for="custAvgPurchase">Average Cookies Purchased per Customer:</label>
        <input type="number" id="custAvgPurchase" name="custAvgPurchase">
      </fieldset>
      <button type="submit">Add Store Location</button>
    </form>
  </div>
</template>

<script>
function StoreGenerator(name, minCust, maxCust, avgCookiesPurchased, hoursOfOperation) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPurchased = avgCookiesPurchased;
  this.cookiesPurchased = [];
  this.dailyTotal = 0;
  this.hoursOfOperation = hoursOfOperation;
}

StoreGenerator.prototype.numCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreGenerator.prototype.numOfCookies = function () {
  for (let i = 0; i < this.hoursOfOperation.length; i++) {
    let cookieCount = Math.floor(this.numCust() * this.avgCookiesPurchased);
    this.cookiesPurchased.push(cookieCount);
    this.dailyTotal += cookieCount;
  }
};

export default {
  data() {
    return {
      hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      storeLocation: [
        new StoreGenerator('Seattle', 23, 65, 6.3, this.hoursOfOperation),
        new StoreGenerator('Tokyo', 3, 24, 1.2, this.hoursOfOperation),
        new StoreGenerator('Dubai', 11, 38, 3.7, this.hoursOfOperation),
        new StoreGenerator('Paris', 20, 38, 2.3, this.hoursOfOperation),
        new StoreGenerator('Lima', 2, 16, 4.6, this.hoursOfOperation)
      ]
    };
  },
  computed: {
    hourlyTotals() {
      const totals = [];
      for (let i = 0; i < this.hoursOfOperation.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < this.storeLocation.length; j++) {
          hourlyTotal += this.storeLocation[j].cookiesPurchased[i];
        }
        totals.push(hourlyTotal);
      }
      return totals;
    },
    grandTotal() {
      let total = 0;
      for (let j = 0; j < this.storeLocation.length; j++) {
        total += this.storeLocation[j].dailyTotal;
      }
      return total;
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const storeLoc = event.target.storeLoc.value;
      const minCap = +event.target.minCap.value;
      const maxCap = +event.target.maxCap.value;
      const custAvgPurchase = +event.target.custAvgPurchase.value;

      const newStore = new StoreGenerator(storeLoc, minCap, maxCap, custAvgPurchase, this.hoursOfOperation);
      newStore.numOfCookies();
      this.storeLocation.push(newStore);
      event.target.reset();
    }
  }
};
</script> -->









