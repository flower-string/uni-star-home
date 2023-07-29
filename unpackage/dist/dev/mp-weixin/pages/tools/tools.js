"use strict";
const common_vendor = require("../../common/vendor.js");
const ArcTabBar = () => "../../components/ArcTabBar.js";
const AppCard = () => "../../components/AppCard.js";
const _sfc_main = {
  data() {
    return {
      list: [
        { url: "../../static/logo.png", name: "姓名", title: "PS", icon: "/static/logo.png" },
        { url: "../../static/logo.png", name: "姓名", title: "PS" },
        { url: "../../static/logo.png", name: "姓名", title: "PS", icon: "/static/logo.png" },
        { url: "../../static/logo.png", name: "姓名", title: "PS", icon: "/static/logo.png" },
        { url: "../../static/logo.png", name: "姓名", title: "PS" },
        { url: "../../static/logo.png", name: "姓名", title: "PS", icon: "/static/logo.png" }
      ]
    };
  },
  methods: {},
  components: {
    ArcTabBar,
    AppCard
  }
};
if (!Array) {
  const _component_AppCard = common_vendor.resolveComponent("AppCard");
  const _component_arc_tab_bar = common_vendor.resolveComponent("arc-tab-bar");
  (_component_AppCard + _component_arc_tab_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: "3710fc71-0-" + i0,
        b: common_vendor.p({
          appname: item.title,
          username: item.name,
          icon: item.icon,
          link: item.url
        })
      };
    }),
    b: common_vendor.p({
      current: 1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3710fc71"], ["__file", "E:/Web前端/Project/star-home/pages/tools/tools.vue"]]);
wx.createPage(MiniProgramPage);
