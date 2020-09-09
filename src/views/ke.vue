<template>
  <div class="ke">
    <div class="gray">
      <div class="xi"> <span>客服统计</span></div>
    </div>
    <div class="two">
      <div class="gray3">
         <div class="shu">客服数据报表</div>
      </div>
      <div class="tab">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
           <el-tab-pane label="工作量" name="first">
             <div class="gray2">
               <div class="shu">工作量报表</div>
               <div class="top">
                 <el-button type="text" @click="open" class="el-icon-question"></el-button>
               </div>
               <div class="right">
                <div>
                  <input type="text" placeholder="输入客服名" class="input">
                  <div class="el-icon-search" ></div>
                </div>
                  <div class="block">
                     <el-date-picker
                       v-model="value1"
                       type="date"
                       placeholder="选择日期">
                     </el-date-picker>
                   </div>
                 <div class="iin">
                  <div>昨天</div>
                  <div>本周</div>
                  <div>本月</div>
                 </div>
                 <div><input type="button" value="导出数据" class="input2"></div>
               </div>
               <div class="biao">
                 <el-table
                     :data="tableData"
                     border
                     style="width: 104%">
                     <el-table-column
                       prop="date"
                       label="姓名"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="name"
                       label="接入会话量"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="address"
                       label="未回复会话量"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="lei"
                       label="未回复率"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="xiao"
                       label="转接量"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="xiang"
                       label="无效会话量"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="zai"
                       label="留言处理量"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="shi"
                       label="登录总时长"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="yf"
                       label="在线总时长"
                       width="104">
                     </el-table-column>
                     <el-table-column
                       prop="baby"
                       label="在线时长占比"
                       width="104">
                     </el-table-column>
                   </el-table>
               </div>
             </div>

           </el-tab-pane>
           <el-tab-pane label="工作质量" name="second">
           <div class="gray2">
             <div class="shu">配置管理</div>
             <div class="top">
               <el-button type="text" @click="open" class="el-icon-question"></el-button>
             </div>
             <div class="right">
              <div>
                <input type="text" placeholder="输入客服名" class="input">
                <div class="el-icon-search" ></div>
              </div>
                <div class="block">
                   <el-date-picker
                     v-model="value1"
                     type="date"
                     placeholder="选择日期">
                   </el-date-picker>
                 </div>
               <div class="iin">
                <div>昨天</div>
                <div>本周</div>
                <div>本月</div>
               </div>
               <div><input type="button" value="导出数据" class="input2"></div>
             </div>
             <div class="biao">
               <el-table
                   :data="tableData"
                   border
                   style="width: 104%">
                   <el-table-column
                     prop="date"
                     label="姓名"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="接入会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="未回复会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="lei"
                     label="未回复率"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="xiao"
                     label="转接量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="xiang"
                     label="无效会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="zai"
                     label="留言处理量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="shi"
                     label="登录总时长"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="yf"
                     label="在线总时长"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="baby"
                     label="在线时长占比"
                     width="104">
                   </el-table-column>
                 </el-table>
             </div>
           </div>
           </el-tab-pane>
           <el-tab-pane label="绩效报表" name="third">
           <div class="gray2">
             <div class="shu">角色管理</div>
             <div class="top">
               <el-button type="text" @click="open" class="el-icon-question"></el-button>
             </div>
             <div class="right">
              <div>
                <input type="text" placeholder="输入客服名" class="input">
                <div class="el-icon-search" ></div>
              </div>
                <div class="block">
                   <el-date-picker
                     v-model="value1"
                     type="date"
                     placeholder="选择日期">
                   </el-date-picker>
                 </div>
               <div class="iin">
                <div>昨天</div>
                <div>本周</div>
                <div>本月</div>
               </div>
               <div><input type="button" value="导出数据" class="input2"></div>
             </div>
             <div class="biao">
               <el-table
                   :data="tableData"
                   border
                   style="width: 104%">
                   <el-table-column
                     prop="date"
                     label="姓名"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="name"
                     label="接入会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="address"
                     label="未回复会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="lei"
                     label="未回复率"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="xiao"
                     label="转接量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="xiang"
                     label="无效会话量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="zai"
                     label="留言处理量"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="shi"
                     label="登录总时长"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="yf"
                     label="在线总时长"
                     width="104">
                   </el-table-column>
                   <el-table-column
                     prop="baby"
                     label="在线时长占比"
                     width="104">
                   </el-table-column>
                 </el-table>
             </div>
           </div>
           </el-tab-pane>
         </el-tabs>
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
   export default {
      data() {
        return {
            currentPage4: 4,
          activeName: 'first',
          tableData: [{
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
            yf:'16小时36分',
            baby:'43%'
          }, {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          }, {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          }, {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          },
          {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          },
          {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          },
          {
            date: '符号',
            name: '32',
            address: '2',
            lei:'33%',
            xiao:'0',
            xiang:'2',
            zai:'3',
            shi:'26小时36分',
             yf:'16小时36分',
             baby:'43%'
          },
          ]
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        open() {
          this.$alert('正在资询人数：当前正在咨询的访客数量', '提示', {
            confirmButtonText: '确定',
          });
        },
          handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
              },
              handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
              }
      },

    };
</script>

<style scoped="">
  .ke{
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
  .two{
    margin-top: 15px;
    margin-left: 17px;
    border: 0.5px solid #e4e4e4;
    width: 97%;
    height: 750px;
  }
  .gray3{
    background: #f3f3f3;
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    border-bottom: 0.5px solid #e4e4e4;
    margin-left: 0.5px;
  }
  .shu {
    margin-left: 15px;
    font-size: 14px;
    color: #666666;
    font-weight: bold;
  }
  .tab{
    margin-top: 10px;
    margin-left: 10px;
  }
  .tab>>>.el-tabs__nav-scroll{
    background: #f9f9f9;
    margin-right: 1px;
  }
  .tab>>>.el-tabs--card>.el-tabs__header .el-tabs__item{
    color: #999999;
  }
  .tab>>>.el-tabs--card>.el-tabs__header .el-tabs__item:hover{
    color: #30C2A5;
    background: #FFFFFF;
    border-top: 3px solid #30C2A5;
    height: 43px;
  }

  .gray2 {
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    margin-left: 0.5px;
  }
  .gray2:active {
    content: "";
    clear: both;
  }
  .gray2>div {
    float: left;
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
  .right>div{
    float: right;
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
  .home {
    width: 83%;
  }
  .flex{
    display: flex;
    flex: 1;
    justify-content: center;
    width: 98.5%;
    margin-top: 20px;
  }
  .flex>div{
    margin-left: 15px;
  }
  .first{
    width: 30%;
    height: 165px;
    border: 0.5px solid #E4E4E4;
  }
  .flex2{
    height: 90px;
    border-bottom: 0.5px solid #E4E4E4;
    display: flex;
  }
  .img{
    margin-top: 25px;
    margin-left: 25px;
  }
  .ing{
    margin-left: 20px;
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
  .jie{
    font-size: 16px;
    color: #757981;
    margin-top: 25px;
    margin-left: 25px;
  }
  .jie>span{
    margin-left: 10px;
  }
  .input2{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    margin-top: 3px;
    padding-left: 5px;
    text-align: center;
    margin-right: 30px;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    border: 0.5px solid #E4E4E4;
  }
  .iin{
    margin-left: -20px;
  }
  .iin>div{
    float: left;
    width: 40px;
    text-align: center;
  }
  .iin>div:hover{
    color: #30C2A5;
  }
  .iin>div:nth-child(2){
    color:#30C2A5;
  }
  .block>>>.el-input__inner{
    height: 28px;
    line-height: 28px;
    margin-left: 10px;
    width: 210px;
  }
  .block>>>.el-input__icon{
    margin-left: 15px;
    line-height: 28px;
  }
  .input{
    height: 27px;
    color: #E4E4E4;
    width: 150px;
    outline: none;
    padding-left: 5px;
     border: 0.5px solid #E4E4E4;
     margin-left: 10px;
     border-radius: 2px;
  }
  .el-icon-search{
    background: #1abc9c;
    width: 30px;
    height: 26px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
  }
  .biao{
    margin-top: 15px;
    margin-left: 10px;
    width: 97%;
  }
  .biao>>>.el-table th {
      background: #f2f2f2;
      font-size: 10px;
    }
    .block2{
      float: right;
      margin-top: 25px;
      margin-right: 30px;
    }



</style>
