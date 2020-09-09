<template>
  <div class="zi">
    <div class="gray">
      <div class="xi"> <span>个人信息资料</span></div>
    </div>
    <div class="center">
        <div>账号：</div>
        <div><input type="text" placeholder="hh" class="input"></div>
    </div>
    <div class="center2">
        <div>手机号：</div>
        <div><input type="text" placeholder="189****0958" class="input2"></div>
    </div>
    <div class="center2">
        <div>邮箱：</div>
        <div><input type="text" placeholder="1265455@qq.com" class="input3"></div>
    </div>
    <div class="center2">
        <div>昵称：</div>
        <div><input type="text" placeholder="符号" class="input3"></div>
    </div>
    <div class="center2">
        <div>旧密码：</div>
        <div><input type="text"  class="input2"></div>
    </div>
    <div class="center2">
        <div>新密码：</div>
        <div><input type="text"  class="input2"></div>
    </div>
    <div class="center2">
        <div>确认密码：</div>
        <div><input type="text"  class="input4"></div>
    </div>
    <div class="center"><input type="button" value="提交" class="button"></div>
  </div>
</template>

<script>
  export default {
      data() {
        return {


     }
    }
   }
</script>

<style scoped>
  .zi{
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
  .center{
    justify-content: center;
    display: flex;
    margin-top: 100px;
  }
  .center>div{
    height: 35px;
    line-height: 35px;
  }
  .input{
    margin-left: 30px;
    text-align: center;
    background: #f2f2f2;
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 220px;
    height: 35px;
  }
  .center2{
    justify-content: center;
    display: flex;
    margin-top: 10px;
  }
  .center2>div{
    height: 35px;
    line-height: 35px;
  }
  .input2{
    margin-left: 15px;
    text-align: center;
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 220px;
    height: 35px;
  }
  .input3{
    margin-left: 30px;
    text-align: center;
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 220px;
    height: 35px;
  }
  .input4{
    margin-left: 8px;
    text-align: center;
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 220px;
    height: 35px;
  }
  .button{
    text-align: center;
    width: 80px;
    height: 35px;
    line-height: 35px;
    color: #FFFFFF;
    background: #1ABC9C;
    border: none;
    border-radius: 5px;

  }
</style>
