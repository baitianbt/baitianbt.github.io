import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "编程语言", icon: "class", link: "/programminglanguage/" },
  { text: "数据库", icon: "mysql", link: "/database/" },
  { text: "工具", icon: "tab", link: "/tool/" },

  { text: "项目实战", icon: "animation", link: "/projects/" },
  { text: "大数据", icon: "stack", link: "/bigData/" },
  {
    text: "GitHub地址",
    icon: "note",
    link: "https://github.com/baitianbt/baitianbt.github.io",
  },
]);
