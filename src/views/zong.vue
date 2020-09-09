<template>
  <div class="zong">
    <div class="gray">
      <div class="xi"> <span>总览统计</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="shu">在线服务数据</div>
        <div class="top">
          <el-button type="text" @click="open" class="el-icon-question"></el-button>
        </div>
        <div class="right">
           <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>

          <div class="iin">
            <input type="button" value="昨天" class="input3">
            <input type="button" value="最近7天" class="input4">
            <input type="button" value="最近30天" class="input4">
          </div>
          <div><input type="button" value="导出数据" class="input2"></div>


        </div>
      </div>
      <div class="flex">
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/8.png" class="img"/></div>
            <div class="ing">
              <div>总会话量</div>
              <div>200</div>
            </div>
          </div>
          <div class="today">接入率  <span>--</span></div>
          <div class="today">转接量  <span>0</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/9.png" class="img"/></div>
            <div class="ing">
              <div>总消息量</div>
              <div>5000</div>
            </div>
          </div>
          <div class="today">答问比<span> --</span></div>
          <div class="today">30s应答率<span> --</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/10.png" class="img"/></div>
            <div class="ing">
              <div>平均会话时长</div>
              <div>--</div>
            </div>
          </div>
          <div class="today">平均首次响应时间<span> --</span></div>
          <div class="today">平均响应时间<span> --</span></div>

        </div>
        <div class="first">
          <div class="flex2">
            <div><img src="../assets/11.png" class="img"/></div>
            <div class="ing">
              <div>相对满意度</div>
              <div>--</div>
            </div>
          </div>
          <div class="jie">参评率<span> --</span></div>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="gray2">
        <div class="shu">会话量</div>
        <div class="top">
          <el-button type="text" @click="open" class="el-icon-question"></el-button>
        </div>
      </div>
       <div id="main" class="zhe"></div>

    </div>
    <div class="two">
      <div class="gray2">
        <div class="shu">会话量</div>
        <div class="top">
          <el-button type="text" @click="open" class="el-icon-question"></el-button>
        </div>
      </div>
       <div id="main2" class="zhe"></div>

    </div>

  </div>
</template>

<script>
  export default {
      data() {
        return {
          pickerOptions: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
          },
        }
      },
      methods:{
        open() {
          this.$alert('正在资询人数：当前正在咨询的访客数量', '提示', {
            confirmButtonText: '确定',
          });
        },
        myEcharts(hh){
              		  // 基于准备好的dom，初始化echarts实例
              		  var myChart = this.$echarts.init(document.getElementById(hh));

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
        	this.myEcharts('main');
          this.myEcharts('main2');
        }
    }

</script>

<style scoped="">
  .zong{
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
  .input3{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
    text-align: center;
    background: #30C2A5;
    color: #FFFFFF;
    border: none;
      margin-top: 3px;
    border-radius: 5px;
    border: 0.5px solid #E4E4E4;
  }
  .input4{
    height: 28px;
    line-height: 28px;
    color: #666666;
    width: 80px;
      margin-top: 3px;
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
    margin-left: -20px;
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
  .two{
    margin-top: 15px;
    margin-left: 15px;
    border: 0.5px solid #e4e4e4;
    width: 97%;
    height: 370px;
  }
  .zhe{
    width: 1050px;
    height: 310px;
    margin-top: 10px;
  }


</style>
