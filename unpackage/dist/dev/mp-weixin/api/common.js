"use strict";
const common_vendor = require("../common/vendor.js");
async function getImageByBing() {
  const { data } = await common_vendor.index.request({
    url: "https://api.xygeng.cn/bing/"
  });
  return {
    url: data.data.url,
    title: data.data.title
  };
}
async function getNeteaseComment() {
  const data = await common_vendor.index.request({
    url: "https://api.qqsuu.cn/api/dm-comment?format=json"
  });
  return data.data.data.content;
}
async function getSoupForSoul() {
  const data = await common_vendor.index.request({
    url: "https://api.qqsuu.cn/api/dm-pyqwenan"
  });
  return data.data.data.content;
}
exports.getImageByBing = getImageByBing;
exports.getNeteaseComment = getNeteaseComment;
exports.getSoupForSoul = getSoupForSoul;
