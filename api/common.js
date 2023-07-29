export async function getImageByBing(){
	const { data } = await uni.request({
		url: 'https://api.xygeng.cn/bing/'
	});
	return {
		url: data.data.url,
		title: data.data.title
	};
}

export async function getNeteaseComment(){
	const data = await uni.request({
		url: 'https://api.qqsuu.cn/api/dm-comment?format=json'
	});
	return data.data.data.content;
}

export async function getSoupForSoul(){
	const data = await uni.request({
		url: 'https://api.qqsuu.cn/api/dm-pyqwenan'
	});
	return data.data.data.content;
}

export function getRandomColor(){
	const colors = ['#4886ec', '#ff6191', '#8568e6', '#f89c51', '#38be69'];
	return colors[ Math.floor( Math.random() * colors.length ) ]
}