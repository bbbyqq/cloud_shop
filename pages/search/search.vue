<template>
	<view class="search-content">
		<!-- 搜索框 -->
		<u-search bg-color="#f1f1f1" margin="0 23rpx" height="56" placeholder="HUAWEI Mate 40" :focus="true"
			:clearabled="false" v-model="goods" @search="search" @custom="search"></u-search>
		<!-- 热门搜索 -->
		<view class="hot-search-content" v-if="isSearch">
			<h3 class="hot-search">热门搜索</h3>
			<ul class="hot-goods" v-for="item in hotGoods">
				<li @click="handleGoods(item)">{{item.name}}</li>
			</ul>
		</view>
		<view v-else>
			<!-- 顶部综合，销量，评价tab栏 -->
			<view class="tab-content">
				<view v-for="item in list" :class="item.class" @click="selected(item)">
					{{item.tab}}
				</view>
			</view>
			<!-- 商品列表 -->
			<view v-if="isShowContent">
				<view class="search-none" v-if="hasGoods">暂未搜索到此商品，请换个关键词试试</view>
				<view class="goods-content" v-for="(item,index) in goods_list" @click="goToGoodsDetail" v-else>
					<view class="goods-image">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="goods-data">
						<div class="goods-title">{{item.title}}</div>
						<view class="goods-features">{{item.features}}</view>
						<view class="goods-message">
							<view class="price">￥{{item.price}}</view>
							<view class="evaluate">
								<text>{{item.evaluate_person}}人评价</text>
								<text>{{item.praise_rate}}好评</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods: "",
				isSearch: true,
				hotGoods: [{
					name: "Mate 40"
				}, {
					name: "Nova 8"
				}, {
					name: "Mate X2"
				}],
				list: [{
						tab: "综合",
						class: "active"
					}, {
						tab: "销量",
						class: ''
					},
					{
						tab: "评价",
						class: ''
					}
				],
				goods_list: [{
						img: "",
						title: "",
						features: "免息",
						price: "",
						evaluate_person: "1200",
						praise_rate: "99%"
					},
					{
						img: "",
						title: "",
						features: "免息",
						price: "",
						evaluate_person: "890",
						praise_rate: "94%"
					}
				],
				isShowContent: false,
				hasGoods: true
			}
		},
		methods: {
			// 搜索框搜索方法
			search(value) {
				this.isSearch = false;
				uni.showLoading()
				setTimeout(() => {
					this.isShowContent = true
					this.showData()
					uni.hideLoading()
				}, 500)
			},
			// 热门搜索点击方法
			handleGoods(item) {
				this.isSearch = false;
				this.goods = item.name;
				uni.showLoading()
				setTimeout(() => {
					this.isShowContent = true
					this.showData()
					uni.hideLoading()
				}, 500)
			},
			// tabs栏切换方法
			selected(item) {
				// 当点击一个tab时，先清除list所有的class值，然后再给当前点击得tab动态添加class
				for (var i = 0; i < this.list.length; i++) {
					this.list[i].class = '';
				}
				item.class = "active"
				uni.showLoading()
				setTimeout(() => {
					uni.hideLoading()
				}, 500)
			},
			// 根据搜索内容显示数据得方法
			showData() {
				// 此处小于this.goods_list.length即可，不需要等于，因为this.goods_list.length为2，i=0，如果等于this.goods_list.length，就会循环3次，这样就会出现underfind
				for (var i = 0; i < this.goods_list.length; i++) {
					if (this.goods === "Mate 40") {
						this.hasGoods = false
						this.goods_list[0].img =
							"https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e13b5b23721f93b778b3b5f309d5c7769b93d12b81bf8242d0e1c3acda128c729d4c457d05aabfdf4a6530107058b54a?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_30DC7C81625DCEBCC577E88BAE05B489A616EAAAFDB59375mp.png&size=750"
						this.goods_list[0].title = "HUAWEI Mate 40"
						this.goods_list[0].price = "4999"
						this.goods_list[1].img =
							"https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/e3df29854e0541c8c34656ec721e9469f8b5f664fdf989ce379dd721de2e08794a8d3f783a035d98677ea7f8fe8ba1fc?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=428_428_084225B8F3BD10E711B7C93693A3600E1B87BAB5D6FD0DE4mp.png&size=750"
						this.goods_list[1].title = "HUAWEI Mate 40 RS保时捷"
						this.goods_list[1].price = "9999"
					} else if (this.goods === "Nova 8") {
						this.hasGoods = false
						this.goods_list[i].img =
							"https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/44cd19960835ac176f9f4bd7824d3bc523de5e0becfcb6b9cdc58838104c7482b8a28e0a83e85fb75956e63444aaf036?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_1BED94F76D33074373CB7636AC2AEB733F3754C113BF6BBDmp.png&size=750"
						this.goods_list[i].title = "HUAWEI Nova 8"
						this.goods_list[i].price = "3299"
					} else if (this.goods === "Mate X2") {
						this.hasGoods = false
						this.goods_list[i].img =
							"https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/59f63cdaba787009b11a049203b7b2cf28f88ac7bcecfa621e7d8fe5e2a964d39dffa9ac692b3b294cda10ed11a29916?pictype=scale&from=30013&version=3.3.3.3&uin=2287532812&fname=800_800_D58F3741EBC023C1DD544D1A9D77B2DF8D1873FF58D72D75mp.png&size=750"
						this.goods_list[i].title = "HUAWEI Mate X2"
						this.goods_list[i].price = "17799"
					} else {
						this.hasGoods = true
					}
				}
			},
			goToGoodsDetail() {
				uni.navigateTo({
					url:"../../pages/goodsDetail/goodsDetail"
				})
			}
		}

	}
</script>

<style scoped>
	.search-content {
		/* 固定内容框，不让其上下滑动 */
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
	}

	.hot-search-content {
		margin: 55rpx 30rpx 0 30rpx;
	}

	.hot-search {
		font-size: 35rpx;
		color: #000000;
	}

	.hot-goods li {
		list-style: none;
		float: left;
		background: #f9f9f9;
		margin: 15rpx 10rpx 0 10rpx;
		padding: 10rpx 35rpx;
		font-size: 23rpx;
		border-radius: 10rpx;
	}



	.tab-content {
		display: flex;
		height: 80rpx;
		width: 100%;
	}

	.tab-content view {
		float: left;
		flex: 1;
		text-align: center;
		line-height: 80rpx;
	}

	.active {
		color: red;
	}

	.goods-content {
		height: 280rpx;
		margin: 16rpx;
		display: flex;
	}

	.goods-image {
		height: 280rpx;
		width: 280rpx;
		text-align: center;
		position: relative;
	}

	.goods-image image {
		height: 200rpx;
		width: 200rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.goods-data {
		width: 443rpx;
	}

	.goods-data>.goods-title {
		font-size: 33rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 12rpx;
	}

	.goods-data>.goods-features {
		color: #9f9f9f;
		margin-top: 4rpx;
	}

	.goods-message {
		margin-top: 88rpx;
	}

	.goods-message>.price {
		color: #dd0528;
		font-size: 36rpx;
		font-weight: 700;
	}

	.goods-message>.evaluate {
		color: #9f9f9f;
		font-size: 26rpx;
	}

	.goods-message>.evaluate>text:first-child {
		margin-right: 24rpx;
	}

	.search-none {
		font-size: 25rpx;
		color: #9F9F9F;
		text-align: center;
		margin-top: 200rpx;
	}
</style>
