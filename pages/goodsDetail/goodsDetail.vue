<template>
	<view>
		<u-swiper :list="list" mode="number" indicator-pos="bottomRight" height="750" img-mode="scaleToFill"
			@click="onPreviewImage"></u-swiper>
		<view class="goods-price">
			<view class="goods-new-price">
				<text style="font-size: 30rpx;">￥</text>
				4900.
				<text style="font-size: 38rpx;">00</text>
			</view>
			<view class="goods-font">价格</view>
			<view class="goods-old-price">￥5099.00</view>
		</view>
		<view class="goods-title">
			<view class="title">HUAWEI Mate 40 5G 全网通</view>
			<view class="share" @click="share">
				<tui-icon name="partake" size="15" style="margin-right: 10rpx;"></tui-icon>分享
			</view>
		</view>
		<view class="goods-sellMessage">
			<view style="margin-left: 30rpx;">快递：0.00</view>
			<view style="text-align: center;">月销2000</view>
			<view style="text-align: end;margin-right: 30rpx;">浙江杭州</view>
		</view>
		<u-gap height="40" bg-color="#f7f7f7"></u-gap>
		<view>
			<view class="goods-service" @click="goToCoupon">
				<view style="width: 80rpx;font-size: 32rpx;font-weight: 700;color: #000000;">领券</view>
				<view style="display: flex;flex: 1;">
					<view style="background: red;color: #FFFFFF;border-radius: 60rpx;padding: 20rpx;height: 60rpx;line-height: 20rpx;margin: 34rpx;">
						满2000减150元</view>
					<view style="background: red;color: #FFFFFF;border-radius: 60rpx;padding: 20rpx;height: 60rpx;line-height: 20rpx;margin: 34rpx;margin-left: 0;">
						满1000减50元</view>
				</view>
				<view>
					<u-icon name="more-dot-fill" size="34"></u-icon>
				</view>
			</view>
			<view class="goods-service">
				<view style="width: 80rpx;font-size: 32rpx;font-weight: 700;color: #000000;">服务</view>
				<view style="display: flex;flex: 1;">
					<view style="margin-left: 40rpx;">由云商城提供商品，发货开票及售后服务</view>
				</view>
			</view>
			<view class="goods-service" @click="showSku">
				<view style="width: 80rpx;font-size: 32rpx;font-weight: 700;color: #000000;">已选</view>
				<view style="display: flex;flex: 1;">
					<view style="margin-left: 40rpx;">{{goodsInfo}}</view>
				</view>
				<view>
					<u-icon name="more-dot-fill" size="34"></u-icon>
				</view>
			</view>
			<view class="goods-service">
				<view style="width: 80rpx;font-size: 32rpx;font-weight: 700;color: #000000;">运费</view>
				<view style="display: flex;flex: 1;">
					<view style="margin-left: 40rpx;">在线支付免邮费</view>
				</view>
			</view>
			<view style="margin: 20rpx 0 24rpx 24rpx;color: rgb(153, 153, 153);;">
				<view>
					<tui-icon name="circle-selected" :size="18" color="rgb(153, 153, 153);"
						style="margin-right: 10rpx;"></tui-icon>七天无理由退货
				</view>
				<view>
					<tui-icon name="circle-selected" :size="18" color="rgb(153, 153, 153);"
						style="margin-right: 10rpx;"></tui-icon>闪电退款
				</view>
				<view>
					<tui-icon name="circle-selected" :size="18" color="rgb(153, 153, 153);"
						style="margin-right: 10rpx;"></tui-icon>退货包运费
				</view>
				<view>
					<tui-icon name="circle-selected" :size="18" color="rgb(153, 153, 153);"
						style="margin-right: 10rpx;"></tui-icon>极速审核
				</view>
			</view>
			<view>
				<view class="divider">
					<u-divider bg-color="#f7f7f7">宝贝详情</u-divider>
				</view>
				<view class="img-message">
					<image v-for="item in img_detail" :src="item.image" mode="widthFix"></image>
				</view>
			</view>

		</view>
		<sku @tapOK="skuTapOK" ref="sku"></sku>
		<submitBar class="submit-bar"></submitBar>
	</view>
</template>

<script>
	import sku from '@/components/sku/sku.vue';
	import submitBar from '@/components/goodsDetail/submitBar.vue';
	export default {
		components: {
			sku,
			submitBar
		},

		data() {
			return {
				list: [{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_30DC7C81625DCEBCC577E88BAE05B489A616EAAAFDB59375mp.png&size=750'
					},
					{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/542067bed8289026fb44662095b5c97eabfe7519584e2503a5738137f61570f3e02f99818b014923a9787ce1d2b1593d?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_5378532D655EB3272C33B4E1343057F3BCCEA8EF0D8F32D8.png&size=750'
					},
					{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/bcd9111844bdd638517cfe24eda1caa35996ae46a413231ef18412b8b9383f5665667d86e70722a0c34b2c0549dbe0e4?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_70E995DC837177C639BFB5A2BEE049035141629148C70A7B.png&size=750'
					}
				],
				goodsInfo: "请选择规格",
				img_detail: [{
					image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/33095db5845fabd106e44f9fd0da1734615727479c7ad48468fb043273e46b70835ce502105d4dcf5211d33709c85009?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=151558220018016839514827.jpg&size=750'
				}, {
					image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/851bc3a4a296923f7996b8aa4872f253a6249776315f1a71282d034fc2a1ff8029c6db3934640fdd9adc679478f60ff0?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=866320091104211235277585.jpg&size=750'
				}, {
					image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/595fcfc0dfcfb18bfe69ef1245105f5eb2d5cf3f9bf8cbb95261faa311d402dc30ac33f4b8f00e54ebee7147446aaa71?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=248374505429772315924138.jpg&size=750'
				}, {
					image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/727d9deee3d69ed528dfb74af120644854e44a742f745db73f7976def63dda5c02352a808c9af8bdb9039d5761c8ade9?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=280776365153929861941670.jpg&size=750'
				}, {
					image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/aec66678e97049f0ec8a4cc4875f3833189dec7a4b8630e068e64d263925485327c492fe11638f5419f7da8649c535e9?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=713038058164220140148570.jpg&size=750'
				}, ]
			}
		},
		methods: {
			// 预览图片
			onPreviewImage(index) {
				var dataset = this.list[index].image;
				uni.previewImage({
					urls: [dataset],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})

			},
			share() {
				uni.showToast({
					title: "当前处于开发版，不可分享",
					icon: "none"
				})
			},
			goToCoupon() {
				uni.navigateTo({
					url:'../coupon/coupon'
				})
			},
			showSku() {
				// $refs意思是父组件想调用子组件的methods，就给子组件绑定一个ref，然后在父组件任意html结构里面绑定事件，通过$refs，即可调用到子组件的方法。例如此处，我想在已选这个view里面点击然后弹出子组件的sku，就用ref就可以实现
				this.$refs.sku.showSKU()
			},
			skuTapOK(event) {
				this.goodsInfo = event.shopItem.name_first + "，" + event.shopItem.name_second + "，" + event.shopItem
					.name_third
			},
		}
	}
</script>

<style scoped>
	.goods-price {
		margin: 24rpx;
	}

	.goods-new-price {
		color: #ff102f;
		font-size: 55rpx;
		font-weight: 700;
	}

	.goods-font {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: rgb(153, 153, 153);
		float: left;
	}

	.goods-old-price {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: rgb(153, 153, 153);
		text-decoration: line-through;
	}

	.goods-title {
		display: flex;
	}

	.title {
		flex: 8;
		font-size: 35rpx;
		color: #000000;
		/* 两行溢出三点显示 */
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		word-break: break-all;
		-webkit-box-orient: vertical;

		padding: 6rpx;
		margin-left: 20rpx;
		height: 108rpx;
	}

	.share {
		margin-top: 15rpx;
		background: #ededed;
		border-radius: 40rpx 0 0 40rpx;
		font-size: 28rpx;
		flex: 2;
		height: 55rpx;
		line-height: 55rpx;
		text-align: center;
		color: rgb(153, 153, 153);
	}

	.goods-sellMessage {
		margin-top: 50rpx;
		display: flex;
		font-size: 26rpx;
	}

	.goods-sellMessage view {
		flex: 1;
		color: rgb(153, 153, 153);
	}

	.goods-service {
		padding: 0 24rpx;
		height: 130rpx;
		line-height: 130rpx;
		border-bottom: 1rpx solid #eaeff1;
		display: flex;
	}

	.divider {
		background: #f7f7f7;
		height: 130rpx;
		line-height: 130rpx;
	}

	.img-message image {
		width: 100%;
		margin-bottom: -12rpx;
	}

	.img-message image:last-child {
		margin-bottom: 94rpx;
	}

	.submit-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
