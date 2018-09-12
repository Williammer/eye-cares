<template>
  <!-- TODO: encapsulate the vue-beauty components into separate components,
  which is easy to maintain/migrate -->
  <li class="row-container" v-if="isState('correct', 'incorrect')">
    <span class="mem-verify-result" :class="{verified: isState('correct')}" >
      {{isState('correct') ? '&#10004; correct': '&#10008; incorrect'}}!
    </span>
    <v-button
      ghost
      type="primary"
      size="large"
      v-if="isState('incorrect')"
      v-focus
      class="mem-play-btn"
      @click="startRecite">
        Retry
    </v-button>
  </li>
  <li class="row-container" v-else-if="isState('recited')">
    <input
      v-focus
      class="mem-answer"
      v-model="answer"
      @keyup.enter="startVerify"
    />
    <v-button
      type="success"
      size="large"
      @click="startVerify"
    >
      OK
    </v-button>
  </li>
  <li class="row-container" v-else>
    <span class="mem-number" :class="{reciting: isState('reciting')}">
      {{ isState('reciting') ? num : `${num.length} digits number` }}
    </span>
    <v-button
      size="large"
      v-if="!isState('reciting')"
      class="mem-play-btn"
      @click="startRecite"
    >
      Memorize
    </v-button>
  </li>
</template>

<script>
import { Machine } from 'xstate';
import stateChart from './numMemoryRowStateChart';

const stateM = Machine(stateChart);

export default {
  name: 'num-memory-row',
  props: {
    idx: Number,
    num: String,
    reciteTime: Number,
    eventHub: Object,
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      answer: '',
      state: 'idle',
    };
  },
  mounted() {
    if (this.eventHub) {
      this.eventHub.$on('start', this.onStartEvent);
    }
  },
  beforeDestroy() {
    if (this.eventHub) {
      this.eventHub.$off('start', this.onStartEvent);
    }
  },
  methods: {
    isState(...states) {
      return states.includes(this.state);
    },
    stateTransition(action) {
      this.state = stateM.transition(this.state, action).value;
    },
    onStartEvent(index) {
      if (index !== this.idx) return;
      this.startRecite();
    },
    startRecite() {
      this.reciteTimer = setTimeout(
        this.onReciteEnded.bind(this),
        this.reciteTime,
      );

      this.stateTransition('START');
    },
    onReciteEnded() {
      this.stateTransition('TIMEOUT');
      clearTimeout(this.reciteTimer);
      this.reciteTimer = null;
    },
    startVerify() {
      const { answer } = this;
      this.answer = '';
      if (answer !== this.num) {
        this.stateTransition('MISSED');
        return;
      }

      this.stateTransition('HIT');
      if (this.eventHub) this.eventHub.$emit('done', this.idx);
    },
  },
};
</script>

<style scoped lang="scss">
.row-container {
  list-style: none;
  padding: 6px 12px;
  .mem-number {
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
    margin-right: 10px;
    font-style: italic;
    font-size: 12px;
    &.reciting {
      color: rgba(0, 0, 0, 0.6);
      font-size: 20px;
      font-weight: bold;
      font-style: normal;
    }
  }
  .mem-play-btn,
  .mem-answer-btn {
    cursor: pointer;
  }
  .mem-answer {
    width: 180px;
    line-height: 1;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 2px;
    vertical-align: top;
  }
  .mem-verify-result {
    margin-right: 10px;
    font-weight: bold;
    color: #ff5b4f;
    &.verified {
      color: #00a854;
    }
  }
  .mem-verify-result,
  .mem-answer {
    font-size: 16px;
  }
}
</style>
