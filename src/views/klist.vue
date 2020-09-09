<!-- <template>
  <div class="klist">
    <div class="gray">
      <div class="xi"> <span>客服列表</span></div>
    </div>
    <div class="one">
      <div class="gray2">
        <div class="top">
          <div class="el-icon-search"></div>
        </div>
        <div class="shu">筛选查询</div>
      </div>
     <div class="left">
       <div class="shai">筛选：  <input type="text" placeholder="输入用户名称/接待客服" class="size"></div>
       <div> <input type="button" value="查询结果" class="input2"></div>
       <div><select class="select"></select></div>
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
            style="width: 128%">
           <el-table-column type="selection" width="128">
           </el-table-column>
            <el-table-column
              prop="name"
              label="昵称"
              width="128">
            </el-table-column>
            <el-table-column
              prop="address"
              label="姓名"
              width="128">
            </el-table-column>
            <el-table-column
              prop="lei"
              label="账号"
              width="128">
            </el-table-column>
            <el-table-column
              prop="xiao"
              label="手机号"
              width="128">
            </el-table-column>
            <el-table-column
              prop="xiang"
              label="客服分组"
              width="128">
            </el-table-column>
            <el-table-column
              prop="zai"
              label="账户启用状态"
              width="128">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="128">
                  <template slot-scope="scope" >
                         <el-button @click="handleClick(scope.row)" type="text" size="small" style="color: #30C2A5;">编辑</el-button>
                         <el-button type="text" size="small" style="color: #30C2A5;" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                       </template>
                </el-table-column>
          </el-table>
      </div>

     <div class="float">
       <div class="check">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
       </div>
       <div><select class="select2" ><option>批量操作</option></select></div>
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
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
          yf:'查看',
          baby:'43%'
        }, {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        }, {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
           zai:'已解决',
          shi:'满意',
           yf:'查看',
           baby:'43%'
        },
        {
          date: '游客',
          name: '符号',
          address: '符号',
          lei:'fuhao',
          xiao:'189****0958',
          xiang:'客服1',
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
         },
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
    width: 150px;
    height: 28px;
    border-radius: 2px;
    color: #CCCCCC;
    margin-left: 5px;
    margin-left: 80px;
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

</style>
 -->


 <template>



   <div style="width: 83%;height: 100%;border: 1px solid #E4E4E4;">

     <div style="height: 20%;width: 100%;background-color:#F3F3F3 ;line-height: 35px;">
       <div style="display: flex;margin-left: 60px;">
         <div>
           <!-- <img style="position: relative;top: 4px;" src="../../../public/img/zp1.png" /> -->
         </div>
         <div style="color: #999999;margin-left: 2px;">客服列表</div>
       </div>
     </div>

     <div style="height: 1000px;width: 100%;background-color: white;">
       <div style="margin-top: 25px;" class="dier">
         <el-container>
           <el-header height='40px'>
             <div>
               <i style="font-size: 16px;" class="el-icon-search"></i>
               <span>筛选查询</span>
             </div>
           </el-header>
           <el-main>
             <div style="display: flex;">
               <div style="line-height: 30px;">
                 筛选：
               </div>
               <div style="margin-left: 20px;">
                 <el-input style="width: 100px;" minlength="50" size="mini" @input='Inp()' v-model="input" placeholder="请输入内容"></el-input>
               </div>
               <div style="line-height: 30px;margin-left: 20px;">
                 查询结果：
               </div>
               <div style="margin-left: 40px;">
                 <el-select size="mini" v-model="duox" placeholder="请选择">
                   <el-option v-for="item in options" :key="item.value2" :label="item.label" :value="item.value2">
                   </el-option>
                 </el-select>
               </div>
             </div>

           </el-main>
         </el-container>
         <div style="margin-top: 20px;" class="disan">
           <el-container>
             <el-header style='height: 40px;'>
               <div>
                 <i style="font-size: 16px;line-height: 40px;" class="el-icon-s-unfold"></i>
                 <span>客服列表</span>
               </div>
             </el-header>
             <el-main style='height: 800px;'>
               <!-- v-loading 设置加载 -->
               <div class="selectMenu" style="float: right;margin-right: 40px;">

                 <!-- 点击触发add方法 -->
                 <el-button style="position: relative;top: -10px;" type="primary" @click="add">新增</el-button>
               </div>
               <div class="tableMain">
                 <el-table border="" :data="tableData[activeTab]" stripe style="width: 100%">
                   <el-table-column type="selection" width="65">
                   </el-table-column>
                   <el-table-column prop="date" label="昵称" width="125" height="10px"></el-table-column>
                   <el-table-column prop="name" label="姓名" width="125"></el-table-column>
                   <el-table-column prop="address" label="账号" width="125"></el-table-column>
                   <el-table-column prop="haoma" label="手机号" width="125"></el-table-column>
                   <el-table-column prop="fenzu" label="客服分组" width="125"></el-table-column>
                   <el-table-column prop="type_number" label="账户启动状态" width="152">
                     <template slot-scope="scope">
                       <el-switch disabled v-model="scope.row.type_number" active-color="#13ce66" inactive-color="#ff4949">
                       </el-switch>
                     </template>
                   </el-table-column>
                   <el-table-column label="操作" width="120px">
                     <template slot-scope="scope" style="display: flex;">
                       <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
                       <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                       <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                     </template>
                   </el-table-column>
                 </el-table>
               </div>
               <div class="page" style="text-align: center;margin-top: 15px;">
                 <el-pagination background @size-change="handleSizeChange" @current-change="current_change"
                   :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="tableData.length * 100"></el-pagination>
               </div>
               <!-- 下面这个用来设置点击添加按钮的弹出框，里面可以进行嵌套表格来展示弹出的表格信息,使用下面的:visible.sync来控制显示与否 -->
               <!-- 里面绑定的是我们新设置的值，填写完成后，将我们这个新值塞到页面中所有的数据当中去 -->
               <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
                 <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
                 <el-form :model="form">
                   <el-form-item label="昵称" :label-width="formLabelWidth">
                     <el-input v-model="form.date" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="姓名" :label-width="formLabelWidth">
                     <el-input v-model="form.name" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="账号" :label-width="formLabelWidth">
                     <el-input v-model="form.address" auto-complete="off"></el-input>
                   </el-form-item>

                   <el-form-item label="手机号" :label-width="formLabelWidth">
                     <el-input v-model="form.haoma" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="客服分组" :label-width="formLabelWidth">
                     <el-input v-model="form.fenzu" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="账号启动状态" :label-width="formLabelWidth">
                     <el-switch v-model="form.type_number" active-color="#13ce66" inactive-color="#ff4949">
                     </el-switch>
                   </el-form-item>

                 </el-form>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="cancel">取 消</el-button>
                   <!-- 设置触发更新的方法 -->
                   <el-button type="primary" @click="update">确 定</el-button>
                 </div>
               </el-dialog>
               <el-dialog title="用户信息" :visible.sync="dialogFormVisible2">
                 <!-- 在el-dialog中进行嵌套el-form实现弹出表格的效果 -->
                 <el-form :model="form">
                   <el-form-item label="昵称" :label-width="formLabelWidth">
                     <el-input v-model="form.date" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="姓名" :label-width="formLabelWidth">
                     <el-input v-model="form.name" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="账号" :label-width="formLabelWidth">
                     <el-input v-model="form.address" auto-complete="off"></el-input>
                   </el-form-item>

                   <el-form-item label="手机号" :label-width="formLabelWidth">
                     <el-input v-model="form.haoma" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="客服分组" :label-width="formLabelWidth">
                     <el-input v-model="form.fenzu" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="账号启动状态" :label-width="formLabelWidth" >
                     <el-switch v-model="form.type_number" active-color="#13ce66" inactive-color="#ff4949">
                     </el-switch>
                   </el-form-item>

                 </el-form>
               </el-dialog>


             </el-main>

           </el-container>
         </div>
       </div>


     </div>



   </div>
 </template>

 <script type="text/ecmascript-6">
   export default {
     mounted(){
       this.axios.get('http://47.111.250.151:8081/api/Question/GetQuestion').then((response) => {
         console.log(response.data)
       })
     },
     data() {
       return {
         options: [{
           value2: '选项1',
           label: '客服1'
         }, {
           value2: '选项2',
           label: '客服2'
         }, {
           value2: '选项3',
           label: '客服3'
         }, {
           value2: '选项4',
           label: '客服4'
         }, {
           value2: '选项5',
           label: '客服5'
         }],
         duox: '客服1',
         value: "",
         input: '',
         loading: true,
         currentPage: 1, //默认开始页面
         //   表格的数据
         tableData: [
           [{
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }],
           [{
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh123131",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }],
           [{
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh123131",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }, {
             date: "hh",
             name: "yf",
             address: "baby",
             haoma: '189****0958',
             fenzu: '客服1',
             type_number: false
           }]
         ],

         //   城市选择数据

         dialogFormVisible: false,
         dialogFormVisible2: false,
         formLabelWidth: "100px",
         // 设置form用于进行添加的时候绑定值
         form: {},
         value6: "",
         currentPage3: 1,
         currentIndex: "",
         activeTab: 0,
         searchList: [],
         search: "",
         list: []

       };
     },
     created() {
       this.list = this.tableData
     },
     methods: {
       Inp() {
         this.tableData = this.list

         if (this.input != '') {
           // console.log(this.input)
           indexArr('name', this.input, this.tableData, this.searchList)
           if (this.searchList.length > 5) {
             this.tableData = parsArr(this.searchList)
             this.searchList = []
           } else {
             this.tableData = [this.searchList]
             this.searchList = []
           }
         }



         function indexArr(name, value, tableData, searchList) {

           for (let i = 0; i < tableData.length; i++) {
             for (let j = 0; j < tableData[i].length; j++) {
               if (tableData[i][j][name].indexOf(value) != -1) {
                 searchList.push(tableData[i][j])
               }
             }
           }
         }

         function parsArr(arrList) {

           let arr = [],
             arr2 = [];
           for (let i = 0; i < arrList.length; i++) {
             if (arr2.length == 5) {
               arr.push(arr2);
               arr2 = []
             }
             arr2.push(arrList[i])
           }
           if (arr.length != 0) {
             arr.push(arr2);
           }
           return arr
         }
       },
       // 增加数据的方式，单独的设置一些值，用于增加功能，这些值放在对象里面进行设置，
       //然后将这个新增的对象塞到总数据里面
       add() {

         if (this.input != "") {
           console.log(this.input)
           return
         }
         this.form = {}
         this.dialogFormVisible = true
       },
       update() {
         let bol = true
         for (let i = 0; i < this.tableData.length; i++) {
           if (this.tableData[i].length < 5) {
             this.tableData[i].push(this.form)
             bol = false
           }
         }
         if (bol) {
           this.tableData.push([this.form])
         }
       },
       handleEdit(index, row) {
         this.form = this.tableData[this.activeTab][index]
         this.dialogFormVisible2 = true
       },
       handleDelete(index, row) {
         this.tableData[this.activeTab].splice(index, 1)

         if (this.activeTab != this.tableData.length - 1) {
           for (let i = 0; i < this.tableData.length - (i + this.activeTab); i++) {
             console.log(this.tableData[this.tableData.length - (i + 2)])
             if (this.tableData[this.tableData.length - (i + 1)].length > 0) {
               this.tableData[this.tableData.length - (i + 2)].push(this.tableData[this.tableData.length - (i + 1)][0])
               this.tableData[this.tableData.length - (i + 1)].splice(this.tableData[this.tableData.length - (i + 1)], 1)

               if (this.tableData[this.tableData.length - (i + 1)].length == 0) {
                 this.tableData.splice(this.tableData.length - (i + 1), 1)
                 i -= 1
               }

             }
           }
         } else {
           if (this.tableData[this.tableData.length - 1].length == 0) {
             this.tableData.splice(this.tableData.length - 1, 1)
             this.activeTab -= 1
           }
         }

       },
       cancel() {
         // 取消的时候直接设置对话框不可见即可
         this.dialogFormVisible = false;
       },
       handleSizeChange(val) {

       },
       current_change(val) {
         this.activeTab = val - 1
       },
       tableRowClassName({
         row,
         rowIndex
       }) {
         if (rowIndex === 0) {
           return 'th';
         }
         return '';
       },
       switchChange() {
         this.istag = !this.istag;
       }
     }
   };
 </script>
 <style scoped="scoped">
   .basetable {
     .tableMain {
       margin: {
         top: 10px;
       }
     }

     .page {
       float: left;

       margin: {
         top: 10px;
       }
     }
   }

   /deep/.el-button--small,
   .el-button--small.is-round {
     padding: 9px 11px;
   }

   .el-header,
   .el-footer:nth-child(1) {
     background-color: #F3F3F3;
     color: #333;

     line-height: 40px;

   }

   .el-aside:nth-child(1) {
     background-color: #D3DCE6;
     color: #333;

     line-height: 200px;
   }

   .el-main:nth-child(1) {
     background-color: #FFFFFF;
     color: #333;


   }

   body>.el-container {
     margin-bottom: 40px;
   }

   .el-container:nth-child(5) .el-aside,
   .el-container:nth-child(6) .el-aside {
     line-height: 260px;
   }

   .el-container:nth-child(7) .el-aside {
     line-height: 320px;
   }

   .el-container.is-vertical:nth-child(1) {
     flex-direction: column;
     width: 90%;
     -webkit-writing-mode: 0 horizontal-tb;
     margin: 0 auto;
     border: 1px solid #E4E4E4;
   }

   .disan {}

   /deep/.el-table .cell {
     box-sizing: border-box;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: normal;
     word-break: break-all;
     line-height: 23px;
     padding-right: 10px;
     display: flex;
   }
 </style>

