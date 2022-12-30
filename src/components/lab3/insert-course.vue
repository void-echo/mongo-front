<template>
  <div>
    <el-card style="width: 100%; height: 800px; margin-bottom: 0; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <div>
        <el-form class="form_container" :model="data" ref="ChangeForm">
          <el-form-item prop="cid">
            <el-input v-model="data.cid" placeholder="课程号"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input placeholder="课程名" v-model="data.name"></el-input>
          </el-form-item>
          <el-form-item prop="fcid">
            <el-input placeholder="先行课程" v-model="data.fcid"></el-input>
          </el-form-item>
          <el-form-item prop="credit">
            <el-input placeholder="学分" v-model="data.credit"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ChangeForm')" class="submit_btn">添加课程</el-button>
          </el-form-item>
          <el-form-item>
            <el-upload action="" :before-upload="beforeUpload">
              <el-button type="primary" class="submit_btn">上传Excel文件</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import {insertCourse} from '@/api/getData'

export default {
  name: "insert-course",

  data() {
    return {
      my_data: [],
      spring_boot_url_base: this.$spring_boot_api,
      data: {
        cid: '',
        name: '',
        fcid: '',
        credit: ''
      },
    };
  },

  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.data.credit = parseInt(this.data.credit)
          this.data = [this.data]
          console.log(this.data)
          await insertCourse(this.data)
          this.$message({
            type: 'success',
            message: '添加成功'
          });
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的信息',
            offset: 100
          });
          return false;
        }
      });
    },
    readXLSX(file) {
      let nameSplit = file.name.split('.')
      let format = nameSplit[nameSplit.length - 1]
      if (!['xlsx', 'csv'].includes(format)) {
        return false
      }
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = (evt) => {
          let data = evt.target.result
          let workbook = XLSX.read(data, {type: 'binary'})
          resolve(workbook)
        }
      })
    },
    async beforeUpload(file) {
      const workbook = await this.readXLSX(file)
      let json_data = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])
      console.log(json_data);
      await insertCourse(json_data)
      this.$message({
        type: 'success',
        message: '添加成功'
      });
    },


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