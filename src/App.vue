<template>
  <div id="app">
    <div class="root">
      <el-container>
        <el-aside style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px" width="20%">
          <div class="left_menu">
            <el-row class="my_row">
              <el-col>
                <el-menu
                    class="el-menu-vertical-demo"
                    default-active="2"
                    style="height: 100vh">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验2</span>
                    </template>

                    <el-menu-item-group>
                      <el-menu-item class="menu-item" index="1-1" @click="goto('/lab-2-1--all-student-le-20-age')">
                        年龄小于20岁的所有学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-2"
                                    @click="goto('/lab-2-2--all-student-le-20-age-and-software')">年龄小于20岁的软件学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-3" @click="goto('/lab-2-3--all-student')">
                        所有的学生信息
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-4"
                                    @click="goto('/lab-2-4--get-all-student-names-and-ages')">学生的姓名和年龄
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-5"
                                    @click="goto('/lab-2-5--get-all-student-names-and-sexes')">学生的姓名和性别
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-6" @click="goto('/lab-2-6--all-courses')">所有课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-7" @click="goto('/lab-2-7--find-one-course-name')">
                        fcid为300001的课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-8"
                                    @click="goto('/lab-2-8--find-male-teacher-older-than')">男性且年龄大于XX的教师
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-9" @click="goto('/lab-2-9--all-male-teachers')">
                        所有男性教师
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-10" @click="goto('/lab-2-10--all-cs-department-t')">
                        CS学院所有教师
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验3</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item class="menu-item" index="1-1" @click="goto('/insert-course')">插入课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-2" @click="goto('/insert-student')">插入学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-3" @click="goto('/insert-teacher')">插入教师
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验4</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item class="menu-item" index="1-1" @click="goto('/update-course')">更新课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-2" @click="goto('/update-student')">更新学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-3" @click="goto('/update-teacher')">更新教师
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4"> <!-- @click="handleClick" -->
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验5</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item class="menu-item" index="1-1" @click="goto('/course-select')">
                        选课系统
                      </el-menu-item>

                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="5"> <!-- @click="handleClick" -->
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>实验6</span>
                    </template>

                    <el-menu-item-group>

                      <el-menu-item class="menu-item" index="1-1"
                                    @click="goto('/lab-6-1--distinct-course-names-in-sc')">选课系统的所有课程名
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-2" @click="goto('/lab-6-2--gpa-best-10-students')">
                        GPA最高的10个学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-3"
                                    @click="goto('/lab-6-3--most-hardworking-students-top10')">选课最多的10个学生
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-4" @click="goto('/lab-6-4--best-score-and-c-of-each-s')">
                        每个学生的最好课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-5"
                                    @click="goto('/lab-6-5--gpa-rank-level-overview-of-each-s')">每个学生的GPA情况
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-6" @click="goto('/lab-6-6--avg-gpa-and-sel-s-num-of-c')">
                        每个课程的选课数/GPA
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-7" @click="goto('/lab-6-7--best-student-of-each-c')">
                        每个课程的第一名
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-8" @click="goto('/lab-6-8--best-c-top-10')">
                        给分最高的10个课程
                      </el-menu-item>
                      <el-menu-item class="menu-item" index="1-9" @click="goto('/lab-6-9--popular-c-top-10')">
                        选课最多的10个课程
                      </el-menu-item>
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

/* noinspection ALL */
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
