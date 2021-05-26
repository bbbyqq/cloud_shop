<template>
	<view class="recommend">
		<h2>精品推荐</h2>
		<view class="lateral-sliding">
			<view class="lateral-sliding-item" v-for="(item,index) in list" @click="goToGoodsDetail">
				<view class="lateral-sliding-img"><img :src="item.images" /></view>
				<view class="lateral-sliding-name">{{item.name}}</view>
				<view class="lateral-sliding-price">{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/07cdf865487c589e2fa62ce5941f06404ce5a000f7ab7d9058125cfb4270ea80ac810793989dda007b8bf7cb35348a33?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a-removebg-preview.png&size=750",
						name: "HUAWEI Mate 40",
						price: "¥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/8ccbd2c878f1b3c6044c7e6ab7d6949250e7c69a82b80252b07105d3010751c4cd00a4034a761b209faaf885dc9a6619?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_DA5136390A3402AB2CF52E6836C59D50539C519A493318C1mp-removebg-preview.png&size=750",
						name: "HUAWEI MateBook 14 2020款",
						price: "¥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/640cac713cf36bef606cbe75c541386c9950fc9e90640b872e5208781ff6d14e1503a287b42ec470f40f948f6a7a7d95?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp-removebg-preview.png&size=750",
						name: "HUAWEI FreeBuds 3 无线耳机",
						price: "¥699.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/07cdf865487c589e2fa62ce5941f06404ce5a000f7ab7d9058125cfb4270ea80ac810793989dda007b8bf7cb35348a33?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a-removebg-preview.png&size=750",
						name: "HUAWEI Mate 40",
						price: "¥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/8ccbd2c878f1b3c6044c7e6ab7d6949250e7c69a82b80252b07105d3010751c4cd00a4034a761b209faaf885dc9a6619?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_DA5136390A3402AB2CF52E6836C59D50539C519A493318C1mp-removebg-preview.png&size=750",
						name: "HUAWEI MateBook 14 2020款",
						price: "¥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/640cac713cf36bef606cbe75c541386c9950fc9e90640b872e5208781ff6d14e1503a287b42ec470f40f948f6a7a7d95?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp-removebg-preview.png&size=750",
						name: "HUAWEI FreeBuds 3 无线耳机",
						price: "¥699.00"
					}
				]


			};
		},
		methods: {
			// change(e) {
			// 	this.current = e.detail.current;
			// }
			goToGoodsDetail() {
				uni.navigateTo({
					url:"../../pages/goodsDetail/goodsDetail"
				})
			}
		}
	};
</script>

<style scoped lang="scss">
	.recommend {
		margin-top: 20rpx;
	}

	.recommend h2 {
		text-align: center;
		font-size: 40rpx;
	}
	
	.lateral-sliding {
		display: flex;
		// 添加左右滑动的属性
		overflow-y: hidden;
		overflow-x: scroll;
		/* 解决ios手机页面滑动卡顿问题 */
		-webkit-overflow-scrolling: touch;
		margin-top: 20rpx;
	}

	// 隐藏水平滚动底部的横条
	.lateral-sliding::-webkit-scrollbar {
		display: none;
	}

	.lateral-sliding-item {
		margin-right: 15rpx;
	}

	.lateral-sliding-item:first-child {
		margin-left: 15rpx;
	}

	.lateral-sliding-img {
		position: relative;
		text-align: center;
		width: 250rpx;
		height: 270rpx;
		background-color: #f9f9f9;
		border-radius: 20rpx;
	}

	.lateral-sliding-img img {
		// 图片垂直居中
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 210rpx;
		height: 200rpx;
	}

	.lateral-sliding-name {
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #000000;
		text-align: center;
	}

	.lateral-sliding-price {
		font-size: 28rpx;
		text-align: center;
		color: #dd0528;
	}
</style>
