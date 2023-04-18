import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "编程语言", icon: "discover", link: "/programminglanguage/" },
  { text: "工具", icon: "discover", link: "/tool/" },

  { text: "项目实战", icon: "discover", link: "/projects/" },
  { text: "大数据", icon: "discover", link: "/bigData/" },

  {
    text: "数据库",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "GitHub地址",
    icon: "note",
    link: "https://github.com/baitianbt/baitianbt.github.io",
  },
]);
