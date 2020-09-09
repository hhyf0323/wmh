<template>
	<div style="height: 100%;">
		<Menu :theme="theme3" :active-name="1" style='width: 12%;height: 100%;'>
			<MenuGroup :title='item["title"]'>
				<MenuItem :name="index + 1" v-for='(items,index) in item["litsts"]' :key='index'>
				<li>{{ items['title'] }}</li>
				</MenuItem>
			</MenuGroup>
		</Menu>
	</div>
</template>

<script>
	import {
		Menu,
		MenuGroup,
		MenuItem
	} from 'view-design';
	export default {
		props:['item'],
		components: {
			[Menu.name]: Menu,
			[MenuGroup.name]: MenuGroup,
			[MenuItem.name]: MenuItem
		},
		data() {
			return {
				theme3: 'light',
			}
		}
	}
</script>

<style>
</style>
