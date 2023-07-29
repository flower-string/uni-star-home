<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
			console.log('App Launch')
		},
		onShow: function() {
			uni.hideTabBar()
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	#app {
		padding: 0;
		margin: 0;
		
	}
	
	view, text {
		margin: 0;
		padding: 0;
	}
	
	.container {
		margin: 0;
		padding: 0;
		height: 85vh;
	}
	
	page {
		background-image: linear-gradient(to bottom, #64b4f5, #6bb2f3, #67a2e8, #6db8f9);
		width: 100vw;
		height: 85vh;
		color: white;
	}
	
	.zhan {
		width: 100%;
		height: 15vh;
	}
</style>
