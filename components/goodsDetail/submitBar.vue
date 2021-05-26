<template>
	<view>
		<button open-type="contact" class="customer"></button>
		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="server-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">客服</view>
				</view>
				<view class="item" @click="goToIndex">
					<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item car" @click="goToCart">
					<u-badge class="car-num" :count="count" type="error" :offset="[-3, -6]"></u-badge>
					<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">购物车</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1" @click="addCart">加入购物车</view>
				<view class="buy btn u-line-1" @click="handleBuy">立即购买</view>
			</view>
			<sku @tapOK="skuTapOK" ref="sku"></sku>
		</view>
	</view>
</template>

<script>
	import sku from '@/components/sku/sku.vue';
	export default {
		data() {
			return {
				count: this.$store.state.goodsMessage.length,
				handleType: ""
			}
		},
		methods: {
			goToIndex() {
				uni.switchTab({
					url: "../../pages/index/index"
				})
			},
			goToCart() {
				// uni.reLaunch 跳转至购物车界面，会刷新购物车页面，让cart.vue中的created再次执行
				uni.reLaunch({
					url: "../../pages/cart/cart"
				})
			},
			addCart() {
				this.handleType = "1";
				this.$refs.sku.showSKU()
			},
			handleBuy() {
				this.handleType = "2";
				this.$refs.sku.showSKU()
			},
			skuTapOK(event) {
				if (this.handleType === "1") {
					uni.showToast({
						title: "已加入购物车",
					})
					this.count+=1
					this.$store.commit("add",event)
				} else if (this.handleType === "2") {
					var goods = [];
					goods.push(event.shopItem)
					// 传值传对象
					uni.navigateTo({
						url: '../../pages/submitOrder/submitOrder?goods='+encodeURIComponent(JSON.stringify(goods))
					})
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.customer {
		background: transparent;
		position: absolute;
		left: 18rpx;
		height: 100rpx;
		width: 70rpx;
		z-index: 99;
	}
	.customer::after {
	  border: none;
	}
	.navigation {
		display: flex;
		// margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #ff7900;
			}
		}
	}
</style>
