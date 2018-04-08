<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  color: #42b983;
  margin: 0;
}
</style>
