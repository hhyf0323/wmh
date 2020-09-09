<template>
	<div class="mgBody">
		<div class="dc-flex jc-between">
			<div class="dc-flex alit-center text-size-2">
				<i class="el-icon-s-grid"></i>
				<div class="shu">列表</div>
			</div>
			<div>
				<el-button>全部消息</el-button>
				<el-button>未读消息</el-button>
			</div>
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="消息标题" width="200">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="发布时间" width="200">
			</el-table-column>
			<el-table-column prop="address" label="发布人员" show-overflow-tooltip>
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="120">
				<template slot-scope="scope">
					<el-button type="text" size="small">查看</el-button>
					<el-button type="text" size="small">
						移除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="dc-flex jc-between" style="margin-top: 20px;margin-left: 10px;">
			<el-checkbox v-model="checked">全部选中</el-checkbox>
		</div>
    <div class="block">
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
</template>

<script>
	export default {
		props:['tableDatas'],
		components: {

		},
		data() {
			return {
				checked: false,
				tableData: [],
				multipleSelection: [],
        currentPage4: 4
			}
		},
		watch: {
			checked() {
				if (this.checked) {
					this.toggleSelection(this.tableData)
				} else {
					this.toggleSelection()
				}
			}
		},
		created() {
			setTimeout(() => {
				this.tableData = this.tableDatas
			},2500)
		},
		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},
    handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
	}
</script>

<style scoped="">
	.mgBody {
		width: 95%;
		margin: 15px auto;
	}
  .el-icon-s-grid{
    color: #999;
    font-size: 16px;
  }
  .shu {
    font-weight: bold;
    margin-left: 10px;
    font-size: 14px;
    color: #666666;
  }
  .block{
    float: right;
    margin-top: 10px;
    margin-right: 30px;
  }
</style>
