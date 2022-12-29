<template>
  <div>
    <el-table
        :data="student_data"
        stripe
        style="width: 100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <el-table-column fixed label="学号" prop="sid" sortable></el-table-column>
      <el-table-column fixed label="姓名" prop="name" sortable></el-table-column>
      <el-table-column fixed label="性别" prop="sex" sortable></el-table-column>
      <el-table-column fixed label="年龄" prop="age" sortable></el-table-column>
      <el-table-column fixed label="生日" prop="birthday" sortable></el-table-column>
      <el-table-column fixed label="学院" prop="dname" sortable></el-table-column>
      <el-table-column fixed label="班级" prop="classId" sortable></el-table-column>
      <el-table-column fixed label="选课数" prop="selectedCourseNum" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "lab-6-3--most-hardworking-students-top10",
  data() {
    return {
      spring_boot_url_base: this.$spring_boot_api,
      student_data: [],
      /*
      "sid": "200900133240",
      "name": "白龙",
      "sex": "女",
      "age": 24,
      "birthday": "1988年02月05日",
      "dname": "公共卫生学院",
      "classId": "2011",
      "selectedCourseNum": 145
      */
      query: "/sql/busy-student-top-10"
    }
  },

  mounted() {
    this.axiosGet_Config("/sql/busy-student-top-10", "GET", {}, {}, (res) => {
      this.student_data = res.data
      // print the data
      console.log(this.student_data)
    })
  },

  methods: {
    notNil(obj) {
      return !(obj === null || obj === undefined)
    },

    errorMsg(msg) {
      this.$message({
        message: msg,
        showClose: true,
        type: "error"
      })
    },

    serverErr() {
      this.errorMsg("服务器内部错误, 请稍后重试")
    },

    successMsg(msg) {
      this.$message({
        message: msg,
        showClose: true,
        type: "success"
      })
    },


    axiosGet_Header(url, httpType, params, _header, lambdaThen) {
      // example:
      //   this.axiosGet_Header("running/driverInfo", "GET", {
      //       driverId: obj["ID"]
      //     }, {}, (response) => {})
      axios({
        url: url,
        method: httpType,
        headers: _header,
        baseURL: this.spring_boot_url_base,
        params: params
      }).then(lambdaThen);
    },

    axiosGet_Config(url, httpType, params, _config, lambdaThen) {
      // example:
      //   this.axiosGet_Config("dispute/get-1-by-bill-id", "GET", {
      //       billId: b["id"]
      //     }, {}, (res) => {})
      axios({
        url: url,
        method: httpType,
        config: _config,
        baseURL: this.spring_boot_url_base,
        params: params
      }).then(lambdaThen);
    },

  }
}
</script>

<style scoped>

</style>