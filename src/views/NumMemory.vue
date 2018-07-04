<template>
  <div class="num-mem-container">
    <h3 class="num-mem-title">Number Memory Game</h3>
    <p class="num-mem-intro">
      Number memory game activates the eye and brain by photograph memorizing a number sequence.
      <br/>
      The minimize digit length is 3, the length increases 1 on every two numbers.
    </p>
    <div class="num-mem-main">
      <div class="num-mem-ctrl-panel">
        <label for="max-digit">Max Digits:</label>
        <v-input-number :min="3" name="max-digit" v-model="maxDigits"></v-input-number>
        <label for="recite-time">Mem time(ms):</label>
        <v-input-number name="recite-time" v-model="reciteTime"></v-input-number>
        <br/>
        <v-button type="danger" @click="setupNumMemory">Generate numbers</v-button>
        <v-button type="primary" v-if="numbers.length" @click="memorizeAll">Memorize All</v-button>
      </div>
      <ul class="num-mem-playground">
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
  </div>
</template>

<style lang="scss">
  .num-mem-container {
    border-bottom: 1px solid #d9d9d9;
    padding: 10px 0 30px;
    max-width: 600px;
    min-width: 410px;
    text-align: left;
    .num-mem-title {
      text-align: center;
      margin-bottom: 10px;
    }
    .num-mem-intro {
      text-align: left;
      font-weight: bold;
      font-size: 12px;
      margin: 0 0 20px;
      padding: 0 20px 20px;
      border-bottom: 1px solid #CCC;
    }
    .num-mem-main {
      margin: 0 10px;
      text-align: center;
      .num-mem-ctrl-panel {
        margin-bottom: 10px;
        label {
          margin-left: 8px;
          margin-right: 4px;
        }
        .ant-btn {
          margin: 10px 4px;
        }
      }
      .num-mem-playground {
        .mem-verified {
          font-size: 16px;
        }
      }
    }
  }
</style>
<script>
import Vue from 'vue';
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
      reciteTime: 300,
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
      const num = Math.floor(Math.random() * (10 ** digits)).toString();
      return num.padStart(digits, '0');
    },
  },
};
</script>
