<template>
  <li class="row-container" v-if="answered === true">
    <span class="mem-verified">
      The number is {{verified === true ? 'correct': 'wrong'}}!
    </span>
    <v-button
      ghost
      type="primary"
      size="large"
      v-if="verified === false"
      v-focus
      class="mem-play-btn"
      @click="startRecite">
        Retry
    </v-button>
  </li>
  <li class="row-container" v-else-if="recited === true">
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
    <span class="mem-number" :class="{reciting}">
      {{ reciting ? num : `This is a ${num.length} digits number` }}
    </span>
    <v-button
      size="large"
      v-if="!reciting"
      class="mem-play-btn"
      @click="startRecite"
    >
      Memorize
    </v-button>
  </li>
</template>

<style scoped lang="scss">
  .row-container {
    list-style: none;
    padding: 6px 12px;
    .mem-number {
      font-size: 14px;
      color: rgba(0,0,0,0.5);
      font-weight: normal;
      margin-right: 10px;
      &.reciting {
        color: rgba(0,0,0,0.6);
        font-size: 20px;
        font-weight: bold;
      }
    }
    .mem-play-btn, .mem-answer-btn {
      cursor: pointer;
    }
    .mem-answer {
      width: 180px;
      line-height: 1;
      border: 1px solid #d9d9d9;
      color: rgba(0,0,0,0.65);
      border-radius: 4px;
      padding: 4px 8px;
      margin-right: 2px;
      vertical-align: top;
    }
    .mem-verified {
      margin-right: 10px;
    }
    .mem-verified, .mem-answer {
      font-size: 16px;
    }
  }
</style>
<script>
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
      answered: false,
      verified: false,
      recited: false,
      reciting: false,
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
    onStartEvent(index) {
      if (index !== this.idx) {
        return;
      }

      this.startRecite();
    },
    startRecite() {
      this.reciteTimer = setTimeout(() => {
        this.onReciteEnded();
      }, this.reciteTime);

      this.answered = false;
      this.verified = false;
      this.recited = false;
      this.reciting = true;
    },
    onReciteEnded() {
      this.recited = true;
      this.reciting = false;
      clearTimeout(this.reciteTimer);
    },
    startVerify() {
      this.answered = true;
      if (this.answer !== this.num) {
        this.answer = '';
        return;
      }

      this.answer = '';
      this.verified = true;
      if (this.eventHub) {
        this.eventHub.$emit('done', this.idx);
      }
    },
  },
};
</script>
