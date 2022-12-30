<template>
  <div>
    <el-table
        :data="my_data"
        stripe
        style="width: 100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <el-table-column fixed label="课程名" prop="course_name" sortable></el-table-column>
      <el-table-column fixed label="课程号" prop="cid" sortable></el-table-column>
      <el-table-column fixed label="选课人数" prop="count" sortable></el-table-column>
      <el-table-column fixed label="平均分" prop="avgScore" sortable></el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  // /sql/each-course-enroll-student-num-and-avg-score
  name: "lab-6-6--avg-gpa-and-sel-s-num-of-c",
  data() {
    return {
      my_data: [],
      // "avgScore": 71.92366412213741,
      // "course_name": "西方歌剧简史与名作赏析",
      // "count": 131,
      // "cid": "300138"
      spring_boot_url_base: this.$spring_boot_api,
    };
  },

  mounted() {
    this.axiosGet_Config("/sql/each-course-enroll-student-num-and-avg-score", "GET", {}, {}, (res) => {
      this.my_data = res.data
      // avgScore keep 2 decimal places
      this.my_data.forEach((item) => {
        item.avgScore = item.avgScore.toFixed(2)
      })
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