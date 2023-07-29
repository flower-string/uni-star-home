"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
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
          ctx.setFillStyle("#999999");
          ctx.fillText(text, vector2.x + 10, vector2.y + 50);
        }
      }
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
          new Clock(
            new utils_Vector2.Vector2(i * 50, j * 100),
            api_common.getRandomColor(),
            "" + i + j
          );
        }
      }
      ctx.draw();
    }
  },
  onReady() {
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
