<template>
	<u-cell-group>
		<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}" icon="order"
			title="我的订单" value="全部订单" @click="goToOrder"></u-cell-item>
		<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}" icon="bag"
			title="我的拼团" @click="goTomyGroup"></u-cell-item>
		<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}"
			icon="../../../static/images/columns/coupon.png" title="我的优惠券" @click="goToCoupon"></u-cell-item>
		<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}" icon="map"
			title="我的地址" @click="goToAddress"></u-cell-item>
		<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}" icon="bookmark"
			title="关于商城" @click="goToAboutMall"></u-cell-item>
		<button open-type="contact" class="customer">
			<u-cell-item iconSize="50" :title-style="{'font-size':'34rpx','margin':'6rpx 0 0 6rpx'}" icon="kefu-ermai"
				title="联系客服"></u-cell-item>
		</button>
	</u-cell-group>
</template>

<script>
	export default {
		methods:{
			goToOrder() {
				uni.navigateTo({
					url:'../../pages/order/order'
				})
			},
			goTomyGroup() {
				uni.showToast({
					icon:'none',
					title:'暂未开发，敬请期待'
				})
			},
			goToCoupon() {
				uni.navigateTo({
					url:'../../pages/coupon/coupon'
				})
			},
			goToAddress() {
				uni.navigateTo({
					url:'../../pages/address/address'
				})
			},
			goToAboutMall() {
				uni.navigateTo({
					url:'../../pages/aboutMall/aboutMall'
				})
			}
		}
	}
</script>

<style scoped>
	.customer {
		background: #fff;
		padding: 0;
	}

	.customer::after {
		border: none;
	}
</style>
