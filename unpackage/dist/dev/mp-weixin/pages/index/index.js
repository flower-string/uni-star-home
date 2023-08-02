"use strict";
const api_common = require("../../api/common.js");
const common_vendor = require("../../common/vendor.js");
const ArcTabBar = () => "../../components/ArcTabBar.js";
const _sfc_main = {
  name: "index",
  data() {
    return {
      title: "",
      soul: "",
      sisterImgUrl: "",
      netease: ""
    };
  },
  components: {
    ArcTabBar
  },
  methods: {
    async renderSoul() {
      this.soul = await api_common.getSoupForSoul();
    },
    async renderNetease() {
      this.netease = await api_common.getNeteaseComment();
    }
  },
  async mounted() {
    const {
      url,
      title
    } = await api_common.getImageByBing();
    this.sisterImgUrl = url;
    this.title = title;
    this.netease = await api_common.getNeteaseComment();
    this.soul = await api_common.getSoupForSoul();
  }
};
if (!Array) {
  const _component_Arc_Tab_Bar = common_vendor.resolveComponent("Arc-Tab-Bar");
  _component_Arc_Tab_Bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.sisterImgUrl,
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.netease),
    d: common_vendor.o((...args) => $options.renderNetease && $options.renderNetease(...args)),
    e: common_vendor.o((...args) => $options.renderSoul && $options.renderSoul(...args)),
    f: common_vendor.t($data.soul),
    g: common_vendor.p({
      current: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/Web前端/Project/star-home/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
