"use strict";
const common_vendor = require("../../common/vendor.js");
const ArcTabBar = () => "../../components/ArcTabBar.js";
const SettingOption = () => "../../components/SettingOption.js";
const _sfc_main = {
  data() {
    return {
      info: {
        url: "../../static/logo.png",
        name: "姓名",
        nickName: "firefly",
        sex: "girl",
        birthday: "2022-1-1",
        zu: "前端",
        schu: "everyday"
      }
    };
  },
  methods: {
    changeName(value) {
      this.info.name = value;
      console.log(value);
      console.log(this.info);
    },
    changeNickName(value) {
      this.info.nickName = value;
      console.log(value);
    },
    changeSex(value) {
      this.info.sex = value;
      console.log(value);
    },
    changeBirthday(value) {
      this.info.birthday = value;
      console.log(value);
    },
    changeZu(value) {
      this.info.zu = value;
      console.log(value);
    },
    changeSchu(value) {
      this.info.schu = value;
      console.log(value);
    },
    saveInfo() {
      console.log("updata to the mysql");
      console.log("updata to the pinia");
      common_vendor.index.switchTab({
        url: "/pages/me/me"
      });
    }
  },
  components: {
    ArcTabBar,
    SettingOption
  }
};
if (!Array) {
  const _component_setting_option = common_vendor.resolveComponent("setting-option");
  _component_setting_option();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.info.name,
    b: common_vendor.o(($event) => $data.info.name = $event.detail.value),
    c: common_vendor.p({
      icon: "1",
      title: "姓名"
    }),
    d: $data.info.nickName,
    e: common_vendor.o(($event) => $data.info.nickName = $event.detail.value),
    f: common_vendor.p({
      icon: "2",
      title: "昵称"
    }),
    g: $data.info.sex,
    h: common_vendor.o(($event) => $data.info.sex = $event.detail.value),
    i: common_vendor.p({
      icon: "3",
      title: "性别"
    }),
    j: $data.info.birthday,
    k: common_vendor.o(($event) => $data.info.birthday = $event.detail.value),
    l: common_vendor.p({
      icon: "4",
      title: "生日"
    }),
    m: $data.info.zu,
    n: common_vendor.o(($event) => $data.info.zu = $event.detail.value),
    o: common_vendor.p({
      icon: "5",
      title: "方向"
    }),
    p: $data.info.schu,
    q: common_vendor.o(($event) => $data.info.schu = $event.detail.value),
    r: common_vendor.p({
      icon: "6",
      title: "值班"
    }),
    s: common_vendor.o((...args) => $options.saveInfo && $options.saveInfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-018cdf56"], ["__file", "E:/Web前端/Project/star-home/pages/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
