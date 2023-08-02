"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    title: String,
    icon: String
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.icon),
    b: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6bb96d3"], ["__file", "E:/Web前端/Project/star-home/components/SettingOption.vue"]]);
wx.createComponent(Component);
