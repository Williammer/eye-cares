<template>
  <div class="num-mem-container">
    <div class="num-mem-control">
      <input
        class="max-digit-input"
        type="text"
        v-model="maxDigits"
        placeholder="Input the max digits"
      />
      <input
        class="recite-time-input"
        type="text"
        v-model="reciteTime"
        placeholder="Input the recite time(ms)"
      />
      <button @click="() => genNumbers(maxDigits)">Generate numbers</button>
    </div>
    <ul class="num-mem-main">
      <num-memory-row
        v-for="(number, index) in numbers"
        :key="index"
        :num="number"
        :reciteTime="reciteTime"
      />
    </ul>
  </div>
</template>

<style lang="scss">
  .max-digit-input, .recite-time-input {
    width: 10rem;
  }

  .num-mem-main {
    padding-left: 0;
  }
</style>

<script>
import leftPad from 'left-pad';
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
      reciteTime: '',
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
      const num = Math.floor(Math.random() * (10 ** digits));
      console.log(num);
      return leftPad(num, digits, 0);
    },

  },
};
</script>
