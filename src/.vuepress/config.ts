import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "我的记录",
      description: "我的记录",
    },
   
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
