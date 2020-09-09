<template>
  <div class="zi">
    <div class="gray">
      <div class="xi"> <span>发布知识</span></div>
    </div>
    <div class="one">
      <div class="center">
          <div>问题：</div>
          <div><input type="text" placeholder="您好" class="input"></div>
      </div>
      <div class="center2">
          <div>相似问题：</div>
            <input type="text" placeholder="亲" class="input2">
            <input type="button" value="-" class="jian">
      </div>
      <div class="center2">
            <input type="text" placeholder="HI" class="input3">
            <input type="button" value="-" class="jian">
      </div>
      <div class="center2">
            <input type="text" placeholder="你好" class="input3">
            <input type="button" value="-" class="jian">
      </div>
      <div class="center2">
            <input type="button" value="+添加相似问题" class="jia">
      </div>
     <div class="center2">
         <div>分类：</div>
         <div><input type="text" placeholder="选择分类" class="input"></div>
     </div>
     <div class="center2">
         <div>分类：</div>
         <div class="switch"><el-switch  v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch></div>
     </div>
     <div class="jiq">
         <div>答案（机器人）：</div>
        <div class="kuan">
          hi，有问题您可以直接问哦

        </div>
     </div>
     <div class="ti"><input type="button" value="提交" class="button"></div>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        value: true
      }
    }
  };
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
  .one{
    margin-top: 20px;
    margin-left: 20px;
    border: 0.5px solid #e4e4e4;
    width: 96%;
    height: 980px;
  }
  .center{
    display: flex;
    margin-top: 100px;
    margin-left: 300px;
  }
  .center>div{
    height: 35px;
    line-height: 35px;
  }
  .input{
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 350px;
    height: 35px;
    text-indent: 1em;
    margin-left: 25px;

  }
  .center2{
    display: flex;
    margin-top: 20px;
     margin-left: 300px;
  }
  .center2>div{
    height: 35px;
    line-height: 35px;
  }
  .input2{
    border: none;
    border: 0.5px solid #E4E4E4;
    border-radius: 2px;
    width: 350px;
    height: 35px;
    text-indent: 1em;
  }
  .input3{
   border: none;
   border: 0.5px solid #E4E4E4;
   border-radius: 2px;
   width: 350px;
   height: 35px;
   text-indent: 1em;
   margin-left: 60px;
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
  .jian{
    width: 45px;
    margin-left: 20px;
    background: #FFFFFF;
    border:none;
    border: 0.5px solid #30C2A5;
    color: #30C2A5;
    font-size:25px;
  }
  .jia{
    width: 120px;
    height: 30px;
    margin-left: 60px;
    background: #FFFFFF;
    border:none;
    border: 0.5px solid #30C2A5;
    color: #30C2A5;
    font-size:12px;
    text-align: center;
  }
  .switch{
    margin-left: 30px;
  }
  .jiq{
    display: flex;
    margin-top: 20px;
     margin-left: 270px;
  }
  .kuan{
    width: 500px;
    height: 300px;
    border: 0.5px solid #E4E4E4;
    padding-top: 20px;
    padding-left: 20px;
  }
  .ti{
    margin-left: 370px;
    margin-top: 50px;
  }

</style>
