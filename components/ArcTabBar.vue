<template>
	<view class="tabbar">
		<view class="bgbox">
			<view class="bg ul">
				<view v-for="(item, index) in tabbarList"  
							:class="['li', current == index ? 'active' : '']" 
							:style="{'--c': item.bgc}">
				</view>
			</view>
		</view>

		<view class="container ul">
			<view v-for="(item, index) in tabbarList"
						:class="['li', current == index ? 'active' : '']" 
						:style="{'--bg-c': item.bgc}"
						@click="toTab(item.pagePath, index)">
				<view class="ava" :style="{'--margin': item.margin}">
					{{ item.text }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'arc-tab-bar',
		props: {
					current: {
						type: Number
					}
		},
		data() {
			return {
				tabbarList: [{
						"pagePath": "/pages/index/index",
						"text": "首页",
						"margin": '-10px',
						"bgc": '#4886ec',
					},
					{
						"pagePath": "/pages/tools/tools",
						"text": "工具箱",
						"margin": '-20px',
						"bgc": '#ff6191',
					},
					{
						"pagePath": "/pages/clock/clock",
						"text": "排班",
						"margin": '-20px',
						"bgc": '#8568e6',
					},
					{
						"pagePath": "/pages/me/me",
						"text": "个人中心",
						"margin": '-10px',
						"bgc": '#38be69',
					}
				]
			}
		},
		methods: {
			toTab(url, index) {
				uni.switchTab({
					url,
				})
			}
		}
	}
</script>

<style scoped>
	.tabbar {
	      position: fixed;
	      left: 0;
	      right: 0;
	      bottom: 0;
	      height: 10vh;
	      width: 100vw;
	    }
	   
	    .bgbox {
	      position: absolute;
	      display: flex;
	      justify-content: center;
	      width: 120vw;
	      height: 20vh;
	      border-radius: 50%;
	      left: -10vw;
	      bottom: -10vh;
	      overflow: hidden;
	    }
	
	    .ul {
	      display: flex;
	      width: 100vw;
	    }
	
	    .bg .li {
	      background-color: #bce6ef;
	      border: 1px solid #ffffff;
	    }
	
	    .container .li {
	      --bg-c: #111111;
	      --margin: 0
	      color: var(--text-color);
	    }
	    
	    .li {
	      list-style: none;
	      flex: 1;
	      text-align: center;
	      height: 100%;
	      transition: .3s ease-in;
	      position: relative;
	    }
	
	    .container .li .ava {
	      position: absolute;
	      left: 50%;
	      top: 50%;
	      display: block;
	      border-radius: 50%;
	      width: 50px;
	      height: 50px;
	      background-color: var(--bg-c);
	      transform: translate(-50%,-50%);
	      z-index: 10;
	      margin-top: var(--margin);
	      display: flex;
	      justify-content: center;
	      align-items: center;
	      border: 3px solid #c9ecf8;
	    }
	
	    .container {
	      position: absolute;
	      width: 100%;
	      height: 100%;
	      z-index: 2;
	      font-size: 10px;
	      bottom: 0;
	      line-height: 10vh;
	    }
	
	
	
	    .bg .li.active {
	      background-color: var(--c);
	    }
	
	    .container .li.active {
	      color: #111111;
	    }
</style>