<script>
import Vue from 'vue';
import NumMemoryRow from '@/components/NumMemoryRow.vue'; // @ is an alias to /src

export default {
  name: 'num-memory',
  components: {
    NumMemoryRow,
  },
  mounted() {
    this.eventHub.$on('done', this.onNumDoneEvent);
  },
  beforeDestroy() {
    this.eventHub.$off('done', this.onNumDoneEvent);
  },
  data() {
    return {
      numbers: [],
      minDigits: 3,
      maxDigits: 4,
      reciteTime: 300,
      notifyNext: false,
      eventHub: new Vue(),
    };
  },
  computed: {
    allDone() {
      return (
        this.numbers.length && this.numbers.every(({ done }) => done === true)
      );
    },
  },
  methods: {
    setupNumMemory() {
      this.numbers.length = 0;
      this.notifyNext = false;

      this.numbers = this.generateNumbers(this.minDigits, this.maxDigits);
    },
    memorizeAll() {
      this.notifyNext = true;
      this.eventHub.$emit('start', 0);
    },
    generateNumbers(min, max) {
      // TODO: use more functional style with rxjs
      const numbers = [];

      let d = min;
      while (d <= max) {
        numbers.push({ num: this.generateNumber(d), done: false });
        numbers.push({ num: this.generateNumber(d), done: false });
        d += 1;
      }

      return numbers;
    },
    generateNumber(digits) {
      const num = Math.floor(Math.random() * (10 ** digits)).toString();
      return num.padStart(digits, '0');
    },
    onNumDoneEvent(index) {
      this.numbers[index].done = true;
      if (this.notifyNext) {
        this.eventHub.$emit('start', index + 1);
      }
    },
  },
};
</script>

<template>
  <div class="num-mem-container">
    <v-tooltip class="num-mem-tip" placement="bottomRight">
      <v-icon class="more-info-btn" type="info-circle"></v-icon>
      <div slot="content">
        <span class="num-mem-intro">
          Number memory game practice the eyes and brain by memorizing a number in a short period of glimpse time.
          <br/>
          It is a good exercise for photographic memory, which helps keep the eyes active and vigorous.
          <br/>
          <br/>
          The larger the digits and shorter the glimpse time, the more challenging it is.
          <br/>
          <br/>
          Have fun practicing the brain and eyes!
        </span>
      </div>
    </v-tooltip>
    <div class="num-mem-main">
      <div class="num-mem-ctrl-panel">
        <div class="num-mem-inputs">
          <label for="min-digit">Digits range (Min - Max):</label>
          <v-input-number class="digits" :min="3" :max="maxDigits" name="min-digit" v-model="minDigits">
          </v-input-number>
          <label for="max-digit">- </label>
          <v-input-number class="digits" :min="minDigits" name="max-digit" v-model="maxDigits">
          </v-input-number>
          <br class="input-divider" />
          <label for="recite-time">Glimpse time(ms):</label>
          <v-input-number name="recite-time" v-model="reciteTime"></v-input-number>
        </div>
        <v-button class="start-btn" type="error" size="large" @click="setupNumMemory">
          Start new game
        </v-button>
        <v-button class="recite-all-btn" type="primary" size="large" v-if="numbers.length" @click="memorizeAll">
          Memorize one by one
        </v-button>
      </div>
      <ul class="num-mem-playground">
        <num-memory-row
          v-for="({ num }, index) in numbers"
          :key="index + '-' + num"
          :idx="index"
          :num="num"
          :reciteTime="reciteTime"
          :eventHub="eventHub"
        />
      </ul>
      <div class="num-mem-win" v-if="allDone">
        <div class="icon"></div>
        <span>You win!</span>
        <p>You can memorize these numbers again, or challenge bigger max digits, shorter glimpse time!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.num-mem-container {
  margin-top: 10px;
  max-width: 600px;
  min-width: 410px;
  .num-mem-tip {
    position: absolute;
    top: 8px;
    right: 10px;
    color: #FFF;
    .more-info-btn {
      font-size: 18px;
      cursor: pointer;
    }
    .num-mem-intro {
      text-align: left;
      font-size: 12px;
      font-weight: bold;
      font-style: italic;
    }
  }

  .num-mem-main {
    text-align: center;
    margin: 40px 0 50px;
    .num-mem-ctrl-panel {
      margin-bottom: 30px;
      .ant-btn {
        margin: 10px 4px;
      }
      .num-mem-inputs {
        text-align: left;
        width: 340px;
        margin: 0 auto 20px;
        label {
          margin-left: 8px;
          margin-right: 4px;
          font-size: 14px;
          color: #666;
          font-weight: bold;
        }
        .input-divider {
          line-height: 2.4;
        }
        .ant-input-number {
          width: 64px !important;
          &.digits {
            width: 48px !important;
          }
        }
      }
      .start-btn {
        background-color: #ff5b4f;
        border-color: #ff5b4f;
        &:hover {
          background-color: #ff776d;
          border-color: #ff776d;
        }
      }
    }
    .num-mem-win {
      margin-top: 30px;
      .icon {
        height: 64px;
        background: url("../../public/img/win.png") center center no-repeat;
      }
      span {
        color: #f04134;
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
}
</style>
