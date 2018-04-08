<template>
  <li class="row-container">
    <span class="mem-number" :class="{reciting}">{{ num }}</span>
    <button class="mem-play" @click="startRecite">Play</button>
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

    .mem-play {
      cursor: pointer;
    }
  }
</style>

<script>
export default {
  name: 'num-memory-row',
  props: {
    num: String,
    reciteTime: String,
  },
  data() {
    return {
      reciting: false,
    };
  },
  methods: {
    startRecite() {
      this.reciteTimer = setTimeout(() => {
        this.onReciteEnded();
      }, this.reciteTime || 1000);

      this.reciting = true;
    },

    onReciteEnded() {
      this.resetRecite();
    },

    resetRecite() {
      this.reciting = false;
      clearTimeout(this.reciteTimer);
    },
  },
};
</script>
