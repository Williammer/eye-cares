<template>
  <div id="app">
    <v-layout>
      <v-sider breakpoint="xs" :collapsed-width="0">
          <div class="logo"></div>
          <v-menu theme="dark" mode="inline" :data="menuData">
              <template slot-scope="{data}">
                <router-link :to="data.path">{{data.name}}</router-link>
              </template>
          </v-menu>
      </v-sider>
      <v-layout>
        <v-content>
          <router-view/>
        </v-content>
        <v-footer>
          <div class="credits">
            Icons made by
            <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .logo {
    height: 64px;
    margin: 0 auto;
    background: url("../public/img/icons/favicon-64x64.png") center center no-repeat;
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
  .ant-layout {
    flex: inherit;
  }
  .ant-menu {
    a {
      font-size: 14px;
    }
    .ant-menu-item-selected > a {
      font-weight: bold;
    }
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
