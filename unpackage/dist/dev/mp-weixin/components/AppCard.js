"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    icon: {
      type: String,
      default: "/static/app.png"
    },
    appname: String,
    username: String,
    link: String
  },
  methods: {
    forkLink() {
      common_vendor.index.setClipboardData({
        data: this.link,
        showToast: true
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.icon,
    b: common_vendor.t($props.appname),
    c: common_vendor.t($props.username),
    d: common_vendor.o((...args) => $options.forkLink && $options.forkLink(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-71d73f3c"], ["__file", "E:/Web前端/Project/star-home/components/AppCard.vue"]]);
wx.createComponent(Component);
