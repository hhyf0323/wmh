<template>
	<div style="width: 83%">
    <div class="gray">
      <div class="xi"> <span>消息中心</span></div>
    </div>

		<mg-Body :tableDatas='tableData' />

	</div>
</template>

<script>
	const mgBody = () => import('@/components/level2/messageCenter/mgBody');
	export default {
		components: {
			mgBody
		},
		data(){
			return{
				tableData:[{
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				}, {
					date: '客服绩效评定规则说明！',
					name: '2019-05-03 14:36:21',
					address: 'admis'
				} ]
			}
		}
	}
</script>

<style scoped="">
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
</style>
