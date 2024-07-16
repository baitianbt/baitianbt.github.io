import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "C#指南",
    icon: "lightbulb",
    prefix: "/c#-basics/",
    children: [
      {
        text: "C#",
        icon: "lightbulb",
        prefix: "c#/",
        children: [ { text: "C#基础", icon: "ellipsis", link: "" }],
      },
      {
        text: "数据库",
        icon: "lightbulb",
        prefix: "database/",
        children: [ { text: "数据库", icon: "ellipsis", link: "" }],
      },
      {
        text: "计算机基础",
        icon: "lightbulb",
        prefix: "cs-basics/",
        children: [{ text: "计算机基础", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "UI界面开发",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Winform",
        icon: "lightbulb",
        prefix: "winform/",
        children: [ { text: "Winform", icon: "ellipsis", link: "" }],
      },
      {
        text: "WPF",
        icon: "lightbulb",
        prefix: "wpf/",
        children: [ { text: "WPF", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "通讯协议",
    icon: "book",
    link: "/communication-protocol/",
  },
  {
    text: "项目实战",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "开源项目",
        icon: "lightbulb",
        prefix: "bar/",
        children: [ { text: "开源项目", icon: "ellipsis", link: "" }],
      },
      {
        text: "项目实战",
        icon: "lightbulb",
        prefix: "foo/",
        children: [ { text: "项目实战", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "其它",
    icon: "lightbulb",
    prefix: "/other/",
    children: [
      {
        text: "文档编写",
        icon: "lightbulb",
        prefix: "document-write/",
        children: [ { text: "文档编写", icon: "ellipsis", link: "" }],
      },
      {
        text: "关系维护",
        icon: "lightbulb",
        prefix: "relationship-maintenance/",
        children: [ { text: "关系维护", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
