<template>
  <div class="li">
    <div class="gray">
      <div class="xi"> <span>客户列表</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-search"></div>
        </div>
        <div class="shu">筛选查询</div>
      </div>
     <div class="left">
       <div class="shai">筛选客户：<input type="text" placeholder="输入用户名称/接待客服" class="size"></div>
        <div><input type="button" value="查询结果" class="input2"></div>
      </div>
    </div>
    <div class="two">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-s-grid"></div>
        </div>
        <div class="shu">客户列表</div>
      </div>
      <div class="biao">
        <el-table
            :data="tableData"
            border
            style="width: 127%">
            <el-table-column
              prop="date"
              label="姓名"
              width="127">
            </el-table-column>
            <el-table-column
              prop="name"
              label="手机"
              width="127">
            </el-table-column>
            <el-table-column
              prop="address"
              label="邮箱"
              width="127">
            </el-table-column>
            <el-table-column
              prop="lei"
              label="地址"
              width="127">
            </el-table-column>
            <el-table-column
              prop="xiao"
              label="创建时间"
              width="127">
            </el-table-column>
            <el-table-column
              prop="xiang"
              label="更新时间"
              width="127">
            </el-table-column>
            <el-table-column
              prop="zai"
              label="访客备注"
              width="127">
            </el-table-column>
           <el-table-column
             fixed="right"
             label="操作"
             width="127">
             <template slot-scope="scope">
               <el-button type="text" size="small" style="color: #30C2A5;">查看</el-button>
             </template>
           </el-table-column>

          </el-table>
      </div>
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
</template>

<script>
  export default{
    data(){
      return{
         currentPage4: 4,
        tableData: [{
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
          yf:'查看',
          baby:'43%'
        }, {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '符号',
          name: '189****0958',
          address: '-',
          lei:'-',
          xiao:'04-25 18:34',
          xiang:'04-25 18:34',
           zai:'-',
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
           }
         },
  }
</script>

<style scoped="">
  .li{
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
    width: 150px;
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
    margin-left: 10px;
    text-align: center;
    margin-right: 150px;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    border: 0.5px solid #999;
  }
  .input3{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    text-align: center;
    background: #30C2A5;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    border: 0.5px solid #E4E4E4;
    margin-left: -127px;
  }
  .input4{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    text-align: center;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    border: 0.5px solid #E4E4E4;
  }
  .input4:hover{
    background: #30C2A5;
    color: #FFFFFF;
  }
  .iin{
  }
  .block{
    margin-top: 3px;
    float: right!important;
    margin-top: -26px;
    margin-right: -18px;

  }
  .block>>>.el-input__inner{
    height: 28px;
    line-height: 28px;
    margin-left: 10px;
    width: 150px;
    margin-top: -2px;
  }
  .block>>>.el-input__icon{
    margin-left: 15px;
    line-height: 28px;
  }
  .left{
    margin-top: 12px;
  }
  .left>div{
    float: left;
  }
  .shai{
    margin-left: 20px;
    color: #999;
  }
  .select{
    width: 150px;
    height: 28px;
    border-radius: 2px;
    color: #CCCCCC;
    margin-left: 5px;
  }
  .size{
    width: 150px;
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
      font-size: 10px;
    }
  .biao >>>.el-table .cell{
    text-align: center;
  }
  .block2{
    float: right;
    margin-top: 25px;
    margin-right: 30px;
  }

</style>
