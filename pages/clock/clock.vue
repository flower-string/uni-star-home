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

				const scaleX = 50;
				const scaleY = 90;
				for (let i = 0; i < 6; i++) {
					for (let j = 0; j < 6; j++) {
						if(j == 0 && i == 0) {
							continue;
						}
						if(j == 0) {
							new Clock(new Vector2(i * scaleX, j * scaleY),
								'#87b7ef',
								"周" + i);
							continue;
						}
						if(i == 0) {
							new Clock(new Vector2(i * scaleX, j * scaleY),
								'#87b7ef',
								"" + (j*2-1) + "" + (j*2) + "节");
							continue;
						}
						new Clock(new Vector2(i * scaleX, j * scaleY),
							'#87b7ef',
							i + '' + j);
					}
				}
				
				ctx.draw();
			}
		},
		onShow() {
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
		height: 540px;
		margin: auto;
		z-index: -1;
	}
</style>