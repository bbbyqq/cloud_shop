<template>
	<view class="wrap">
		<u-swiper :list="list" mode="dot" height="300" @click="goToGoodsDetail"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7883762308e9233d2bf27e91ace3ff161ad826039f7c6ae7439c882ec10dadc55f56be4f5d0b13c23f3df719a63de4f8?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=DDEB7C4D4325360191457FB06FF1FA74DDD908C11210335B_gaitubao_2452x920.jpg&size=750'
					},
					{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7b9b4d401ddacf8925c37bbb808b6def827a226b450652b4a81fe50f00418b5752463b1e8bd3e9f2f75b2488916f238e?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=0EC4A09C07969747DBC7A54C7B1A532F1748CA167558F067_gaitubao_2452x920.jpg&size=750'
					},
					{
						image: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/aea877139a3eb2e38f9ae01605ebb8d731569d3a6029044504b7067dc228f8d7acbda5e973e16354ad7946622f40e82a?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=CE5F9321A922D4C5B49827FFBAADB3ABCBD0E1A35854AB01_gaitubao_2452x920.jpg&size=750'
					}
				],
			}
		},
		methods: {
			goToGoodsDetail() {
				uni.navigateTo({
					url:"../../pages/goodsDetail/goodsDetail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 10rpx 25rpx 25rpx 25rpx;
	}
</style>
