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
function getRandomColor() {
  const colors = ["#4886ec", "#ff6191", "#8568e6", "#f89c51", "#38be69"];
  return colors[Math.floor(Math.random() * colors.length)];
}
exports.getImageByBing = getImageByBing;
exports.getNeteaseComment = getNeteaseComment;
exports.getRandomColor = getRandomColor;
exports.getSoupForSoul = getSoupForSoul;
