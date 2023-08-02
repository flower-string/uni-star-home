<template>
	<view>
		<view class="btn">
			<setting-option icon="1" title="姓名">
				<input type="text" v-model="info.name">
			</setting-option>
			<setting-option icon="2" title="昵称">
				<input type="text" v-model="info.nickName">
			</setting-option>
			<setting-option icon="3" title="性别">
				<input type="text" v-model="info.sex">
			</setting-option>
			<setting-option icon="4" title="生日">
				<input type="text" v-model="info.birthday">
			</setting-option>
			<setting-option icon="5" title="方向">
				<input type="text" v-model="info.zu">
			</setting-option>
			<setting-option icon="6" title="值班">
				<input type="text" v-model="info.schu">
			</setting-option>
		</view>
		
		<button @click="saveInfo">保存</button>
	</view>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'
	import SettingOption from '../../components/SettingOption.vue'
	
	export default {
		data() {
			return {
				info: {
					url: '../../static/logo.png',
					name: '姓名',
					nickName: 'firefly',
					sex: 'girl',
					birthday: '2022-1-1',
					zu: '前端',
					schu: 'everyday'
				}
			}
		},
		methods: {
			changeName(value) {
				this.info.name = value;
				console.log(value);
				console.log(this.info);
			},
			changeNickName(value) {
				this.info.nickName = value;
				console.log(value);
			},
			changeSex(value) {
				this.info.sex = value;
				console.log(value);
			},
			changeBirthday(value) {
				this.info.birthday = value;
				console.log(value);
			},
			changeZu(value) {
				this.info.zu = value;
				console.log(value);
			},
			changeSchu(value) {
				this.info.schu = value;
				console.log(value);
			},
			saveInfo() {
				console.log("updata to the mysql");
				console.log("updata to the pinia");
				uni.switchTab({
					url: '/pages/me/me',
				})
			}
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
