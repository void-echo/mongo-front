<template>
  <div>
    <el-table
        :data="distinct_course_names_in_sc"
        stripe
        style="width: 100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <el-table-column
          label="课程名"
          prop="course_name"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import placeHolder from "@/components/place-holder.vue";

export default {
  name: "lab-6-1--distinct-course-names-in-sc",
  data() {
    return {
      spring_boot_url_base: this.$spring_boot_api,
      placeHolder: placeHolder,
      // lab6_1_distinct_course_names_in_sc: []
      distinct_course_names_in_sc: []
    }
  },
  mounted() {
    this.axiosGet_Config("/sql/find-distinct-all-course-names-in-student-course", "GET", {}, {}, (res) => {
      this.distinct_course_names_in_sc = res.data
    })
  },

  methods: {
    notNil(obj) {
      return placeHolder.methods.notNil(obj)
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

  },
}
</script>

<style scoped>

</style>