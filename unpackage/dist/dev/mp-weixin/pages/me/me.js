"use strict";
const common_vendor = require("../../common/vendor.js");
const ArcTabBar = () => "../../components/ArcTabBar.js";
const SettingOption = () => "../../components/SettingOption.js";
const _sfc_main = {
  data() {
    return {
      info: {
        url: "../../static/logo.png",
        name: "姓名"
      }
    };
  },
  methods: {},
  components: {
    ArcTabBar,
    SettingOption
  }
};
if (!Array) {
  const _component_setting_option = common_vendor.resolveComponent("setting-option");
  const _component_arc_tab_bar = common_vendor.resolveComponent("arc-tab-bar");
  (_component_setting_option + _component_arc_tab_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      current: 3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19c123a7"], ["__file", "E:/Web前端/Project/star-home/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
