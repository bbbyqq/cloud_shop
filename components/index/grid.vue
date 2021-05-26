<template>
	<view>
		<tui-grid unlined>
			<block v-for="(item,index) in dataList" :key="index">
				<tui-grid-item class="grid-item" :cell="5" @click="detail" :border="false" :bottomLine="false">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" size="40" color="#ff7b7b"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.title}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					name: "bag-fill",
					title:'华为专区'
				}, {
					name: "bag-fill",
					title:'智慧屏'
				}, {
					name: "bag-fill",
					title:'新品频道'
				}, {
					name: "bag-fill",
					title:'莫塞尔专区'
				}, {
					name: "bag-fill",
					title:'拼团'
				}]
			}
		},
		methods:{
			detail() {
				uni.showToast({
					icon:"none",
					title:"暂未开发，敬请期待"
				})
			}
		}
	}
</script>

<style scoped>
	.grid-item {
		text-align: center;
	}
	.tui-grid-label {
		font-size: 23rpx;
	}
</style>
