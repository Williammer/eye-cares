<template>
  <li class="row-container" v-if="answered === true">
    <span class="mem-verified">
      The number is {{verified === true ? 'correct': 'wrong'}}!
    </span>
    <button
      v-if="verified === false"
      v-focus
      class="mem-play-btn"
      @click="startRecite">
        Restart
    </button>
  </li>
  <li class="row-container" v-else-if="recited === true">
    <input v-focus class="mem-answer" v-model="answer" @keyup.enter="startVerify" />
    <button class="mem-answer-btn" @click="startVerify">Submit</button>
  </li>
  <li class="row-container" v-else>
    <span class="mem-number" :class="{reciting}">{{ num }}</span>
    <button class="mem-play-btn" @click="startRecite">Play</button>
  </li>
</template>

<style scoped lang="scss">
  .row-container {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    padding-left: 0;
    border: 1px solid #ececec;
    border-bottom: none;
    &:last-child {
      border-bottom: 1px solid #ececec;
    }

    .mem-number {
      font-size: 20px;
      font-weight: bold;
      padding-left: 20px;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      &.reciting {
        opacity: 1;
      }
    }

    .mem-play-btn, .mem-answer-btn {
      cursor: pointer;
    }

    .mem-verified, .mem-answer {
      margin-left: 20px;
    }
  }
</style>

<script>
export default {
  name: 'num-memory-row',
  props: {
    idx: Number,
    num: String,
    reciteTime: String,
    eventHub: Object,
    notifyNext: Boolean,
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
  destroyed() {
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
      }, this.reciteTime || 400);

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
      if (this.notifyNext && this.eventHub) {
        this.eventHub.$emit('start', this.idx + 1);
      }
    },
  },
};
</script>
