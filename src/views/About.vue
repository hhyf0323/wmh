<template>
  <div class="home">
    <div class="gray">
      <div class="xi"> <span>系统首页</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="shu">数据总览</div>
        <div class="top">
          <el-button type="text" @click="open" class="el-icon-question"></el-button>
        </div>
        <div class="right">
          <select class="size">
            <option></option>
           <option></option>
          </select>
        </div>
      </div>
      <div class="flex">
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/8.png" class="img"/></div>
            <div class="ing">
              <div>正在资询人数</div>
              <div>200</div>
            </div>
          </div>
          <div class="dang">当前在线客服数  <span>200</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/9.png" class="img"/></div>
            <div class="ing">
              <div>正在排队人数</div>
              <div>5000</div>
            </div>
          </div>
          <div class="today">今日平均排队时长<span> --</span></div>
          <div class="today">今日平均排队时长<span> 0</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/10.png" class="img"/></div>
            <div class="ing">
              <div>今日会话量</div>
              <div>5000</div>
            </div>
          </div>
          <div class="today">今日平均会话时长<span> --</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/11.png" class="img"/></div>
            <div class="ing">
              <div>今日未接入会话量</div>
              <div>1000</div>
            </div>
          </div>
          <div class="jie">接入率<span> 0.00%</span></div>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="gray3">
         <div class="shu">在线服务数据趋势</div>
           <div id="main" class="zhe"></div>

      </div>
    </div>
    <div class="two">
      <div class="gray2">
         <div class="shu">今日客服行为活动</div>

         <div class="right">
           <select class="size">
              <option></option>
              <option></option>
           </select>
          </div>
           <div class="right">
             <input type="text" placeholder="输入客服名" class="input">
             <div class="el-icon-search" ></div>

           </div>
      </div>
      <div class="biao">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="客服"
              width="128">
            </el-table-column>
            <el-table-column
              prop="name"
              label="在线状态"
              width="128">
            </el-table-column>
            <el-table-column
              prop="address"
              label="当前接待量"
              width="128">
            </el-table-column>
            <el-table-column
              prop="lei"
              label="累计会话量"
              width="128">
            </el-table-column>
            <el-table-column
              prop="xiao"
              label="累计消息量"
              width="128">
            </el-table-column>
            <el-table-column
              prop="xiang"
              label="相对满意试"
              width="128">
            </el-table-column>
            <el-table-column
              prop="zai"
              label="累计在线时间"
              width="128">
            </el-table-column>
            <el-table-column
              prop="shi"
              label="累计休息时长"
              width="128">
            </el-table-column>
          </el-table>
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
    </div>
     <div class="last">Copyright © 在线客服管理系统, All Rights Reserved.</div>

  </div>

</template>

<script>
  export default {
     data() {
          return {
                    currentPage4: 4,

            tableData: [{
              date: '符号',
              name: '在线 (1小时18分)',
              address: '0',
              lei:'0',
              xiao:'0',
              xiang:'100%',
              zai:'1小时18分',
              shi:'1小时18分'
            }, {
              date: '符号',
              name: '在线 (1小时18分)',
              address: '0',
              lei:'0',
              xiao:'0',
              xiang:'100%',
              zai:'1小时18分',
              shi:'1小时18分'
            }, {
              date: '符号',
              name: '在线 (1小时18分)',
              address: '0',
              lei:'0',
              xiao:'0',
              xiang:'100%',
              zai:'1小时18分',
              shi:'1小时18分'
            }, {
              date: '符号',
              name: '在线 (1小时18分)',
              address: '0',
              lei:'0',
              xiao:'0',
              xiang:'100%',
              zai:'1小时18分',
              shi:'1小时18分'
            }]
          }
        },
    methods: {
       handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
            },
      open() {
        this.$alert('正在资询人数：当前正在咨询的访客数量', '提示', {
          confirmButtonText: '确定',
        });
      },
       myEcharts(){
      		  // 基于准备好的dom，初始化echarts实例
      		  var myChart = this.$echarts.init(document.getElementById('main'));

      		  // 指定图表的配置项和数据
      		  var option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

      		  // 使用刚指定的配置项和数据显示图表。
      		  myChart.setOption(option);
      		  }
    },
    mounted() {
      	this.myEcharts();
      }
  }
</script>
<style scoped>
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
    height: 250px;
  }
  .gray2 {
    background: #f3f3f3;
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    border-bottom: 0.5px solid #e4e4e4;
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
  .two{
    margin-top: 15px;
    margin-left: 15px;
    border: 0.5px solid #e4e4e4;
    width: 97%;
    height: 370px;
  }
  .gray3{
    background: #f3f3f3;
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    border-bottom: 0.5px solid #e4e4e4;
    margin-left: 0.5px;
  }
  .zhe{
    width: 1050px;
    height: 310px;
    margin-top: 10px;
  }
  .input{
    height: 20px;
    color: #ccc;
    width: 150px;
    outline: none;
    padding-left: 5px;
  }
  .el-icon-search{
    background: #1abc9c;
    width: 30px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
  }
  .biao{
    margin-top: 15px;
    margin-left: 30px;
    width: 94.5%;
  }
   .block{
     float: right;
     margin-top: 10px;
     margin-right: 30px;
   }
   .last{
     text-align: center;
     margin-top: 30px;
     color: #757981;
   }
   .biao >>>.el-table .cell{
     text-align: center;
   }
   .biao>>>.el-table th {
       background: #f9fafc;
     }

</style>
