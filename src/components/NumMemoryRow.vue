<template>
  <li class="row-container" v-if="answered === true">
    <span class="mem-verified">
      The number is {{verified === true ? 'correct': 'wrong'}}!
    </span>
    <v-button
      type="primary"
      v-if="verified === false"
      v-focus
      class="mem-play-btn"
      @click="startRecite">
        Restart
    </v-button>
  </li>
  <li class="row-container" v-else-if="recited === true">
    <v-input
      size="large"
      v-focus
      class="mem-answer"
      v-model="answer"
      placeholder="Input the number"
      @keyup.enter="startVerify"
    >
    </v-input>
    <v-button type="success" class="mem-answer-btn" @click="startVerify">Submit</v-button>
  </li>
  <li class="row-container" v-else>
    <span class="mem-number" :class="{reciting}">{{ num }}</span>
    <v-button
      v-if="!reciting"
      type="primary"
      class="mem-play-btn"
      @click="startRecite"
    >
      Play
    </v-button>
  </li>
</template>

<style scoped lang="scss">
  .row-container {
    width: max-content;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    border: 1px solid #ececec;

    .mem-number {
      font-size: 20px;
      font-weight: bold;
      display: none;
      &.reciting {
        display: inline;
      }
    }

    .mem-play-btn, .mem-answer-btn {
      cursor: pointer;
    }

    .mem-answer {
      width: 180px;
    }
    .mem-verified, .mem-answer {
      font-size: 20px;
      font-weight: bold;
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
    notifyNext: Boolean,
  },
  inject: ['eventHub'],
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
      if (this.notifyNext && this.eventHub) {
        this.eventHub.$emit('start', this.idx + 1);
      }
    },
  },
};
</script>
