<template>
	<view class="coupon_box">
		<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" theme="#ff0000" color="#ffffff" solid="#ff062d"></coupon>
	</view>
</template>

<script>
	import coupon from '@/components/coupon/coolc-coupon';
	export default {
		components: {
			coupon
		},
		data() {
			return {
				coupon: [{
					list: [{
							money: "150",
							title: "满2000减150元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "限云商城",
							state: "1"
						},
						{
							money: "50",
							title: "满1000减50元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "限云商城",
							state: "1"
						}
					]
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='scss'>
	page {
		background: #ffffff;
	}

	.coupon_box {
		width: 100%;
		height: auto;
		display: table;
		padding: 6upx 26upx 26upx 26upx;
	}

	.other_type {
		width: 100%;
		height: 90upx;
		padding-top: 50upx;

		.text {
			width: 100%;
			border-top: 1px solid #eeeeee;
			display: block;
			text-align: center;
			position: relative;
		}

		.text span {
			width: 180upx;
			height: 40upx;
			line-height: 40upx;
			color: #999999;
			display: block;
			background: #ffffff;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -90upx;
			margin-top: -20upx;
			font-size: 28upx;;
		}
	}
</style>
