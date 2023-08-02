<template>
	<view class="card">
		<view class="icon">
			{{ icon }}
		</view>
		<view class="title">
			{{ title }}
		</view>
		<view class="other">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			icon: String,
		},
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
		}
	}
</script>

<style scoped>
	.card {
		background-color: #efefef;
		margin: 5px 5px;
		display: flex;
		height: 50px;
		align-items: center;
		border-radius: 15px;
	}
	
	.icon {
		background-color: red;
		width: 35px;
		height: 35px;
		margin: 12.5px 12.5px 12.5px 12.5px;
	}
	
	.title {
		flex: 1;
		display: flex;
		font-size: 40rpx;
		color: #4e6b7c;
	}
	
	.other {
		text-align: right;
		margin-right: 20px;
		color: #94b3c6;
	}
</style>