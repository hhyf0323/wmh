<template>
	<div class="DaoH">
		<div class="" style="height: 100%;">
			<el-tabs :tab-position="tabPosition" style='height: 100%;'>
				<el-tab-pane :label="item['title']" v-for='(item,index) in leftHomeLists' :key='index'>

					<div v-show="index == 0" style="background: white;">
						<homeLists :item='item["item"]' />
					</div>

					<div v-show="index == 1" style="background: white;">
						<homeLists :item='item["item"]' />
					</div>
					<div v-show="index == 2" style="background: white;">
						<homeLists :item='item["item"]' />
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import {
		Tabs,
		TabPane
	} from 'element-ui'
	import homeLists from '@/components/Home/homeLists'
	export default {
		components: {
			[Tabs.name]: Tabs,
			[TabPane.name]: TabPane,
			homeLists
		},
		data() {
			return {
				tabPosition: 'left',
				leftHomeLists: [{
						title: '首页',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '统计',
						item: {
							title: '统计分析',
							litsts: [{
									title: "总览统计"
								},
								{
									title: '客服统计'
								},
								{
									title: '留言统计'
								},
								{
									title: '机器人统计'
								}
							]
						}
					},
					{
						title: '客服',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '历史',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '公告',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},

					{
						title: '知识',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '对话',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '权限',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					},
					{
						title: '设置',
						item: {
							title: '系统首页',
							litsts: [{
									title: "系统首页"
								},
								{
									title: '个人资料设置'
								},
								{
									title: '消息中心'
								},
								{
									title: '登录日志'
								}
							]
						}
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.DaoH {
		height: 100%;
	}

	.DaoH .el-tabs__content {
		height: 100%;
	}

	.DaoH .el-tab-pane {
		height: 100%;
	}

	.DaoH .el-tab-pane>div:first-child {
		height: 100%;
	}
</style>
