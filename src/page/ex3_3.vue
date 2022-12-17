<template>
    <div class="fillcontain">
        <meta  http-equiv="Cache-Control" content="no-cache,no-store,must-revlidate">
        <meta  http-equiv="Expires" content="O">
        <meta http-equiv="Pragma" content="no-cache">
        <div class="backgroud" >
            <img :src="imgUrl"  width="100%" height="100%"/>
        </div>
        <head-top></head-top>

        <header class="admin_title">添加课程</header>

        <el-form class="form_contianer" :model="data" ref="ChangeForm">
            <el-form-item prop="cid">
                <el-input v-model="data.cid" placeholder="课程号"><span>dsfsf</span></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input  placeholder="课程名" v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item prop="fcid">
                <el-input  placeholder="先行课程" v-model="data.fcid"></el-input>
            </el-form-item>
            <el-form-item prop="credit">
                <el-input  placeholder="学分" v-model="data.credit"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ChangeForm')" class="submit_btn">添加课程</el-button>
            </el-form-item>
            <el-form-item>
                <el-upload action="" :before-upload="beforeUpload">
                    <el-button type="primary" class="submit_btn">上传Excel文件</el-button>
                </el-upload>            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    import headTop from '../components/headTop'
    import {insertCourse, insertStudnet} from '../api/getData'
    import XLSX from 'xlsx'
    function readXLSX (file) {
        let nameSplit = file.name.split('.')
        let format = nameSplit[nameSplit.length - 1]
        if (!['xlsx', 'csv'].includes(format)) {
            return false
        }
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = function (evt) {
                let data = evt.target.result // 读到的数据
                var workbook = XLSX.read(data, { type: 'binary' })
                resolve(workbook)
            }
        })
    }
    export default {
        data(){
            return {
                imgUrl:require("../../src/assets/img/img/bg.png"),
                data: {
                    cid: '',
                    name:'',
                    fcid:'',
                    credit:''
                },
                showLogin: true,
            }
        },

        components: {
            headTop,
        },
        computed: {
        },
        methods: {
            async submitForm(formName) {
              this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.data.credit=parseInt(this.data.credit)
                        this.data=[this.data]
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
            async beforeUpload (file) {
                const workbook = await readXLSX(file)
                // console.log(workbook)
                let persons=XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])
                console.log(persons);//打印获取的数据
                await insertCourse(persons)
                this.$message({
                    type: 'success',
                    message: '添加成功'
                });
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .explain_text{
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
        color: #333;
    }
    .form_contianer{
        .wh(320px, auto);
        .ctp(100px,400px);
        padding: 25px;
        top: 45%;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        .submit_btn{
            width: 100%;
            font-size: 16px;
        }
    }
    .admin_set{
        width: 60%;
        background-color: #F9FAFC;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul > li{
            padding: 20px;
            span{
                color: #666;
            }
        }
    }
    .admin_title{
        margin-top: 15px;
        .sc(24px, #666);
        text-align: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        margin-top: 10px;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
    .backgroud{
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
