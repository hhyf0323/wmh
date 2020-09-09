<template>
	<div class="biaoge">
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="courseDesc" label="日期" width="150">
			</el-table-column>
			<el-table-column prop="courseName" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="professional" label="省份" width="120">
			</el-table-column>
			<el-table-column prop="id" label="ID" width="120">
			</el-table-column>
			<el-table-column prop="professionalId" label="地址" width="120">
			</el-table-column>
			<el-table-column prop="professional.professionalDesc" label="邮编" width="120">
			</el-table-column>
			<el-table-column prop="professional.professionalName" label="邮编" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="290">
				<template slot-scope="scope"><!---scope就是表格的数组对象，scope.row 就是拿取当前这一条的数据-->
					<el-button slot="reference" @click="Zengjia()">增加</el-button>
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" @click="Xiugai(index,scope.row)" size="small">修改</el-button>
                    <el-button slot="reference" @click="Shanchu(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
   import axios from 'axios'
	import qs from 'qs'
	export default {

		data() {
			return {
				updnull:"dad",
				updname:"ddd",
				tableData: [{
					courseDesc: '',
					courseName: '',
					professional: '',
					id: '',
					professionalId: '',
					"professional.professionalDesc": '',
					"professional.professionalName": ''
				}]
			}

		},
		created() {
			this.axios({
				url: "http://139.9.169.87:8081/examsystem/getAllCourse",
				method: "get"
			}).then(res => {
				this.tableData = res.data.data
				console.log(this.tableData)
			})
		},
		methods: {
			Zengjia() {
				this.axios({
					url: "http://139.9.169.87:8081/examsystem/addCourse",
					method: "post",
					params: {
						"professional.id": 161,
						"professional.professionalName": "傻逼",
						"professional.professionalDesc": "nima",
						"id": 160,
						"courseName": "柴旺333",
						"courseDesc": "ddd对",
					},
					data: qs.stringify({
						"professionalId": 161
					})
				}).then(res => {
					console.log(res)
				})
            },
            Shanchu(id){
                this.axios({
                    url:"http://139.9.169.87:8081/examsystem/deleteCourse",
					method:"get",
					params:{
						id:id,
					}
                }).then(res=>{
                    console.log(res)
                })
			},
			Xiugai(index){
				alert(1)
				this.axios.post('http://139.9.169.87:8081/examsystem/updateProfessional?id=100&professionalName='+this.updname+'&professionalDesc='+this.updnull,{
                },{
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/x-www-form-urlencoded"
                    }
                }).then(res=>{
					console.log(res)
				})
			}
		},
	}
</script>

<style scope>
	.biaoge {
		width: 63%;
		margin: 0 auto;
	}
</style>
