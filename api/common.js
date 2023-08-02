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

// 传入日期对象，返回星座和代表色
export function getZodiac(date) {
  const zodiacs = [
    { name: "摩羯座", start: "01/01", end: "01/19", color: "#9f7aea" },
    { name: "水瓶座", start: "01/20", end: "02/18", color: "#48dbfb" },
    { name: "双鱼座", start: "02/19", end: "03/20", color: "#00cec9" },
    { name: "白羊座", start: "03/21", end: "04/19", color: "#fdcb6e" },
    { name: "金牛座", start: "04/20", end: "05/20", color: "#feca57" },
    { name: "双子座", start: "05/21", end: "06/21", color: "#ff9ff3" },
    { name: "巨蟹座", start: "06/22", end: "07/22", color: "#1abc9c" },
    { name: "狮子座", start: "07/23", end: "08/22", color: "#e74c3c" },
    { name: "处女座", start: "08/23", end: "09/22", color: "#6c5ce7" },
    { name: "天秤座", start: "09/23", end: "10/23", color: "#a29bfe" },
    { name: "天蝎座", start: "10/24", end: "11/22", color: "#bbf1f5" },
    { name: "射手座", start: "11/23", end: "12/21", color: "#fd79a8" },
    { name: "摩羯座", start: "12/22", end: "12/31", color: "#9f7aea" }
  ];

  const dateString = `${date.getMonth() + 1}/${date.getDate()}`;

  const zodiac = zodiacs.find((zodiac) => {
    return dateString >= zodiac.start && dateString <= zodiac.end;
  });

  return zodiac ? { name: zodiac.name, color: zodiac.color } : null;
}