<template>
  <div>
    <img src="@/assets/frosted-cookie.jpg" alt="Frosted Cookies" />
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="hour in hoursOfOperation" :key="hour">{{ hour }}</th>
          <th>Daily Total</th>
        </tr>
      </thead>
      <tbody>
        <StoreGenerator v-for="location in storeLocation" :key="location.name" :location="location" />
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
      <!-- Your form inputs go here -->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      storeLocation: [],
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
    },
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const storeLoc = event.target.storeLoc.value;
      const minCap = +event.target.minCap.value;
      const maxCap = +event.target.maxCap.value;
      const custAvgPurchase = +event.target.custAvgPurchase.value;

      const newStore = {
        name: storeLoc,
        minCust: minCap,
        maxCust: maxCap,
        avgCookiesPurchased: custAvgPurchase,
        cookiesPurchased: [],
        dailyTotal: 0,
      };
      this.numCust(newStore);
      this.numOfCookies(newStore);
      this.storeLocation.push(newStore);
      event.target.reset();
    },
    numCust(store) {
      store.numCust = Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
    },
    numOfCookies(store) {
      for (let i = 0; i < this.hoursOfOperation.length; i++) {
        let cookieCount = Math.floor(store.numCust * store.avgCookiesPurchased);
        store.cookiesPurchased.push(cookieCount);
        store.dailyTotal += cookieCount;
      }
    },
  },
};
</script>
