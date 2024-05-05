import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "C#学习",
  description: "关于我的C#学习",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
