<template>
	<view class="recommend">
		<h2>手机</h2>
		<u-grid :col="2" :border="false">
			<u-grid-item v-for="(item, index) in list" :index="index" :key="index" custom-style="padding:10px"
				@click="goToGoodsDetail">
				<view class="grid-view">
					<img class="grid-img" :src="item.images" />
					<view>{{item.remarks}}</view>
				</view>
				<text class="grid-text-name">{{item.name}}</text>
				<text class="grid-text-price">{{item.price}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_30DC7C81625DCEBCC577E88BAE05B489A616EAAAFDB59375mp.png&size=750",
						remarks: '限时开售',
						name: "HUAWEI Mate 40",
						price: "¥4999.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e3df29854e0541c8c34656ec721e9469f8b5f664fdf989ce379dd721de2e08794a8d3f783a035d98677ea7f8fe8ba1fc?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_084225B8F3BD10E711B7C93693A3600E1B87BAB5D6FD0DE4mp.png&size=750",
						remarks: '限时开售',
						name: "HUAWEI Mate 40 RS保时捷",
						price: "¥9999.00"
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

	.grid-text-price {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: #dd0528;
	}
</style>
