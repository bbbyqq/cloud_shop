<template>
	<view class="recommend">
		<h2>笔记本电脑</h2>
		<u-grid :col="2" :border="false">
			<u-grid-item v-for="(item, index) in list" :index="index" :key="index" custom-style="padding:10px"
				@click="goToGoodsDetail">
				<view class="grid-view">
					<img class="grid-img" :src="item.images" />
					<view>{{item.remarks}}</view>
				</view>
				<text class="grid-text-name">{{item.name}}</text>
				<view class="grid-text-price">
					<text class="grid-text-new-price">{{item.newPrice}}</text>
					<text class="grid-text-old-price">{{item.oldPrice}}</text>
				</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7abddf20bd1f577237f02826ffc6e0972ddb1ff5b145375c72f6804cb0ac18e0ca88ac63fc19420d1e0c2404c507479d?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_DA5136390A3402AB2CF52E6836C59D50539C519A493318C1mp.png&size=750",
						remarks: '稀缺货源',
						name: "HUAWEI MateBook 14 2020款",
						newPrice: "¥4999.00",
						oldPrice: "￥5499.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/3d70ce033af69cf95e75beea3c3947c6cba77a3cd8fbd41b779385de932e78feecb154c349445d3347e3be42926fb8cf?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_FCEDCA950991D7ED71A0677ED0DBD352423688FC5B76E72Emp.png&size=750",
						remarks: '稀缺货源',
						name: "HUAWEI MateBook D 14 锐龙版",
						newPrice: "¥4599.00",
						oldPrice: "￥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/d2d2409069450d98ae3bdd8ce14a6c5974f4ed4ba7a46a888df81a3414c1261e645f60b9926880c01072b96e40a18f8d?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_0C84F12F106534A8612D9CB8D2A995442DCECCE7A16C45D9mp.png&size=750",
						remarks: '稀缺货源',
						name: "HUAWEI MateBook 13 2020 锐龙版",
						newPrice: "¥4599.00",
						oldPrice: "￥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e356f2dd078e2e8b39752436daea0dc188be53e42b1a1a59a183a426be991363bf3e03bd0b0aad701989154bef0bdf45?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_4CDF61F5D70716D92BCDFAA236450E7AC59DF6FDF73A6343mp.png&size=750",
						remarks: '稀缺货源',
						name: "HUAWEI MateBook D 15 锐龙版",
						newPrice: "¥4699.00",
						oldPrice: "￥5299.00"
					}
				]
			};
		},
		methods: {
			goToGoodsDetail() {
				uni.navigateTo({
					url: "../../pages/goodsDetail/goodsDetail"
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

	.grid-view {
		text-align: center;
		border-radius: 0 0 20rpx 20rpx;
	}

	.grid-img {
		width: 350rpx;
		height: 350rpx;
	}

	.grid-view view {
		opacity: 0.8;
		background: rgba(40, 40, 40, 0.4);
		color: #FFFFFF;
		margin-top: -56rpx;
		border-radius: 0 0 20rpx 20rpx;
	}

	.grid-text-name {
		text-align: center;
		font-size: 28rpx;
		margin: 8rpx 20rpx 0 20rpx;
		color: #000;
	}

	.grid-text-price text {
		float: left;
	}

	.grid-text-new-price {
		font-size: 28rpx;
		margin: 4rpx 6rpx 0 0;
		color: #dd0528;
	}

	.grid-text-old-price {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: rgb(153, 153, 153);
		text-decoration: line-through; // 字体划线
	}
</style>
