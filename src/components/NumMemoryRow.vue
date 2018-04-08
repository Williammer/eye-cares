<template>
  <li class="row-container">
    <span class="mem-number">{{ num }}</span>
    <button class="mem-play">Play</button>
  </li>
</template>

<style scoped lang="scss">
  .row-container {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    padding-left: 0;
    border-bottom: 1px solid #ececec;
    &:last-child {
      border-bottom: none;
    }

    .mem-number {
      font-size: 1.6rem;
      font-weight: bold;
      padding-left: 20px;
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
    num: Number,
  },
};
</script>
