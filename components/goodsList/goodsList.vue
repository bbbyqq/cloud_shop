<!-- 此组件为搜索框下面的商品列表组件，因为父子组件传递后，只能调用一次mountd，故放弃，比如搜索框搜索，第一次搜索没问题，但是第二次搜索的时候，因为mountd不掉用了，所以有很大bug -->
<template>
	<view>
		<view class="tab-content">
			<view v-for="item in list" :class="item.class" @click="selected(item)">
				{{item.tab}}
			</view>
		</view>

		<view class="search-none" v-if="hasGoods">暂未搜索到此商品，请换个关键词试试</view>

		<view class="goods-content" v-for="(item,index) in goods" v-else>
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
</template>

<script>
	export default {
		props: {
			data: {
				type: String,
				default: "Mate 40"
			}
		},
		data() {
			return {
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
				goods: [{
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
				hasGoods: false
			}
		},
		mounted() {
			this.showData()
		},
		methods: {
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
			showData() {
				for (var i = 0; i <= this.goods.length; i++) {
					if (this.data == "Mate 40") {
						this.goods[0].img =
							"https://res.vmallres.com/pimages//product/6941487210992/428_428_30DC7C81625DCEBCC577E88BAE05B489A616EAAAFDB59375mp.png"
						this.goods[0].title = "HUAWEI Mate 40"
						this.goods[0].price = "4999"
						this.goods[1].img =
							"https://res.vmallres.com/pimages//product/6941487222551/428_428_084225B8F3BD10E711B7C93693A3600E1B87BAB5D6FD0DE4mp.png"
						this.goods[1].title = "HUAWEI Mate 40 RS保时捷"
						this.goods[1].price = "9999"
					} else if (this.data == "Nova 8") {
						this.goods[i].img =
							"https://res.vmallres.com/pimages//product/6941487210619/800_800_1BED94F76D33074373CB7636AC2AEB733F3754C113BF6BBDmp.png"
						this.goods[i].title = "HUAWEI Nova 8"
						this.goods[i].price = "3299"
					} else if (this.data == "Mate X2") {
						this.goods[i].img =
							"https://res.vmallres.com/pimages//product/6941487225064/800_800_D58F3741EBC023C1DD544D1A9D77B2DF8D1873FF58D72D75mp.png"
						this.goods[i].title = "HUAWEI Mate X2"
						this.goods[i].price = "17799"
					} else {
						this.hasGoods = true
					}
				}
			}
		}
	}
</script>

<style scoped>
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
