# 🚀 GitLingo - GitHub 开发者英语学习平台

<p align="center">
  <strong>专为开发者设计的多邻国式（Duolingo）交互流程 GitHub / Git 词汇通关练习平台</strong>
</p>

<p align="center">
  <a href="https://gitlingo.srint.cn" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-在线预览-58cc02?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Vite-8.0-1cb0f6?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-19.0-20232a?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind--v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

**GitLingo** 将日常在 GitHub 以及代码研发协作中高频用到的专业词汇，整理规划为 **16 个渐进式关卡单元**，涵盖从“基础登录注册”到“高级 Git 冲突与 CI/CD 配置”等共 **385 个核心词汇**、**48 个交互式练习** 以及 **16 个情景故事会话（Stories）**。

依托浏览器原生 TTS 真人发音引擎，实现高频音效发音，让学习过程高效、立体、有趣！

---

## 🎨 界面预览 (Screenshots)

### 🖥️ 桌面端 Dashboard (三栏式自适应精美布局)
![Desktop Dashboard](./screenshots/desktop-dashboard.png)

### 📱 移动端学习地图 与 关卡节点
<p align="center">
  <img src="./screenshots/mobile-map.png" width="350" alt="Mobile Map" />
</p>

### ✍️ 交互式多维题型 & 实时高频发音反馈
![Exercise View](./screenshots/exercise-view.png)
![Feedback View](./screenshots/feedback-view.png)

---

## ✨ 核心特色 & 还原多邻国交互

1. **多维度自适应题型**：
   - **En ↔ Zh 单选题**：结合上下文例句快速理解。
   - **单词拼写填空（Fill in the blank）**：强化核心代码词汇记忆。
   - **开发者句子拼装（Word bank）**：还原日常提问、提 PR 或写 Commit 的句子结构。
   - **连连看单词配对（Matching pairs）**：练习开发词汇的英汉快速映射。
2. **多邻国式游戏化关卡机制**：
   - **学习地图（Zigzag Path）**：采用平滑贝塞尔曲线连接关卡，每单元包含 3 个基础 Lesson + 1 个 Story。
   - **情景故事模式（Stories）**：还原团队成员（如 Alex、Maya）在 GitHub 进行项目协作、代码合并冲突、提 Issue 时的真实对话交流。
   - **XP 经验系统**、**连续学习天数（Streak）**、以及**完美通关皇冠荣誉（Crown）**。
   - 移除不必要的红心惩罚系统，专注高效记忆。
3. **高频场景发音提醒（TTS）**：
   - 自动适配浏览器最佳英文人声，每当进入练习、点击单词卡片、选对答案或者拼装完句子时，都会**实时高频发音**，加深听觉记忆。
4. **前端响应式适配**：
   - 适配 PC 宽屏、平板与手机移动端。PC 端自动呈现三栏式布局（左侧快捷单元导航、中间滚动关卡图、右侧环形进度指标与连续天数面板），支持点击左侧单元列表平滑滚动定位。
5. **本地无后端持久化**：
   - 所有学习进度、通关得分均在浏览器 LocalStorage 自动保存，无隐私泄露风险。

---

## 📖 单元大纲 (Curriculum Structure)

应用内置 16 个渐进式开发者专属单元：
* **Unit 1**: Getting Started (GitHub 基础注册、个人资料与导航)
* **Unit 2**: Repositories (创建仓库、Clone 与 Public/Private 设置)
* **Unit 3**: Commits (日常 Commit、撰写规范 Message)
* **Unit 4**: Branching (分支管理、Checkout 与 HEAD 指针)
* **Unit 5**: Pull Requests (提 PR、请求 Review、处理 Change Request)
* **Unit 6**: Code Review (代码评审意见、Approve 与 Request Changes)
* **Unit 7**: Merge & Deploy (各种合并策略 Merge/Rebase/Squash 与发布)
* **Unit 8**: Issues & Discussions (提 Bug、创建议题与社区讨论)
* **Unit 9**: Collaboration (Fork/Star/Watch、加 Team 与权限角色)
* **Unit 10**: Advanced Git (Stash、Cherry-pick、Revert、Bisect 二分查找)
* **Unit 11**: Actions & CI/CD (自动化流、Workflow、Trigger 与 Runner)
* **Unit 12**: Security & Packages (漏洞扫描 Dependabot、Token 授权)
* **Unit 13**: CLI & Terminal (命令行词汇、Flags、Verbose 日志)
* **Unit 14**: Documentation (写 Markdown README、Wikis、Changelog)
* **Unit 15**: Organizations (组织账号、Billing 账单、Sponsorship)
* **Unit 16**: Copilot & AI (AI 编程辅助、Autocomplete 提示、Refactor 重构)

---

## 🛠️ 本地运行开发

本应用基于 **Vite 8 + React 19 + Tailwind CSS v4** 开发构建，无后端依赖。

### 1. 克隆项目并安装依赖
```bash
git clone https://github.com/askofcc/gitlingo-tool.git
cd gitlingo-tool
npm install
```

### 2. 运行开发服务
```bash
npm run dev
```
打开浏览器访问 `http://localhost:5173/` 即可本地学习。

---

## ☁️ 一键部署上线 (Cloudflare Workers)

本项目已配置好 Wrangler，你可以极其简单地在 1 分钟内将其部署上线到你自己的 Cloudflare 账号：

```bash
# 1. 编译构建
npm run build

# 2. 一键发布
npx wrangler deploy
```

发布完成后控制台会直接输出分配的免费三级域名（如 `https://gitlingo.xxxx.workers.dev`）。如需使用自定义域名，直接在 Cloudflare 网页端的 **Workers -> Trigger -> Custom Domains** 绑定你的域名即可。
