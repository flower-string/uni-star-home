"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/tools/tools.js";
  "./pages/clock/clock.js";
  "./pages/me/me.js";
  "./pages/setting/setting.js";
  "./pages/dress/dress.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.hideTabBar();
    console.log("App Launch");
  },
  onShow: function() {
    common_vendor.index.hideTabBar();
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Web前端/Project/star-home/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
