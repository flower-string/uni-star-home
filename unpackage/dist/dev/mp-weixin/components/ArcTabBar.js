"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "arc-tab-bar",
  props: {
    current: {
      type: Number
    }
  },
  data() {
    return {
      tabbarList: [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "margin": "-10px",
          "bgc": "#4886ec"
        },
        {
          "pagePath": "/pages/tools/tools",
          "text": "工具箱",
          "margin": "-20px",
          "bgc": "#ff6191"
        },
        {
          "pagePath": "/pages/clock/clock",
          "text": "排班",
          "margin": "-20px",
          "bgc": "#8568e6"
        },
        {
          "pagePath": "/pages/me/me",
          "text": "个人中心",
          "margin": "-10px",
          "bgc": "#38be69"
        }
      ]
    };
  },
  methods: {
    toTab(url, index) {
      common_vendor.index.switchTab({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabbarList, (item, index, i0) => {
      return {
        a: common_vendor.n($props.current == index ? "active" : ""),
        b: item.bgc
      };
    }),
    b: common_vendor.f($data.tabbarList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.margin,
        c: common_vendor.n($props.current == index ? "active" : ""),
        d: item.bgc,
        e: common_vendor.o(($event) => $options.toTab(item.pagePath, index))
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e83bd8e6"], ["__file", "E:/Web前端/Project/star-home/components/ArcTabBar.vue"]]);
wx.createComponent(Component);
