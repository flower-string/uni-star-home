// vector2 即是向量,又是坐标,也可以只表示两个数字
export default class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	// 特殊向量
	static zero = new Vector2(0, 0);
	static one = new Vector2(1, 1);
	static top = new Vector2(0, 1);
	static left = new Vector2(-1, 0);
	static right = new Vector2(1, 0);
	static bottom = new Vector2(0, -1);
	
	// 向量单位化
	static unit(vec) {
		const {x, y} = vec;
		const mod = Math.sqrt(x ** 2 + y ** 2);
		return new Vector2(x / mod, y / mod);
	}
	
	// 看向
	lookUp(position) {
		
	}
	
	// 向量求和
	add(vector) {
		
	}
	
	// 数量积
	dot(vector) {
		
	}
}