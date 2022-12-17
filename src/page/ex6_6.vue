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
                    property="cname"
                    label="课程名"
                >
                </el-table-column>

                <el-table-column
                    property="count"
                    label="选修人数"
                >
                </el-table-column>
                <el-table-column
                    property="avgscore"
                    label="平均成绩"
                >

                </el-table-column>
            </el-table>

        </div>

</template>

<script>
import headTop from '../components/headTop'
import {statistic6} from '../api/getData'
export default {
    data(){
        return {
            imgUrl:require("../../src/assets/img/img/bg.png"),
            tableData: [
            ]
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
                const res = await statistic6()
                this.tableData=res
            }catch(err){
                console.log('获取数据失败', err);
            }
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
