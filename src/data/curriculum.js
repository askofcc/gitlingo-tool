export const units = [
  {
    id: 1, title: "Getting Started", titleZh: "GitHub 入门", icon: "🚀", color: "#58cc02",
    lessons: [
      { id: "1-1", title: "Sign Up & Login", vocab: [
        { en: "sign up", zh: "注册", example: "Click here to sign up for GitHub.", exampleZh: "点击这里注册 GitHub。" },
        { en: "log in", zh: "登录", example: "Log in to your account.", exampleZh: "登录你的账号。" },
        { en: "log out", zh: "退出登录", example: "Log out when you are done.", exampleZh: "完成后退出登录。" },
        { en: "password", zh: "密码", example: "Enter your password.", exampleZh: "输入你的密码。" },
        { en: "username", zh: "用户名", example: "Choose a unique username.", exampleZh: "选择一个唯一的用户名。" },
        { en: "email", zh: "邮箱", example: "Verify your email address.", exampleZh: "验证你的邮箱地址。" },
        { en: "account", zh: "账号", example: "Create a free account.", exampleZh: "创建一个免费账号。" },
        { en: "verify", zh: "验证", example: "Verify your identity.", exampleZh: "验证你的身份。" },
      ]},
      { id: "1-2", title: "Profile & Settings", vocab: [
        { en: "profile", zh: "个人资料", example: "Update your profile picture.", exampleZh: "更新你的头像。" },
        { en: "avatar", zh: "头像", example: "Upload a new avatar.", exampleZh: "上传新头像。" },
        { en: "bio", zh: "个人简介", example: "Add a short bio to your profile.", exampleZh: "给你的资料添加简短介绍。" },
        { en: "settings", zh: "设置", example: "Go to settings to change preferences.", exampleZh: "前往设置修改偏好。" },
        { en: "theme", zh: "主题", example: "Switch to dark theme.", exampleZh: "切换到暗色主题。" },
        { en: "notification", zh: "通知", example: "You have 3 new notifications.", exampleZh: "你有 3 条新通知。" },
        { en: "appearance", zh: "外观", example: "Customize the appearance of GitHub.", exampleZh: "自定义 GitHub 的外观。" },
        { en: "accessibility", zh: "无障碍", example: "Check the accessibility settings.", exampleZh: "检查无障碍设置。" },
      ]},
      { id: "1-3", title: "Navigation", vocab: [
        { en: "dashboard", zh: "仪表盘", example: "Your dashboard shows recent activity.", exampleZh: "仪表盘显示最近的活动。" },
        { en: "explore", zh: "探索", example: "Explore trending repositories.", exampleZh: "探索热门仓库。" },
        { en: "search", zh: "搜索", example: "Search for repositories by name.", exampleZh: "按名称搜索仓库。" },
        { en: "feed", zh: "动态", example: "Your feed shows updates from people you follow.", exampleZh: "动态显示你关注的人的更新。" },
        { en: "sidebar", zh: "侧边栏", example: "Use the sidebar to navigate.", exampleZh: "用侧边栏导航。" },
        { en: "tab", zh: "标签页", example: "Click the Code tab.", exampleZh: "点击 Code 标签页。" },
        { en: "dropdown", zh: "下拉菜单", example: "Select an option from the dropdown.", exampleZh: "从下拉菜单选择选项。" },
        { en: "bookmark", zh: "书签", example: "Bookmark this page for later.", exampleZh: "把这个页面加入书签。" },
      ]},
    ],
    story: { title: "Your First Day on GitHub", titleZh: "你在 GitHub 的第一天", scenes: [
      { speaker: "narrator", text: "Alex is a new developer. Today is his first day using GitHub.", textZh: "Alex 是一名新开发者。今天是他第一天使用 GitHub。" },
      { speaker: "Alex", text: "I need to sign up for a GitHub account first.", textZh: "我需要先注册一个 GitHub 账号。" },
      { speaker: "narrator", text: "He enters his email and chooses a username.", textZh: "他输入邮箱并选择了用户名。" },
      { question: true, prompt: "What does Alex need to do first?", options: ["Sign up for an account", "Delete a repository", "Write a commit message"], answer: 0 },
      { speaker: "Alex", text: "Now I can see my dashboard. Let me explore some repositories.", textZh: "现在我能看到仪表盘了。让我探索一些仓库。" },
      { speaker: "narrator", text: "He updates his profile and adds a bio.", textZh: "他更新了个人资料并添加了简介。" },
      { question: true, prompt: "What did Alex update?", options: ["His profile and bio", "His repository", "His workflow"], answer: 0 },
    ]},
  },
  {
    id: 2, title: "Repository Basics", titleZh: "仓库基础", icon: "📦", color: "#1cb0f6",
    lessons: [
      { id: "2-1", title: "Creating Repositories", vocab: [
        { en: "repository", zh: "仓库", example: "Create a new repository for your project.", exampleZh: "为你的项目创建一个新仓库。" },
        { en: "create", zh: "创建", example: "Create a repository to get started.", exampleZh: "创建一个仓库来开始。" },
        { en: "public", zh: "公开的", example: "Public repositories are visible to everyone.", exampleZh: "公开仓库对所有人可见。" },
        { en: "private", zh: "私有的", example: "Private repositories are only visible to you.", exampleZh: "私有仓库只对你可见。" },
        { en: "description", zh: "描述", example: "Add a description to your repository.", exampleZh: "给仓库添加描述。" },
        { en: "initialize", zh: "初始化", example: "Initialize the repository with a README.", exampleZh: "用 README 初始化仓库。" },
        { en: "template", zh: "模板", example: "Use a template to create your repository.", exampleZh: "使用模板来创建仓库。" },
        { en: "visibility", zh: "可见性", example: "Change the visibility to private.", exampleZh: "将可见性改为私有。" },
      ]},
      { id: "2-2", title: "Repository Files", vocab: [
        { en: "README", zh: "自述文件", example: "Every project should have a README.", exampleZh: "每个项目都应该有自述文件。" },
        { en: "license", zh: "许可证", example: "Choose a license for your project.", exampleZh: "为项目选择许可证。" },
        { en: "gitignore", zh: "忽略文件", example: "Add build files to .gitignore.", exampleZh: "将构建文件添加到 .gitignore。" },
        { en: "file", zh: "文件", example: "Upload a file to your repository.", exampleZh: "上传文件到仓库。" },
        { en: "folder", zh: "文件夹", example: "Organize code into folders.", exampleZh: "将代码组织到文件夹中。" },
        { en: "code", zh: "代码", example: "Review the code before merging.", exampleZh: "合并前审查代码。" },
        { en: "source code", zh: "源代码", example: "The source code is available online.", exampleZh: "源代码可在线获取。" },
        { en: "directory", zh: "目录", example: "Navigate to the src directory.", exampleZh: "导航到 src 目录。" },
      ]},
      { id: "2-3", title: "Repository Actions", vocab: [
        { en: "star", zh: "收藏", example: "Star a repository to save it.", exampleZh: "收藏仓库来保存它。" },
        { en: "watch", zh: "关注", example: "Watch a repository to get notifications.", exampleZh: "关注仓库来获取通知。" },
        { en: "fork", zh: "复刻", example: "Fork the repository to make your own copy.", exampleZh: "复刻仓库来创建你自己的副本。" },
        { en: "clone", zh: "克隆", example: "Clone the repository to your local machine.", exampleZh: "将仓库克隆到本地机器。" },
        { en: "download", zh: "下载", example: "Download the source code as a ZIP.", exampleZh: "将源代码下载为 ZIP。" },
        { en: "archive", zh: "归档", example: "Archive the repository when it is no longer maintained.", exampleZh: "当仓库不再维护时将其归档。" },
        { en: "transfer", zh: "转移", example: "Transfer the repository to another owner.", exampleZh: "将仓库转移给另一个所有者。" },
        { en: "delete", zh: "删除", example: "Delete the repository permanently.", exampleZh: "永久删除仓库。" },
      ]},
    ],
    story: { title: "Setting Up the Project", titleZh: "搭建项目", scenes: [
      { speaker: "narrator", text: "Alex's team is starting a new project.", textZh: "Alex 的团队正在启动新项目。" },
      { speaker: "Alex", text: "I'll create the repository and add a README.", textZh: "我来创建仓库并添加 README。" },
      { speaker: "Maya", text: "Don't forget to add a .gitignore file.", textZh: "别忘了添加 .gitignore 文件。" },
      { question: true, prompt: "What file should they add?", options: ["A .gitignore file", "A LICENSE file", "A package.json"], answer: 0 },
      { speaker: "Alex", text: "I'll make it public so everyone can see our code.", textZh: "我设为公开的，这样所有人都能看到代码。" },
      { speaker: "Maya", text: "I'll fork the repo and then clone it to my machine.", textZh: "我先复刻仓库然后克隆到我的机器上。" },
      { question: true, prompt: "What does Maya do after forking?", options: ["Clone it to her machine", "Delete the repository", "Change the license"], answer: 0 },
    ]},
  },
  {
    id: 3, title: "Commits & Changes", titleZh: "提交与变更", icon: "✏️", color: "#ff9600",
    lessons: [
      { id: "3-1", title: "Making Changes", vocab: [
        { en: "commit", zh: "提交", example: "Commit your changes with a clear message.", exampleZh: "用清晰的信息提交变更。" },
        { en: "push", zh: "推送", example: "Push your commits to the remote.", exampleZh: "将提交推送到远程。" },
        { en: "pull", zh: "拉取", example: "Pull the latest changes.", exampleZh: "拉取最新变更。" },
        { en: "add", zh: "添加", example: "Add files to the staging area.", exampleZh: "将文件添加到暂存区。" },
        { en: "stage", zh: "暂存", example: "Stage the modified files.", exampleZh: "暂存修改过的文件。" },
        { en: "unstage", zh: "取消暂存", example: "Unstage the file before committing.", exampleZh: "提交前取消暂存文件。" },
        { en: "commit message", zh: "提交信息", example: "Write a descriptive commit message.", exampleZh: "写一条描述性的提交信息。" },
        { en: "diff", zh: "差异", example: "Review the diff before committing.", exampleZh: "提交前审查差异。" },
      ]},
      { id: "3-2", title: "Tracking History", vocab: [
        { en: "history", zh: "历史记录", example: "View the commit history.", exampleZh: "查看提交历史。" },
        { en: "log", zh: "日志", example: "Check the git log.", exampleZh: "查看 git 日志。" },
        { en: "blame", zh: "追溯", example: "Use blame to see who changed each line.", exampleZh: "使用 blame 查看每行是谁改的。" },
        { en: "hash", zh: "哈希值", example: "Each commit has a unique hash.", exampleZh: "每个提交有唯一的哈希值。" },
        { en: "author", zh: "作者", example: "The author of this commit is Alex.", exampleZh: "这个提交的作者是 Alex。" },
        { en: "timestamp", zh: "时间戳", example: "Check the timestamp of the commit.", exampleZh: "检查提交的时间戳。" },
        { en: "modified", zh: "已修改", example: "Three files were modified.", exampleZh: "有三个文件被修改。" },
        { en: "tracked", zh: "已追踪", example: "Only tracked files are committed.", exampleZh: "只有已追踪的文件会被提交。" },
      ]},
      { id: "3-3", title: "Undoing Things", vocab: [
        { en: "revert", zh: "回退", example: "Revert the commit if something goes wrong.", exampleZh: "出问题就回退提交。" },
        { en: "reset", zh: "重置", example: "Reset the branch to a previous commit.", exampleZh: "将分支重置到之前的提交。" },
        { en: "amend", zh: "修改", example: "Amend the last commit to fix a typo.", exampleZh: "修改最后一次提交来修复拼写。" },
        { en: "stash", zh: "暂存", example: "Stash your changes before switching branches.", exampleZh: "切换分支前暂存变更。" },
        { en: "checkout", zh: "检出", example: "Checkout the file to discard changes.", exampleZh: "检出文件来丢弃变更。" },
        { en: "restore", zh: "恢复", example: "Restore the deleted file.", exampleZh: "恢复已删除的文件。" },
        { en: "cherry-pick", zh: "遴选", example: "Cherry-pick a commit from another branch.", exampleZh: "从另一个分支遴选提交。" },
        { en: "squash", zh: "压缩", example: "Squash multiple commits into one.", exampleZh: "将多个提交压缩为一个。" },
      ]},
    ],
    story: { title: "The Wrong Commit", titleZh: "错误的提交", scenes: [
      { speaker: "narrator", text: "Alex accidentally committed a file with his API key.", textZh: "Alex 不小心提交了包含 API 密钥的文件。" },
      { speaker: "Alex", text: "I need to revert this commit immediately.", textZh: "我需要立刻回退这个提交。" },
      { speaker: "Maya", text: "Check the diff first to see what was included.", textZh: "先检查差异看看包含了什么。" },
      { question: true, prompt: "Why should Alex check the diff?", options: ["To see what was included", "To delete the repository", "To create a new branch"], answer: 0 },
      { speaker: "Alex", text: "I can amend the commit and remove the key.", textZh: "我可以修改提交并移除密钥。" },
      { question: true, prompt: "What should Alex add to .gitignore?", options: ["The API key file", "The README file", "The commit message"], answer: 0 },
    ]},
  },
  {
    id: 4, title: "Branching", titleZh: "分支管理", icon: "🌿", color: "#ce82ff",
    lessons: [
      { id: "4-1", title: "Branch Basics", vocab: [
        { en: "branch", zh: "分支", example: "Create a new branch for each feature.", exampleZh: "为每个功能创建新分支。" },
        { en: "main", zh: "主分支", example: "The main branch is the default branch.", exampleZh: "main 是默认分支。" },
        { en: "feature branch", zh: "功能分支", example: "Work on a feature branch.", exampleZh: "在功能分支上工作。" },
        { en: "switch", zh: "切换", example: "Switch to the development branch.", exampleZh: "切换到开发分支。" },
        { en: "HEAD", zh: "当前指针", example: "HEAD points to the current branch.", exampleZh: "HEAD 指向当前分支。" },
        { en: "detached HEAD", zh: "游离指针", example: "You are in detached HEAD state.", exampleZh: "你处于游离 HEAD 状态。" },
        { en: "local branch", zh: "本地分支", example: "Create a local branch first.", exampleZh: "先创建一个本地分支。" },
        { en: "remote branch", zh: "远程分支", example: "Push the local branch to remote.", exampleZh: "将本地分支推送到远程。" },
      ]},
      { id: "4-2", title: "Merging", vocab: [
        { en: "merge", zh: "合并", example: "Merge the feature branch into main.", exampleZh: "将功能分支合并到 main。" },
        { en: "conflict", zh: "冲突", example: "Resolve the merge conflict.", exampleZh: "解决合并冲突。" },
        { en: "resolve", zh: "解决", example: "Resolve conflicts before merging.", exampleZh: "合并前解决冲突。" },
        { en: "rebase", zh: "变基", example: "Rebase your branch on top of main.", exampleZh: "将你的分支变基到 main 之上。" },
        { en: "fast-forward", zh: "快进", example: "A fast-forward merge moves the pointer.", exampleZh: "快进合并会移动指针。" },
        { en: "three-way merge", zh: "三路合并", example: "Git uses a three-way merge algorithm.", exampleZh: "Git 使用三路合并算法。" },
        { en: "merge commit", zh: "合并提交", example: "The merge commit has two parents.", exampleZh: "合并提交有两个父提交。" },
        { en: "abort", zh: "中止", example: "Abort the merge if needed.", exampleZh: "如需要就中止合并。" },
      ]},
      { id: "4-3", title: "Remote & Origin", vocab: [
        { en: "remote", zh: "远程", example: "Add a remote repository.", exampleZh: "添加一个远程仓库。" },
        { en: "origin", zh: "源", example: "Origin is the default remote name.", exampleZh: "Origin 是默认的远程名称。" },
        { en: "upstream", zh: "上游", example: "Set the upstream branch.", exampleZh: "设置上游分支。" },
        { en: "fetch", zh: "获取", example: "Fetch the latest changes without merging.", exampleZh: "获取最新变更但不合并。" },
        { en: "pull", zh: "拉取", example: "Pull combines fetch and merge.", exampleZh: "Pull 结合了获取和合并。" },
        { en: "push", zh: "推送", example: "Push your branch to origin.", exampleZh: "将你的分支推送到 origin。" },
        { en: "track", zh: "追踪", example: "Track the remote branch.", exampleZh: "追踪远程分支。" },
        { en: "prune", zh: "修剪", example: "Prune deleted remote branches.", exampleZh: "修剪已删除的远程分支。" },
      ]},
    ],
    story: { title: "The Merge Conflict", titleZh: "合并冲突", scenes: [
      { speaker: "narrator", text: "Alex and Maya are both editing the same file.", textZh: "Alex 和 Maya 都在编辑同一个文件。" },
      { speaker: "Alex", text: "I'll create a feature branch called feature-login.", textZh: "我创建一个叫 feature-login 的功能分支。" },
      { speaker: "Maya", text: "I'm also working on the login page on my branch.", textZh: "我也在我的分支上改登录页。" },
      { question: true, prompt: "What might happen when they merge?", options: ["A merge conflict", "The repository gets deleted", "The files disappear"], answer: 0 },
      { speaker: "Maya", text: "There's a conflict. Let me resolve it.", textZh: "有冲突。让我来解决。" },
      { question: true, prompt: "What does Maya need to do?", options: ["Resolve the conflict", "Delete her branch", "Create a new repo"], answer: 0 },
    ]},
  },
  {
    id: 5, title: "Pull Requests", titleZh: "拉取请求", icon: "🔀", color: "#ff4b4b",
    lessons: [
      { id: "5-1", title: "Creating PRs", vocab: [
        { en: "pull request", zh: "拉取请求", example: "Open a pull request to propose changes.", exampleZh: "打开拉取请求来提议变更。" },
        { en: "draft", zh: "草稿", example: "Open as a draft pull request first.", exampleZh: "先作为草稿拉取请求打开。" },
        { en: "title", zh: "标题", example: "Write a clear title for your PR.", exampleZh: "为 PR 写一个清晰的标题。" },
        { en: "body", zh: "正文", example: "Describe your changes in the body.", exampleZh: "在正文中描述你的变更。" },
        { en: "base branch", zh: "基础分支", example: "Select the base branch for your PR.", exampleZh: "为 PR 选择基础分支。" },
        { en: "compare branch", zh: "比较分支", example: "The compare branch contains your changes.", exampleZh: "比较分支包含你的变更。" },
        { en: "reviewer", zh: "审查者", example: "Add a reviewer to your PR.", exampleZh: "给 PR 添加审查者。" },
        { en: "assignee", zh: "负责人", example: "Assign the PR to yourself.", exampleZh: "将 PR 分配给自己。" },
      ]},
      { id: "5-2", title: "Review & Merge", vocab: [
        { en: "review", zh: "审查", example: "Request a code review.", exampleZh: "请求代码审查。" },
        { en: "approve", zh: "批准", example: "Approve the pull request.", exampleZh: "批准拉取请求。" },
        { en: "request changes", zh: "请求修改", example: "Request changes if there are issues.", exampleZh: "如果有问题就请求修改。" },
        { en: "comment", zh: "评论", example: "Leave a comment on the PR.", exampleZh: "在 PR 上留评论。" },
        { en: "suggestion", zh: "建议", example: "Add a code suggestion in the review.", exampleZh: "在审查中添加代码建议。" },
        { en: "merge", zh: "合并", example: "Merge the pull request.", exampleZh: "合并拉取请求。" },
        { en: "squash and merge", zh: "压缩合并", example: "Squash and merge to keep a clean history.", exampleZh: "压缩合并以保持干净的历史。" },
        { en: "close", zh: "关闭", example: "Close the pull request without merging.", exampleZh: "不合并直接关闭拉取请求。" },
      ]},
      { id: "5-3", title: "PR Workflow", vocab: [
        { en: "files changed", zh: "变更文件", example: "Review all files changed in the PR.", exampleZh: "审查 PR 中所有变更文件。" },
        { en: "conversation", zh: "对话", example: "Continue the conversation in the PR.", exampleZh: "在 PR 中继续对话。" },
        { en: "checks", zh: "检查", example: "All checks must pass before merging.", exampleZh: "合并前所有检查必须通过。" },
        { en: "auto-merge", zh: "自动合并", example: "Enable auto-merge for this PR.", exampleZh: "为此 PR 启用自动合并。" },
        { en: "merge queue", zh: "合并队列", example: "Add the PR to the merge queue.", exampleZh: "将 PR 添加到合并队列。" },
        { en: "linked issue", zh: "关联议题", example: "Link an issue to the pull request.", exampleZh: "将议题关联到拉取请求。" },
        { en: "ready for review", zh: "准备审查", example: "Mark the draft as ready for review.", exampleZh: "将草稿标记为准备审查。" },
        { en: "outdated", zh: "已过时", example: "This review comment is outdated.", exampleZh: "这条审查评论已过时。" },
      ]},
    ],
    story: { title: "Your First Pull Request", titleZh: "你的第一个 PR", scenes: [
      { speaker: "narrator", text: "Alex finished his feature and wants to merge it.", textZh: "Alex 完成了功能想要合并它。" },
      { speaker: "Alex", text: "I'll open a pull request from my feature branch.", textZh: "我从功能分支打开一个拉取请求。" },
      { speaker: "Maya", text: "I'll review your code. Give me a minute.", textZh: "我来审查你的代码。给我一分钟。" },
      { question: true, prompt: "What does Maya do?", options: ["Review the code", "Delete the branch", "Create a new issue"], answer: 0 },
      { speaker: "Maya", text: "Looks good! I'll approve it.", textZh: "看起来不错！我批准了。" },
      { question: true, prompt: "What happens after approval?", options: ["The PR can be merged", "The PR is deleted", "A new branch is created"], answer: 0 },
    ]},
  },
  {
    id: 6, title: "Issues & Tracking", titleZh: "议题与追踪", icon: "📋", color: "#1cb0f6",
    lessons: [
      { id: "6-1", title: "Creating Issues", vocab: [
        { en: "issue", zh: "议题", example: "Open an issue to report a bug.", exampleZh: "开一个议题来报告缺陷。" },
        { en: "bug", zh: "缺陷", example: "I found a bug in the login page.", exampleZh: "我在登录页发现了缺陷。" },
        { en: "feature request", zh: "功能请求", example: "Submit a feature request.", exampleZh: "提交功能请求。" },
        { en: "enhancement", zh: "增强", example: "This is an enhancement to the UI.", exampleZh: "这是对 UI 的增强。" },
        { en: "label", zh: "标签", example: "Add the bug label to the issue.", exampleZh: "给议题添加 bug 标签。" },
        { en: "milestone", zh: "里程碑", example: "Add the issue to the v2.0 milestone.", exampleZh: "将议题添加到 v2.0 里程碑。" },
        { en: "assignee", zh: "负责人", example: "Assign the issue to a team member.", exampleZh: "将议题分配给团队成员。" },
        { en: "template", zh: "模板", example: "Use an issue template.", exampleZh: "使用议题模板。" },
      ]},
      { id: "6-2", title: "Managing Issues", vocab: [
        { en: "close", zh: "关闭", example: "Close the issue after it's fixed.", exampleZh: "修复后关闭议题。" },
        { en: "reopen", zh: "重新打开", example: "Reopen the issue if the bug returns.", exampleZh: "如果缺陷复现就重新打开。" },
        { en: "reference", zh: "引用", example: "Reference the issue in your commit.", exampleZh: "在提交中引用议题。" },
        { en: "mention", zh: "提及", example: "Mention a teammate with @username.", exampleZh: "用 @用户名 提及队友。" },
        { en: "pin", zh: "置顶", example: "Pin important issues to the top.", exampleZh: "将重要议题置顶。" },
        { en: "lock", zh: "锁定", example: "Lock the issue to prevent comments.", exampleZh: "锁定议题防止评论。" },
        { en: "duplicate", zh: "重复", example: "Mark the issue as duplicate.", exampleZh: "将议题标记为重复。" },
        { en: "cross-reference", zh: "交叉引用", example: "Add a cross-reference to another issue.", exampleZh: "添加到另一个议题的交叉引用。" },
      ]},
      { id: "6-3", title: "Project Boards", vocab: [
        { en: "project", zh: "项目", example: "Create a project to organize work.", exampleZh: "创建项目来组织工作。" },
        { en: "board", zh: "看板", example: "Use a board to visualize workflow.", exampleZh: "用看板可视化工作流。" },
        { en: "backlog", zh: "待办", example: "Move new issues to backlog.", exampleZh: "将新议题移到待办。" },
        { en: "in progress", zh: "进行中", example: "Move the card to In Progress.", exampleZh: "将卡片移到进行中。" },
        { en: "done", zh: "已完成", example: "Move completed tasks to done.", exampleZh: "将完成的任务移到已完成。" },
        { en: "priority", zh: "优先级", example: "Set the priority for each issue.", exampleZh: "为每个议题设置优先级。" },
        { en: "sprint", zh: "冲刺", example: "Plan issues for the next sprint.", exampleZh: "为下一个冲刺规划议题。" },
        { en: "kanban", zh: "看板", example: "Use a kanban workflow.", exampleZh: "使用看板工作流。" },
      ]},
    ],
    story: { title: "Tracking the Bug", titleZh: "追踪缺陷", scenes: [
      { speaker: "narrator", text: "A user reports the search feature is broken.", textZh: "用户报告搜索功能坏了。" },
      { speaker: "Alex", text: "I'll open an issue with the bug label.", textZh: "我来开一个带 bug 标签的议题。" },
      { speaker: "Maya", text: "Assign it to me. I'll investigate.", textZh: "分配给我吧。我来调查。" },
      { question: true, prompt: "What label did Alex add?", options: ["Bug", "Feature request", "Enhancement"], answer: 0 },
      { speaker: "Maya", text: "Found it! I'll reference the issue in my commit.", textZh: "找到了！我在提交中引用这个议题。" },
      { question: true, prompt: "When should Alex close the issue?", options: ["After the fix is merged", "Before fixing", "When creating it"], answer: 0 },
    ]},
  },
  {
    id: 7, title: "Code Review", titleZh: "代码审查", icon: "🔍", color: "#ff9600",
    lessons: [
      { id: "7-1", title: "Review Basics", vocab: [
        { en: "code review", zh: "代码审查", example: "Code review improves quality.", exampleZh: "代码审查提高质量。" },
        { en: "inline comment", zh: "行内评论", example: "Leave an inline comment on line 42.", exampleZh: "在第 42 行留下行内评论。" },
        { en: "thread", zh: "讨论串", example: "Start a review thread.", exampleZh: "开始一个审查讨论串。" },
        { en: "resolve", zh: "解决", example: "Resolve the review thread.", exampleZh: "解决审查讨论串。" },
        { en: "dismiss", zh: "驳回", example: "Dismiss the stale review.", exampleZh: "驳回过时的审查。" },
        { en: "batch", zh: "批量", example: "Submit all comments as a batch.", exampleZh: "将所有评论批量提交。" },
        { en: "pending", zh: "待处理", example: "You have a pending review.", exampleZh: "你有一个待处理的审查。" },
        { en: "submit review", zh: "提交审查", example: "Submit your review when ready.", exampleZh: "准备好后提交审查。" },
      ]},
      { id: "7-2", title: "Review Practices", vocab: [
        { en: "refactor", zh: "重构", example: "Refactor this function for clarity.", exampleZh: "重构这个函数使其更清晰。" },
        { en: "nit", zh: "小问题", example: "Nit: add a space after the comma.", exampleZh: "小问题：逗号后加个空格。" },
        { en: "blocker", zh: "阻塞问题", example: "This bug is a blocker.", exampleZh: "这个缺陷是阻塞问题。" },
        { en: "LGTM", zh: "看起来不错", example: "LGTM! Ship it.", exampleZh: "看起来不错！发布吧。" },
        { en: "WIP", zh: "进行中", example: "This PR is still WIP.", exampleZh: "这个 PR 仍在进行中。" },
        { en: "breaking change", zh: "破坏性变更", example: "This is a breaking change.", exampleZh: "这是一个破坏性变更。" },
        { en: "regression", zh: "回归", example: "Check for regressions.", exampleZh: "检查是否有回归。" },
        { en: "edge case", zh: "边界情况", example: "Consider this edge case.", exampleZh: "考虑这个边界情况。" },
      ]},
      { id: "7-3", title: "Quality Gates", vocab: [
        { en: "protected branch", zh: "受保护分支", example: "Main is a protected branch.", exampleZh: "Main 是受保护分支。" },
        { en: "required review", zh: "必需审查", example: "Two required reviews are needed.", exampleZh: "需要两个必需审查。" },
        { en: "status check", zh: "状态检查", example: "All status checks must pass.", exampleZh: "所有状态检查必须通过。" },
        { en: "branch rule", zh: "分支规则", example: "Set up branch protection rules.", exampleZh: "设置分支保护规则。" },
        { en: "CODEOWNERS", zh: "代码所有者", example: "Define CODEOWNERS for auto-review.", exampleZh: "定义 CODEOWNERS 来自动分配审查。" },
        { en: "signed commit", zh: "签名提交", example: "Require signed commits.", exampleZh: "要求签名提交。" },
        { en: "linear history", zh: "线性历史", example: "Enforce linear history.", exampleZh: "强制线性历史。" },
        { en: "enforce", zh: "强制执行", example: "Enforce rules for all users.", exampleZh: "对所有用户强制执行规则。" },
      ]},
    ],
    story: { title: "A Thorough Review", titleZh: "一次彻底的审查", scenes: [
      { speaker: "narrator", text: "Maya is reviewing Alex's pull request.", textZh: "Maya 正在审查 Alex 的拉取请求。" },
      { speaker: "Maya", text: "I see a potential regression on line 85.", textZh: "我在第 85 行看到一个潜在的回归。" },
      { speaker: "Alex", text: "Good catch! I'll fix that edge case.", textZh: "发现得好！我来修复那个边界情况。" },
      { question: true, prompt: "What did Maya find?", options: ["A potential regression", "A missing file", "A new feature"], answer: 0 },
      { speaker: "Maya", text: "After the fix, LGTM! I'll approve it.", textZh: "修复后看起来不错！我批准了。" },
      { question: true, prompt: "What does LGTM mean?", options: ["Looks Good To Me", "Let's Get This Merged", "Last Git To Main"], answer: 0 },
    ]},
  },
  {
    id: 8, title: "GitHub Actions", titleZh: "GitHub Actions", icon: "⚙️", color: "#ce82ff",
    lessons: [
      { id: "8-1", title: "Workflow Basics", vocab: [
        { en: "workflow", zh: "工作流", example: "Define a workflow in YAML.", exampleZh: "在 YAML 中定义工作流。" },
        { en: "action", zh: "操作", example: "Use an action from the marketplace.", exampleZh: "使用市场中的操作。" },
        { en: "trigger", zh: "触发器", example: "Set the trigger to run on push.", exampleZh: "设置触发器在推送时运行。" },
        { en: "event", zh: "事件", example: "The push event triggers the workflow.", exampleZh: "推送事件触发工作流。" },
        { en: "runner", zh: "运行器", example: "Use a GitHub-hosted runner.", exampleZh: "使用 GitHub 托管的运行器。" },
        { en: "job", zh: "任务", example: "Each workflow can have multiple jobs.", exampleZh: "每个工作流可以有多个任务。" },
        { en: "step", zh: "步骤", example: "Add a step to install dependencies.", exampleZh: "添加安装依赖的步骤。" },
        { en: "YAML", zh: "YAML 文件", example: "Write the workflow in YAML format.", exampleZh: "用 YAML 格式编写工作流。" },
      ]},
      { id: "8-2", title: "Configuration", vocab: [
        { en: "secret", zh: "密钥", example: "Store API keys as secrets.", exampleZh: "将 API 密钥存储为密钥。" },
        { en: "variable", zh: "变量", example: "Set environment variables.", exampleZh: "设置环境变量。" },
        { en: "matrix", zh: "矩阵", example: "Use a matrix to test on multiple OS.", exampleZh: "使用矩阵在多个系统上测试。" },
        { en: "cache", zh: "缓存", example: "Cache dependencies to speed up builds.", exampleZh: "缓存依赖以加速构建。" },
        { en: "artifact", zh: "制品", example: "Upload the build artifact.", exampleZh: "上传构建制品。" },
        { en: "timeout", zh: "超时", example: "Set a timeout for the job.", exampleZh: "为任务设置超时。" },
        { en: "concurrency", zh: "并发", example: "Limit concurrency to one run.", exampleZh: "将并发限制为一次运行。" },
        { en: "permission", zh: "权限", example: "Set permissions for the workflow.", exampleZh: "为工作流设置权限。" },
      ]},
      { id: "8-3", title: "Advanced Actions", vocab: [
        { en: "reusable workflow", zh: "可复用工作流", example: "Create a reusable workflow.", exampleZh: "创建可复用工作流。" },
        { en: "composite action", zh: "组合操作", example: "Build a composite action.", exampleZh: "构建组合操作。" },
        { en: "self-hosted runner", zh: "自托管运行器", example: "Use a self-hosted runner.", exampleZh: "使用自托管运行器。" },
        { en: "dispatch", zh: "调度", example: "Use workflow_dispatch for manual runs.", exampleZh: "使用 workflow_dispatch 手动运行。" },
        { en: "condition", zh: "条件", example: "Add an if condition to the step.", exampleZh: "给步骤添加 if 条件。" },
        { en: "continue on error", zh: "出错继续", example: "Set continue-on-error to true.", exampleZh: "将 continue-on-error 设为 true。" },
        { en: "needs", zh: "依赖", example: "Job B needs Job A to finish.", exampleZh: "任务 B 依赖任务 A 完成。" },
        { en: "schedule", zh: "定时", example: "Schedule the workflow to run daily.", exampleZh: "设置工作流每天定时运行。" },
      ]},
    ],
    story: { title: "The Broken Build", titleZh: "损坏的构建", scenes: [
      { speaker: "narrator", text: "Alex pushed code but the workflow failed.", textZh: "Alex 推送了代码但工作流失败了。" },
      { speaker: "Alex", text: "The build failed! Let me check the logs.", textZh: "构建失败了！让我检查日志。" },
      { speaker: "Maya", text: "The test step is failing. Did you run tests locally?", textZh: "测试步骤失败了。你本地跑过测试吗？" },
      { question: true, prompt: "What failed?", options: ["The test step", "The deploy step", "The trigger"], answer: 0 },
      { speaker: "Alex", text: "I forgot to update the secret.", textZh: "我忘了更新密钥。" },
      { question: true, prompt: "What did Alex need to update?", options: ["A secret", "The README", "The branch name"], answer: 0 },
    ]},
  },
  {
    id: 9, title: "CI/CD & Deployment", titleZh: "持续集成与部署", icon: "🚢", color: "#58cc02",
    lessons: [
      { id: "9-1", title: "CI Pipeline", vocab: [
        { en: "continuous integration", zh: "持续集成", example: "Set up continuous integration.", exampleZh: "设置持续集成。" },
        { en: "pipeline", zh: "流水线", example: "The CI pipeline runs automatically.", exampleZh: "CI 流水线自动运行。" },
        { en: "build", zh: "构建", example: "The build step compiles the code.", exampleZh: "构建步骤编译代码。" },
        { en: "test", zh: "测试", example: "Run tests before deploying.", exampleZh: "部署前运行测试。" },
        { en: "lint", zh: "代码检查", example: "Run lint to check code style.", exampleZh: "运行代码检查来检查代码风格。" },
        { en: "pass", zh: "通过", example: "All tests pass.", exampleZh: "所有测试通过。" },
        { en: "fail", zh: "失败", example: "The build failed on step 3.", exampleZh: "构建在步骤 3 失败了。" },
        { en: "green", zh: "绿色/通过", example: "The pipeline is green.", exampleZh: "流水线是绿色的（通过了）。" },
      ]},
      { id: "9-2", title: "Deployment", vocab: [
        { en: "deploy", zh: "部署", example: "Deploy the app to production.", exampleZh: "将应用部署到生产环境。" },
        { en: "environment", zh: "环境", example: "Deploy to the staging environment.", exampleZh: "部署到预发布环境。" },
        { en: "production", zh: "生产环境", example: "The app is live in production.", exampleZh: "应用在生产环境上线了。" },
        { en: "staging", zh: "预发布", example: "Test on staging first.", exampleZh: "先在预发布测试。" },
        { en: "rollback", zh: "回滚", example: "Rollback to the previous version.", exampleZh: "回滚到之前的版本。" },
        { en: "container", zh: "容器", example: "Deploy using Docker containers.", exampleZh: "使用 Docker 容器部署。" },
        { en: "health check", zh: "健康检查", example: "Run a health check after deploy.", exampleZh: "部署后运行健康检查。" },
        { en: "downtime", zh: "停机时间", example: "Zero downtime deployment.", exampleZh: "零停机部署。" },
      ]},
      { id: "9-3", title: "GitHub Pages", vocab: [
        { en: "GitHub Pages", zh: "GitHub Pages", example: "Host your site on GitHub Pages.", exampleZh: "在 GitHub Pages 上托管网站。" },
        { en: "static site", zh: "静态网站", example: "Deploy a static site.", exampleZh: "部署静态网站。" },
        { en: "custom domain", zh: "自定义域名", example: "Set up a custom domain.", exampleZh: "设置自定义域名。" },
        { en: "HTTPS", zh: "HTTPS", example: "Enable HTTPS for your site.", exampleZh: "为网站启用 HTTPS。" },
        { en: "deployment", zh: "部署", example: "Check the deployment status.", exampleZh: "检查部署状态。" },
        { en: "preview", zh: "预览", example: "Preview the deployment.", exampleZh: "预览部署。" },
        { en: "publish", zh: "发布", example: "Publish your site.", exampleZh: "发布你的网站。" },
        { en: "host", zh: "托管", example: "Host documentation on GitHub Pages.", exampleZh: "在 GitHub Pages 上托管文档。" },
      ]},
    ],
    story: { title: "Going Live", titleZh: "上线", scenes: [
      { speaker: "narrator", text: "The team is ready to deploy to production.", textZh: "团队准备部署到生产环境。" },
      { speaker: "Alex", text: "Let's deploy to staging first and test.", textZh: "先部署到预发布环境测试。" },
      { speaker: "Maya", text: "All tests pass. The pipeline is green.", textZh: "所有测试通过。流水线是绿色的。" },
      { question: true, prompt: "Where should they deploy first?", options: ["Staging", "Production", "Local"], answer: 0 },
      { speaker: "Alex", text: "Staging looks good. Let's deploy to production.", textZh: "预发布看起来没问题。部署到生产环境吧。" },
      { question: true, prompt: "What if something goes wrong?", options: ["Rollback to the previous version", "Delete the app", "Ignore it"], answer: 0 },
    ]},
  },
  {
    id: 10, title: "Releases & Versions", titleZh: "发布与版本", icon: "🏷️", color: "#1cb0f6",
    lessons: [
      { id: "10-1", title: "Releases", vocab: [
        { en: "release", zh: "发布", example: "Create a release for version 1.0.", exampleZh: "为 1.0 版创建发布。" },
        { en: "tag", zh: "标签", example: "Tag the commit with a version number.", exampleZh: "用版本号给提交打标签。" },
        { en: "changelog", zh: "变更日志", example: "Write a changelog for the release.", exampleZh: "为发布撰写变更日志。" },
        { en: "release notes", zh: "发布说明", example: "Write clear release notes.", exampleZh: "写清晰的发布说明。" },
        { en: "pre-release", zh: "预发布", example: "Mark it as a pre-release.", exampleZh: "标记为预发布。" },
        { en: "latest", zh: "最新", example: "Set this as the latest release.", exampleZh: "将此设为最新发布。" },
        { en: "asset", zh: "附件", example: "Attach binary assets to the release.", exampleZh: "将二进制附件附到发布。" },
        { en: "auto-generate", zh: "自动生成", example: "Auto-generate the release notes.", exampleZh: "自动生成发布说明。" },
      ]},
      { id: "10-2", title: "Semantic Versioning", vocab: [
        { en: "version", zh: "版本", example: "Bump the version number.", exampleZh: "升级版本号。" },
        { en: "major", zh: "主版本", example: "A major version has breaking changes.", exampleZh: "主版本包含破坏性变更。" },
        { en: "minor", zh: "次版本", example: "A minor version adds new features.", exampleZh: "次版本添加新功能。" },
        { en: "patch", zh: "补丁版本", example: "A patch version fixes bugs.", exampleZh: "补丁版本修复缺陷。" },
        { en: "backward compatible", zh: "向后兼容", example: "Ensure the change is backward compatible.", exampleZh: "确保变更向后兼容。" },
        { en: "deprecate", zh: "弃用", example: "Deprecate the old API.", exampleZh: "弃用旧的 API。" },
        { en: "migration", zh: "迁移", example: "Write a migration guide.", exampleZh: "编写迁移指南。" },
        { en: "upgrade", zh: "升级", example: "Upgrade to the latest version.", exampleZh: "升级到最新版本。" },
      ]},
      { id: "10-3", title: "Packages", vocab: [
        { en: "package", zh: "包", example: "Publish the package to the registry.", exampleZh: "将包发布到注册表。" },
        { en: "registry", zh: "注册表", example: "GitHub has its own package registry.", exampleZh: "GitHub 有自己的包注册表。" },
        { en: "publish", zh: "发布", example: "Publish the npm package.", exampleZh: "发布 npm 包。" },
        { en: "scope", zh: "作用域", example: "Use a scope for your packages.", exampleZh: "为你的包使用作用域。" },
        { en: "dependency", zh: "依赖", example: "Update outdated dependencies.", exampleZh: "更新过期的依赖。" },
        { en: "peer dependency", zh: "对等依赖", example: "Check peer dependency requirements.", exampleZh: "检查对等依赖要求。" },
        { en: "lock file", zh: "锁文件", example: "Commit the lock file.", exampleZh: "提交锁文件。" },
        { en: "install", zh: "安装", example: "Install the package.", exampleZh: "安装包。" },
      ]},
    ],
    story: { title: "Publishing v2.0", titleZh: "发布 v2.0", scenes: [
      { speaker: "narrator", text: "The team is ready to publish version 2.0.", textZh: "团队准备发布 2.0 版。" },
      { speaker: "Alex", text: "This is a major version with breaking changes.", textZh: "这是一个有破坏性变更的主版本。" },
      { speaker: "Maya", text: "We need to write a migration guide.", textZh: "我们需要写一个迁移指南。" },
      { question: true, prompt: "Why is a migration guide needed?", options: ["There are breaking changes", "The README is missing", "The tests fail"], answer: 0 },
      { speaker: "Alex", text: "I'll create the tag and write the changelog.", textZh: "我来创建标签并写变更日志。" },
      { question: true, prompt: "What type of version is 2.0?", options: ["A major version", "A minor version", "A patch version"], answer: 0 },
    ]},
  },
  {
    id: 11, title: "Security & Access", titleZh: "安全与访问", icon: "🔐", color: "#ff4b4b",
    lessons: [
      { id: "11-1", title: "Authentication", vocab: [
        { en: "token", zh: "令牌", example: "Generate a personal access token.", exampleZh: "生成个人访问令牌。" },
        { en: "SSH key", zh: "SSH 密钥", example: "Add your SSH key for secure access.", exampleZh: "添加 SSH 密钥以安全访问。" },
        { en: "GPG key", zh: "GPG 密钥", example: "Use a GPG key to sign commits.", exampleZh: "使用 GPG 密钥签名提交。" },
        { en: "two-factor authentication", zh: "双因素认证", example: "Enable two-factor authentication.", exampleZh: "启用双因素认证。" },
        { en: "passkey", zh: "通行密钥", example: "Set up a passkey for login.", exampleZh: "设置通行密钥用于登录。" },
        { en: "OAuth", zh: "OAuth 授权", example: "Authorize the app with OAuth.", exampleZh: "用 OAuth 授权应用。" },
        { en: "fine-grained token", zh: "细粒度令牌", example: "Use a fine-grained token for limited access.", exampleZh: "使用细粒度令牌来限制访问。" },
        { en: "expire", zh: "过期", example: "The token will expire in 30 days.", exampleZh: "令牌将在 30 天后过期。" },
      ]},
      { id: "11-2", title: "Security Features", vocab: [
        { en: "vulnerability", zh: "漏洞", example: "A vulnerability was found.", exampleZh: "发现了漏洞。" },
        { en: "Dependabot", zh: "依赖机器人", example: "Dependabot updates dependencies.", exampleZh: "依赖机器人更新依赖。" },
        { en: "code scanning", zh: "代码扫描", example: "Enable code scanning.", exampleZh: "启用代码扫描。" },
        { en: "secret scanning", zh: "密钥扫描", example: "Secret scanning detects leaked keys.", exampleZh: "密钥扫描检测泄露的密钥。" },
        { en: "security advisory", zh: "安全公告", example: "Review the security advisory.", exampleZh: "审查安全公告。" },
        { en: "alert", zh: "警报", example: "You have a security alert.", exampleZh: "你有一个安全警报。" },
        { en: "patch", zh: "补丁", example: "Apply the security patch.", exampleZh: "应用安全补丁。" },
        { en: "audit log", zh: "审计日志", example: "Check the audit log.", exampleZh: "检查审计日志。" },
      ]},
      { id: "11-3", title: "Access Control", vocab: [
        { en: "collaborator", zh: "协作者", example: "Add a collaborator to the repo.", exampleZh: "给仓库添加协作者。" },
        { en: "permission level", zh: "权限级别", example: "Set the permission level.", exampleZh: "设置权限级别。" },
        { en: "read access", zh: "读取权限", example: "Grant read access to the team.", exampleZh: "授予团队读取权限。" },
        { en: "write access", zh: "写入权限", example: "Give write access to contributors.", exampleZh: "给贡献者写入权限。" },
        { en: "admin", zh: "管理员", example: "Only admins can change settings.", exampleZh: "只有管理员能修改设置。" },
        { en: "deploy key", zh: "部署密钥", example: "Add a deploy key for CI.", exampleZh: "为 CI 添加部署密钥。" },
        { en: "IP allow list", zh: "IP 白名单", example: "Configure the IP allow list.", exampleZh: "配置 IP 白名单。" },
        { en: "SSO", zh: "单点登录", example: "Enable SSO for the organization.", exampleZh: "为组织启用单点登录。" },
      ]},
    ],
    story: { title: "The Security Alert", titleZh: "安全警报", scenes: [
      { speaker: "narrator", text: "Dependabot found a vulnerability.", textZh: "依赖机器人发现了漏洞。" },
      { speaker: "Alex", text: "We need to update this dependency immediately.", textZh: "我们需要立刻更新这个依赖。" },
      { speaker: "Maya", text: "I'll apply the security patch.", textZh: "我来应用安全补丁。" },
      { question: true, prompt: "What did Dependabot find?", options: ["A vulnerability", "A new feature", "A merge conflict"], answer: 0 },
      { speaker: "Alex", text: "Also check the audit log for any suspicious activity.", textZh: "也检查审计日志有无可疑活动。" },
      { question: true, prompt: "What should they check?", options: ["The audit log", "The README", "The changelog"], answer: 0 },
    ]},
  },
  {
    id: 12, title: "Organizations & Teams", titleZh: "组织与团队", icon: "👥", color: "#ff9600",
    lessons: [
      { id: "12-1", title: "Organizations", vocab: [
        { en: "organization", zh: "组织", example: "Create an organization for your company.", exampleZh: "为公司创建组织。" },
        { en: "owner", zh: "所有者", example: "The owner has full access.", exampleZh: "所有者有完全访问权限。" },
        { en: "member", zh: "成员", example: "Add a new member to the organization.", exampleZh: "向组织添加新成员。" },
        { en: "billing", zh: "计费", example: "Check the billing settings.", exampleZh: "检查计费设置。" },
        { en: "plan", zh: "计划/方案", example: "Upgrade to the Team plan.", exampleZh: "升级到团队方案。" },
        { en: "enterprise", zh: "企业", example: "GitHub Enterprise has advanced features.", exampleZh: "GitHub Enterprise 有高级功能。" },
        { en: "seat", zh: "席位", example: "Each member uses one seat.", exampleZh: "每个成员占用一个席位。" },
        { en: "invite", zh: "邀请", example: "Invite team members by email.", exampleZh: "通过邮箱邀请团队成员。" },
      ]},
      { id: "12-2", title: "Teams", vocab: [
        { en: "team", zh: "团队", example: "Create a team for the frontend developers.", exampleZh: "为前端开发者创建团队。" },
        { en: "nested team", zh: "嵌套团队", example: "Create nested teams for sub-groups.", exampleZh: "为子组创建嵌套团队。" },
        { en: "maintainer", zh: "维护者", example: "The team maintainer manages members.", exampleZh: "团队维护者管理成员。" },
        { en: "repository access", zh: "仓库访问", example: "Grant the team repository access.", exampleZh: "授予团队仓库访问权限。" },
        { en: "discussion", zh: "讨论", example: "Start a team discussion.", exampleZh: "开始团队讨论。" },
        { en: "notification setting", zh: "通知设置", example: "Configure notification settings.", exampleZh: "配置通知设置。" },
        { en: "mention", zh: "提及", example: "Mention the team with @org/team.", exampleZh: "用 @org/team 提及团队。" },
        { en: "sync", zh: "同步", example: "Sync the team with your identity provider.", exampleZh: "将团队与身份提供商同步。" },
      ]},
      { id: "12-3", title: "Policies", vocab: [
        { en: "policy", zh: "策略", example: "Set organization-wide policies.", exampleZh: "设置组织范围的策略。" },
        { en: "default permission", zh: "默认权限", example: "Set default repository permissions.", exampleZh: "设置默认仓库权限。" },
        { en: "require", zh: "要求", example: "Require two-factor authentication.", exampleZh: "要求双因素认证。" },
        { en: "restrict", zh: "限制", example: "Restrict who can create repositories.", exampleZh: "限制谁可以创建仓库。" },
        { en: "allow", zh: "允许", example: "Allow forking of private repositories.", exampleZh: "允许复刻私有仓库。" },
        { en: "compliance", zh: "合规", example: "Ensure compliance with company policy.", exampleZh: "确保符合公司策略。" },
        { en: "base role", zh: "基础角色", example: "Set the base role for all members.", exampleZh: "为所有成员设置基础角色。" },
        { en: "third-party access", zh: "第三方访问", example: "Review third-party access.", exampleZh: "审查第三方访问。" },
      ]},
    ],
    story: { title: "Building the Team", titleZh: "组建团队", scenes: [
      { speaker: "narrator", text: "The company is growing and needs an organization on GitHub.", textZh: "公司在成长，需要在 GitHub 上建立组织。" },
      { speaker: "Alex", text: "I'll create the organization and invite the team.", textZh: "我来创建组织并邀请团队。" },
      { speaker: "Maya", text: "Create separate teams for frontend and backend.", textZh: "为前端和后端创建不同的团队。" },
      { question: true, prompt: "What should Alex create first?", options: ["An organization", "A repository", "A workflow"], answer: 0 },
      { speaker: "Alex", text: "I'll set the base role and require two-factor authentication.", textZh: "我来设置基础角色并要求双因素认证。" },
      { question: true, prompt: "Why require two-factor authentication?", options: ["For security", "For speed", "For billing"], answer: 0 },
    ]},
  },
  {
    id: 13, title: "API & Integrations", titleZh: "API 与集成", icon: "🔌", color: "#ce82ff",
    lessons: [
      { id: "13-1", title: "GitHub API", vocab: [
        { en: "REST API", zh: "REST API", example: "Use the REST API to list repositories.", exampleZh: "使用 REST API 列出仓库。" },
        { en: "GraphQL", zh: "GraphQL", example: "Use GraphQL for complex queries.", exampleZh: "使用 GraphQL 进行复杂查询。" },
        { en: "endpoint", zh: "端点", example: "Call the API endpoint.", exampleZh: "调用 API 端点。" },
        { en: "rate limit", zh: "速率限制", example: "You've hit the rate limit.", exampleZh: "你触发了速率限制。" },
        { en: "pagination", zh: "分页", example: "Use pagination for large results.", exampleZh: "对大量结果使用分页。" },
        { en: "authentication", zh: "认证", example: "Include authentication in the request.", exampleZh: "在请求中包含认证。" },
        { en: "response", zh: "响应", example: "Parse the API response.", exampleZh: "解析 API 响应。" },
        { en: "request", zh: "请求", example: "Send a GET request.", exampleZh: "发送 GET 请求。" },
      ]},
      { id: "13-2", title: "Webhooks & Apps", vocab: [
        { en: "webhook", zh: "网络钩子", example: "Set up a webhook.", exampleZh: "设置网络钩子。" },
        { en: "payload", zh: "负载", example: "Parse the webhook payload.", exampleZh: "解析网络钩子负载。" },
        { en: "GitHub App", zh: "GitHub 应用", example: "Install a GitHub App.", exampleZh: "安装 GitHub 应用。" },
        { en: "OAuth App", zh: "OAuth 应用", example: "Register an OAuth App.", exampleZh: "注册 OAuth 应用。" },
        { en: "installation", zh: "安装", example: "Manage the app installation.", exampleZh: "管理应用安装。" },
        { en: "callback", zh: "回调", example: "Set the callback URL.", exampleZh: "设置回调 URL。" },
        { en: "scope", zh: "作用域", example: "Request the repo scope.", exampleZh: "请求 repo 作用域。" },
        { en: "delivery", zh: "递送", example: "Check webhook delivery status.", exampleZh: "检查网络钩子递送状态。" },
      ]},
      { id: "13-3", title: "CLI & Tools", vocab: [
        { en: "GitHub CLI", zh: "GitHub 命令行", example: "Install the GitHub CLI.", exampleZh: "安装 GitHub 命令行。" },
        { en: "command", zh: "命令", example: "Run the gh pr list command.", exampleZh: "运行 gh pr list 命令。" },
        { en: "flag", zh: "标志", example: "Use the --draft flag.", exampleZh: "使用 --draft 标志。" },
        { en: "alias", zh: "别名", example: "Create a CLI alias.", exampleZh: "创建命令行别名。" },
        { en: "extension", zh: "扩展", example: "Install a CLI extension.", exampleZh: "安装命令行扩展。" },
        { en: "Codespaces", zh: "云开发环境", example: "Open a Codespace for this repo.", exampleZh: "为此仓库打开云开发环境。" },
        { en: "devcontainer", zh: "开发容器", example: "Configure the devcontainer.", exampleZh: "配置开发容器。" },
        { en: "GitHub Desktop", zh: "GitHub 桌面版", example: "Clone the repo in GitHub Desktop.", exampleZh: "在 GitHub 桌面版中克隆仓库。" },
      ]},
    ],
    story: { title: "Building an Integration", titleZh: "构建集成", scenes: [
      { speaker: "narrator", text: "The team wants to connect GitHub with their chat tool.", textZh: "团队想将 GitHub 和聊天工具连接。" },
      { speaker: "Alex", text: "I'll set up a webhook to send notifications.", textZh: "我来设置网络钩子发送通知。" },
      { speaker: "Maya", text: "We should also build a GitHub App for more control.", textZh: "我们还应该构建 GitHub 应用来获得更多控制。" },
      { question: true, prompt: "What does a webhook do?", options: ["Sends notifications to external services", "Deletes repositories", "Creates branches"], answer: 0 },
      { speaker: "Alex", text: "I'll use the GitHub CLI to test the API.", textZh: "我用 GitHub CLI 来测试 API。" },
      { question: true, prompt: "What tool can test the API?", options: ["GitHub CLI", "GitHub Pages", "GitHub Actions"], answer: 0 },
    ]},
  },
  {
    id: 14, title: "Open Source", titleZh: "开源社区", icon: "🌍", color: "#58cc02",
    lessons: [
      { id: "14-1", title: "Contributing", vocab: [
        { en: "contribute", zh: "贡献", example: "Contribute to open source.", exampleZh: "为开源做贡献。" },
        { en: "contributor", zh: "贡献者", example: "The project has 200 contributors.", exampleZh: "项目有 200 位贡献者。" },
        { en: "maintainer", zh: "维护者", example: "The maintainer reviews PRs.", exampleZh: "维护者审查 PR。" },
        { en: "good first issue", zh: "适合新手", example: "Look for good first issue labels.", exampleZh: "寻找适合新手的标签。" },
        { en: "help wanted", zh: "需要帮助", example: "This issue is marked help wanted.", exampleZh: "议题标记为需要帮助。" },
        { en: "contributing guide", zh: "贡献指南", example: "Read the contributing guide.", exampleZh: "阅读贡献指南。" },
        { en: "code of conduct", zh: "行为准则", example: "Follow the code of conduct.", exampleZh: "遵循行为准则。" },
        { en: "CLA", zh: "贡献者协议", example: "Sign the CLA before contributing.", exampleZh: "贡献前签署贡献者协议。" },
      ]},
      { id: "14-2", title: "Community", vocab: [
        { en: "sponsor", zh: "赞助", example: "Sponsor a maintainer.", exampleZh: "赞助维护者。" },
        { en: "discussion", zh: "讨论", example: "Start a community discussion.", exampleZh: "开始社区讨论。" },
        { en: "wiki", zh: "维基", example: "Add documentation to the wiki.", exampleZh: "向维基添加文档。" },
        { en: "Insights", zh: "洞察", example: "Check the Insights tab for analytics.", exampleZh: "查看洞察标签页了解分析数据。" },
        { en: "traffic", zh: "流量", example: "View the repository traffic.", exampleZh: "查看仓库流量。" },
        { en: "contributor graph", zh: "贡献者图表", example: "See the contributor graph.", exampleZh: "查看贡献者图表。" },
        { en: "trending", zh: "热门", example: "Check trending repositories.", exampleZh: "查看热门仓库。" },
        { en: "collection", zh: "合集", example: "Browse curated collections.", exampleZh: "浏览精选合集。" },
      ]},
      { id: "14-3", title: "Licensing & Docs", vocab: [
        { en: "MIT License", zh: "MIT 许可证", example: "Use the MIT License.", exampleZh: "使用 MIT 许可证。" },
        { en: "Apache License", zh: "Apache 许可证", example: "Choose the Apache License.", exampleZh: "选择 Apache 许可证。" },
        { en: "GPL", zh: "GPL 许可证", example: "GPL requires open source derivatives.", exampleZh: "GPL 要求衍生作品也开源。" },
        { en: "documentation", zh: "文档", example: "Good documentation helps users.", exampleZh: "好的文档帮助用户。" },
        { en: "README", zh: "自述文件", example: "Keep the README up to date.", exampleZh: "保持 README 是最新的。" },
        { en: "badge", zh: "徽章", example: "Add status badges to the README.", exampleZh: "在 README 中添加状态徽章。" },
        { en: "community profile", zh: "社区简介", example: "Complete the community profile.", exampleZh: "完善社区简介。" },
        { en: "health files", zh: "健康文件", example: "Add community health files.", exampleZh: "添加社区健康文件。" },
      ]},
    ],
    story: { title: "First Open Source Contribution", titleZh: "第一次开源贡献", scenes: [
      { speaker: "narrator", text: "Alex wants to contribute to a popular project.", textZh: "Alex 想为一个流行项目做贡献。" },
      { speaker: "Alex", text: "I'll start by reading the contributing guide.", textZh: "我先阅读贡献指南。" },
      { speaker: "narrator", text: "He finds a good first issue.", textZh: "他找到了一个适合新手的议题。" },
      { question: true, prompt: "What did Alex look for?", options: ["A good first issue", "A vulnerability", "A release tag"], answer: 0 },
      { speaker: "Alex", text: "I'll fork the repo, fix the bug, and open a PR.", textZh: "我复刻仓库、修复缺陷、然后开 PR。" },
      { speaker: "narrator", text: "The maintainer approves and merges his PR.", textZh: "维护者批准并合并了他的 PR。" },
      { question: true, prompt: "What happened to the PR?", options: ["It was merged", "It was rejected", "It was deleted"], answer: 0 },
    ]},
  },
  {
    id: 15, title: "Advanced Git", titleZh: "Git 进阶", icon: "🧠", color: "#1cb0f6",
    lessons: [
      { id: "15-1", title: "Advanced Operations", vocab: [
        { en: "interactive rebase", zh: "交互式变基", example: "Use interactive rebase to reorder commits.", exampleZh: "使用交互式变基重排提交。" },
        { en: "reflog", zh: "引用日志", example: "Use reflog to find lost commits.", exampleZh: "使用引用日志找回丢失的提交。" },
        { en: "bisect", zh: "二分查找", example: "Use bisect to find the bad commit.", exampleZh: "使用二分查找定位坏的提交。" },
        { en: "submodule", zh: "子模块", example: "Add a submodule for shared code.", exampleZh: "为共享代码添加子模块。" },
        { en: "worktree", zh: "工作树", example: "Create a new worktree.", exampleZh: "创建一个新的工作树。" },
        { en: "sparse checkout", zh: "稀疏检出", example: "Use sparse checkout for large repos.", exampleZh: "对大型仓库使用稀疏检出。" },
        { en: "shallow clone", zh: "浅克隆", example: "Use shallow clone to save disk space.", exampleZh: "使用浅克隆节省磁盘空间。" },
        { en: "bare repository", zh: "裸仓库", example: "A bare repository has no working tree.", exampleZh: "裸仓库没有工作树。" },
      ]},
      { id: "15-2", title: "Git Hooks", vocab: [
        { en: "hook", zh: "钩子", example: "Set up a pre-commit hook.", exampleZh: "设置 pre-commit 钩子。" },
        { en: "pre-commit", zh: "提交前", example: "Run lint in the pre-commit hook.", exampleZh: "在提交前钩子中运行代码检查。" },
        { en: "pre-push", zh: "推送前", example: "Run tests in the pre-push hook.", exampleZh: "在推送前钩子中运行测试。" },
        { en: "husky", zh: "Husky", example: "Use husky to manage git hooks.", exampleZh: "使用 husky 管理 git 钩子。" },
        { en: "lint-staged", zh: "暂存区检查", example: "Use lint-staged for staged files.", exampleZh: "使用 lint-staged 检查暂存文件。" },
        { en: "conventional commit", zh: "约定式提交", example: "Follow conventional commit format.", exampleZh: "遵循约定式提交格式。" },
        { en: "commit lint", zh: "提交检查", example: "Use commitlint to validate messages.", exampleZh: "使用 commitlint 验证提交信息。" },
        { en: "pre-receive", zh: "接收前", example: "The server runs pre-receive hooks.", exampleZh: "服务器运行接收前钩子。" },
      ]},
      { id: "15-3", title: "Large Scale Git", vocab: [
        { en: "monorepo", zh: "单体仓库", example: "Manage all projects in a monorepo.", exampleZh: "在单体仓库中管理所有项目。" },
        { en: "Git LFS", zh: "Git 大文件存储", example: "Use Git LFS for large files.", exampleZh: "对大文件使用 Git LFS。" },
        { en: "mirror", zh: "镜像", example: "Mirror the repository.", exampleZh: "镜像仓库。" },
        { en: "grafts", zh: "移植", example: "Use grafts to change history.", exampleZh: "使用移植来修改历史。" },
        { en: "filter-branch", zh: "分支过滤", example: "Use filter-branch to rewrite history.", exampleZh: "使用分支过滤重写历史。" },
        { en: "gc", zh: "垃圾回收", example: "Run git gc to optimize.", exampleZh: "运行 git gc 来优化。" },
        { en: "pack", zh: "打包", example: "Git packs objects for efficiency.", exampleZh: "Git 打包对象以提高效率。" },
        { en: "object", zh: "对象", example: "Every commit is a git object.", exampleZh: "每个提交都是 git 对象。" },
      ]},
    ],
    story: { title: "Finding the Bug", titleZh: "寻找缺陷", scenes: [
      { speaker: "narrator", text: "A bug appeared but nobody knows which commit caused it.", textZh: "出现了缺陷但没人知道哪个提交导致的。" },
      { speaker: "Alex", text: "I'll use git bisect to find the bad commit.", textZh: "我用 git bisect 来找坏的提交。" },
      { speaker: "Maya", text: "Good idea. It's faster than checking each commit.", textZh: "好主意。这比逐个检查提交快多了。" },
      { question: true, prompt: "What tool did Alex use?", options: ["git bisect", "git merge", "git push"], answer: 0 },
      { speaker: "Alex", text: "Found it! The bug was introduced 20 commits ago.", textZh: "找到了！缺陷是 20 个提交前引入的。" },
      { question: true, prompt: "What does git bisect do?", options: ["Finds the commit that introduced a bug", "Merges two branches", "Deletes old commits"], answer: 0 },
    ]},
  },
  {
    id: 16, title: "GitHub Copilot & AI", titleZh: "Copilot 与 AI", icon: "🤖", color: "#ce82ff",
    lessons: [
      { id: "16-1", title: "Copilot Basics", vocab: [
        { en: "Copilot", zh: "Copilot 助手", example: "Enable GitHub Copilot.", exampleZh: "启用 GitHub Copilot。" },
        { en: "suggestion", zh: "建议", example: "Copilot provides code suggestions.", exampleZh: "Copilot 提供代码建议。" },
        { en: "completion", zh: "补全", example: "Accept the code completion.", exampleZh: "接受代码补全。" },
        { en: "ghost text", zh: "灰色提示", example: "Ghost text shows the suggestion.", exampleZh: "灰色提示显示建议内容。" },
        { en: "accept", zh: "接受", example: "Press Tab to accept.", exampleZh: "按 Tab 接受。" },
        { en: "dismiss", zh: "忽略", example: "Press Esc to dismiss.", exampleZh: "按 Esc 忽略。" },
        { en: "inline chat", zh: "内联对话", example: "Use inline chat to ask questions.", exampleZh: "使用内联对话提问。" },
        { en: "context", zh: "上下文", example: "Copilot uses file context.", exampleZh: "Copilot 使用文件上下文。" },
      ]},
      { id: "16-2", title: "Copilot Features", vocab: [
        { en: "chat", zh: "对话", example: "Ask Copilot Chat a question.", exampleZh: "向 Copilot 对话提问。" },
        { en: "explain", zh: "解释", example: "Ask Copilot to explain the code.", exampleZh: "让 Copilot 解释代码。" },
        { en: "fix", zh: "修复", example: "Ask Copilot to fix the error.", exampleZh: "让 Copilot 修复错误。" },
        { en: "generate", zh: "生成", example: "Generate a unit test.", exampleZh: "生成单元测试。" },
        { en: "refactor", zh: "重构", example: "Refactor this code with Copilot.", exampleZh: "用 Copilot 重构代码。" },
        { en: "prompt", zh: "提示", example: "Write a good prompt.", exampleZh: "写一个好的提示。" },
        { en: "workspace", zh: "工作区", example: "Copilot has workspace context.", exampleZh: "Copilot 有工作区上下文。" },
        { en: "model", zh: "模型", example: "Select the AI model.", exampleZh: "选择 AI 模型。" },
      ]},
      { id: "16-3", title: "AI-Powered Dev", vocab: [
        { en: "code generation", zh: "代码生成", example: "Use AI for code generation.", exampleZh: "使用 AI 进行代码生成。" },
        { en: "natural language", zh: "自然语言", example: "Describe the function in natural language.", exampleZh: "用自然语言描述函数。" },
        { en: "test generation", zh: "测试生成", example: "Automatically generate tests.", exampleZh: "自动生成测试。" },
        { en: "documentation", zh: "文档", example: "Generate documentation with AI.", exampleZh: "用 AI 生成文档。" },
        { en: "pull request summary", zh: "PR 摘要", example: "Auto-generate the PR summary.", exampleZh: "自动生成 PR 摘要。" },
        { en: "code review", zh: "代码审查", example: "AI-assisted code review.", exampleZh: "AI 辅助代码审查。" },
        { en: "security analysis", zh: "安全分析", example: "AI security analysis.", exampleZh: "AI 安全分析。" },
        { en: "autofix", zh: "自动修复", example: "Copilot can autofix issues.", exampleZh: "Copilot 可以自动修复问题。" },
      ]},
    ],
    story: { title: "Pair Programming with AI", titleZh: "与 AI 结对编程", scenes: [
      { speaker: "narrator", text: "Alex is trying GitHub Copilot for the first time.", textZh: "Alex 第一次尝试 GitHub Copilot。" },
      { speaker: "Alex", text: "I'll type a comment describing the function I need.", textZh: "我来写一条注释描述我需要的函数。" },
      { speaker: "narrator", text: "Copilot shows ghost text with a suggestion.", textZh: "Copilot 显示了灰色提示建议。" },
      { question: true, prompt: "How does Copilot show suggestions?", options: ["As ghost text", "As a popup window", "As an email"], answer: 0 },
      { speaker: "Alex", text: "I'll press Tab to accept the suggestion.", textZh: "我按 Tab 接受建议。" },
      { speaker: "Alex", text: "Now I'll use Copilot Chat to generate tests.", textZh: "现在我用 Copilot 对话来生成测试。" },
      { question: true, prompt: "What can Copilot Chat do?", options: ["Generate tests and explain code", "Delete repositories", "Change passwords"], answer: 0 },
    ]},
  },
];

export function generateExercises(lesson, allVocab) {
  const exercises = [];
  const vocab = lesson.vocab;

  // Multiple choice en->zh (all words)
  vocab.forEach((word) => {
    const distractors = allVocab
      .filter((w) => w.en !== word.en)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.zh);
    const options = [...distractors, word.zh].sort(() => Math.random() - 0.5);
    exercises.push({ type: "multipleChoice", direction: "en2zh", prompt: word.en, promptSentence: word.example, options, answer: word.zh });
  });

  // Multiple choice zh->en (all words)
  vocab.forEach((word) => {
    const distractors = allVocab
      .filter((w) => w.en !== word.en)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.en);
    const options = [...distractors, word.en].sort(() => Math.random() - 0.5);
    exercises.push({ type: "multipleChoice", direction: "zh2en", prompt: word.zh, promptSentence: word.exampleZh, options, answer: word.en });
  });

  // Fill in the blank (half of words)
  vocab.slice(0, 4).forEach((word) => {
    const escaped = word.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const blank = word.example.replace(new RegExp(escaped, "i"), "______");
    if (blank !== word.example) {
      exercises.push({ type: "fillBlank", sentence: blank, sentenceZh: word.exampleZh, answer: word.en.toLowerCase(), hint: word.zh });
    }
  });

  // Word bank (3 words)
  vocab.slice(0, 3).forEach((word) => {
    const words = word.example.split(" ");
    const extras = ["never", "always", "very", "not"].sort(() => Math.random() - 0.5).slice(0, 2);
    exercises.push({
      type: "wordBank",
      promptZh: word.exampleZh,
      correctWords: words,
      bankWords: [...words, ...extras].sort(() => Math.random() - 0.5),
    });
  });

  // Matching (5 words)
  exercises.push({
    type: "matching",
    pairs: vocab.slice(0, 5).map((w) => ({ en: w.en, zh: w.zh })),
  });

  return exercises.sort(() => Math.random() - 0.5).slice(0, 14);
}

export function getAllVocab() {
  const all = [];
  units.forEach((u) => u.lessons.forEach((l) => l.vocab.forEach((w) => all.push(w))));
  return all;
}
