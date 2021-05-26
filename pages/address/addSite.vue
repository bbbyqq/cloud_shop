<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人姓名" :value="address.name" />
			</view>
			<view class="item">
				<view class="left">手机号码</view>
				<input type="number" placeholder-class="line" placeholder="请填写收货人手机号" :value="address.phone" />
			</view>
			<view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" :value="address.picker" />
			</view>
			<view class="item">
				<view class="left">详细地址</view>
				<input type="text" placeholder-class="line" placeholder="街道、楼牌等" :value="address.site" />
			</view>
		</view>
		<view class="bottom">
			<view class="default">
				<view class="left">
					<view class="set">设置默认地址</view>
				</view>
				<view class="right">
					<switch color="red" :checked="address.tag == '默认' ? true : false" />
				</view> 
			</view>
		</view>
		<view class="addSite" @click="toAddSite">
			<view class="add">
				确定
			</view>
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" @confirm="confirm" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				address: {
					id: Number,
					name: '',
					phone: '',
					tag: '',
					picker: '',
					site: ''
				}
			};
		},
		onLoad(option) {
			if(option.res !== undefined) {
				uni.setTabBarItem({
					text: '编辑地址'
				});
				// 将传过来的对象值进行结构
				this.address = JSON.parse(decodeURIComponent(option.res))
			}
		},
		methods: {
			showRegionPicker() {
				this.show = true;
			},
			confirm(Object) {
				this.address.picker = Object.province.label + Object.city.label + Object.area.label
			},
			toAddSite() {
				uni.navigateBack({
					
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	/deep/ .line {
		color: $u-light-color;
		font-size: 28rpx;
	}

	.wrap {
		background-color: #f2f2f2;

		.top {
			background-color: #ffffff;
			border-top: solid 2rpx $u-border-color;
			padding: 22rpx;

			.item {
				display: flex;
				font-size: 32rpx;
				line-height: 100rpx;
				align-items: center;
				border-bottom: solid 2rpx $u-border-color;

				.left {
					width: 180rpx;
				}

				input {
					text-align: left;
				}
			}

			.site-clipboard {
				padding-right: 40rpx;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}

				.clipboard {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 26rpx;
					color: $u-tips-color;
					height: 80rpx;

					.icon {
						margin-top: 6rpx;
						margin-left: 10rpx;
					}
				}
			}
		}

		.bottom {
			margin-top: -10rpx;
			padding: 20rpx;
			background-color: #ffffff;
			font-size: 32rpx;

			.default {
				display: flex;
				justify-content: space-between;
				border-bottom: solid 2rpx $u-border-color;

				.right {
					margin-bottom: 20rpx;
				}
			}
		}

		.addSite {
			display: flex;
			justify-content: space-around;
			width: 600rpx;
			line-height: 100rpx;
			position: absolute;
			bottom: 30rpx;
			left: 80rpx;
			background-color: red;
			border-radius: 60rpx;
			font-size: 30rpx;

			.add {
				display: flex;
				align-items: center;
				color: #ffffff;

				.icon {
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
