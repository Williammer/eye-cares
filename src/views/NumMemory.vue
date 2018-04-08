<template>
  <div class="num-mem-container">
    <div class="num-mem-control">
      <input
        class="max-digit-input"
        type="text"
        v-model="maxDigits"
        placeholder="Input the max digits"
      />
      <button @click="() => genNumbers(maxDigits)">Generate numbers</button>
    </div>
    <ul class="num-mem-main">
      <num-memory-row v-for="(number, index) in numbers" :key="index" :num="number" />
    </ul>
  </div>
</template>

<style lang="scss">
  .max-digit-input {
    width: 10rem;
  }

  .num-mem-main {
    border: 1px solid #ececec;
    padding-left: 0;
  }
</style>

<script>
// @ is an alias to /src
import NumMemoryRow from '@/components/NumMemoryRow.vue';

export default {
  name: 'num-memory',
  components: {
    NumMemoryRow,
  },
  data() {
    return {
      maxDigits: '',
      numbers: [],
    };
  },
  methods: {
    genNumbers(maxDigits = 3) { // TODO: use more functional style with rxjs
      this.numbers.length = 0;

      let d = 3; // min 3 digits
      while (d <= maxDigits) {
        this.numbers.push(this.genNumber(d));
        this.numbers.push(this.genNumber(d));
        d += 1;
      }
    },
    genNumber(digits = 3) {
      return Math.floor(Math.random() * (10 ** digits));
    },

  },
};
</script>
