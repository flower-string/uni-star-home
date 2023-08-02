"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_Vector2 = require("../../utils/Vector2.js");
const ArcTabBar = () => "../../components/ArcTabBar.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    ArcTabBar
  },
  methods: {
    renderCanves() {
      const ctx = common_vendor.index.createCanvasContext("Schedule");
      const width = 60;
      const height = 100;
      ctx.setStrokeStyle("white");
      ctx.font = "normal 12px sans-serif";
      ctx.setFontSize(12);
      class Clock {
        constructor(vector2, color, text) {
          ctx.setFillStyle(color);
          ctx.beginPath();
          ctx.rect(vector2.x, vector2.y, width, height);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
          ctx.setFillStyle("#111111");
          ctx.fillText(text, vector2.x + 10, vector2.y + 50);
        }
      }
      const scaleX = 50;
      const scaleY = 90;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (j == 0 && i == 0) {
            continue;
          }
          if (j == 0) {
            new Clock(
              new utils_Vector2.Vector2(i * scaleX, j * scaleY),
              "#87b7ef",
              "周" + i
            );
            continue;
          }
          if (i == 0) {
            new Clock(
              new utils_Vector2.Vector2(i * scaleX, j * scaleY),
              "#87b7ef",
              "" + (j * 2 - 1) + j * 2 + "节"
            );
            continue;
          }
          new Clock(
            new utils_Vector2.Vector2(i * scaleX, j * scaleY),
            "#87b7ef",
            i + "" + j
          );
        }
      }
      ctx.draw();
    }
  },
  onShow() {
    this.renderCanves();
  }
};
if (!Array) {
  const _component_arc_tab_bar = common_vendor.resolveComponent("arc-tab-bar");
  _component_arc_tab_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      current: 2
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/star-home/pages/clock/clock.vue"]]);
wx.createPage(MiniProgramPage);
