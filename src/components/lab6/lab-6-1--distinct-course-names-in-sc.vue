<template>
  <div>
    <h2>Lab 6-1: Distinct Course Names in SC</h2>
    <h2>{{ this.spring_boot_url_base }}</h2>
  </div>
</template>

<script>
import placeHolder from "@/components/place-holder.vue";
export default {
  name: "lab-6-1--distinct-course-names-in-sc",
  data() {
    return {
      spring_boot_url_base: this.$spring_boot_api,

    }
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