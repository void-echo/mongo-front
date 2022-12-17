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

                property="cid"
                label="课程号"
            >
                <template slot-scope="props">
                    <el-tag
                        effect="dark"
                        size="medium"
                    >{{props.row.cid}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                property="name"
                label="课程名"
            >
            </el-table-column>

            <el-table-column
                property="credit"
                label="学分"
            >
            </el-table-column>
            <el-table-column
            property="fcid"
            label="先行课"
        >
            <template slot-scope="props">
                <el-tag effect="dark" size="medium" type="info">{{props.row.fcid}}</el-tag>
            </template>
        </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="props">
                    <el-button type="warning" @click="editShow(props.row,props.$index)">更新</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-dialog title="更新数据" :visible="dialogTableVisible">
            <el-form :model="editObj">
                <el-form-item prop="cid">
                    <el-input v-model="editObj.cid" placeholder="课程号"><span>dsfsf</span></el-input>
                </el-form-item>
                <el-form-item prop="name">
                    <el-input  placeholder="课程名" v-model="editObj.name"></el-input>
                </el-form-item>
                <el-form-item prop="fcid">
                    <el-input  placeholder="先行课程" v-model="editObj.fcid"></el-input>
                </el-form-item>
                <el-form-item prop="credit">
                    <el-input  placeholder="学分" v-model="editObj.credit"></el-input>
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
import {select6,updateCourse} from '../api/getData'
export default {
    data(){
        return {
            imgUrl:require("../../src/assets/img/img/bg.png"),
            tableData: [
            ],
            dialogTableVisible:false,
            listIndex: '',
            editObj:{
                cid: '',
                name:'',
                fcid:'',
                credit:''
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
                const res = await select6()
                this.tableData=res
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
        },update(){
            let _index=this.listIndex
            //根据索引，赋值到list制定的数
            this.tableData[_index]=this.editObj;
            //关闭弹窗
            this.dialogTableVisible=false;
            //更新数据
            let request=[this.tableData[this.listIndex]]
             updateCourse(request)
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
