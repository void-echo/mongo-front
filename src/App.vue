<template>
  <div id="app">
    <div class="root">
      <el-container>
        <el-aside width="14%" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
          <div class="left_menu">
            <el-row class="my_row">
              <el-col>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    style="height: 100vh">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>导航一</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1">Option 1</el-menu-item>
                      <el-menu-item index="1-2">Option 2</el-menu-item>
                      <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>导航一</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1">Option 1</el-menu-item>
                      <el-menu-item index="1-2">Option 2</el-menu-item>
                      <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>导航一</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1">Option 1</el-menu-item>
                      <el-menu-item index="1-2">Option 2</el-menu-item>
                      <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4"> <!-- @click="handleClick" -->
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>导航一</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1">Option 1</el-menu-item>
                      <el-menu-item index="1-2">Option 2</el-menu-item>
                      <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>

        </el-aside>


        <el-main style="height: 100%; margin-top: -18px">
          <div class="main">
            <div id="mainContainer" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">

            </div>
          </div>

        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-image: url("./assets/work_2.svg");
}

body, html {
  height: 100%;
}

#mainContainer {
  width: 100%;
  height: 750px;
}
</style>
