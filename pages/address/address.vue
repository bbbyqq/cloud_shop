<template>
	<view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id">
			<view style="width: 85%;height: 110rpx;background-color: transparent;position: absolute;" @click="goToBack()"></view>
			<view class="top">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
				<view class="tag">
					<text :class="{red:res.tag=='默认'}">{{ res.tag }}</text>
				</view>
				<view class="delete-btn" @click="deleteAddress(index)">删除</view>
				<u-modal v-model="show" :show-title="false" :show-cancel-button="true" confirm-color="red" :content="content"
					@confirm="confirm"></u-modal>
			</view>
			<view class="bottom">
				{{res.picker}} {{res.site}}
				<u-icon name="edit-pen" :size="40" color="#999999" @click="EditAddress(index,res)"></u-icon>
			</view>
		</view>
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: "确定要删除该地址吗？",
				siteList: [{
						id: 1,
						name: '游X',
						phone: '183****5523',
						tag: '默认',
						picker: '广东省深圳市宝安区',
						site: '自由路66号'
					},
					{
						id: 2,
						name: '李XX',
						phone: '183****5555',
						tag: '',
						picker: '广东省深圳市宝安区',
						site: '翻身路xx号'
					},
					{
						id: 3,
						name: '王YY',
						phone: '153****5555',
						tag: '',
						picker: '广东省深圳市宝安区',
						site: '平安路13号'
					}
				],
				index:Number,
			};
		},
		methods: {
			goToBack() {
				uni.navigateBack({
					
				})
			},
			deleteAddress(index) {
				this.index = index
				this.show = true
			},
			toAddSite() {
				uni.navigateTo({
					url: './addSite'
				});
			},
			EditAddress(index, res) {
				uni.navigateTo({
					url: './addSite?res=' + encodeURIComponent(JSON.stringify(res))
				});
				// 路由跳转并更改navigationBarTitleText文字
				uni.setNavigationBarTitle({
					title: '编辑地址'
				});
			},
			confirm() {
				this.siteList.splice(this.index,this.index+1)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		padding: 40rpx 20rpx;

		.top {
			display: flex;
			font-weight: bold;
			font-size: 34rpx;

			.phone {
				margin-left: 60rpx;
			}

			.tag {
				display: flex;
				font-weight: normal;
				align-items: center;

				text {
					display: block;
					width: 60rpx;
					height: 34rpx;
					line-height: 34rpx;
					color: #ffffff;
					font-size: 20rpx;
					border-radius: 6rpx;
					text-align: center;
					margin-left: 30rpx;
					// background-color:rgb(49, 145, 253);
				}

				.red {
					background-color: red
				}
			}

			.delete-btn {
				position: absolute;
				right: 10rpx;
				font-size: 30rpx;
				font-weight: 400;
			}
		}

		.bottom {
			display: flex;
			margin-top: 20rpx;
			font-size: 28rpx;
			justify-content: space-between;
			color: #999999;
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
</style>
