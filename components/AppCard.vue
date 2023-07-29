<template>
	<view class="card">
		<view class="image">
			<image :src="icon" mode=""></image>
		</view>
		<view class="content">
			<view class="appname">
				{{ appname }}
			</view>
			<view class="username">
				{{ username }}
			</view>
			<view class="btn">
<!-- 				<view class="shou">
					<uni-icon type="star-filled" :size='30'></uni-icon>
				</view> -->
				<view class="fork" @click="forkLink">
					复制链接
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: '/static/app.png'
			},
			appname: String,
			username: String,
			link: String,
		},
		methods: {
			forkLink() {
				uni.setClipboardData({
					data: this.link,
					showToast: true
				})
			}
		}
	}
</script>

<style scoped>
	.card {
		display: flex;
		width: 90vw;
		height: 14vh;
		border-radius: 3vh;
		overflow: hidden;
		margin-bottom: 1vh;
	}
	
	.image {
		display: block;
		flex: 2;
		height: 100%;
		overflow: hidden;
	}
	
	image {
		height: 120%;
		width: 120%;
	}
	
	.content {
		flex: 9;
		background-color: #efefef;
		padding: 5px;
		padding-left: 10px;
		padding-bottom: 0;
	}
	
	.appname {
		color: #536e7f;
		font-size: 18px;
		margin-bottom: 3px;
	}
	
	.username {
		color: #c1cdd5;
		font-size: 12px;
	}
	
	.btn {
		margin-right: 0;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 2vh;
	}
	
	/* .show {
		color: white;
		border-radius: 50%;
		width: 3.2vh;
		height: 3.2vh;
	} */
	
	.fork {
		background-color: #14a2e0;
		width: 20vw;
		font-size: 3vw;
		height: 4vh;
		text-align: center;
		line-height: 4vh;
		margin-right: 10px;
		border-radius: 2vh;
	}
</style>