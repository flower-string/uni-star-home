"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "声音",
      icon: "1",
      state: "close"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.icon),
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.state)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6bb96d3"], ["__file", "E:/Web前端/Project/star-home/components/SettingOption.vue"]]);
wx.createComponent(Component);
