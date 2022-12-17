<template>
    <div class="manage_page fillcontain" >
        <meta  http-equiv="Cache-Control" content="no-cache,no-store,must-revlidate">
        <meta  http-equiv="Expires" content="O">
        <meta http-equiv="Pragma" content="no-cache">

        <el-row style="height: 100%;">
            <el-col :span="4"  style="min-height: 100%; background-color: #e2effe;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#ffffff" text-color="black" router>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-search"></i>实验二</template>
                        <el-menu-item index="ex2_1">找出年龄小于20的所有学生</el-menu-item>
                        <el-menu-item index="ex2_2">找出年龄小于20且是软件学院的学生</el-menu-item>
                        <el-menu-item index="ex2_3">找出学生关系中的所有学生</el-menu-item>
                        <el-menu-item index="ex2_4">求所有学生的姓名、年龄</el-menu-item>
                        <el-menu-item index="ex2_5">找出年龄小于20岁的姓名、性别</el-menu-item>
                        <el-menu-item index="ex2_6">检索所有课程情况</el-menu-item>
                        <el-menu-item index="ex2_7">检索先行课为300001的课程名</el-menu-item>
                        <el-menu-item index="ex2_8">找出年龄大于50的男老师</el-menu-item>
                        <el-menu-item index="ex2_9">找出所有男老师</el-menu-item>
                        <el-menu-item index="ex2_10">找出CS学院的老师</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-search"></i>实验三</template>
                        <el-menu-item index="ex3_1">增加学生</el-menu-item>
                        <el-menu-item index="ex3_2">增加教师</el-menu-item>
                        <el-menu-item index="ex3_3">增加课程</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-search"></i>实验四</template>
                        <el-menu-item index="ex4_1" >更新学生</el-menu-item>
                        <el-menu-item index="ex4_2">更新教师</el-menu-item>
                        <el-menu-item index="ex4_3">更新课程</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-search"></i>实验五</template>
                        <el-menu-item index="ex5_1">选课</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-search"></i>实验六</template>
                        <el-menu-item index="ex6_1">列出student中出现的所有课程名称（distinct）</el-menu-item>
                        <el-menu-item index="ex6_2">找出平均成绩排前十的学生</el-menu-item>
                        <el-menu-item index="ex6_3">找出选课数目排名前十的学生</el-menu-item>
                        <el-menu-item index="ex6_4">找出每位同学最高成绩和课程</el-menu-item>
                        <el-menu-item index="ex6_5">求每位同学的成绩分布</el-menu-item>
                        <el-menu-item index="ex6_6">求每门课程的选课人数和平均成绩</el-menu-item>
                        <el-menu-item index="ex6_7">求每门课程的最高成绩以及学生名</el-menu-item>
                        <el-menu-item index="ex6_8">求平均成绩前十的课程</el-menu-item>
                        <el-menu-item index="ex6_9">求选课人数前十的课程</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: auto;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {

		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
