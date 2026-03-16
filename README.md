# ctenet-home

一个面向 AI 时代的个人站点项目。

它不是普通名片页，而是一个用于展示身份、项目、方法论与长期构建能力的个人数字入口。

## Current Status

当前项目正在持续重构中，方向聚焦于：

- 更强的视觉识别度
- 更适合 AI 时代的个人表达
- 更真实的工程与项目内容
- 更清晰的仓库结构与文档沉淀

## Run Locally

这个项目当前是静态前端结构，直接在项目目录启动本地服务器即可：

```bash
cd Projects/ctenet-home
python3 -m http.server 4174
```

然后访问：

```text
http://127.0.0.1:4174/
```

## Project Structure

```text
ctenet-home/
├── README.md
├── index.html
├── docs/
│   ├── PLAN.md
│   └── INTRO.md
└── src/
    ├── styles/
    │   └── main.css
    ├── scripts/
    │   └── main.js
    └── assets/
        ├── images/
        └── icons/
```

## Docs

- `docs/PLAN.md`：项目定位、功能清单、迭代阶段、当前阶段与下一步
- `docs/INTRO.md`：项目介绍、目标、面向对象与当前状态

## Direction

当前版本主要围绕这些方向继续推进：

- Building Future With AI
- 工程实践 × Agent 工作流 × 个人数字基础设施
- Persona 风格启发下的更强 opening / hero 体验
- 更少空话，更真实地反映项目与构建轨迹

## Roadmap

- 继续优化首屏 opening 与 loading
- 持续补强项目区内容与真实证据
- 优化整站视觉系统与层次节奏
- 持续同步本地文档与飞书文档
