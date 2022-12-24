<template>
  <div id="app">
    <div class="root">
      <el-container>
        <el-aside width="20%" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
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
                      <span>实验2</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1" class="menu-item" @click="goto('/lab-2-1--all-student-le-20-age')">
                        年龄小于20岁的所有学生
                      </el-menu-item>
                      <el-menu-item index="1-2" class="menu-item" @click="goto('/lab-2-2--all-student-le-20-age-and-software')">
                        年龄小于20岁的软件学生
                      </el-menu-item>
                      <el-menu-item index="1-3" class="menu-item">
                        找出学生表中所有的学生
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验3</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1" class="menu-item">Option 1</el-menu-item>
                      <el-menu-item index="1-2" class="menu-item">Option 2</el-menu-item>
                      <el-menu-item index="1-3" class="menu-item">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验4</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1" class="menu-item">Option 1</el-menu-item>
                      <el-menu-item index="1-2" class="menu-item">Option 2</el-menu-item>
                      <el-menu-item index="1-3" class="menu-item">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4"> <!-- @click="handleClick" -->
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验5</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1" class="menu-item">Option 1</el-menu-item>
                      <el-menu-item index="1-2" class="menu-item">Option 2</el-menu-item>
                      <el-menu-item index="1-3" class="menu-item">Option 3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="5"> <!-- @click="handleClick" -->
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验6</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item index="1-1" class="menu-item">Option 1</el-menu-item>
                      <el-menu-item index="1-2" class="menu-item">Option 2</el-menu-item>
                      <el-menu-item index="1-3" class="menu-item">Option 3</el-menu-item>
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
              <router-view></router-view>
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
  mounted() {
    // go to /place-holder
    if (this.$route.path !== '/place-holder') {
      this.$router.push('/place-holder').catch();
    }
  },

  data() {
    return {
      private_: {
        // private data
      }
    }
  },

  methods: {
    goto(path) {
      if (this.$route.path !== path) {
        this.$router.push(path).catch();
      }
    }
  }
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
  /*background-color: white;*/
  /*  background transparent 50% */
  background-color: rgba(255, 255, 255, 0.5);

}

.menu-item {
  font-size: 10px;
  font-weight: 50;
  color: #000120;
  /*  font from left to right*/
  text-align: left;
}
</style>
