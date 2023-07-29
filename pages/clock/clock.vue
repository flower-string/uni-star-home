<template>
	<view class="sche">
		<canvas canvas-id="Schedule" id="Schedule"></canvas>
	</view>
	<view class="zhan">
		
	</view>
	<arc-tab-bar :current="2"></arc-tab-bar>
</template>

<script>
	import ArcTabBar from '../../components/ArcTabBar.vue'
	import {
		getRandomColor
	} from '../../api/common.js'
	import Vector2 from '../../utils/Vector2.js';
	export default {
		data() {
			return {

			};
		},
		components: {
			ArcTabBar
		},
		methods: {
			renderCanves() {
				const ctx = uni.createCanvasContext('Schedule');
				const width = 60;
				const height = 100;
				ctx.setStrokeStyle('white');
				ctx.font = 'normal 12px sans-serif';
				ctx.setFontSize(12)//设置字体大小，默认10
				
				class Clock {
					constructor(vector2, color, text) {
						ctx.setFillStyle(color);
						ctx.beginPath();
						ctx.rect(vector2.x, vector2.y, width, height);
						ctx.fill();
						ctx.stroke();
						ctx.closePath();
						ctx.setFillStyle('#111111')
						ctx.fillText(text, vector2.x + 10, vector2.y + 50);
					}
				}

				for (let i = 0; i < 6; i++) {
					for (let j = 0; j < 5; j++) {
						new Clock(new Vector2(i * 50, j * 100),
							getRandomColor(),
							"" + i + "" +  j);
					}
				}
				
				ctx.draw();
			}
		},
		onReady() {
			this.renderCanves();
		}
	}
</script>

<style lang="scss">
	.sche {
		overflow-y: scroll;
	}
	
	canvas {
		border: 1px solid white;
		width: 300px;
		height: 500px;
		margin: auto;
	}
</style>