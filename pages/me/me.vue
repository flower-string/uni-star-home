<template>
	<view class="user">
		<image class="ava" :src="info.avatarUrl" mode=""></image>
		<view class="nickname">
			{{ info.nickName }}
		</view>
		<view class="ip">
			ip属地：{{ info.ip }}
		</view>
		<view class="tags">
			<view class="tag" v-for="item in info.tags">
				{{ item }}
			</view>
		</view>
		<view class="desc">
			{{ info.desc }}
		</view>
	</view>
	
	<view class="topa">
		<view class="dress pa" @click="toPage('dress')">
			装扮空间
		</view>
		<view class="setting pa" @click="toPage('setting')">
			编辑资料
		</view>
	</view>
	<arc-tab-bar :current="3"></arc-tab-bar>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'

	export default {
		data() {
			return {
				info: {
					avatarUrl: '../../static/logo.png',
					nickName: '姓名',
					ip: '未知',
					desc: '你还没有写过个人介绍',
					tags: ['稀里糊兔', '00后', '天平座', '300天']
				}
			}
		},
		methods: {
			wxLogin() {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 获取用户信息
						uni.getUserProfile({
							desc: '用于显示用户头像和姓名',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes);
								that.info.nickName = infoRes.userInfo.nickName;
								that.info.avatarUrl = infoRes.userInfo.avatarUrl;
							}, 
							fail() {
								console.log("失败");
							}
						});
					},
				});

			},
			toPage(url) {
				console.log(url);
				uni.navigateTo({
					url: `/pages/${url}/${url}`
				})
			}
		},
		components: {
			ArcTabBar,
		},
		onLoad() {
			this.wxLogin();
		}
	}
</script>

<style scoped>
	.user {
		width: 90%;
		height: 300rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.ava {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-top: -50rpx;
	}
	
	.nickname {
		color: #000000;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	
	.ip {
		color: #818181;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	
	.desc {
		color: #7e7e7e;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	
	.tags {
		display: flex;
	}
	
	.tag {
		padding: 5rpx;
		border: 1px solid #34cbd6;
		margin: 10rpx;
		width: 100rpx;
		font-size: 24rpx;
		color: #34cbd6;
		text-align: center;
		border-radius: 10rpx;
	}
	
	.topa {
		display: flex;
	}
	
	.pa {
		flex: 1;
		margin: 40rpx;
		background-color: #fff;
		padding: 40rpx;
		border-radius: 10rpx;
		color: #838383;
		text-align: center;
	}
</style>