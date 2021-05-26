<template>
	<view>
		<!-- 地址 -->
		<view class="address" @click="selectAddress">
			<view class="address-flex">
				<view class="address-name">{{address.name}}</view>
				<view class="address-number">{{address.number}}</view>
			</view>
			<view class="address-detail">
				{{address.detail}}
			</view>
			<view class="address-icon">
				<u-icon name="arrow-right" color="#bbb"></u-icon>
			</view>
		</view>
		<u-gap height="30" bg-color="#f7f7f7"></u-gap>
		<!-- 购买商品信息 -->
		<view class="goods">
			<view class="goods-box">
				<view class="goods-message">商品信息</view>
				<view class="goods-flex" v-for="item in goods">
					<view class="goods-img">
						<image :src="item.img" mode=""></image>
					</view>
					<view>
						<view class="goods-name">
							{{item.title}}
						</view>
						<view class="goods-norms">{{item.name_first}} {{item.name_second}} {{item.name_third}}
						</view>
					</view>
					<view class="goods-price">
						<view>￥{{item.price}}</view>
						<view>x{{item.number}}</view>
					</view>
				</view>
				<view class="goods-total">
					<view class="goods-total-name">商品总额</view>
					<view class="goods-total-price">￥{{totalGoodsPrice}}.00</view>
				</view>
				<view class="goods-coupon" @click="goToCoupon">
					<view class="goods-coupon-name">优惠券</view>
					<view class="goods-coupon-icon">
						<u-icon name="arrow-right" color="#bbb"></u-icon>
					</view>
				</view>
				<view class="goods-freight">
					<view class="goods-freight-name">运费</view>
					<view class="goods-freight-price">￥{{totalFreightPrice}}.00</view>
				</view>
				<view class="goods-remarks">
					<view class="goods-remarks-name">订单备注</view>
					<view class="goods-remarks-input"><input type="text" value="" placeholder="选填:请先和商家协商一致"
							placeholder-style="{'color':'#b2b2b2'}" /></view>
				</view>
				<view class="goods-all">
					<view>合计：<text class="goods-all-text">￥{{totalPrice}}.00</text></view>
				</view>
			</view>
		</view>
		<!-- 底部确认支付 -->
		<view class="navigation">
			<view class="right">
				<view>实付金额：<text class="right-text">￥{{totalPrice}}.00</text></view>
				<view class="confirm-btn" @click="confirmPay">确认支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: {
					name: "游X",
					number: "183****5523",
					detail: "广东省深圳市宝安区自由路66号"
				},
				goods: [{
					"id": 83248,
					"create_time": "2020-11-15 13:04:21",
					"goods_id": 22223,
					"title":"HUAWEI Mate 40",
					"name_first": "秘银色",
					"name_second": "8GB+128GB",
					"name_third": "官方标配",
					"price": "4999.00",
					"freight":"0.00",
					"inventory": 1794,
					"img": "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/53be19f1a8edccf3e9bc5739e8fe9e396925d23919e9722afd94b6a37945ed85f72878cd58543b0dcd8d6095e2a17bba?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=rUOZqP33-Ct4vWEi5A5G9Q.png&size=750",
					"code": "",
					"number":1,
					"checked":1,
					"sell_num": 0
				}]
			}
		},
		onLoad: function(option) {
			if (option.goods !== undefined) {
				// 将传过来的对象值进行结构
				this.goods = JSON.parse(decodeURIComponent(option.goods))
			}
		},
		computed: {
			totalGoodsPrice() {
				var sum = 0;
				for (var i = 0; i < this.goods.length; i++) {
					sum += parseInt(this.goods[i].price) * parseInt(this.goods[i].number)
				}
				return sum
			},
			totalFreightPrice() {
				var sum = 0;
				for (var i = 0; i < this.goods.length; i++) {
					sum += parseInt(this.goods[i].freight)
				}
				return sum
			},
			totalPrice() {
				var sum = 0;
				var freightSum = 0;
				for (var i = 0; i < this.goods.length; i++) {
					sum += parseInt(this.goods[i].price) * parseInt(this.goods[i].number)
					freightSum += parseInt(this.goods[i].freight)
				}
				return sum + freightSum
			}
		},
		methods: {
			selectAddress() {
				uni.navigateTo({
					url: '../address/address'
				})
			},
			goToCoupon() {
				uni.navigateTo({
					url: '../coupon/coupon'
				})
			},
			confirmPay() {
				uni.navigateTo({
					url: '../paySuccess/paySuccess'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		height: 140rpx;
		padding: 30rpx;
		margin-bottom: 40rpx;

		.address-flex {
			display: flex;
		}

		.address-name {
			font-size: 38rpx;
		}

		.address-number {
			font-size: 36rpx;
			margin-left: 40rpx;
			line-height: 60rpx;
		}

		.address-detail {
			margin-top: 10rpx;
			width: 720rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.address-icon {
			position: absolute;
			top: 60rpx;
			right: 20rpx;
		}
	}

	.goods {
		margin-bottom: 112rpx;

		.goods-box {
			padding: 30rpx;

			.goods-message {
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}

			.goods-flex {
				display: flex;
				margin-top: 20rpx;

				.goods-img {
					height: 160rpx;
					width: 160rpx;
					margin-left: -18rpx;

					image {
						height: 160rpx;
						width: 160rpx;
					}
				}

				.goods-name {
					width: 408rpx;
					overflow: hidden;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					word-break: break-all;
					-webkit-box-orient: vertical;
					padding: 0 20rpx;
				}

				.goods-norms {
					color: #8c8c8c;
					font-size: 26rpx;
					margin-top: 20rpx;
					padding: 0 20rpx;
				}

				.goods-price {
					text-align: right;
					color: #8c8c8c;
					font-size: 28rpx;
				}
			}

			.goods-total {
				display: flex;
				margin: 60rpx 0;
				font-size: 28rpx;

				.goods-total-name {
					flex: 5;
				}

				.goods-total-price {
					text-align: right;
					flex: 5;
				}
			}

			.goods-coupon {
				display: flex;
				margin: 60rpx 0;
				font-size: 28rpx;

				.goods-coupon-name {
					flex: 5;
				}

				.goods-coupon-icon {
					text-align: right;
					flex: 5;
				}
			}

			.goods-freight {
				display: flex;
				margin: 60rpx 0;
				font-size: 28rpx;

				.goods-freight-name {
					flex: 5;
				}

				.goods-freight-price {
					text-align: right;
					flex: 5;
				}
			}

			.goods-remarks {
				display: flex;
				margin: 60rpx 0;
				font-size: 28rpx;

				.goods-remarks-name {
					flex: 2;
				}

				.goods-remarks-input {
					flex: 6;
				}
			}

			.goods-all {
				margin: 60rpx 0;
				font-size: 28rpx;
				text-align: right;

				.goods-all-text {
					color: #f91328;
					font-weight: 700;
				}
			}
		}
	}

	.navigation {
		border-top: solid 2rpx #f2f2f2;
		padding: 20rpx;
		height: 112rpx;
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;

		.right {
			display: flex;
			float: right;

			.right-text {
				color: #f91328;
				line-height: 66rpx;
				margin-right: 20rpx;
			}

			.confirm-btn {
				background: #f91328;
				color: #FFFFFF;
				padding: 0 40rpx;
				line-height: 64rpx;
				border-radius: 40rpx;
			}
		}
	}
</style>
