<template>
	<view class="container">
		<AppCard v-for="item in list"
						 :appname="item.title"
						 :username="item.name"
						 :icon="item.icon"
						 :link="item.url"></AppCard>
		<view class="zhan">
			
		</view>
	</view>
	
	<arc-tab-bar :current="1"></arc-tab-bar>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'
	import AppCard from '../../components/AppCard.vue'
	export default {
		data() {
			return {
				list: [
					{url: '../../static/logo.png', name: '姓名', title: 'PS', icon: '/static/logo.png'},
					{url: '../../static/logo.png', name: '姓名', title: 'PS'},
					{url: '../../static/logo.png', name: '姓名', title: 'PS', icon: '/static/logo.png'},
					{url: '../../static/logo.png', name: '姓名', title: 'PS', icon: '/static/logo.png'},
					{url: '../../static/logo.png', name: '姓名', title: 'PS'},
					{url: '../../static/logo.png', name: '姓名', title: 'PS', icon: '/static/logo.png'},
				]
			}
		},
		methods: {
			
		},
		components: {
			ArcTabBar,
			AppCard
		}
	}
</script>

<style scoped>
	.container {
		/* background-color: #142f44; */
		width: 100vw;
		margin: 0;
		display: block;
		padding: 20px;
	}

	.zhan {
		width: 100%;
		height: 15vh;
	} 
</style>
