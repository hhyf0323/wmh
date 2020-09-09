<template>
  <div class="deng">
    <div class="gray">
      <div class="xi"> <span>登录日志</span></div>
      <div class="right"><input type="button" value="刷新" class="input"></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-s-grid"></div>
        </div>
        <div class="shu">列表</div>
        <div class="right2">
          <input type="button" value="清除近30天" class="input2">
        </div>
      </div>
      <div class="biao">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="时间"
              width="359">
            </el-table-column>
            <el-table-column
              prop="name"
              label="IP"
              width="359">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地区"
               width="359">
            </el-table-column>
          </el-table>
      </div>
    </div>
    <div class="block">
        <span class="demonstration"></span>
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
   <div class="last">Copyright © 在线客服管理系统, All Rights Reserved.</div>

  </div>
</template>

<script>
  export default {
      data() {
        return {
          tableData: [{
            date: ' 2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          }, {
            date: ' 2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          }, {
            date: ' 2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          }, {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          },
          {
            date:  '2019-07-22 14:36:21',
            name: '59.61.174.22',
            address: '北京省福州市'
          }]
        }
      }
    }
</script>

<style scoped>
  .deng{
    width: 83%;
  }
  .gray{
    content: "";
    clear: both;
  }
  .gray>div{
    float: left;
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
  .input{
    height: 25px;
    line-height: 25px;
    color: #666666;
    width: 80px;
    padding-left: 5px;
    text-align: center;
    margin-right: 30px;
    background: #FFFFFF;
    border: none;
    border: 0.5px solid #E4E4E4;
  }
  .right{
    float: right!important;
    margin-top: -4px;
  }
  .one {
    margin-top: 15px;
    margin-left: 20px;
    border: 0.5px solid #e4e4e4;
    width: 96.5%;
    height: 760px;
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
  .el-icon-s-grid{
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
  .right {
    float: right !important;
    margin-right: 10px;
  }
  .size {
    height: 25px;
    color: #ccc;
    width: 150px;
    outline: none;
  }
  .right2{
    float: right!important;
    margin-right: 10px;
    margin-top: -4px;
  }
  .input2{
    height: 25px;
    line-height: 25px;
    color: #666666;
    width: 80px;
    padding-left: 5px;
    text-align: center;
    margin-right: 16px;
    background: #FFFFFF;
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 5px;
    margin-top: 10px;
  }
  .biao >>>.el-table .cell{
    text-align: center;
  }
  .block{
    float: right;
    margin-top: 10px;
    margin-right: 30px;
  }
  .last{
    text-align: center;
    margin-top: 150px;
    color: #757981;
  }
  .biao>>>.el-table th {
      background: #f9fafc;
    }


</style>
