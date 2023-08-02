<template>
	<view class="container">
		<view class="image">
			<image :src="sisterImgUrl" mode=""></image>
			<view class="title">
				{{ title }}
			</view>
		</view>

		<view class="netease" @click="renderNetease">
			<view class="bar">
				网易云热评
			</view>
			<view class="content">
				{{ netease }}
			</view>
		</view>
		<br>
		<view class="soul">
			<view class="bar" @click="renderSoul">
				心灵鸡汤
			</view>
			<view class="content">
				{{ soul }}
			</view>
		</view>

		<view class="zhan">

		</view>
		<Arc-Tab-Bar :current="0"></Arc-Tab-Bar>
	</view>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'
	import {
		getImageByBing,
		getNeteaseComment,
		getSoupForSoul
	} from '../../api/common.js'
import { onMounted } from '@vue/composition-api';

	export default {
		name: 'index',
		data() {
			return {
				title: '',
				soul: '',
				sisterImgUrl: '',
				netease: ''
			}
		},

		components: {
			ArcTabBar
		},
		methods: {
			async renderSoul() {
				this.soul = await getSoupForSoul();
			},
			
			async renderNetease() {
				this.netease = await getNeteaseComment();
			}
		},
		async mounted() {
			const {
				url,
				title
			} = await getImageByBing();
			this.sisterImgUrl = url;
			this.title = title;
			this.netease = await getNeteaseComment();
			this.soul = await getSoupForSoul();
		}
	}
</script>

<style scoped>
	.container {
		padding: 20px;
		overflow-y: scroll;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 10px;
		text-align: center;
	}

	.title {
		font-size: 28px;
	}

	image {
		width: 100%;
		border-radius: 10px;
	}

	.netease,
	.soul {
		text-indent: 2em;
		margin-top: 20px;
		color: #edf6fc;
	}

	.bar {
		text-indent: 0;
		display: inline-block;
		padding: 10px;
		border-top-left-radius: 5px;
		background-color: #87b7efee;
		border: 2px solid #dce8f9;

		color: #edf6fc;
	}

	.content {
		border-left: #fcfcfc;
	}

	.zhan {
		width: 100%;
		height: 15vh;
	}
</style>