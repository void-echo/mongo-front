<!--suppress HtmlDeprecatedAttribute -->
<template>
  <div>
    <el-table
        :data="my_data"
        stripe
        style="width: 100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); border-radius: 30px">
      <el-table-column fixed label="教师号" prop="tid" sortable></el-table-column>
      <el-table-column fixed label="姓名" prop="name" sortable></el-table-column>
      <el-table-column fixed label="性别" prop="sex" sortable></el-table-column>
      <el-table-column fixed label="年龄" prop="age" sortable></el-table-column>
      <el-table-column fixed label="学院" prop="dname" sortable></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="props">
          <el-button type="warning" @click="editShow(props.row,props.$index)">更新</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="更新数据" :visible="dialogTableVisible">
      <el-form :model="editObj">
        <el-form-item prop="tid">
          <el-input v-model="editObj.tid" placeholder="教师编号"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input  placeholder="姓名" v-model="editObj.name"></el-input>
        </el-form-item>
        <el-form-item prop="sex">
          <el-input  placeholder="性别" v-model="editObj.sex"></el-input>
        </el-form-item>
        <el-form-item prop="age">
          <el-input  placeholder="年龄" v-model="editObj.age"></el-input>
        </el-form-item>
        <el-form-item prop="dname">
          <el-input  placeholder="学院" v-model="editObj.dname"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {updateTeacher} from "@/api/getData";

export default {
  name: "update-teacher",
  data() {
    return {
      my_data: [],
      spring_boot_url_base: this.$spring_boot_api,
      dialogTableVisible: false,
      listIndex: '',
      editObj:{
        tid: '',
        name:'',
        sex:'',
        age:'',
        dname:''
      }
    };
  },
  mounted() {
    try {
      this.axiosGet_Config("/teacher/getAllTeachers", "GET", {}, {}, (res) => {
        this.my_data = res.data
        console.log(this.my_data[0])
      })
    } catch (err) {
      console.log('获取数据失败', err);
    }
  },

  methods: {
    editShow(row, _index) {
      //记录索引
      this.listIndex = _index;
      //记录数据
      this.editObj = row;
      //显示弹窗
      this.dialogTableVisible = true;
    },
    update() {
      let _index = this.listIndex
      //根据索引，赋值到list制定的数
      this.my_data[_index] = this.editObj;
      console.log(this.my_data[_index])
      //关闭弹窗
      this.dialogTableVisible = false;
      //更新数据
      let request = [this.my_data[this.listIndex]]
      console.log(request)
      updateTeacher(request)
      this.$message({
        type: 'success',
        message: '更新成功'
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