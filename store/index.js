import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// uniapp中使用vuex
const store = new Vuex.Store({
	// 全局属性变量
	state: {
		goodsMessage:[],
		selectNumber:1
	},
	// 全局同步方法；调用方法，this.$store.commit("xxx")
	mutations: {
		add(state,e) {
			// 每点击一次加入购物车，将商品添加进vuex
			state.goodsMessage.push(e.shopItem)
		}
	},
	// vuex属性计算，在视图里当变量使用
	getters: {
		goodsMessageList(state) {
			return state.goodsMessage
		}
	},
	// 异步方法；调用方法
	actions: {
		
	}
})

export default store
