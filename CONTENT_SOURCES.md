# 内容核对与本地检查记录

核对日期：2026-09-28。页面以当前 UW–Madison 博士研究为主，清华阶段仅保留简要教育背景。

## 身份与教育信息

- 用户确认：目前在 University of Wisconsin–Madison 的 CEE 攻读 Ph.D.，此前在清华大学就读。
- [CATS Lab 官方简介](https://catslab.engr.wisc.edu/staff/liu-jiaxi/)：Research Assistant、Fall 2024 加入、公开邮箱、头像、清华本科/硕士背景及研究兴趣。网页工具遇到 JavaScript 验证，但正常 HTTP 请求成功返回完整简介。
- [GitHub profile](https://github.com/hhjj233)：Ph.D. candidate、UW–Madison CEE、Wisconsin。网站使用这里的 candidate 表述。
- 用户提供的 `CV_henry_liu_learning.pdf`：中文姓名刘家熙；机械工程硕士（CV 标作 Master of Science）、车辆工程本科（2017–2022），以及经济学第二学位。具体学位名称优先采用用户 CV，而不是实验室简介中的概括表述。
- 硕士毕业时间、博士预计毕业时间、当前导师和毕业计划未确认，未补写。
- 旧 CV 仅作为核对资料，已从 Jekyll 构建排除；旧电话、旧邮箱、旧地址及早期项目细节未写入页面。文件本身仍保留在本地，并另外加入 `.gitignore`，防止同步时一并提交。
- 照片来自官方实验室简介，原样保存为 `images/jiaxi-liu.png`。

## Scholar 与论文核对方法

[用户的 Google Scholar](https://scholar.google.com/citations?user=Uvv2kKUAAAAJ) 在本次访问返回 HTTP 429，因此**没有成功读取完整 Scholar 列表或实时引用指标**。保留 Scholar 链接，不填写引用数、h-index 等数值。

[关联资料页](https://www.alphaxiv.org/@jiaxi-liu-2) 同时链接相同的 Scholar ID 和上述 CATS Lab 个人页面，用作检索线索。论文的标题、作者顺序、年份、期刊等再向 arXiv、Crossref（出版商提交的元数据）和 CVF 正式论文核对。没有采用同名上海交通大学学生的资料。

下列是当前已核对的 15 项记录（含 1 项尚无预印本的 Manuscript），不宣称完整覆盖 Scholar。期刊版本与其预印本合并为一项，保留预印本链接。

| 记录 | 当前展示 | 核对来源 |
| --- | --- | --- |
| Corner Percentile（How corner is a corner case?） | Preprint, 2026；TR-C 审稿中 | 用户确认（2026-10-23）、[arXiv](https://arxiv.org/abs/2610.05003)、[项目页](https://hhjj233.github.io/CornerPercentile/)、[代码](https://github.com/hhjj233/P-control-SG) |
| PI-Koopman | Preprint, 2026 | [arXiv](https://arxiv.org/abs/2610.24588)、[代码与 CATS-CF 数据](https://github.com/CATS-Lab/PI-Koopman) |
| SAGE | Manuscript, 2026 | [项目页](https://hhjj233.github.io/SAGE-page/)（作者、标题取自页面 `citation_*` 元数据与 README） |
| VLM-MPC | Transportation Research Part C, 2026 | [Crossref](https://api.crossref.org/works/10.1016/j.trc.2025.105487)、[arXiv](https://arxiv.org/abs/2408.04821) |
| Real-time lane-level abnormal traffic detection | Accident Analysis & Prevention, 2026 | [Crossref](https://api.crossref.org/works/10.1016/j.aap.2026.108607)、[arXiv](https://arxiv.org/abs/2511.18148) |
| Risk Occupancy | IEEE T-ITS, 2026 | [Crossref](https://api.crossref.org/works/10.1109/TITS.2026.3707600)、[arXiv](https://arxiv.org/abs/2408.07367) |
| FollowGen | Communications in Transportation Research, 2025 | [Crossref](https://api.crossref.org/works/10.1016/j.commtr.2025.100215)、[arXiv](https://arxiv.org/abs/2411.16747) |
| Vehicle-Road-Cloud Collaborative Perception Review | IEEE T-ITS, 2024 | [Crossref](https://api.crossref.org/works/10.1109/TITS.2024.3459799) |
| CATS-V2V | CVPR Findings, 2026 | [CVF 正式论文](https://openaccess.thecvf.com/content/CVPR2026F/papers/Li_CATS-V2V_A_Real-World_Vehicle-to-Vehicle_Cooperative_Perception_Dataset_with_Complex_Adverse_CVPRF_2026_paper.pdf)、[项目页](https://cats-v2v-dataset.github.io/) |
| SRA-CP | Preprint, 2025 | [arXiv](https://arxiv.org/abs/2511.17461) |
| V2I Work Zone Geometry Reconstruction | Preprint, 2026 | [arXiv](https://arxiv.org/abs/2606.00119)、[论文 HTML](https://arxiv.org/html/2606.00119) |
| GAIA | Preprint, 2026 | [arXiv](https://arxiv.org/abs/2607.05449) |
| V2X-QA | Preprint, 2026 | [arXiv](https://arxiv.org/abs/2604.02710) |
| HERMES | Preprint, 2026 | [arXiv](https://arxiv.org/abs/2602.00993) |
| Local Map Construction with SDMap | Preprint, 2024 | [arXiv](https://arxiv.org/abs/2409.02415) |

关键处理：

- CATS-V2V 根据正式 PDF 首页的标注写为 **CVPR Findings**。
- VLM-MPC 和 traffic detection 使用期刊版本的标题及完整作者名单，不能直接复制旧预印本的作者列表。
- HERMES 使用核对时最新 arXiv 元数据中的作者名单，包含 Pei Li 和 Sikai Chen。
- V2I 论文 arXiv 元数据把 Rui Gan 写作 Rui Gana；依据论文 HTML 作者栏修正为 Rui Gan。
- ORCID `0009-0001-2749-6435` 与上述多篇正式论文中的 Jiaxi Liu 元数据一致。
- 旧 CV 中的 under review / accepted / applying 是历史状态，未直接写入当前论文记录。

## 本地检查与修复

1. 首页模板介绍、虚构学历、示例论文、示例演讲和教学等不再发布。示例源文件仍保留，排除规则集中在 `_config.yml`。
2. 导航收敛为 About、Publications、CV；保留 `/about/`、`/resume/`、`/cv-json/` 等旧入口跳转。
3. 首页精选、论文列表和 CV 共用 `_data/cv.json`；旧的 Markdown 转 JSON 脚本不再适用于当前数据流。
4. 删去不存在的 `files/cv.pdf` 下载入口，改为当前 CV 的打印/保存 PDF 功能。
5. 本地资源改用站内相对路径，避免预览时加载 GitHub Pages 上的旧 CSS 或不存在的新头像。
6. 默认页面使用约 1 KB 的独立交互脚本，不再加载原模板约 4.6 MB 的 Plotly 等脚本包；MathJax/Mermaid 改成按页面显式开启。
7. 增加桌面、手机、深色模式和 CV 打印样式；深色模式按钮支持键盘与本地偏好记忆。
8. 本地维护文档、脚本、旧 CV 和模板 PDF 均排除在生成网站之外。

验证结果参见 `PERSONALIZE.md`。本段记录本地验证结果；GitHub 同步状态以 Git 提交及仓库设置为准。

## 参考主页后的版式更新

参考：[Sheng Liu](https://shengliu66.github.io/) 的简洁排版、侧栏和研究叙述，以及 [Zilin Huang](https://www.huang-zilin.com/) 的研究介绍、日期动态和带图论文列表。重新实现本地布局与样式，未复制对方的个人经历、论文或研究宣言。

- 首页采用研究主题标题、连贯介绍、三个研究方向、四条近期论文动态和四项精选论文。
- Recent updates 直接从已核实的论文数据生成，日期采用对应论文的发表/预印本日期；没有推测录用日期或编造个人新闻。
- 原图使用本人的论文/合作项目，未使用参考网站作者的研究图片。文件采用保留源像素的 WebP 编码，按需加载。

| 本地图片 | 原始来源 |
| --- | --- |
| `images/publications/sra-cp.webp` | [SRA-CP Figure 1](https://arxiv.org/html/2511.17461v1/img/intro.png) |
| `images/publications/v2i-workzone.webp` | [V2I Figure 3：实测设备与实验场地](https://arxiv.org/html/2606.00119v1/figs/settings.png) |
| `images/publications/cats-v2v.webp` | [CATS-V2V 项目多视角示例](https://cats-v2v-dataset.github.io/assets/dataset_multiview.png) |
| `images/publications/vlm-mpc.webp` | [VLM-MPC 预印本](https://arxiv.org/pdf/2408.04821) 第 5 页 Figure 1，提取原始嵌入图像及其透明蒙版 |
| `images/publications/corner-percentile.webp` | [Corner Percentile 项目页首屏视频封面](https://hhjj233.github.io/CornerPercentile/static/videos/hero_poster.jpg) |
| `images/publications/sage.webp` | [SAGE 项目页 teaser](https://hhjj233.github.io/SAGE-page/static/images/teaser_grid.jpg) |

## GitHub 内容整理（2026-10-23）

逐一检查了 `hhjj233` 名下全部仓库（含私有）、CATS-Lab 组织仓库和协作仓库。组织与协作仓库按提交作者核对，只有 `CATS-Lab/MCity_Challenge` 和 `RemGao/fusion_perception_THICV` 含本人提交，二者均为私有，未写入页面。

已加入网站：

- **Corner Percentile**：本人公开仓库 `CornerPercentile`（项目页）与 `P-control-SG`（代码与预训练模型）。arXiv 元数据核对标题、作者顺序与首次提交日期 2026-10-04。代码 README 写明已投稿 TR-C，用户于 2026-10-23 确认仍在审稿中。出处行写作 arXiv · Under review at *Transportation Research Part C: Emerging Technologies*（字段 `underReview`）。配图不加期刊标签，以免被误读为已发表。
- **SAGE**：本人公开仓库 `SAGE-page`（项目页）。论文与代码尚未公开（代码仓库 `SAGE` 为私有），因此标为 `Manuscript`，只链接项目页，不进入 Recent updates。arXiv 发布后改为 `Preprint` 并补链接。
- **PI-Koopman**：arXiv 2610.24588（2026-10-17），本人为第 8 作者；代码与 CATS-CF 数据在公开的 `CATS-Lab/PI-Koopman`。不作首页精选，也不进入 Recent updates。
- **教学**：角色与学期由用户确认（2026-10-23），课程名依据 [UW–Madison Guide](https://guide.wisc.edu/courses/civ_engr/) 的正式名称。
  - CEE 571 — Urban Transportation Planning，Fall 2026：助教，并讲授了几次课。用户问能否写 Lecturer。Lecturer 在 UW–Madison 是正式的教学职位，通常指课程的主讲教师，因此页面写作 *Teaching Assistant and Guest Lecturer*。配套网页来自本人公开仓库 `cee571-planning-software`，对应讲座 *Transportation Planning Software*。
  - CEE 678 — Advanced Traffic Modeling and Computer Simulation，Spring 2026：助教。Guide 显示最近一次开课为 Spring 2026，与“上个学期”一致。
  - CEE 579 — Seminar-Transportation Engineering，Fall 2025：助教。该课秋季开设，“上上个学期”按 Fall 2025 处理。
- 新增研究方向 *Calibrated safety testing*，对应 Corner Percentile；CV 研究简介同步补上 scenario generation。

未加入网站：

- 私有仓库：`SAGE`、`bridge-v2i-uwb`、`JevCurric`、`GeoCRM`、`real-time-v2x`。
- `CP`：2024 年的占位 README，链接和引用均为占位内容。
- `cee571`：考试计时页，不属于学术主页内容。
- CATS-Lab 中无本人提交的仓库。
