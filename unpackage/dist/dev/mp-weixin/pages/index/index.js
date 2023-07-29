"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
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
    async getSisterImg() {
      const data = await common_vendor.index.request({
        url: "https://api.qqsuu.cn/api/dm-littlesister?type=json"
      });
      console.log(data.data.img);
      this.sisterImgUrl = data.data.img;
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
    d: common_vendor.t($data.soul),
    e: common_vendor.p({
      current: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/Web前端/Project/star-home/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
