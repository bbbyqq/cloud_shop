<template>
	<view>
		<!-- 此search组件可固定至小程序顶部，不随滑动而移动 -->
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" :size="13" color="#999"></icon>
				<text class="tui-search-text">搜索商品</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			search() {
				uni.navigateTo({
					 url: '../../pages/search/search',
				})
			}
		}
		
	}
</script>

<style scoped>
	.tui-searchbox {
		width: 100%;
		height: 92rpx;
		padding: 0 23rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 100;
	}
	
	.tui-searchbox::after {
		content: '';
		position: absolute;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}
	
	.tui-search-input {
		width: 100%;
		height: 60rpx;
		background: #f1f1f1;
		border-radius: 30rpx;
		font-size: 26rpx;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tui-search-text {
		padding-left: 16rpx;
	}
	
</style>
