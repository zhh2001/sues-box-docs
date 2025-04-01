import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SUES Box",
  description: "上海工程技术大学便捷文件分享平台",
  base: "/docs/",
  lang: "zh-Hans",
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico', type: "image/x-icon" }]],
  themeConfig: {
    logo: {
      light: "/light_logo.png",
      dark: "/dark_logo.png"
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide' },
      { text: '开发团队', link: '/team' },
      {
        text: '友情链接', items: [
          {
            text: '学校官网', items: [
              { text: '上海工程技术大学', link: 'https://www.sues.edu.cn/' },
              { text: '电子电气工程学院', link: 'https://seee.sues.edu.cn/' },
              { text: '研究生处', link: 'https://ge.sues.edu.cn/' },
            ]
          },
          {
            text: '个人主页', items: [
              { text: '张恒华', link: 'https://zhh2001.github.io/' },
              { text: '邬雨航', link: 'https://fairy-study.blog.csdn.net/?type=blog' },
              { text: '熊玉洁', link: 'https://xiongyujie.cn/introduce.html' },
            ]
          }
        ]
      }
    ],
    footer: {
      message: '勤奋 求是 创新 奉献',
      copyright: 'Copyright © 2025-present <a href="/docs/team">SUES Box Team</a>'
    },
    darkModeSwitchLabel: "主题",
    returnToTopLabel: '返回顶部',
    outlineTitle: '页面导航'
  }
})
