<!--suppress HtmlDeprecatedAttribute -->
<template>
  <div>
    <el-input v-model="sid" placeholder="请输入学号"
              style="float: left;width: 15%;padding: 20px;margin-left: 300px"></el-input>
    <el-button type="primary" style="float: left;margin: 20px" @click="initData">搜索</el-button>
    <div style="clear: both"></div>
    <header v-show="table1show" class="admin_title">已选课程</header>
    <el-table
        :data="tableData"
        highlight-current-row
        :border="true"
        :stripe="true"
        v-show="table1show"
        style="width: 100%">
      <el-table-column
          property="cid"
          label="课程号"
      >
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="success">{{ props.row.cid }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
          property="cname"
          label="课程名"
      >
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="info">{{ props.row.cname }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          property="tid"
          label="教师编号">
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="danger">{{ props.row.tid }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          property="tname"
          label="教师姓名">
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="warning">{{ props.row.tname }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          property="score"
          label="得分">
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" color="#39d8ef">{{ props.row.score }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="更新" width="180">
        <template slot-scope="props">
          <el-button type="warning" @click="editShow(props.row,props.$index)">更新</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="clear: both"></div>
    <header v-show="table2show" class="admin_title">可选课程</header>
    <el-table
        :data="tableData2"
        highlight-current-row
        :border="true"
        :stripe="true"
        v-show="table2show"
        style="width: 100%">
      <el-table-column
          property="cid"
          label="课程号"
      >
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="success">{{ props.row.cid }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
          property="name"
          label="课程名"
      >
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="info">{{ props.row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          property="credit"
          label="学分">
        <template slot-scope="props">
          <el-tag effect="dark" size="medium" type="warning">{{ props.row.credit }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="选课" width="180">
        <template slot-scope="props">
          <el-button type="warning" @click="chooseCourse(props.row)">选课</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="更新数据" :visible="dialogTableVisible">
      <el-form :model="editObj">
        <el-form-item prop="tid">
          <el-input placeholder="教师编号" v-model="editObj.tid"></el-input>
        </el-form-item>
        <el-form-item prop="tname">
          <el-input placeholder="教师姓名" v-model="editObj.tname"></el-input>
        </el-form-item>
        <el-form-item prop="score">
          <el-input placeholder="得分" v-model="editObj.score"></el-input>
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
import {courseselection1, insertStudentCourse, updateStudentCourse} from "@/api/getData";

export default {
  name: "course-select",
  data() {
    return {
      my_data: [],
      spring_boot_url_base: this.$spring_boot_api,
      table1show: false,
      table2show: false,
      sid: '',
      tableData: [],
      tableData2: [],
      listIndex: '',
      dialogTableVisible: false,
      editObj: {
        cid: '', cname: '', tid: '', tname: '', score: '', _id: ''
      }
    };
  },

  methods: {
    initData() {
      this.axiosGet_Config(this.spring_boot_url_base + '/course-selection/get-by-sid', "GET", {sid: this.sid}, {}, (res) => {
        this.tableData = res.data
        this.table1show = true
      })
      this.axiosGet_Config(this.spring_boot_url_base + '/sql/get-available-courses-by-sid', "GET", {sid: this.sid}, {}, (res) => {
        this.tableData2 = res.data
        this.table2show = true
      })
    },

    async chooseCourse(row) {
      let data = JSON.parse(JSON.stringify(row))
      console.log(data)
      delete data._id;
      delete data.fcid;
      delete data.name;
      data.sid = this.sid
      // noinspection ES6MissingAwait
      insertStudentCourse([data])
      this.tableData = await courseselection1({sid: this.sid})
      this.$message({
        type: 'success',
        message: '选课成功'
      });
    },
    editShow(row, _index) {
      //记录索引
      this.listIndex = _index;
      //记录数据
      this.editObj = this.tableData[_index];
      console.log(this.editObj)
      //显示弹窗
      this.dialogTableVisible = true;
    },
    //
    update() {
      let _index = this.listIndex
      //根据索引，赋值到list制定的数
      this.tableData[_index] = this.editObj;
      //关闭弹窗
      this.dialogTableVisible = false;
      //更新数据
      let tem = this.tableData[this.listIndex];
      delete tem.cname;
      delete tem.tname;
      let request = [tem]
      updateStudentCourse(request)
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