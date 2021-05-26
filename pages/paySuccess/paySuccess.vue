<template>
	<view>
		<view style="text-align: center;margin-top: 120rpx;">
			<tui-icon name="circle-fill" :size="50" color="#ff062d"></tui-icon>
		</view>
		<view style="text-align: center;font-size: 34rpx;font-weight: 700;margin-top: 30rpx;">{{state}}</view>
		<view style="height: 100rpx;margin-top: 100rpx;width: 100%;position: fixed;bottom: 40rpx;text-align: center;">
			<text style="line-height: 100rpx;border: 1rpx solid #707070;padding: 15rpx 80rpx;border-radius: 40rpx;margin: 0 20rpx;"
			 @click="viewOrder">查看订单</text>
			<text style="line-height: 100rpx;border: 1rpx solid #ff062d;padding: 15rpx 80rpx;border-radius: 40rpx;margin: 0 20rpx;color: #fff;background: #ff062d;"
			 @click="backIndex">返回首页</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state: '购买成功',
			}
		},
		methods:{
			viewOrder() {
				uni.redirectTo({
					url:'../order/order'
				})
			},
			backIndex() {
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped>
</style>
