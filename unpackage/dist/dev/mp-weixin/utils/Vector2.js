"use strict";
const _Vector2 = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static unit(vec) {
    const { x, y } = vec;
    const mod = Math.sqrt(x ** 2 + y ** 2);
    return new _Vector2(x / mod, y / mod);
  }
  lookUp(position) {
  }
  add(vector) {
  }
};
let Vector2 = _Vector2;
Vector2.zero = new _Vector2(0, 0);
Vector2.one = new _Vector2(1, 1);
Vector2.top = new _Vector2(0, 1);
Vector2.left = new _Vector2(-1, 0);
Vector2.right = new _Vector2(1, 0);
Vector2.bottom = new _Vector2(0, -1);
exports.Vector2 = Vector2;
