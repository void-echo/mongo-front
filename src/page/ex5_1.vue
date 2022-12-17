<template>
    <div class="fillcontain">
        <meta  http-equiv="Cache-Control" content="no-cache,no-store,must-revlidate">
        <meta  http-equiv="Expires" content="O">
        <meta http-equiv="Pragma" content="no-cache">
        <div class="backgroud" >
            <img :src="imgUrl"  width="100%" height="100%"/>
        </div>
        <head-top></head-top>
        <el-input v-model="sid" placeholder="请输入学号" style="float: left;width: 15%;padding: 20px;margin-left: 300px"></el-input>
        <el-button type="primary" style="float: left;margin: 20px" @click="initData">搜索</el-button>
        <div style="clear: both"></div>
        <header v-show="table1show" class="admin_title">已选课程</header>
        <el-table
            :data="tableData"
            highlight-current-row
            border="true"
            stripe="true"
            v-show="table1show"
            style="width: 100%">
            <el-table-column
                property="cid"
                label="课程号"
            >
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="success">{{props.row.cid}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column
                property="cname"
                label="课程名"
            >
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="info">{{props.row.cname}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                property="tid"
                label="教师编号">
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="danger">{{props.row.tid}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                property="tname"
                label="教师姓名">
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="warning">{{props.row.tname}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                property="score"
                label="得分">
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" color="#39d8ef">{{props.row.score}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="更新" width="180">
                <template slot-scope="props">
                    <el-button type="warning"  @click="editShow(props.row,props.$index)">更新</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="clear: both"></div>
        <header v-show="table2show" class="admin_title">可选课程</header>
        <el-table
            :data="tableData2"
            highlight-current-row
            border="true"
            stripe="true"
            v-show="table2show"
            style="width: 100%">
            <el-table-column
                property="cid"
                label="课程号"
            >
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="success">{{props.row.cid}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column
                property="name"
                label="课程名"
            >
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="info">{{props.row.name}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                property="credit"
                label="学分">
                <template slot-scope="props">
                    <el-tag effect="dark" size="medium" type="warning">{{props.row.credit}}</el-tag>
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
                    <el-input  placeholder="教师编号"  v-model="editObj.tid"></el-input>
                </el-form-item>
                <el-form-item prop="tname">
                    <el-input  placeholder="教师姓名"  v-model="editObj.tname"></el-input>
                </el-form-item>
                <el-form-item prop="score">
                    <el-input  placeholder="得分"  v-model="editObj.score"></el-input>
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
import headTop from '../components/headTop'
import {courseselection1, courseselection2, insertStudentCourse, updateStudnet,updateStudentCourse} from '../api/getData'
export default {
    data(){
        return {
            imgUrl:require("../../src/assets/img/img/bg.png"),
            table1show:false,
            table2show:false,
            sid:'',
            tableData: [
            ],
            tableData2:[],
            listIndex:'',
            dialogTableVisible:false,
            editObj:{
                cid:'',cname:'',tid:'',tname:'',score:'',_id:''
            }
        }
    },
    components: {
        headTop,
    },
    created(){
    },
    methods: {
        async initData(){
            try{
                const res = await courseselection1({sid:this.sid})
                this.tableData=res
                console.log(this.tableData)
                const res1=await courseselection2({sid:this.sid})
                this.tableData2=res1
                this.table1show=true
                this.table2show=true
            }catch(err){
                console.log('获取数据失败', err);
            }
        },
        async chooseCourse(row){
            let data=JSON.parse(JSON.stringify(row))
            delete data._id;
            delete data.fcid;
            delete data.name;
            data.sid=this.sid
            insertStudentCourse([data])
            const res = await courseselection1({sid:this.sid})
            this.tableData=res
            this.$message({
                type: 'success',
                message: '选课成功'
            });
        },
        editShow(row,_index){
            //记录索引
            this.listIndex=_index;
            //记录数据
            this.editObj=this.tableData[_index];
            console.log(this.editObj)
            //显示弹窗
            this.dialogTableVisible=true;
        },update(){
            let _index=this.listIndex
            //根据索引，赋值到list制定的数
            this.tableData[_index]=this.editObj;
            //关闭弹窗
            this.dialogTableVisible=false;
            //更新数据
            let tem=this.tableData[this.listIndex];
            delete tem.cname;
            delete tem.tname;
            let request=[tem]
            updateStudentCourse(request)
            this.$message({
                type: 'success',
                message: '更新成功'
            });
        }
    },
}
</script>

<style lang="less">
@import '../style/mixin';
.table_container{
    padding: 20px;
}    .backgroud{
         width:100%;
         height:100%;  /**宽高100%是为了图片铺满屏幕 */
         z-index:-1;
         position: absolute;
     }
.front{
    z-index:1;
    position: absolute;
    //background-color: #2c3e50;
}
.admin_title{
    margin-top: 15px;
    margin-bottom: 20px;
    margin-left: 50px;
    .sc(35px, #666);
    text-align: center;
    float: left;
}
</style>
