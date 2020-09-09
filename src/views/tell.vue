<template>
  <div class="klist">
    <div class="gray">
      <div class="xi"> <span>公告列表</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-search"></div>
        </div>
        <div class="shu">筛选查询</div>
      </div>
     <div class="left">
       <div class="shai">消息标题：  <input type="text" placeholder="消息标题" class="size"></div>
       <div> <input type="button" value="查询结果" class="input2"></div>
       <div class="shai">发布人员：<select class="size"><option>全部</option></select></div>
       <div class="block">
          发布时间:
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-s-grid"></div>
        </div>
        <div class="shu">公告列表</div>
        <div class="tian"><input type="button" value="发布消息" class="input4"></div>
      </div>
      <div class="biao">
        <el-table
            :data="tableData"
            border
            style="width:  145">
           <el-table-column type="selection" width=" 145">
           </el-table-column>
            <el-table-column
              prop="name"
              label="编号"
              width=" 145">
            </el-table-column>
            <el-table-column
              prop="address"
              label="消息标题"
              width=" 145">
            </el-table-column>
            <el-table-column
              prop="lei"
              label="发布时间"
              width=" 145">
            </el-table-column>
            <el-table-column
              prop="xiao"
              label="发布人员"
              width=" 145">
            </el-table-column>
            <el-table-column
              prop="xiang"
              label="接收对象"
              width=" 145">
            </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width=" 145">
                  <template slot-scope="scope" >
                         <el-button @click="handleClick(scope.row)" type="text" size="small" style="color: #30C2A5;">查看</el-button>
                         <el-button type="text" size="small" style="color: #30C2A5;" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                       </template>
                </el-table-column>
          </el-table>
      </div>

     <div class="float">
       <div class="check">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
       </div>
       <div><select class="select2"><option>批量操作</option></select></div>
       <div><input type="button" value="确定" class="input3"></div>
       <div class="block2">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
     </div>

    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
         value: true,
         currentPage4: 4,
        tableData: [{
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
          yf:'查看',
          baby:'43%'
        }, {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '1000001',
          address: '客服绩效评定规则',
          lei:'    2019-07-22 14:36',
          xiao:'admin',
          xiang:'200人',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        ]


      }
     },
     methods: {
           handleSizeChange(val) {
             console.log(`每页 ${val} 条`);
           },
           handleCurrentChange(val) {
             console.log(`当前页: ${val}`);
           },
             handleDelete(index, row) {
                 console.log(index, row);
                  this.tableData.splice(index, 1)
               }
         }
  }
</script>

<style scoped="">
  .klist{
    width: 83%;
  }
  .gray {
    background: #f3f3f3;
    width: 100%;
    height: 25px;
    border-bottom: 0.5px solid #e4e4e4;
    padding-top: 10px;
  }
  .xi {
    font-size: 10px;
    border-left: 3px solid #1abc9c;
    margin-left: 10px;
    color: #999;
  }
  .xi span {
    margin-left: 5px;
  }
  .one {
    margin-top: 15px;
    margin-left: 15px;
    border: 0.5px solid #e4e4e4;
    width: 97%;
    height: 100px;
  }
  .gray2 {
    background: #f3f3f3;
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    margin-left: 0.5px;
    border-bottom: 0.5px solid #E4E4E4;
  }
  .gray2:active {
    content: "";
    clear: both;
  }
  .gray2>div {
    float: left;
  }
  .el-icon-search{
    color: #999;
    font-size: 16px;
    margin-top: 12px;
    margin-left: 15px;
  }
  .shu {
    font-weight: bold;
    margin-left: 15px;
    font-size: 14px;
    color: #666666;
  }
  .top {
    margin-top: -3px;
    margin-left: 5px;
  }
  .el-icon-question {
    color: orange;
    font-size: 15px;
  }
  .size {
    height: 25px;
    color: #ccc;
    width:  145px;
    outline: none;
  }
  .home {
    width: 83%;
  }
  .flex{
    display: flex;
    width: 100%;
    margin-top: 20px;
  }
  .flex>div{
    margin-left: 20px;
    width: 25%;
  }
  .first{
    height: 100px;
    border: 0.5px solid #E4E4E4;
  }

  .ing{
    margin-left: 80px;
    margin-top: 20px;
  }
  .ing>div:nth-child(1){
    font-size: 16px;
    color: #757981;
  }
  .ing>div:nth-child(2){
    font-size: 20px;
    color: #666666;
    margin-top: 5px;
  }
  .dang{
    font-size: 16px;
    color: #757981;
    margin-top: 25px;
    margin-left: 25px;
  }
  .dang>span{
    font-size: 20px;
    color: #666666;
    margin-left: 10px;
  }
  .today{
    font-size: 16px;
    color: #757981;
    margin-top: 8px;
    margin-left: 25px;
  }
  .today>span{
    margin-left: 10px;
  }
  .input2{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    margin-left: 25px;
    text-align: center;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    border: 0.5px solid #999;
  }
  .left{
    margin-top: 15px;
  }
  .left>div{
    float: left;
  }
  .shai{
    margin-left: 50px;
    color: #999;
  }
  .select{
    width:  145px;
    height: 28px;
    border-radius: 2px;
    color: #CCCCCC;
    margin-left: 5px;
    margin-left: 80px;
  }
  .size{
    width:  145px;
    height: 28px;
    border-radius: 2px;
    color: #ccc;
    margin-left: 15px;
    border: none;
    margin-left: 10px;
    border: 0.5px solid #999;
    padding-left: 5px;
  }
  .two {
    margin-top: 15px;
    margin-left: 15px;
    border: 0.5px solid #e4e4e4;
    width: 97%;
    height: 600px;
  }
  .el-icon-s-grid{
    color: #999;
    font-size: 16px;
    margin-top: 12px;
    margin-left: 15px;
  }
  .biao{
    margin-top: 20px;
    margin-left: 25px;
    width: 95.5%;
  }
  .biao>>>.el-table th {
      background: #f2f2f2;
    }
  .biao >>>.el-table .cell{
    text-align: center;
  }
  .block2{
    float: right!important;
    margin-top: 25px;
    margin-right: 30px;
  }
  .float>div{
    float: left;
  }
  .check{
    margin-top: 30px;
    margin-left: 80px;
  }
  .select2{
    width: 100px;
    height: 28px;
    border-radius: 2px;
    color: #CCCCCC;
    margin-top: 28px;
    margin-left: 40px;
  }
  .input3{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    margin-left: 25px;
    margin-top: 28px;
    text-align: center;
    background: #FFFFFF;
    border: none;
    border: 0.5px solid #999;
  }
  .input4{
    height: 25px;
    line-height: 25px;
    color: #666666;
    width: 80px;
    text-align: center;
    background: #FFFFFF;
    border: none;
    border: 0.5px solid #999;
  }
  .tian{
    float: right!important;
    margin-right: 25px;
  }
  .block{
    margin-left: 50px;
    color: #999;
  }
   .block>>>.el-input__inner{
    height: 30px;
    margin-left: 10px;
    width: 145px;

  }
  .block>>>.el-input__icon{
    margin-left: 15px;
    line-height: 28px;
  }

</style>
