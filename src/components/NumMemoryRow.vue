<template>
  <li class="row-container" v-if="answered === true">
    <span class="mem-verified">
      The number is {{verified === true ? 'correct': 'wrong'}}!
    </span>
    <v-button
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
      placeholder="Input the number"
      @keyup.enter="startVerify"
    />
  </li>
  <li class="row-container" v-else>
    <span class="mem-number" :class="{reciting}">{{ num }}</span>
    <v-button
      v-if="!reciting"
      class="mem-play-btn"
      @click="startRecite"
    >
      Play
    </v-button>
  </li>
</template>

<style scoped lang="scss">
  .row-container {
    list-style: none;
    padding: 6px 12px;
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
      line-height: 20px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      padding: 4px 6px;
    }
    .mem-verified {
      margin-right: 10px;
    }
    .mem-verified, .mem-answer {
      font-size: 20px;
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
