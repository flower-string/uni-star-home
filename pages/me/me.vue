<template>
	<view>
		<view class="btn">
			<setting-option></setting-option>
			<setting-option></setting-option>
			<setting-option></setting-option>
			<setting-option></setting-option>
			<setting-option></setting-option>
			<setting-option></setting-option>
		</view>
	</view>
	
	<arc-tab-bar :current="3"></arc-tab-bar>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'
	import SettingOption from '../../components/SettingOption.vue'
	
	export default {
		data() {
			return {
				info: {
					url: '../../static/logo.png',
					name: '姓名'
				}
			}
		},
		methods: {
			
		},
		components: {
			ArcTabBar,
			SettingOption
		}
	}
</script>

<style scoped> 
	image {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 1;
		font-size: 20px;
	}
</style>
