<template>
  <!-- TODO: encapsulate the vue-beauty components into separate components,
  which is easy to maintain/migrate -->
  <div id="app">
    <v-layout>
      <v-sider width=180 breakpoint="xs" :collapsed-width=0>
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
        <div class="header">{{this.$route.name}}</div>
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

<script>
export default {
  data() {
    return {
      menuData: [
        {
          name: 'Number Memory Game',
          path: '/',
        },
        {
          name: 'More',
          path: '/more',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-size: 14px;
  font-family: 'PT sans', Elena, ElenaInitial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  display: flex;
  a {
    color: #21947d;
    font-weight: bold;
  }
  .ant-layout {
    flex: inherit;
  }
  .ant-layout-sider {
    background: #fff;
    box-shadow: 1px 0px 4px #ccc;
  }
  .ant-layout-sider-zero-width-trigger {
    top: 0;
    right: -38px;
    z-index: 1;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #0c434c;
    border-radius: 0;
    font-size: 24px;
  }

  .header {
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
    background: #0c434c;
    height: 40px;
  }
  .logo {
    height: 60px;
    margin: 0 auto;
    background: url('../public/img/icons/apple-touch-icon-60x60.png') center
      center no-repeat;
  }
  .menu {
    a {
      display: block;
      color: #2fa38c;
      padding: 10px 0;
      text-decoration: none;
    }
    .active {
      color: #fff;
      background-color: #2fa38c;
    }
  }
  .main {
    position: relative;
    background: #fff;
    box-shadow: 0px 0px 4px #ccc;
  }
}
</style>
