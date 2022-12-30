<template>
  <div>
    <el-card style="width: 100%; height: 800px; margin-bottom: 0; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <div>
        <el-form class="form_container" :model="data" ref="ChangeForm">
          <el-form-item prop="tid">
            <el-input v-model="data.tid" placeholder="教师编号"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input  placeholder="姓名" v-model="data.name"></el-input>
          </el-form-item>
          <el-form-item prop="sex">
            <el-input  placeholder="性别" v-model="data.sex"></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input  placeholder="年龄" v-model="data.age"></el-input>
          </el-form-item>
          <el-form-item prop="dname">
            <el-input  placeholder="学院" v-model="data.dname"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ChangeForm')" class="submit_btn">添加教师</el-button>
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
import {insertTeacher} from '@/api/getData'

export default {
  name: "insert-teacher",
  data() {
    return {
      my_data: [],
      spring_boot_url_base: this.$spring_boot_api,
      data: {
        tid: '',
        name:'',
        sex:'',
        age:'',
        dname:''
      },
    };
  },

  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.data.age = parseInt(this.data.age)
          this.data = [this.data]
          console.log(this.data)
          await insertTeacher(this.data)
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
      await insertTeacher(json_data)
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