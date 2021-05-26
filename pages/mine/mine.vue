<template>
	<view>
		<UserInfo/>
		<Columns/>
	</view>
</template>

<script>
	import UserInfo from '../../components/mine/userInfo.vue'
	import Columns from '../../components/mine/columns.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			UserInfo,
			Columns
		},
	}
</script>

<style>
</style>
