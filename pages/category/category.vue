<template>
	<view class="container">
		<Search />
		<scroll-view scroll-y :scroll-with-animation="isTap" scroll-anchoring class="tab-view"
			:scroll-into-view="scrollView_leftId" :style="{ height: height + 'px', top: top + 'px' }">
			<view :id="`left_${index}`" v-for="(item, index) in tabbar" :key="index" class="tab-bar-item"
				:class="[currentTab == index ? 'active' : '']" :data-current="index" @tap.stop="swichNav">
				<text>{{ item }}</text>
			</view>
		</scroll-view>
		<scroll-view @scroll="scroll" scroll-anchoring scroll-y scroll-with-animation class="right-box"
			:scroll-into-view="scrollView_rightId" :style="{ height: height + 'px', top: top + 'px' }">
			<!--内容部分 start 自定义可删除-->
			<block v-for="(item, index) in tabbar" :key="index">
				<t-linkage :distanceTop="distanceTop" :recalc="1" :scrollTop="scrollTop" :index="index"
					@linkage="linkage">
					<view class="page-view" :id="`right_${index}`">
						<view class="class-box">
							<view class="class-item">
								<view class="class-name">{{ item }}</view>
								<view class="g-container">
									<view class="g-box" @tap.stop="productList" :data-key="item"
										v-for="item in productsList" @click="goToGoodsDetail">
										<image :src="item.img" class="g-image" />
										<view class="g-title">{{item.name}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</t-linkage>
			</block>
			<!--内容部分 end 自定义可删除-->
		</scroll-view>
	</view>
</template>

<script>
	import Search from '../../components/index/search.vue'
	import tLinkage from '@/components/category/t-linkage.vue';
	export default {
		components: {
			tLinkage,
			Search
		},
		data() {
			return {
				tabbar: [
					'推荐分类',
					'进口超市',
					'国际名牌',
					'奢侈品',
					'海囤全球',
					'男装',
					'女装',
					'男鞋',
					'女鞋',
					'钟表珠宝',
					'手机数码',
					'电脑办公',
					'家用电器',
					'玩具乐器',
					'运动户外',
					'宠物生活',
					'特产馆'
				],
				productsList: [{
					img: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_30DC7C81625DCEBCC577E88BAE05B489A616EAAAFDB59375mp.png&size=750',
					name: 'HUAWEI Mate 40'
				}, {
					img: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7abddf20bd1f577237f02826ffc6e0972ddb1ff5b145375c72f6804cb0ac18e0ca88ac63fc19420d1e0c2404c507479d?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_DA5136390A3402AB2CF52E6836C59D50539C519A493318C1mp.png&size=750',
					name: 'HUAWEI MateBook 14'
				}, {
					img: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/1522802692dc6b5da0e873fa65dff71b8ea9892d6be63105be1c9b36c855ad8d6df40e28b438cc3625f8f99c2f0c9d90?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_870B6FE27F5BF4867AEAF26DA9389FDBDECC5DB85D23154Fmp.png&size=750',
					name: 'HUAWEI FreeBuds 3'
				}, {
					img: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/0bb7da61a78a5326d1b3046083150e4ce756cb47ffc11657d0ffac2dc8d8927d6a165551aacf158adbaf83ccb4e77b8b?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_FB7BAC2D86AA8CA5DF84BE54FBE5FD73150052C815ADC835mp.png&size=750',
					name: 'HUAWEI FreeBuds Studio'
				}],
				height: 0, //scroll-view高度
				top: 0,
				currentTab: 0, //预设当前项的值
				scrollView_leftId: 'left_0',
				scrollView_rightId: 'right_0',
				scrollTop: 0,
				distanceTop: uni.upx2px(92),
				isScroll: true,
				isTap: true
			};
		},
		onLoad: function(options) {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header = 92;
						let top = 0;
						//#ifdef H5
						top = 44;
						//#endif
						this.height = res.windowHeight - uni.upx2px(header);
						this.top = top + uni.upx2px(header);
					}
				});
			}, 50);
		},
		methods: {
			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
					this.checkCor();
				}
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function(isScroll) {
				if (!isScroll) {
					this.isScroll = false;
					this.isTap = true;
					if (this.currentTab > 6) {
						this.scrollView_leftId = `left_${this.currentTab - 2}`;
					} else {
						this.scrollView_leftId = `left_0`;
					}
					this.scrollView_rightId = `right_${this.currentTab}`;
				} else {
					this.scrollView_leftId = `left_${this.currentTab}`;
				}
			},
			productList(e) {
				let key = e.currentTarget.dataset.key;
				uni.navigateTo({
					url: '/pages/template/mall/productList/productList?searchKey=' + key
				});
			},
			scroll(e) {
				//动画时长固定300ms
				if (!this.isScroll) {
					setTimeout(() => {
						this.isScroll = true;
					}, 150);
				} else {
					this.scrollTop = e.detail.scrollTop;
				}
			},
			linkage(e) {
				if (e.isLinkage && e.index != this.currentTab) {
					this.isTap = false;
					this.currentTab = e.index;
					this.checkCor(true);
				}
			},
			goToGoodsDetail() {
				uni.navigateTo({
					url: "../../pages/goodsDetail/goodsDetail"
				})
			}
		}
	};
</script>

<style>
	page {
		background-color: #fcfcfc;
	}

	/* 左侧导航布局 start*/

	.tab-view {
		/* height: 100%; */
		width: 200rpx;
		position: fixed;
		left: 0;
		z-index: 10;
	}

	.tab-bar-item {
		width: 200rpx;
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
	}

	.active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fcfcfc;
	}

	.active::before {
		content: '';
		position: absolute;
		border-left: 8rpx solid #e41f19;
		height: 110rpx;
		left: 0;
	}

	/* 左侧导航布局 end*/

	.right-box {
		width: 100%;
		position: fixed;
		padding-left: 220rpx;
		box-sizing: border-box;
		left: 0;
	}

	.page-view {
		width: 100%;
		overflow: hidden;
		padding-top: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.class-item {
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 12rpx;
	}

	.class-name {
		font-size: 26rpx;
		font-weight: bold;
	}

	.g-container {
		/* padding-top: 20rpx; */
		display: flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.g-box {
		width: 33.3333%;
		text-align: center;
		padding-top: 40rpx;
	}

	.g-image {
		width: 120rpx;
		height: 120rpx;
	}

	.g-title {
		font-size: 22rpx;
	}
</style>
