/* Project data — edit this file to add or update a project.
   cat: agents | textile | music | tools
   status: active | live | wip | paused
   pattern: 1-6 (card artwork), tone: Nord accent hex, icon: see ICONS in app.js */

window.SITE = {
  owner: {
    name: "Zison Wong",
    role: "女装外贸 × 软件",
    tagline: "software for the fashion trade",
    location: "Jinhua, Zhejiang, China",
    github: "https://github.com/zisonzishen0415-stack",
    npm: "https://www.npmjs.com/package/rea-agents",
    rea: "https://rea.tools",
    email: ""
  },

  categories: [
    { id: "all", label: "All works", zh: "全部项目" },
    { id: "agents", label: "AI & Agents", zh: "智能体与自动化" },
    { id: "textile", label: "Textile & Apparel", zh: "纺织与服装" },
    { id: "music", label: "Music & Hardware", zh: "音乐与硬件" },
    { id: "tools", label: "Systems & Tools", zh: "系统与工具" }
  ],

  projects: [
    /* ───────────────────────── AI & AGENTS ───────────────────────── */
    {
      id: "spica",
      name: "Spica",
      zh: "命令行编码 agent",
      cat: "agents",
      code: "AGT-01",
      status: "active",
      icon: "terminal",
      tone: "#81A1C1",
      pattern: 2,
      summary: "一个开源的终端 AI 编码 agent。",
      body: [
        "Spica 是一个用 TypeScript 写的 CLI 编码 agent：OpenAI 兼容接口、MCP 工具、ast-grep 代码检索、PTY 终端与代理支持。目标是让「读仓库、改代码、跑命令」在一个终端会话里闭环。",
        "它不绑定单一模型供应商，工具层按 MCP 扩展；适合在自己的机器上跑真实仓库，而不是演示片段。"
      ],
      highlights: [
        "MCP 工具与多模型接入",
        "ast-grep 结构化代码检索",
        "PTY + 代理，面向真实仓库"
      ],
      tech: ["TypeScript", "Node.js", "MCP", "ast-grep"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/spica-cli-coding-agent" }
      ]
    },
    {
      id: "puttyon",
      name: "Puttyon",
      zh: "AI 服装虚拟试穿",
      cat: "agents",
      code: "AGT-02",
      status: "live",
      icon: "shirt",
      tone: "#8FBCBB",
      pattern: 3,
      authorship: "collaboration",
      credit: "与 linnin233 共同开发；当前维护在 linnin233",
      summary: "选品类、选款、选模特，生成模特穿着这件衣服的效果图。",
      body: [
        "面向服装行业的虚拟试穿系统：6 种逻辑品类（上衣 / 下衣 / 连衣裙 / 外套 / 配饰 / 连体裤）各自有不同的搭配步骤，规则由后端动态下发；提交生成任务后异步轮询，支持角度、面料、背景与面部选项。",
        "前端 React 19 + antd 6，后端 Spring Boot 3（Java 17）+ MySQL RDS，图片走阿里云 OSS，生图使用 Nano Banana 的 Gemini 兼容异步 API。"
      ],
      highlights: [
        "品类驱动的搭配流程",
        "异步任务提交 + 轮询",
        "商品、模特与花色管理"
      ],
      tech: ["React 19", "Spring Boot 3", "MySQL", "阿里云 OSS", "Gemini API"],
      links: [],
      private: true
    },
    {
      id: "acquisition",
      name: "Customer Acquisition",
      zh: "获客 / 相似客户发现",
      cat: "agents",
      code: "AGT-03",
      status: "active",
      icon: "search",
      tone: "#B48EAD",
      pattern: 4,
      summary: "从一批老客户里量化出「他们为什么是一类」，再去全网找同类。",
      body: [
        "喂进老客户或可靠客户名单，第一阶段逐家建档：官网、社媒、电商、展会名录、行业媒体、企业登记源，填成固定维度的画像；再按 Wilson 95% 下界把每个维度分成铁律、多数、分化、证据不足。",
        "第二阶段从画像里挑可检索的共同点，拆成搜索方向并发去挖，覆盖公开网络、展会名录、B2B 目录、海关提单和社媒；最后判重、按「相似度 × 证据覆盖」打分排序。输出画像、客户明细和线索名单（Markdown / CSV / JSON）。"
      ],
      highlights: [
        "用统计量分档，不靠「感觉像」",
        "五个来源并发检索",
        "每条线索都标明对不上、没查到的维度"
      ],
      tech: ["JavaScript", "Claude Code Plugin", "pi-agent-core"],
      links: [],
      private: true
    },
    {
      id: "background-check",
      name: "Company Background Check",
      zh: "企业背调",
      cat: "agents",
      code: "AGT-04",
      status: "active",
      icon: "shield",
      tone: "#5E81AC",
      pattern: 5,
      summary: "一张名片或一个公司名，跑一份带出处、带置信度的公开信息报告。",
      body: [
        "先定主体：优先用邮箱域名 / 官网确认「要查的是哪一家」，确认不了就明说，不硬认。然后查官方登记源（UK Companies House、GLEIF、法国 recherche-entreprises），用服装行业词汇做自主网页检索，RDAP 核验域名归属，最后自审每一条事实的出处与认定依据。",
        "只汇总公开信息，不做评分、不做评级、不下「这家公司好不好」的结论——这是合规边界，不是偷懒。"
      ],
      highlights: [
        "官方登记源 + 自主检索 + RDAP",
        "区分「没查成」与「确实没有」",
        "事实型报告，不出评分"
      ],
      tech: ["JavaScript", "Claude Code Plugin", "RDAP"],
      links: [],
      private: true
    },
    {
      id: "pi-researcher",
      name: "PI Company Researcher",
      zh: "两条 agent loop 的桌面宿主",
      cat: "agents",
      code: "AGT-05",
      status: "active",
      icon: "window",
      tone: "#88C0D0",
      pattern: 6,
      summary: "把获客和背调两条 agent loop，装进一个说得上话的桌面应用。",
      body: [
        "Flutter 界面 + Node 宿主（pi-agent-core），中间走 stdio JSON-lines——没有端口、不弹防火墙。宿主故意不具备 search_web 这类原子工具：它只负责理解意图、判断该走哪条 loop、把结果里必须带到面前的话说清楚。",
        "两条子 loop 自己搜、自己判断、自己落盘；宿主不「顺手查一下」，避免产生没有出处、不进报告的结果。"
      ],
      highlights: [
        "Flutter 跨平台界面",
        "stdio 协议，零端口",
        "宿主与检索职责分离"
      ],
      tech: ["Flutter", "Dart", "Node.js", "pi-agent-core"],
      links: [],
      private: true
    },
    {
      id: "weekly-report",
      name: "Weekly Report",
      zh: "从代码证据重建周报",
      cat: "agents",
      code: "AGT-06",
      status: "active",
      icon: "doc",
      tone: "#8FBCBB",
      pattern: 2,
      summary: "不靠回忆，从 git 和真实文件变更里还原这一周做了什么。",
      body: [
        "一个可移植的 SKILL.md：从 commit、未提交改动、代码原子和生成物里取证，按功能而不是按 commit 聚类，产出可归档的周报、展示版 HTML / PDF，以及一段能直接念的口头汇报。",
        "还支持按人拆的清单版：一个模块一组，一行一个可验收的能力，适合会上逐条讲。仓库在别处也能读——本地、或通过 gh 读别人的 GitHub 仓库。"
      ],
      highlights: [
        "按功能聚类，不按 commit",
        "报告 + HTML / PDF + 口头版",
        "支持跨仓库取证"
      ],
      tech: ["JavaScript", "Claude Code Skill", "Git"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/weekly-report" }
      ]
    },
    {
      id: "skills",
      name: "Zis Skills Collection",
      zh: "Claude Code skills / plugins 清单",
      cat: "agents",
      code: "AGT-07",
      status: "active",
      icon: "spark",
      tone: "#EBCB8B",
      pattern: 3,
      authorship: "collection",
      credit: "索引；自建 skill 与第三方插件分别标注来源",
      summary: "我现在启用的 Claude Code skills / plugins：4 个自建 skill + 3 个插件 + 13 个内置。",
      body: [
        "按本机实际安装与启用状态整理，不把旧版收录但已经不在机器上的社区插件算进来。",
        "自建 skill 覆盖 ET .prj 批量解析、JCH 花型换色、REA 逆向；启用插件是企业背调、获客、周报。内置技能、已安装未启用的插件、只剩元数据的旧插件分开列。"
      ],
      highlights: [
        "4 个自建 skill：ET .prj / JCH / REA",
        "3 个启用插件：背调 / 获客 / 周报",
        "内置与未启用插件分开列"
      ],
      tech: ["Markdown", "Claude Code", "Plugins"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/Zis-skills-collection" }
      ]
    },
    {
      id: "wfyrag",
      name: "WFY RAG",
      zh: "外贸女装私有 RAG",
      cat: "agents",
      code: "AGT-08",
      status: "active",
      icon: "database",
      tone: "#A3BE8C",
      pattern: 4,
      summary: "把公司文档变成能回答问题的私有知识助手。",
      body: [
        "基于 Bun + Elysia 的私有化 RAG：文档上传、解析、切片、混合检索与 LLM 对话，向量库用 LanceDB。",
        "数据留在自己的机器或服务器上，适合外贸公司的产品资料、面料档案和流程文档——不上传，不依赖外部知识库。"
      ],
      highlights: [
        "Bun + Elysia，部署轻",
        "LanceDB 混合检索",
        "私有化，文档不出内网"
      ],
      tech: ["Bun", "Elysia", "LanceDB", "LLM"],
      links: [],
      private: true
    },
    {
      id: "literia",
      name: "Literia",
      zh: "外贸文档翻译",
      cat: "agents",
      code: "AGT-09",
      status: "active",
      icon: "translate",
      tone: "#D08770",
      pattern: 5,
      summary: "给外贸行业用的文档翻译工具，译完还要能直接发出去。",
      body: [
        "处理 PDF、Word、Excel 等商业文档：解析版面、翻译、还原排版，支持术语与本地模型。",
        "Bun + Hono 的 Web 应用，文件可走阿里云 OSS，也支持本地推理；重点不是「翻出来」，而是译完还能直接发给客户。"
      ],
      highlights: [
        "PDF / Word / Excel",
        "译后保留版面",
        "本地模型与云端可选"
      ],
      tech: ["Bun", "Hono", "TypeScript", "ONNX"],
      links: [],
      private: true
    },

    /* ───────────────────────── TEXTILE & APPAREL ───────────────────────── */
    {
      id: "fabric-matcher",
      name: "Fabric Pattern Matcher",
      zh: "面料花型匹配",
      cat: "textile",
      code: "TEX-01",
      status: "active",
      icon: "search",
      tone: "#A3BE8C",
      pattern: 1,
      featured: true,
      summary: "拍一张照片，在十万级花型库里找到最像的那块布。",
      body: [
        "用 CLIP ViT-B/32 做 512 维语义嵌入，FAISS 内积索引做毫秒级检索。针对「循环满身拍照 vs 库里单花型」的尺度错位，一次搜索自动生成 8 个视图（5 裁剪 + 2 翻转 + 原图），各视图独立检索后取最高相似度。",
        "一次检索约 600ms（CPU），带置信度分级、花型档案（花型号 / 描稿号 / 客户 / 供应商 / 底布 / 刮样号）和双栏比对灯箱。"
      ],
      highlights: [
        "CLIP + FAISS，支持 10 万+ 花型库",
        "8 视图 Query Expansion",
        "比对灯箱与完整花型档案"
      ],
      tech: ["Python", "CLIP", "FAISS", "Gradio"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/fabric-pattern-matcher" },
        { label: "演示视频", url: "https://github.com/zisonzishen0415-stack/fabric-pattern-matcher/releases/tag/demo" }
      ]
    },
    {
      id: "pattern-separator",
      name: "Pattern Separator",
      zh: "花型描稿分色",
      cat: "textile",
      code: "TEX-02",
      status: "active",
      icon: "layers",
      tone: "#EBCB8B",
      pattern: 2,
      featured: true,
      summary: "从设计稿一路做到可以直接晒网的单色菲林。",
      body: [
        "面向丝网印花的多轮多色制版：导入 PNG / BMP / PDF，找花回周期、接花回、满身预览，再自动分色。专色走 Lab + KMeans++，自动判色数；工艺 CMYK 走 GCR 拆版，并按 15° / 75° / 0° / 45° 加网。",
        "画布编辑器支持取色加层、范围画笔、图层排序与 Solo、撤销；导出 1-bit 平涂菲林或 AM / FM 加网，带色标、套准线、裁切线和拼大版。"
      ],
      highlights: [
        "找周期 / 接花回 / 满身预览",
        "Lab 聚类 + 工艺 CMYK",
        "菲林与加网导出，含国标标记"
      ],
      tech: ["Node.js", "Canvas", "KMeans++", "Halftone"],
      links: [],
      private: true
    },
    {
      id: "jch-reverse",
      name: "JCH Reverse",
      zh: "金昌 JCH 格式逆向",
      cat: "textile",
      code: "TEX-03",
      status: "active",
      icon: "binary",
      tone: "#D08770",
      pattern: 3,
      summary: "把金昌 EX9000 的私有工程格式，逆向到能读、能渲染。",
      body: [
        "JCH 是丝网印花分色软件金昌 EX9000 的工程格式。这个项目把文件结构、加密和像素编码逐层拆开：链式 XOR+SUB 加密、图层偏移表、GTAP 标准与变体、CT 1bit / 8bit / 24bit。",
        "22 个真实样本全部可解码，并以 BMP 真值逐像素验证（TP / FP / FN）；GTAP 变体的派生密钥也已破。下一阶段是编辑与导出。"
      ],
      highlights: [
        "22 / 22 样本可解码",
        "BMP 真值逐像素验证",
        "GTAP 变体密钥已破"
      ],
      tech: ["Python", "Reverse Engineering", "Binary Formats"],
      links: [],
      private: true
    },
    {
      id: "jch-recolor",
      name: "JCH Recolor",
      zh: "JCH 花型换色",
      cat: "textile",
      code: "TEX-04",
      status: "active",
      icon: "palette",
      tone: "#BF616A",
      pattern: 4,
      summary: "拿一张参考图，反解每个图层该用什么颜色，再写回 JCH。",
      body: [
        "输入同花型的另一个配色或客户意向图，反解 JCH 每一层的颜色，写回工程文件，输出可直接交付印染的成品包。",
        "这个工具是从一次真实换色里长出来的，踩过的坑——图层对应、专色近似、成品校验——都记在 docs/lessons.md。"
      ],
      highlights: [
        "参考图反解层色",
        "直接写回 JCH",
        "输出可交付印染的成品包"
      ],
      tech: ["Python", "JCH", "Color Matching"],
      links: [],
      private: true
    },
    {
      id: "inch-cm",
      name: "Inch → CM",
      zh: "尺寸表英寸转厘米",
      cat: "textile",
      code: "TEX-05",
      status: "active",
      icon: "doc",
      tone: "#8FBCBB",
      pattern: 5,
      summary: "把尺寸表里的英寸原位换成厘米，别的一个字都不动。",
      body: [
        "在 PDF 页面上框选表格区域，只转换框内 2~3 位小数的尺寸数值：1 位小数、四舍五入，例如 14.500 → 36.8、28.875 → 73.3。",
        "编号、日期、测量说明（1/2、1\" below AH 等）一律不动；同一模板的多份文件可以一次处理。"
      ],
      highlights: [
        "框选范围，只动数值",
        "1 位小数四舍五入",
        "同一模板批量处理"
      ],
      tech: ["Python", "PDF"],
      links: [],
      private: true
    },
    {
      id: "label-extractor",
      name: "Label Extractor",
      zh: "吊牌 PDF 提取",
      cat: "textile",
      code: "TEX-06",
      status: "active",
      icon: "tag",
      tone: "#81A1C1",
      pattern: 6,
      summary: "从吊牌贴纸 PDF 里 OCR 出编号、尺码、品名，导成 Excel。",
      body: [
        "Windows 桌面 GUI：拖入 PDF 即处理，自动识别产品编号、尺码和品名，导出格式化 Excel。",
        "按 FRANCISCO 品牌的吊牌工作流设计，处理的是真实订单里的贴纸版式。"
      ],
      highlights: [
        "拖拽即用",
        "OCR 编号 / 尺码 / 品名",
        "格式化 Excel 输出"
      ],
      tech: ["Python", "OCR", "Excel"],
      links: []
    },
    {
      id: "label-studio",
      name: "Label Studio",
      zh: "标签设计与打印",
      cat: "textile",
      code: "TEX-07",
      status: "active",
      icon: "barcode",
      tone: "#B48EAD",
      pattern: 1,
      summary: "导 CSV / Excel，把文字、条码、Logo 拖到标签画布上直接打印。",
      body: [
        "公司内部用的标签设计工具：多表导入 CSV / TSV / Excel（含多工作表），按条码或 SKU 左连接；画布上拖放文字、条码、Logo，按实际标签尺寸打印或输出条码打印机 PDF。",
        "支持 Code 128、EAN/UPC、Code 39、ITF、GS1、QR、Data Matrix 等；可选接入 DeepSeek 做自然语言筛选和参考条码图识别。"
      ],
      highlights: [
        "多表导入与关联",
        "主流条码格式",
        "按实际尺寸打印 / 出 PDF"
      ],
      tech: ["Next.js", "React", "Barcode"],
      links: []
    },
    {
      id: "front-back-stitcher",
      name: "Garment Front-Back Stitcher",
      zh: "服装正反面拼接",
      cat: "textile",
      code: "TEX-08",
      status: "active",
      icon: "shirt",
      tone: "#88C0D0",
      pattern: 2,
      summary: "正反面两张样品照，自动拼成一张 1:1 正方形。",
      body: [
        "AI 检测 + CV 轮廓匹配 + 自动角度修正，把服装样品的正反面照片裁切、对齐、拼接成 1:1 正方形结果图。",
        "支持液化修图和人工审核，桌面离线运行；面向的是每天要出大量款图的样品间。"
      ],
      highlights: [
        "AI 检测 + 轮廓匹配",
        "自动角度修正",
        "液化修图与人工审核"
      ],
      tech: ["Python", "CustomTkinter", "rembg", "OpenCV"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/garment-front-back-stitcher" }
      ]
    },
    {
      id: "autocatalogue",
      name: "AutoCatalogue",
      zh: "服装目录自动排版",
      cat: "textile",
      code: "TEX-09",
      status: "active",
      icon: "grid",
      tone: "#EBCB8B",
      pattern: 3,
      summary: "商品照片进，印刷级 Lookbook HTML / PDF 出。",
      body: [
        "三层结构：Python 离线批处理负责分析图片、智能裁切到目标比例、分配模板槽位、渲染 HTML；Spring Boot 提供项目 CRUD、上传、分析与导出 API；React 前端是所见即所得的拖拽编辑器。",
        "适合把一堆散乱的商品照快速排成可印刷的目录，再在编辑器里手工微调。"
      ],
      highlights: [
        "智能裁切与模板排版",
        "拖拽式目录编辑器",
        "印刷级 HTML / PDF"
      ],
      tech: ["Python", "Spring Boot", "React"],
      links: []
    },
    {
      id: "stockmanage",
      name: "Stockmanage",
      zh: "库位预览",
      cat: "textile",
      code: "TEX-10",
      status: "active",
      icon: "box",
      tone: "#A3BE8C",
      pattern: 4,
      summary: "按楼层、排、架、层，看每个货位上有什么订单、还剩多少空位。",
      body: [
        "给仓管用的辅料货架地图：只读拉 ERP 数据，生成货架地图、订单台账、历史记录和设置。有订单的货位变色，点开看订单明细；每次同步自动记录上架、换架、离架、重新上架。",
        "打包成 exe，仓库电脑不需要装 Python；支持开机自启、内置账号后台轮询和扫码临时登录。"
      ],
      highlights: [
        "ERP 只读，代码层硬保护",
        "货架地图 + 台账 + 历史",
        "exe 开机自启，无需 Python"
      ],
      tech: ["Python", "ERP", "Local Web"],
      links: [],
      private: true
    },
    {
      id: "qrquote",
      name: "QRQuote",
      zh: "广交会扫码报价",
      cat: "textile",
      code: "TEX-11",
      status: "active",
      icon: "qr",
      tone: "#81A1C1",
      pattern: 5,
      summary: "样品贴二维码，客户扫码直接看款号、成分和参考价。",
      body: [
        "为广交会场景做的报价工具：Excel 导入产品（款号、品名、面料英文名、成分、参考价），批量生成二维码打印贴样品；客户扫码进入报价页，业务员在后台维护产品与账号。",
        "把「翻册子、找价格、记款号」变成一次扫码。"
      ],
      highlights: [
        "Excel 批量导入",
        "批量生成二维码",
        "扫码即报价"
      ],
      tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
      links: [],
      private: true
    },
    {
      id: "buzhidao",
      name: "Buzhidao · 布知道",
      zh: "面料知识库 + 安卓 App",
      cat: "textile",
      code: "TEX-12",
      status: "active",
      icon: "book",
      tone: "#8FBCBB",
      pattern: 6,
      summary: "给外贸新人的面料知识库，离线可用，中英对照。",
      body: [
        "一套内容，三种形态：Markdown 知识库、离线安卓 App、十二集英文播客。22 组成分配比（13 组公司 ERP 实测 + 9 组行业常见）、16 种纤维、386 个词条、9 篇中英逐段对照文章、127 张配图。",
        "App 用记忆曲线安排复习，内置发音，完全离线，不需要账号；升级覆盖安装不丢进度。"
      ],
      highlights: [
        "中英对照，能直接抄进邮件",
        "记忆曲线 + 内置发音",
        "完全离线"
      ],
      tech: ["Flutter", "Dart", "Android"],
      links: [],
      private: true
    },
    {
      id: "aaps",
      name: "AAPS",
      zh: "Agent + APS 生产排期",
      cat: "textile",
      code: "TEX-13",
      status: "active",
      icon: "chip",
      tone: "#BF616A",
      pattern: 1,
      summary: "从 ERP 只读取数，把服装生产排期做成能算的系统。",
      body: [
        "面向服装生产的排期系统：从 ESCN ERP 的快照接口拉生产数据，代码层做硬性只读保护，永不写 ERP；在数据之上做产能、工序与交期的排期计算。",
        "项目里保留了完整的 ERP 字段映射与调取方式记录，作为可回滚的口径基线。"
      ],
      highlights: [
        "ERP 只读，代码层保护",
        "生产数据全量调取",
        "字段映射有权威版本"
      ],
      tech: ["TypeScript", "Python", "ERP"],
      links: [],
      private: true
    },

    /* ───────────────────────── MUSIC & HARDWARE ───────────────────────── */
    {
      id: "sloop",
      name: "SLOOP",
      zh: "FM-1 现场 groovebox 固件",
      cat: "music",
      code: "MUS-01",
      status: "active",
      icon: "wave",
      tone: "#B48EAD",
      pattern: 1,
      authorship: "contribution",
      credit: "原作 isod89 · 基于 Leo Kuroshita 的 Felucca；我在 fork 上做主题与安卓编辑器",
      creditUrl: "https://github.com/isod89/sloop-fm1",
      summary: "给 M-VAVE FM-1 写的 4 轨合成器 / 鼓机音序器。",
      body: [
        "一台能独立编曲的现场 groovebox：4 轨音序器、自己的 SONG 模式、24 PPQN 时钟与 START / STOP / 播放位置同步。",
        "SLOOP 原作是 isod89，往上基于 Leo Kuroshita 的 Felucca。我在这份 fork 上的工作是 Nord / Rose Pine / Vivid 主题、安卓编辑器与操作说明——固件本身不是我写的，署名以原作者为准。"
      ],
      highlights: [
        "4 轨音序 + SONG",
        "24 PPQN 硬同步",
        "与 CRATE 分工明确"
      ],
      tech: ["C", "Embedded", "FM-1"],
      links: [
        { label: "原作 GitHub", url: "https://github.com/isod89/sloop-fm1" },
        { label: "我的 fork", url: "https://github.com/zisonzishen0415-stack/sloop-fm1" }
      ]
    },
    {
      id: "crate",
      name: "CRATE",
      zh: "FM-1 切片采样器",
      cat: "music",
      code: "MUS-02",
      status: "wip",
      icon: "wave",
      tone: "#88C0D0",
      pattern: 2,
      authorship: "derivative",
      credit: "应用层原创；HAL、更新链与安装器复用 Felucca / SLOOP（Leo Kuroshita / isod89）",
      creditUrl: "https://github.com/isod89/sloop-fm1",
      summary: "FM-1 上的采样、切片与 16 键演奏工作站。",
      body: [
        "面向 jazz-hiphop 制作的切片 / 演奏采样器：采样、编辑、切片、16 键 slice performance、8 轨 sample sequencing、SONG、FX 和工程管理。固件已完成上传、播放、切片、音序等阶段。",
        "定位是采样工作站，和 SLOOP 并排使用。HAL、启动 / 链接骨架、更新加载器与安装器复用自 Felucca / SLOOP；采样器应用层是原创，复用文件保留原文件头与 GPL 许可。"
      ],
      highlights: [
        "切片与 16 键演奏",
        "8 轨采样音序",
        "与 SLOOP 同步时钟"
      ],
      tech: ["C", "Embedded", "FM-1"],
      links: [
        { label: "crate-fm1", url: "https://github.com/zisonzishen/crate-fm1" },
        { label: "SLOOP 原作", url: "https://github.com/isod89/sloop-fm1" }
      ]
    },
    {
      id: "consort",
      name: "Consort",
      zh: "FM-1 手机伴侣",
      cat: "music",
      code: "MUS-03",
      status: "live",
      icon: "phone",
      tone: "#8FBCBB",
      pattern: 3,
      credit: "为 SLOOP 2.7 做的手机伴侣；SLOOP 原作 isod89",
      creditUrl: "https://github.com/isod89/sloop-fm1",
      summary: "用手机管理 FM-1 上那些机器上不好做的事。",
      body: [
        "SLOOP 2.7 的 Android 伴侣，通过 USB MIDI 连接：采样器、FX、歌曲与工程文件、设置、皮肤和语言。",
        "刻意做窄——只做机器上别扭的活，不替乐器做主。"
      ],
      highlights: [
        "USB MIDI 直连",
        "采样器 / FX / 歌曲 / 设置",
        "手机端改皮肤和语言"
      ],
      tech: ["JavaScript", "Android", "USB MIDI"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/sloop-consort" },
        { label: "Live", url: "https://zisonzishen0415-stack.github.io/sloop-consort/" }
      ]
    },
    {
      id: "nam-forge",
      name: "NAM FORGE",
      zh: "NAM → Zoom ZDL 工作台",
      cat: "music",
      code: "MUS-04",
      status: "live",
      icon: "wave",
      tone: "#81A1C1",
      pattern: 4,
      featured: true,
      credit: "转换链基于 NAMLite 0.26 与 Zoom Effect Manager",
      summary: "把 NAM 音色变成 Zoom MultiStomp 的 ZDL，再画一张 128×64 封面。",
      body: [
        "纯浏览器工具：把 Neural Amp Modeler 的 .nam 采集转成 MS-50G / MS-60B / MS-70CDR 的 .ZDL 效果，支持批量转换；内置 128×64 1-bit 封面设计器，配色取自 Zoom G1on。",
        "文件不上传，全部在本机处理。配套的 NAM FORGE COVERS 是共享封面库。"
      ],
      highlights: [
        ".nam → .ZDL 批量转换",
        "128×64 封面设计器",
        "纯前端，文件不出本机"
      ],
      tech: ["HTML", "JavaScript", "Web Audio"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/nam-forge" },
        { label: "Live", url: "https://zisonzishen0415-stack.github.io/nam-forge/" }
      ]
    },
    {
      id: "nam-covers",
      name: "NAM FORGE Covers",
      zh: "128×64 封面库",
      cat: "music",
      code: "MUS-05",
      status: "live",
      icon: "image",
      tone: "#EBCB8B",
      pattern: 5,
      summary: "给 Zoom MultiStomp 用的共享封面库，下载即用。",
      body: [
        "NAM FORGE 的配套站点：浏览、下载 128×64 封面，也可以提交自己的设计。",
        "封面以 JSON 存储，直接导入 NAM FORGE 使用。"
      ],
      highlights: [
        "浏览 / 下载 / 提交",
        "128×64 1-bit",
        "与 NAM FORGE 直接互通"
      ],
      tech: ["HTML", "GitHub Actions"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/nam-forge-covers" },
        { label: "Live", url: "https://zisonzishen0415-stack.github.io/nam-forge-covers/" }
      ]
    },
    {
      id: "g1on",
      name: "G1on · Zoom RE",
      zh: "Zoom 效果器逆向",
      cat: "music",
      code: "MUS-06",
      status: "active",
      icon: "chip",
      tone: "#D08770",
      pattern: 6,
      authorship: "contribution",
      credit: "g1on CLI 原作 SysExTones（fork）；固件逆向、Ghidra C6000 模块与自制 ZDL 效果为原创",
      creditUrl: "https://github.com/SysExTones/g1on",
      summary: "把 Zoom G1on / B1on 的固件和 ZDL 效果拆开，再写回去。",
      body: [
        "围绕 Zoom G1on / B1on 的一组工具和逆向成果：MIDI SYSEX 命令行控制、固件逆向、Ghidra 的 TMS320C6000 处理器模块，以及自定义 ZDL 效果模块（AmpNeve、SansAmp Bass Driver 等）。",
        "g1on 命令行工具的原作是 SysExTones，这里是我 fork 的版本；固件逆向、Ghidra 模块和自制效果是原创。社区项目（ZoomMultistompZDL、Ziddle 模拟器）提供了大量语料和验证手段，成果都标注了出处。"
      ],
      highlights: [
        "SYSEX 命令行控制",
        "Ghidra C6000 处理器模块",
        "自定义 ZDL 效果"
      ],
      tech: ["Python", "C", "Ghidra", "DSP"],
      links: [
        { label: "g1on 原作", url: "https://github.com/SysExTones/g1on" },
        { label: "我的 fork", url: "https://github.com/zisonzishen0415-stack/g1on" },
        { label: "firmware RE", url: "https://github.com/zisonzishen0415-stack/b1on-firmware-reverse" },
        { label: "Ghidra C6000", url: "https://github.com/zisonzishen0415-stack/ghidra-c6000" }
      ]
    },
    {
      id: "fret",
      name: "FRET",
      zh: "跑场乐理",
      cat: "music",
      code: "MUS-07",
      status: "active",
      icon: "piano",
      tone: "#88C0D0",
      pattern: 1,
      summary: "吉他手的和弦库、封闭指型训练与级数练习。",
      body: [
        "41 种和弦品质 × 12 个根音，按 0–12 品、相邻弦跨度 ≤2 品、至少 4 根弦等约束枚举指型；默认展示封闭指型，标出根音弦 / 品、把位与转位。",
        "封闭指型可以整体拖动，实时看到移到其他品后的和弦；级数练习支持 I–vi–IV–V 等进行的声部连接，优先保留共同音、减少左手移动。纯前端、无账号、进度存本地。"
      ],
      highlights: [
        "41 种和弦品质枚举",
        "封闭指型整体移动",
        "级数进行自动声部连接"
      ],
      tech: ["JavaScript", "Web Audio", "LocalStorage"],
      links: []
    },
    {
      id: "beike",
      name: "Beike Music",
      zh: "贝壳音乐 · 曲谱库",
      cat: "music",
      code: "MUS-08",
      status: "live",
      icon: "book",
      tone: "#B48EAD",
      pattern: 2,
      summary: "一个只有搜索框的曲谱站。",
      body: [
        "纯静态曲谱检索：歌名、作者、拼音全拼、拼音首字母、目录名都能搜；PDF 与图片谱在线预览，支持翻页、缩放、下载。",
        "没有分类和筛选，只有搜索框。部署在 GitHub Pages，打开就能用。"
      ],
      highlights: [
        "模糊搜索 + 拼音 / 首字母",
        "PDF / 图片在线预览",
        "纯静态，Pages 部署"
      ],
      tech: ["JavaScript", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/beike-music" },
        { label: "Live", url: "https://zisonzishen0415-stack.github.io/beike-music/" }
      ]
    },
    {
      id: "reverson",
      name: "Reverson",
      zh: "反向混响",
      cat: "music",
      code: "MUS-09",
      status: "failed",
      icon: "wave",
      tone: "#BF616A",
      pattern: 5,
      summary: "给 shoegaze / indie 写的反向混响，先做 VST3，再往 Zoom 效果器上搬。",
      body: [
        "从零写的 reverse reverb，目标是 DIIV / MBV 那类音色：每个音一出来就被立即回应，反向声在零 predelay 下加速堆起，再自然收住；Rev 旋钮从正向前置多抽头洗到真正的反向读头。",
        "DSP 全部原创，先做成 VST3 在 DAW 里调，再移植到 Zoom G1on / MS 系列的 ZDL。固件部分在 G1on 实机上未能稳定工作，项目状态已明确标为失败——VST3 与 DSP 仍保留。"
      ],
      highlights: [
        "零 predelay 的反向 swell",
        "VST3 + Zoom ZDL 移植",
        "G1on 实机未达成，状态已标注失败"
      ],
      tech: ["C++", "VST3", "DSP"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/reverson" }
      ]
    },
    {
      id: "pedals",
      name: "Pedals",
      zh: "数据驱动 VST3 综合效果器",
      cat: "music",
      code: "MUS-10",
      status: "active",
      icon: "sliders",
      tone: "#8FBCBB",
      pattern: 6,
      summary: "每个音色是一份 JSON 图，插件运行时解释执行，改 JSON 保存就热重载。",
      body: [
        "基于数据驱动 DSP 图的 VST3 综合效果器：16 个 DSP 模块（增益、过载 / 失真、双二阶滤波、延迟、混响、合唱、镶边、移相、颤音、压缩、噪声门、三段 EQ、箱体模拟、LFO），8 个偏纳什维尔录音室取向的出厂预设。",
        "预设是 JSON：nodes 是模块实例和参数，links 是连线与调制；改设计文件保存约 1 秒热重载，不用重开插件。附设计校验、离线渲染、客观指标检查和把单个设计导出成独立 VST3 的工具链。"
      ],
      highlights: [
        "16 个 DSP 模块 + 8 个预设",
        "JSON 图热重载",
        "设计校验 / 离线渲染 / 独立 VST3 导出"
      ],
      tech: ["C++", "JUCE", "VST3", "JSON"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/pedals" }
      ]
    },
    {
      id: "esp32-fdnreverb",
      name: "ESP32 FDN Reverb",
      zh: "ESP32 实时混响",
      cat: "music",
      code: "MUS-11",
      status: "active",
      icon: "chip",
      tone: "#A3BE8C",
      pattern: 1,
      summary: "在 ESP32-LyraT 上跑的 8 延迟线 FDN 实时混响。",
      body: [
        "Feedback Delay Network 的嵌入式实现：8 条延迟线、输入双二阶滤波（50Hz HPF + 12kHz LPF）、wet 输出 8kHz LPF；约 5.8ms 处理延迟，适合实时音频。",
        "基于 ESP-IDF、I2S 和 LyraT 4.3 板上的 ES8388 codec；参数可随房间大小和音色调整。"
      ],
      highlights: [
        "8 延迟线 FDN",
        "约 5.8ms 延迟",
        "ESP32-LyraT / ESP-IDF"
      ],
      tech: ["C", "ESP-IDF", "I2S", "DSP"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/esp32-fdnreverb" }
      ]
    },
    {
      id: "zoom-b1on-patches",
      name: "Zoom B1on Patches Manager",
      zh: "B1on 预设管理器",
      cat: "music",
      code: "MUS-12",
      status: "active",
      icon: "sliders",
      tone: "#D08770",
      pattern: 2,
      credit: "协议基于实测逆向；社区资料 ZoomPedalFun",
      summary: "以设备真实状态为准，管理 Zoom B1on 的 33 个预设和 147 个 ZDL 模块。",
      body: [
        "Windows 桌面软件：连接 B1on 读取型号、固件、编辑器模式与全部预设；效果链最多 5 槽，卡片调参、ON/OFF、拖动换序、双击替换。参数控件由 ZDL 描述符推导，未定义模块按 P1–P9 编辑。",
        "DSP 预算超过 210 时预警并禁止写入；支持本地 JSON 预设库、整机备份 / 恢复。模块清单来自设备实读，协议基于 B1on 固件 1.30 的实测逆向。"
      ],
      highlights: [
        "设备实读 147 个 ZDL 模块",
        "5 槽效果链可视化编辑",
        "DSP 预算 + 整机备份 / 恢复"
      ],
      tech: ["Python", "Windows", "Zoom B1on"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/zoom-b1on-patches-manager" }
      ]
    },
    {
      id: "ampneve",
      name: "AmpNeve",
      zh: "吉他音箱模拟",
      cat: "music",
      code: "MUS-13",
      status: "failed",
      icon: "sliders",
      tone: "#D08770",
      pattern: 3,
      summary: "从零写的 amp + 2x12/4x12 cab + Neve 染色，做成 VST3 和 Zoom ZDL。",
      body: [
        "把 DI / preamp 吉他声做成「过 clean amp + cab + Neve console」的音色：V1 输入级、V2 冷削波、Miller 电容低通，全部原创 DSP，不含工厂算法。",
        "先做 VST3，再移植到 G1on / MS 系列 ZDL；ZDL 在 G1on 实机上未能稳定工作，状态已标注失败。"
      ],
      highlights: [
        "原创 amp / cab / Neve DSP",
        "VST3 + Zoom ZDL",
        "G1on 实机未达成"
      ],
      tech: ["C++", "VST3", "DSP"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/ampneve" }
      ]
    },
    {
      id: "sansamp-b1on",
      name: "SansAmp B1on",
      zh: "Bass Driver 白盒复刻",
      cat: "music",
      code: "MUS-14",
      status: "active",
      icon: "sliders",
      tone: "#A3BE8C",
      pattern: 4,
      summary: "按电路级白盒建模复刻 SansAmp Bass Driver DI，做成 B1on / G1on 能加载的 ZDL。",
      body: [
        "9 旋钮三相页 + 版本模式开关；v0 已完成核心 DSP、x86 渲染器、ZDL 构建 / 验证全链路，试听已出，下一步是细节校音。",
        "Ziddle 模拟器全曲渲染 NaN=0；ZDL 与 x86 同核逐样本相关 1.00000，残差在 16bit 量化级。"
      ],
      highlights: [
        "电路级白盒建模",
        "9 旋钮 + 版本模式",
        "ZDL vs x86 逐样本相关 1.00000"
      ],
      tech: ["Python", "ZDL", "DSP"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/sansamp-b1on" }
      ]
    },

    /* ───────────────────────── SYSTEMS & TOOLS ───────────────────────── */
    {
      id: "meeting-recorder",
      name: "Meeting Recorder",
      zh: "会议纪要助手",
      cat: "tools",
      code: "TOOL-01",
      status: "active",
      icon: "mic",
      tone: "#88C0D0",
      pattern: 3,
      summary: "完全本地的会议录音转写与结构化纪要。",
      body: [
        "whisper.cpp 本地转写，自动检测 GPU / CPU / 内存，有 CUDA 就加速，没有就降级；VAD 静音裁剪、多模型、大文件归一化。",
        "AI 纪要支持标准 / 行动导向 / 康奈尔三种模板，长会议按 map-reduce 分块摘要；还有声纹识别、话题时间轴、原文溯源、实时转写与实时纪要。数据不出机器。"
      ],
      highlights: [
        "完全本地，数据不出机器",
        "GPU / CPU 自动适配",
        "声纹、时间轴、原文溯源"
      ],
      tech: ["Electron", "whisper.cpp", "Node.js"],
      links: [],
      private: true
    },
    {
      id: "spidex",
      name: "Spidex",
      zh: "Android 码表",
      cat: "tools",
      code: "TOOL-02",
      status: "active",
      icon: "bike",
      tone: "#81A1C1",
      pattern: 4,
      summary: "不是带骑行模式的健身 App，是装上车把就能忘掉六小时的码表。",
      body: [
        "目标是 Garmin Edge / Wahoo ELEMNT 那类设备：按下开始，六小时后还在记录。核心不是帧率，而是电池、精度和完整性——其中只有完整性是真正的软件问题，所以代码的重心在进程死亡和存储写入策略。",
        "append-only journal、1 Hz StateFlow、GNSS + 气压计融合；ANT+ 在手机上不可用、GNSS 绝对高程不可信这些硬件事实，代码里直接面对。"
      ],
      highlights: [
        "append-only journal，UI 挂了也不断记录",
        "GNSS + 气压计融合",
        "精确位置权限检测"
      ],
      tech: ["Android", "Kotlin", "Compose", "GNSS", "BLE"],
      links: []
    },
    {
      id: "quant",
      name: "Quant",
      zh: "短线 A 股量化",
      cat: "tools",
      code: "TOOL-03",
      status: "active",
      icon: "chart",
      tone: "#EBCB8B",
      pattern: 5,
      summary: "全市场数据采集 → 统计验证 → 决策 → 回测 → 半自动交易。",
      body: [
        "专为 A 股短线设计的本地量化系统：所有判断都要有统计证据，策略先过「验尸」再上桌；实盘接口预留给 QMT。",
        "当前版本 v0.4，生产配置在 2026-09-05 定格。仅用于策略研究，历史回测不代表未来收益。"
      ],
      highlights: [
        "统计验证驱动",
        "回测 + 半自动交互",
        "QMT 预留"
      ],
      tech: ["Python", "pandas", "akshare", "matplotlib"],
      links: [],
      private: true
    },
    {
      id: "swaynav",
      name: "Swaynav",
      zh: "Wayland 键盘鼠标",
      cat: "tools",
      code: "TOOL-04",
      status: "active",
      icon: "mouse",
      tone: "#81A1C1",
      pattern: 4,
      summary: "Wayland 下用键盘开鼠标：hjkl 移动准星，点、拖、滚都不用碰鼠标。",
      body: [
        "keynav / warpd 的 Wayland 替代，跑在 Sway、Hyprland、river、labwc、wayfire 上；十字准星覆盖层，hjkl 网格导航，支持点击、拖拽、滚动和宏。",
        "用 GTK3 + gtk-layer-shell 画覆盖层，通过 /dev/uinput 发指针事件；带 dotoold 用户服务和一键安装脚本。"
      ],
      highlights: [
        "Vim 风格 hjkl 导航",
        "点击 / 拖拽 / 滚动 / 宏",
        "Sway / Hyprland / river / labwc / wayfire"
      ],
      tech: ["C", "GTK3", "Wayland", "libinput"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/swaynav" }
      ]
    },
    {
      id: "clashtui",
      name: "ClashTUI",
      zh: "Clash / mihomo 代理 TUI",
      cat: "tools",
      code: "TOOL-05",
      status: "active",
      icon: "network",
      tone: "#8FBCBB",
      pattern: 5,
      summary: "单文件编译的 Clash/mihomo TUI 管理器，安全、实用、简洁。",
      body: [
        "为 Linux 桌面用户做的代理管理工具：订阅导入、节点延迟测试与切换、自动选择最快、一键启停内核、系统代理设置和实时日志；Vim 风格 j/k/h/l 导航。",
        "v2.0 加了配置校验、修改前自动备份、状态持久化、启动健康检查、僵尸进程清理和 TUN 模式能力检查 / 自动降级。"
      ],
      highlights: [
        "单文件编译，无外部依赖",
        "订阅 / 节点 / 延迟 / 自动最快",
        "配置备份、崩溃恢复与 TUN 保护"
      ],
      tech: ["Go", "TUI", "Clash / mihomo"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/clashtui" }
      ]
    },
    {
      id: "trackpoint-config",
      name: "TrackPoint Config",
      zh: "小红点配置工具（X11）",
      cat: "tools",
      code: "TOOL-06",
      status: "active",
      icon: "mouse",
      tone: "#D08770",
      pattern: 6,
      summary: "给 X11 下的 ThinkPad 小红点做的彩色 TUI 配置工具。",
      body: [
        "彩色 TUI 菜单，自动识别 evdev / libinput；用 1–10 的用户刻度调滚动速度、指针速度、加速度和自然滚动；配置可持久化到 systemd / 桌面自启，支持命名 profile。",
        "X11 下走 xinput；Wayland / Sway 版见 TrackPoint Wayland。"
      ],
      highlights: [
        "evdev / libinput 自动识别",
        "1–10 刻度，实时调整",
        "X11 / xinput"
      ],
      tech: ["Shell", "Linux", "xinput"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/trackpoint-config" }
      ]
    },
    {
      id: "trackpoint-wayland",
      name: "TrackPoint Wayland",
      zh: "小红点的 Wayland 版",
      cat: "tools",
      code: "TOOL-06W",
      status: "active",
      icon: "mouse",
      tone: "#8FBCBB",
      pattern: 2,
      summary: "在 Sway 下用 swaymsg + libinput 配小红点，替代 X11 的 xinput。",
      body: [
        "TrackPoint 配置工具的 Wayland 版：TUI 菜单，用 swaymsg 和 libinput 读写设置；带 autostart 脚本，适合 Sway。",
        "X11 版见 TrackPoint Config。"
      ],
      highlights: [
        "Wayland / Sway",
        "swaymsg + libinput",
        "TUI + autostart"
      ],
      tech: ["Shell", "Wayland", "Sway", "libinput"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/trackpoint-wayland" }
      ]
    },
    {
      id: "typelight",
      name: "TypeLight",
      zh: "打字指示灯",
      cat: "tools",
      code: "TOOL-07",
      status: "active",
      icon: "keyboard",
      tone: "#EBCB8B",
      pattern: 1,
      summary: "每敲一下键，ThinkPad 电源灯闪一下；顺带一个 Waybar 按键计数模块。",
      body: [
        "一个很小的守护进程：监听键盘事件，让 ThinkPad 电源 LED 随每次按键脉冲。约 2–3MB 内存、接近 0 CPU，事件驱动不轮询。",
        "附带 Waybar 模块，显示按键数和打字状态；带 autostart 和卸载脚本。"
      ],
      highlights: [
        "按键驱动电源 LED",
        "约 2–3MB 内存",
        "Waybar 按键计数模块"
      ],
      tech: ["Shell", "Linux", "evdev", "Waybar"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/typelight4waybar" }
      ]
    },
    {
      id: "sddm-nord",
      name: "SDDM Nord Login",
      zh: "Nord 登录主题",
      cat: "tools",
      code: "TOOL-08",
      status: "active",
      icon: "window",
      tone: "#88C0D0",
      pattern: 2,
      summary: "一个极简的 Nord 配色 SDDM 登录屏，和 swaylock / waybar / foot 对齐。",
      body: [
        "带壁纸同步与半透明遮罩的居中登录卡；时钟、会话选择、重启 / 关机按钮；方向键 + Tab 键盘导航。",
        "让登录屏和桌面其他 Nord 组件看起来是同一套东西。"
      ],
      highlights: [
        "Nord 配色",
        "壁纸同步 + 半透明遮罩",
        "纯键盘导航"
      ],
      tech: ["QML", "SDDM", "Linux"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/SDDM-nord-login" }
      ]
    },
    {
      id: "blocking-guard",
      name: "Blocking Guard",
      zh: "阻止 agent 跑阻塞命令",
      cat: "tools",
      code: "TOOL-09",
      status: "active",
      icon: "shield",
      tone: "#BF616A",
      pattern: 3,
      summary: "让 AI agent 别再把会话卡在 vim、htop、sudo 和 REPL 里。",
      body: [
        "一个约束 agent 行为的 skill：明确列出会阻塞的命令（交互式 TUI、编辑器、密码提示、REPL、长跑服务），要求先读 / 查再执行，并抵抗「就这一次」「保证会退出」之类的合理化。",
        "15 个测试场景，规则是 NEVER RUN → ALWAYS VERIFY。"
      ],
      highlights: [
        "15 个测试场景",
        "覆盖 TUI / 编辑器 / sudo / REPL",
        "NEVER RUN → ALWAYS VERIFY"
      ],
      tech: ["Skill", "Shell", "TDD"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/blocking-guard" }
      ]
    },
    {
      id: "acid-lava",
      name: "Acid & Lava Light",
      zh: "终端迷幻灯",
      cat: "tools",
      code: "TOOL-10",
      status: "active",
      icon: "spark",
      tone: "#B48EAD",
      pattern: 4,
      summary: "两个终端玩具：迷幻图案发生器，和一盏会流动的熔岩灯。",
      body: [
        "纯 Python、24-bit 真彩、半块字符（▀）做 2× 纵向分辨率。acid.py 随机切换多种流动的迷幻图案；lava.py 用 metaball 物理模拟熔岩灯的上升、拉伸、融合、分裂和滴落。",
        "无依赖，Ctrl+C 退出。"
      ],
      highlights: [
        "纯 Python，无依赖",
        "24-bit 真彩 + 半块字符",
        "metaball 熔岩灯"
      ],
      tech: ["Python", "ANSI", "Terminal"],
      links: [
        { label: "GitHub", url: "https://github.com/zisonzishen0415-stack/acid-and-lava-light" }
      ]
    }
  ]
};
