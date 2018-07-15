<template>
  <div id="app">
    <v-layout>
      <v-sider breakpoint="xs" :collapsed-width="0">
          <div class="logo"></div>
          <div class="menu">
            <router-link
              v-for="data in menuData"
              :key="data.name"
              :to="data.path"
              active-class="active"
              exact
            >
              {{data.name}}
            </router-link>
          </div>
      </v-sider>
      <v-layout class="main">
        <v-content>
          <router-view/>
        </v-content>
        <v-footer class="footer">
          <div class="credits">
            Icons made by
            <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>
            and
            <a href="http://www.freepik.com" title="Freepik">Freepik</a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            is licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </div>
        </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<style lang="scss">
#app {
  font-size: 14px;
  font-family: Elena, ElenaInitial;
  /* font-family: Avenir, Helvetica, Arial, sans-serif */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  display: flex;
  .ant-layout {
    flex: inherit;
  }
  .ant-layout-sider-zero-width-trigger {
    top: 0;
    right: -32px;
    width: 32px;
    height: 34px;
    line-height: 34px;
    background: #444;
    border-radius: 0;
    font-size: 20px;
  }
  .logo {
    height: 60px;
    margin: 0 auto;
    background: url("../public/img/icons/apple-touch-icon-60x60.png") center center no-repeat;
  }
  .menu {
    a {
      color: #FFF;
      display: block;
      padding: 10px 0;
      text-decoration: none;
    }
    .active {
      font-weight: bold;
      background-color: #108ee9;
    }
  }
  .main {
    background: #f4f4f4;
  }
}
</style>
<script>
export default {
  data() {
    return {
      menuData: [{
        name: 'Number Memory',
        path: '/',
      }, {
        name: 'More',
        path: '/more',
      }],
    };
  },
};
</script>
