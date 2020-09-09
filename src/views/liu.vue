<template>
  <div class="liu">
    <div class="gray">
      <div class="xi"> <span>留言报表</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="shu">留言报表</div>
        
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
            <div class="ing">
              <div>总留言数量</div>
              <div>200</div>
            </div>
        </div>
        <div class="first">
            <div class="ing">
              <div>待处理留言数量</div>
              <div>5000</div>
            </div>
        </div>
        <div class="first">
            <div class="ing">
              <div>已处理留言数量</div>
              <div>5000</div>
        </div>
        </div>
      </div>
    </div>
    <div class="flex2">
      <div >
        <div class="gray2">
           <div class="shu">留言来源</div>
           <div id="main" class="zhe"></div>

        </div>

      </div>
      <div >
        <div class="gray2">
          <div class="shu">留言处理率</div>
          <div id="main2" class="zhe"></div>

        </div>

      </div>

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
        myEcharts(hh){
              		  // 基于准备好的dom，初始化echarts实例
              		  var myChart = this.$echarts.init(document.getElementById(hh));

              		  // 指定图表的配置项和数据
              		  var option = {
            title:{

        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['APP:12.43%', '微信端:12.26%', 'pc端:16.87%', '小程序:27.75%', '其他:32.68%']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: 'APP:12.43%'},
                {value: 310, name: '微信端:12.26%'},
                {value: 234, name: 'pc端:16.87%'},
                {value: 135, name: '小程序:27.75%'},
                {value: 1548, name: '其他:32.68%'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
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
  .liu{
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
    height: 230px;
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
  .flex2{
    margin-top:15px;

    display: flex;
    flex:1;
    width: 98.5%;
  }
  .flex2>div{
    width: 50%;
    height: 500px;
    border: 0.5px solid #E4E4E4;
    margin-left: 15px;
  }
  .gray2 {
    background: #f3f3f3;
    width: 99.9%;
    height: 35px;
    line-height: 35px;
    border-bottom: 0.5px solid #e4e4e4;
    margin-left: 0.5px;
  }
  .zhe{
    width: 80%;
    height:350px;
    margin-top: 60px;
  }

</style>
