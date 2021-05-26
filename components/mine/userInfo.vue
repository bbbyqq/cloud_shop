<template>
	<view>
		<view class="user" v-if="isLogin" @click="wxGetUserInfo">
			<view class="user-logo">
				<image src="https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132" mode=""></image>
			</view>
			<view class="user-name">
				<view>未登录</view>
			</view>
		</view>
		
		<view class="user" v-else>
			<view class="user-logo">
				<image :src="userInfo.avatarUrl"></image>
			</view>
			<view class="user-name">
				<view>{{userInfo.nickName}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: true,
				userInfo: {
					avatarUrl: '',
					nickName: ''
				}
			}
		},
		methods: {
			wxGetUserInfo() {
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						this.isLogin = false
						this.userInfo.avatarUrl = res.userInfo.avatarUrl
						this.userInfo.nickName = res.userInfo.nickName
					},
					fail: (res) => {
						console.log("未获得授权")
					}

				})
			}
		}
	}
</script>

<style scoped>
	.user {
		height: 300rpx;
		background: #f82839;
		display: grid;
	}

	.user view {
		float: left;
	}

	.user-logo {
		justify-self: center;
		align-self: center;
		height: 140rpx;
		width: 140rpx;
	}

	.user-logo image {
		height: 140rpx;
		width: 140rpx;
		border-radius: 50%;
	}

	.user-name {
		justify-self: center;
		color: #FFFFFF;
		font-size: 50rpx;
	}
	
	.button {
		
	}
</style>
