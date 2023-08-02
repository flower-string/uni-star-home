if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$a = {
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
        uni.switchTab({
          url
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tabbar" }, [
      vue.createElementVNode("view", { class: "bgbox" }, [
        vue.createElementVNode("view", { class: "bg ul" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.tabbarList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["li", $props.current == index ? "active" : ""]),
                  style: vue.normalizeStyle({ "--c": item.bgc })
                },
                null,
                6
                /* CLASS, STYLE */
              );
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "container ul" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.tabbarList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["li", $props.current == index ? "active" : ""]),
              style: vue.normalizeStyle({ "--bg-c": item.bgc }),
              onClick: ($event) => $options.toTab(item.pagePath, index)
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "ava",
                  style: vue.normalizeStyle({ "--margin": item.margin })
                },
                vue.toDisplayString(item.text),
                5
                /* TEXT, STYLE */
              )
            ], 14, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const ArcTabBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-e83bd8e6"], ["__file", "E:/Web前端/Project/star-home/components/ArcTabBar.vue"]]);
  async function getImageByBing() {
    const { data } = await uni.request({
      url: "https://api.xygeng.cn/bing/"
    });
    return {
      url: data.data.url,
      title: data.data.title
    };
  }
  async function getNeteaseComment() {
    const data = await uni.request({
      url: "https://api.qqsuu.cn/api/dm-comment?format=json"
    });
    return data.data.data.content;
  }
  async function getSoupForSoul() {
    const data = await uni.request({
      url: "https://api.qqsuu.cn/api/dm-pyqwenan"
    });
    return data.data.data.content;
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$9 = {
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
        this.soul = await getSoupForSoul();
      },
      async renderNetease() {
        this.netease = await getNeteaseComment();
      }
    },
    async mounted() {
      const {
        url,
        title
      } = await getImageByBing();
      this.sisterImgUrl = url;
      this.title = title;
      this.netease = await getNeteaseComment();
      this.soul = await getSoupForSoul();
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Arc_Tab_Bar = vue.resolveComponent("Arc-Tab-Bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "image" }, [
        vue.createElementVNode("image", {
          src: $data.sisterImgUrl,
          mode: ""
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          { class: "title" },
          vue.toDisplayString($data.title),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", {
        class: "netease",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.renderNetease && $options.renderNetease(...args))
      }, [
        vue.createElementVNode("view", { class: "bar" }, " 网易云热评 "),
        vue.createElementVNode(
          "view",
          { class: "content" },
          vue.toDisplayString($data.netease),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("br"),
      vue.createElementVNode("view", { class: "soul" }, [
        vue.createElementVNode("view", {
          class: "bar",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.renderSoul && $options.renderSoul(...args))
        }, " 心灵鸡汤 "),
        vue.createElementVNode(
          "view",
          { class: "content" },
          vue.toDisplayString($data.soul),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "zhan" }),
      vue.createVNode(_component_Arc_Tab_Bar, { current: 0 })
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/Web前端/Project/star-home/pages/index/index.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/Web前端/Project/star-home/pages/login/login.vue"]]);
  const _sfc_main$7 = {
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
        uni.setClipboardData({
          data: this.link,
          showToast: true
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode("view", { class: "image" }, [
        vue.createElementVNode("image", {
          src: $props.icon,
          mode: ""
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode(
          "view",
          { class: "appname" },
          vue.toDisplayString($props.appname),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          { class: "username" },
          vue.toDisplayString($props.username),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "btn" }, [
          vue.createCommentVNode(` 				<view class="shou">\r
					<uni-icon type="star-filled" :size='30'></uni-icon>\r
				</view> `),
          vue.createElementVNode("view", {
            class: "fork",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.forkLink && $options.forkLink(...args))
          }, " 复制链接 ")
        ])
      ])
    ]);
  }
  const AppCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-71d73f3c"], ["__file", "E:/Web前端/Project/star-home/components/AppCard.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_AppCard = vue.resolveComponent("AppCard");
    const _component_arc_tab_bar = vue.resolveComponent("arc-tab-bar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item) => {
              return vue.openBlock(), vue.createBlock(_component_AppCard, {
                appname: item.title,
                username: item.name,
                icon: item.icon,
                link: item.url
              }, null, 8, ["appname", "username", "icon", "link"]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { class: "zhan" })
        ]),
        vue.createVNode(_component_arc_tab_bar, { current: 1 })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesToolsTools = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-3710fc71"], ["__file", "E:/Web前端/Project/star-home/pages/tools/tools.vue"]]);
  const _Vector2 = class {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    // 向量单位化
    static unit(vec) {
      const { x, y } = vec;
      const mod = Math.sqrt(x ** 2 + y ** 2);
      return new _Vector2(x / mod, y / mod);
    }
    // 看向
    lookUp(position) {
    }
    // 向量求和
    add(vector) {
    }
    // 数量积
    dot(vector) {
    }
  };
  let Vector2 = _Vector2;
  // 特殊向量
  Vector2.zero = new _Vector2(0, 0);
  Vector2.one = new _Vector2(1, 1);
  Vector2.top = new _Vector2(0, 1);
  Vector2.left = new _Vector2(-1, 0);
  Vector2.right = new _Vector2(1, 0);
  Vector2.bottom = new _Vector2(0, -1);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    components: {
      ArcTabBar
    },
    methods: {
      renderCanves() {
        const ctx = uni.createCanvasContext("Schedule");
        const width = 60;
        const height = 100;
        ctx.setStrokeStyle("white");
        ctx.font = "normal 12px sans-serif";
        ctx.setFontSize(12);
        class Clock {
          constructor(vector2, color, text) {
            ctx.setFillStyle(color);
            ctx.beginPath();
            ctx.rect(vector2.x, vector2.y, width, height);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.setFillStyle("#111111");
            ctx.fillText(text, vector2.x + 10, vector2.y + 50);
          }
        }
        const scaleX = 50;
        const scaleY = 90;
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            if (j == 0 && i == 0) {
              continue;
            }
            if (j == 0) {
              new Clock(
                new Vector2(i * scaleX, j * scaleY),
                "#87b7ef",
                "周" + i
              );
              continue;
            }
            if (i == 0) {
              new Clock(
                new Vector2(i * scaleX, j * scaleY),
                "#87b7ef",
                "" + (j * 2 - 1) + j * 2 + "节"
              );
              continue;
            }
            new Clock(
              new Vector2(i * scaleX, j * scaleY),
              "#87b7ef",
              i + "" + j
            );
          }
        }
        ctx.draw();
      }
    },
    onShow() {
      this.renderCanves();
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_arc_tab_bar = vue.resolveComponent("arc-tab-bar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "sche" }, [
          vue.createElementVNode("canvas", {
            "canvas-id": "Schedule",
            id: "Schedule"
          })
        ]),
        vue.createElementVNode("view", { class: "zhan" }),
        vue.createVNode(_component_arc_tab_bar, { current: 2 })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesClockClock = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/Web前端/Project/star-home/pages/clock/clock.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        info: {
          avatarUrl: "../../static/logo.png",
          nickName: "姓名",
          ip: "未知",
          desc: "你还没有写过个人介绍",
          tags: ["稀里糊兔", "00后", "天平座", "300天"]
        }
      };
    },
    methods: {
      wxLogin() {
        let that = this;
        uni.login({
          provider: "weixin",
          success: function(loginRes) {
            uni.getUserProfile({
              desc: "用于显示用户头像和姓名",
              success: function(infoRes) {
                formatAppLog("log", "at pages/me/me.vue:56", "用户昵称为：" + infoRes);
                that.info.nickName = infoRes.userInfo.nickName;
                that.info.avatarUrl = infoRes.userInfo.avatarUrl;
              },
              fail() {
                formatAppLog("log", "at pages/me/me.vue:61", "失败");
              }
            });
          }
        });
      },
      toPage(url) {
        formatAppLog("log", "at pages/me/me.vue:69", url);
        uni.navigateTo({
          url: `/pages/${url}/${url}`
        });
      }
    },
    components: {
      ArcTabBar
    },
    onLoad() {
      this.wxLogin();
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_arc_tab_bar = vue.resolveComponent("arc-tab-bar");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("image", {
            class: "ava",
            src: $data.info.avatarUrl,
            mode: ""
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "view",
            { class: "nickname" },
            vue.toDisplayString($data.info.nickName),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "ip" },
            " ip属地：" + vue.toDisplayString($data.info.ip),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "tags" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.info.tags, (item) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  { class: "tag" },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode(
            "view",
            { class: "desc" },
            vue.toDisplayString($data.info.desc),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "topa" }, [
          vue.createElementVNode("view", {
            class: "dress pa",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.toPage("dress"))
          }, " 装扮空间 "),
          vue.createElementVNode("view", {
            class: "setting pa",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.toPage("setting"))
          }, " 编辑资料 ")
        ]),
        vue.createVNode(_component_arc_tab_bar, { current: 3 })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-19c123a7"], ["__file", "E:/Web前端/Project/star-home/pages/me/me.vue"]]);
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode(
        "view",
        { class: "icon" },
        vue.toDisplayString($props.icon),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "view",
        { class: "title" },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "other" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const SettingOption = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-b6bb96d3"], ["__file", "E:/Web前端/Project/star-home/components/SettingOption.vue"]]);
  const _sfc_main$2 = {
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
        formatAppLog("log", "at pages/setting/setting.vue:49", value);
        formatAppLog("log", "at pages/setting/setting.vue:50", this.info);
      },
      changeNickName(value) {
        this.info.nickName = value;
        formatAppLog("log", "at pages/setting/setting.vue:54", value);
      },
      changeSex(value) {
        this.info.sex = value;
        formatAppLog("log", "at pages/setting/setting.vue:58", value);
      },
      changeBirthday(value) {
        this.info.birthday = value;
        formatAppLog("log", "at pages/setting/setting.vue:62", value);
      },
      changeZu(value) {
        this.info.zu = value;
        formatAppLog("log", "at pages/setting/setting.vue:66", value);
      },
      changeSchu(value) {
        this.info.schu = value;
        formatAppLog("log", "at pages/setting/setting.vue:70", value);
      },
      saveInfo() {
        formatAppLog("log", "at pages/setting/setting.vue:73", "updata to the mysql");
        formatAppLog("log", "at pages/setting/setting.vue:74", "updata to the pinia");
        uni.switchTab({
          url: "/pages/me/me"
        });
      }
    },
    components: {
      ArcTabBar,
      SettingOption
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_setting_option = vue.resolveComponent("setting-option");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "btn" }, [
        vue.createVNode(_component_setting_option, {
          icon: "1",
          title: "姓名"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.info.name = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.name]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_setting_option, {
          icon: "2",
          title: "昵称"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.info.nickName = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.nickName]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_setting_option, {
          icon: "3",
          title: "性别"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.info.sex = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.sex]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_setting_option, {
          icon: "4",
          title: "生日"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.info.birthday = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.birthday]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_setting_option, {
          icon: "5",
          title: "方向"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.info.zu = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.zu]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_setting_option, {
          icon: "6",
          title: "值班"
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.info.schu = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.info.schu]
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      vue.createElementVNode("button", {
        onClick: _cache[6] || (_cache[6] = (...args) => $options.saveInfo && $options.saveInfo(...args))
      }, "保存")
    ]);
  }
  const PagesSettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-018cdf56"], ["__file", "E:/Web前端/Project/star-home/pages/setting/setting.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "o" }, " 装扮空间开发中 ");
  }
  const PagesDressDress = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/Web前端/Project/star-home/pages/dress/dress.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/tools/tools", PagesToolsTools);
  __definePage("pages/clock/clock", PagesClockClock);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/setting/setting", PagesSettingSetting);
  __definePage("pages/dress/dress", PagesDressDress);
  const _sfc_main = {
    onLaunch: function() {
      uni.hideTabBar();
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      uni.hideTabBar();
      formatAppLog("log", "at App.vue:9", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:12", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/Web前端/Project/star-home/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
