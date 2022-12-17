<template>
    <div class="fillcontain">
        <meta  http-equiv="Cache-Control" content="no-cache,no-store,must-revlidate">
        <meta  http-equiv="Expires" content="O">
        <meta http-equiv="Pragma" content="no-cache">
        <div class="backgroud" >
            <img :src="imgUrl"  width="100%" height="100%"/>
        </div>
        <head-top></head-top>
            <el-table
                :data="tableData"
                highlight-current-row
                border="true"
                stripe="true"
                style="width: 100%">
                <el-table-column
                    property="sid"
                    label="学号">
                    <template slot-scope="props">
                        <el-tag
                            effect="dark"
                            size="medium"
                        >{{props.row.sid}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    property="name"
                    label="姓名"
                >
                </el-table-column>

                <el-table-column
                    property="sex"
                    label="性别"
                >
                </el-table-column>
                <el-table-column
                    property="age"
                    label="年龄">
                </el-table-column>
                <el-table-column
                    property="birthday"
                    label="生日">
                </el-table-column>
                <el-table-column
                    property="dname"
                    label="学院">
                </el-table-column>
                <el-table-column
                    property="class"
                    label="班级">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="props">
                        <el-button type="warning" @click="editShow(props.row,props.$index)">更新</el-button>
                    </template>
                </el-table-column>

            </el-table>
        <el-dialog title="更新数据" :visible="dialogTableVisible">
            <el-form :model="editObj">
                <el-form-item prop="sid">
                    <el-input v-model="editObj.sid" placeholder="学号"><span>dsfsf</span></el-input>
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
                <el-form-item prop="birthday">
                    <el-input  placeholder="出生日期" v-model="editObj.birthday"></el-input>
                </el-form-item>
                <el-form-item prop="dname">
                    <el-input  placeholder="学院" v-model="editObj.dname"></el-input>
                </el-form-item>
                <el-form-item prop="class">
                    <el-input  placeholder="班级" v-model="editObj.class"></el-input>
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
import {select3,updateStudnet} from '../api/getData'
export default {
    data(){
        return {
            imgUrl:require("../../src/assets/img/img/bg.png"),
            tableData: [
            ],
            dialogTableVisible:false,
            listIndex: '',
            editObj:{
                sid: '',
                name:'',
                sex:'',
                age:'',
                birthday:'',
                dname:'',
                class:''
            }
        }
    },
    components: {
        headTop,
    },
    created(){
        this.initData();
    },
    methods: {
        async initData(){
            try{
                const res = await select3()
                this.tableData=res
                console.log(this.tableData[0])
            }catch(err){
                console.log('获取数据失败', err);
            }
        },
        editShow(row,_index){
            //记录索引
            this.listIndex=_index;
            //记录数据
            this.editObj=row;
            //显示弹窗
            this.dialogTableVisible=true;
        },
        update(){
            let _index=this.listIndex
            //根据索引，赋值到list制定的数
            this.tableData[_index]=this.editObj;
            console.log(this.tableData[_index])
            //关闭弹窗
            this.dialogTableVisible=false;
            //更新数据
            let request=[this.tableData[this.listIndex]]
             updateStudnet(request)
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
</style>
