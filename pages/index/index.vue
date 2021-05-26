<template>
	<view>
		<view>
			<Search />
			<view class="wrap">
				<Swiper />
				<Standard />
				<Grid />
				<Recommend />
				<Mobile />
				<Computer />
				<Earphone />
			</view>
		</view>
	</view>	
</template>

<script>
	import Search from '../../components/index/search.vue'
	import Swiper from '../../components/index/swiper.vue'
	import Standard from '../../components/index/standard.vue'
	import Grid from '../../components/index/grid.vue'
	import Recommend from '../../components/index/recommend.vue'
	import Mobile from '../../components/index/mobile.vue'
	import Computer from '../../components/index/computer.vue'
	import Earphone from '../../components/index/earphone.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			Search,
			Swiper,
			Standard,
			Grid,
			Recommend,
			Mobile,
			Computer,
			Earphone
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.wrap {
		margin-top: 80rpx;
	}
	
	swiper {
		height: 275rpx;
	}
</style>
