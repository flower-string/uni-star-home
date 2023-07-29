<template>
	<view class="card">
		<view class="icon">
			{{ icon }}
		</view>
		<view class="title">
			{{ title }}
		</view>
		<view class="other">
			{{ state }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '声音',
				icon: '1',
				state: 'close'
			}
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
		color: #4e6b7c;
	}
	
	.other {
		text-align: right;
		margin-right: 20px;
		color: #94b3c6;
	}
</style>