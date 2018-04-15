<template>
  <div class="num-mem-container">
    <p class="num-mem-intro">
      Number memory game activates the eye and brain
      by training to quickly photograph a number sequence in memory.
      <br/>
      The starting number length is 3, it will increase on every two numbers.
    </p>
    <div class="num-mem-control">
      <label for="max-digit">Max Digits</label>
      <input
        name="max-digit"
        class="max-digit-input"
        type="number"
        v-model="maxDigits"
        placeholder="Input max digits (above 3)"
      />
      <label for="recite-time">Memory time</label>
      <input
        name="recite-time"
        class="recite-time-input"
        type="number"
        v-model="reciteTime"
        placeholder="Input the recite time(ms)"
      />
      <button @click="setupNumMemory">Generate numbers</button>
      <button v-if="numbers.length" @click="memorizeAll">Memorize All</button>
    </div>
    <ul class="num-mem-main">
      <num-memory-row
        v-for="(number, index) in numbers"
        :key="index + '-' + number"
        :idx="index"
        :num="number"
        :reciteTime="reciteTime"
        :notifyNext="notifyNext"
      />
    </ul>
  </div>
</template>

<style lang="scss">
  .num-mem-container {
    box-shadow: 0px -2px 10px #42b983;
    padding: 20px 40px 60px;
    max-width: 1000px;
    min-width: 500px;

    .num-mem-intro {
      text-align: left;
      font-weight: bold;
      margin: 0 0 30px;
    }

    .max-digit-input, .recite-time-input {
      width: 10rem;
    }

    .num-mem-main {
      padding-left: 0;
    }
  }
</style>

<script>
import Vue from 'vue';
import leftPad from 'left-pad';
import NumMemoryRow from '@/components/NumMemoryRow.vue'; // @ is an alias to /src

export default {
  name: 'num-memory',
  components: {
    NumMemoryRow,
  },
  provide() {
    return {
      eventHub: this.eventHub,
    };
  },
  data() {
    return {
      numbers: [],
      maxDigits: '3',
      reciteTime: '300',
      notifyNext: false,
      eventHub: new Vue(),
    };
  },
  methods: {
    setupNumMemory() {
      this.numbers.length = 0;
      this.notifyNext = false;
      this.numbers = this.generateNumbers(this.maxDigits);
    },
    memorizeAll() {
      this.notifyNext = true;
      this.eventHub.$emit('start', 0);
    },
    generateNumbers(maxDigits) { // TODO: use more functional style with rxjs
      const numbers = [];

      let d = 3; // min 3 digits
      while (d <= maxDigits) {
        numbers.push(this.generateNumber(d));
        numbers.push(this.generateNumber(d));
        d += 1;
      }

      return numbers;
    },
    generateNumber(digits = 3) {
      const num = Math.floor(Math.random() * (10 ** digits));
      return leftPad(num, digits, 0);
    },
  },
};
</script>
