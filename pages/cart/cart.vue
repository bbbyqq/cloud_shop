<template>
	<view class="shop-car">
		<commonCar :list="goodsProducts" @delect="delect" @accounts="accounts" :goodsMessageList="goodsMessageList">
		</commonCar>
	</view>
</template>

<script>
	import commonCar from '@/components/cart/shopCar.vue'
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				//checked 1为未选择 2为选中
				goodsProducts: [{
					goods: [],
				}],
			}
		},
		components: {
			commonCar
		},
		computed: {
			// 利用mapGetters辅助函数直接获取vuex的数据
			...mapGetters(['goodsMessageList'])
		},
		created() {
			for(var i in this.goodsProducts) {
				this.goodsProducts[i].goods = this.goodsMessageList
			}
		},
		// onTabItemTap()是点击底部导航栏事件，而uni.reLaunch 是让其再次跳转至购物车界面，这样会刷新购物车页面，让cart.vue中的created再次执行
		onTabItemTap(){
			uni.reLaunch({
				url: "../../pages/cart/cart"
			})
		},
		methods: {
			delect(e) {
				console.log('删除', e);
			},
			accounts(e) {
				// 传值传对象
				uni.navigateTo({
					url: '../../pages/submitOrder/submitOrder'
				})
			}
		}
	}
</script>


<style lang="scss" scoped>
	.shop-car {
		padding-bottom: 100rpx;
		width: 750rpx;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
	}
</style>
