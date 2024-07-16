import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "C#学习",
  description: "C#学习",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
