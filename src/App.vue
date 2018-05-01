<template>
  <div id="app">
    <div id="nav">
      <div class="logo"></div>
      <router-link to="/">Number Memory</router-link>
      <router-link to="/more">More</router-link>
    </div>
    <router-view/>
    <footer>
      <div class="credits">
        Icons made by
        <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  margin-top: 20px;
  #nav {
    padding: 0 20px;
    a {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
    .logo {
      width: 64px;
      height: 64px;
      background: url("../public/img/icons/favicon-64x64.png");
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    .credits {
      line-height: 2;
      margin: 0 10px;
      font-size: 14px;
    }
  }
}
</style>
