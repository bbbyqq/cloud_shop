<template>
	<view class="recommend">
		<h2>耳机</h2>
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
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/1522802692dc6b5da0e873fa65dff71b8ea9892d6be63105be1c9b36c855ad8d6df40e28b438cc3625f8f99c2f0c9d90?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp.png&size=750",
						remarks: '最高优惠200元',
						name: "HUAWEI FreeBuds 3 无线耳机",
						price: "¥699.00"
					},
					{
						images: "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0bb7da61a78a5326d1b3046083150e4ce756cb47ffc11657d0ffac2dc8d8927d6a165551aacf158adbaf83ccb4e77b8b?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_FB7BAC2D86AA8CA5DF84BE54FBE5FD73150052C815ADC835mp.png&size=750",
						remarks: '限时直降200元',
						name: "HUAWEI FreeBuds Studio 无线头戴耳机",
						price: "¥1799.00"
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
