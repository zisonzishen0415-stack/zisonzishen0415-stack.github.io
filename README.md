# Zison Wong · 个人网站

个人作品集：女装外贸 × 软件 × 音乐。
纸感 + 墨黑 + Nord 蓝 + 荧光黄，硬边框、错位网格、跑马灯。
视觉语言参考同作者的 [FRET · 跑场乐理](../乐理)（纸/墨/红/酸那套编辑排版），主色改为 Nord 蓝。

音乐：B 站「河中子申」——<https://space.bilibili.com/20410864>

纯 HTML / CSS / JS，无构建、无外部字体，直接扔到 GitHub Pages。

## 本地预览

```bash
python -m http.server 8080
# 打开 http://127.0.0.1:8080/
```

## 文件

```
个人网站/
├── index.html          页面骨架：侧栏、封面、作品网格、About / Links、弹窗
├── assets/
│   ├── styles.css      全部样式（纸感配色在 :root，暗色在 [data-theme="dark"]）
│   ├── data.js         项目数据 —— 只改这里就能增删项目
│   ├── app.js          筛选、搜索、路由、弹窗、主题、键盘操作
│   └── favicon.svg
├── .nojekyll           让 GitHub Pages 不做 Jekyll 处理
└── README.md
```

## 加 / 改项目

在 `assets/data.js` 的 `projects` 数组里加一项：

```js
{
  id: "my-project",          // 唯一，用于 #/p/my-project
  name: "My Project",
  zh: "一句中文名",
  cat: "textile",            // agents | textile | music | tools
  code: "TEX-14",
  status: "active",          // active | live | wip | paused
  icon: "layers",            // 见 app.js 的 ICONS
  tone: "#8FBCBB",           // 旧字段，保留兼容
  pattern: 3,                // 1-6 卡片底纹
  featured: false,           // true 时桌面上横跨两列

  // 署名：不填 = 原创；填了就会在卡片和详情里显示
  authorship: "fork",        // fork | contribution | collaboration | derivative | collection
  credit: "原作 morluto · 本仓库为 fork",
  creditUrl: "https://github.com/morluto/rea",

  summary: "卡片上的一句话",
  body: ["详情第一段", "详情第二段"],
  highlights: ["要点 1", "要点 2", "要点 3"],
  tech: ["Python", "OpenCV"],
  links: [{ label: "GitHub", url: "https://..." }],
  private: false
}
```

署名口径：

| `authorship` | 卡片标记 | 含义 |
|---|---|---|
| 不填 | 无 | 原创 |
| `fork` | FORK | 只是 fork / 参考，不是自己的作品 |
| `contribution` | 参与 | 参与过，但原作另有其人 |
| `collaboration` | 合作 | 共同开发 |
| `derivative` | 衍生 | 应用层原创，底层复用他人代码 |
| `collection` | 合集 | 整理合集，部分内容来自社区 |

分类数量、侧栏计数、封面数字、状态行都会自动更新。

## 路由

- `#/` — 全部项目
- `#/c/textile` — 分类
- `#/p/rea` — 直接打开某个项目
- `#/about` / `#/links`

## 主题 / 视图

- 侧栏底部按钮切换亮色 / 暗色，写入 `localStorage`
- `?theme=dark` 或 `?theme=light` 可直接指定主题
- `?view=list` / `?view=grid` 可指定视图
- `/` 聚焦搜索；`Esc` 关弹窗；`←` / `→` 在弹窗里切换项目

## 部署到 GitHub Pages

用户站点（推荐，地址最短）：

```bash
git init
git add .
git commit -m "personal site"
git branch -M main
git remote add origin https://github.com/zisonzishen0415-stack/zisonzishen0415-stack.github.io.git
git push -u origin main
```

在仓库 Settings → Pages 里把 Source 设为 `main` / `/ (root)`。
站点地址：<https://zisonzishen0415-stack.github.io/>
