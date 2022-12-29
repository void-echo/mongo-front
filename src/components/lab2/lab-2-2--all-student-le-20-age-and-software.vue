<template>
  <div>
    <el-table
        :data="students"
        stripe
        style="width: 100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <el-table-column fixed label="学号" prop="sid" sortable></el-table-column>
      <el-table-column fixed label="姓名" prop="name" sortable></el-table-column>
      <el-table-column fixed label="性别" prop="sex" sortable></el-table-column>
      <el-table-column fixed label="年龄" prop="age" sortable></el-table-column>
      <el-table-column fixed label="生日" prop="birthday" sortable></el-table-column>
      <el-table-column fixed label="学院" prop="dname" sortable></el-table-column>
      <el-table-column fixed label="班级" prop="classId" sortable></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "lab-2-2--all-student-le-20-age-and-software",
  data() {
    return {
      spring_boot_url_base: this.$spring_boot_api,
      students: []
    }
  },

  mounted() {
    this.axiosGet_Config("/student/findSoftwareAndAgeLessThan", "GET", {}, {}, (res) => {
      this.students = res.data
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