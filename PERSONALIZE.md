# 个人网站维护说明

网站仍使用 Academic Pages / Jekyll，可继续通过 GitHub Pages 构建。

## 更新入口

| 要修改的内容 | 文件 |
| --- | --- |
| 网站标题、页脚姓名、侧栏身份、头像文件名、侧栏学术链接、SEO | `_config.yml` |
| 侧栏与 CV 的姓名、中文名、邮箱、单位、城市 | `_data/cv.json` 的 `basics` |
| 教育、研究经历、研究兴趣、论文数据 | `_data/cv.json` |
| 教学（首页 Teaching 与 CV） | `_data/cv.json` 的 `teaching` |
| 首页介绍与精选研究布局 | `_pages/about.md` |
| 论文分类页面 | `_pages/publications.html` |
| CV 页面与渲染模板 | `_pages/cv.md`、`_includes/cv-template.html` |
| 导航 | `_data/navigation.yml` |
| 样式、手机布局、深色模式、打印样式 | `_sass/layout/_academic.scss` |
| 照片 | `images/jiaxi-liu.png` |
| 已核实资料和仍待补充的信息 | `CONTENT_SOURCES.md` |

首页精选、论文页和 CV 共用 `_data/cv.json` 的论文数据。首页介绍正文仍直接写在 `_pages/about.md`。当前侧栏模板是 `_includes/academic-profile.html`，不是原模板的 `_includes/author-profile.html`。

常见字段对应关系：

- `basics.name`：侧栏与 CV 展示姓名；`basics.publicationName`：论文作者加粗匹配，不修改论文作者原文。
- `basics.email`、`basics.institution`、`basics.location`：侧栏与 CV 联系信息。
- `basics.label`、`basics.summary`、`basics.profiles`：CV 的身份、研究简介和外部链接；不会自动重写首页介绍。
- `_config.yml` 的 `author.bio`、`author.avatar`、`author.googlescholar`、`author.github`、`author.orcid`：当前侧栏对应内容。`author.bio` 中的 ` · ` 会被渲染为换行。
- 修改展示姓名时，同步 `_config.yml` 的 `title`、`name`、`author.name`、`social.name` 和 JSON 的 `basics.name`；页面 `excerpt` 中的姓名与全站 `description` 也需同步。
- 修改身份/单位时，同步侧栏字段、`basics.label` / `basics.institution` 和首页正文；修改学术链接时，同步配置与 `basics.profiles`。
- 当前模板不会自动显示所有社交字段：例如新增 LinkedIn，除了填配置，还需在 `_includes/academic-profile.html` 中添加链接。

## 添加论文

在 `publications` 数组添加条目：

```json
{
  "id": "unique-paper-slug",
  "name": "Full paper title",
  "authors": ["Jiaxi Liu", "Coauthor Name"],
  "releaseDate": "2026",
  "publisher": "arXiv",
  "status": "Preprint",
  "website": "https://arxiv.org/abs/xxxx.xxxxx",
  "arxiv": "xxxx.xxxxx",
  "summary": "A concise description of the research.",
  "featured": false
}
```

- `status` 使用 `Journal article`、`Conference paper`、`Preprint` 或 `Manuscript`，决定论文页分组。`Manuscript` 用于还没有预印本、只有项目页的论文：`publisher` 留空时卡片不显示出处行。Recent updates 的文字只区分预印本与正式发表，因此 `Manuscript` 不要设 `news: true`。
- `releaseDate` 可为年份、年月或完整日期；按已知精度填写，不补造日期。
- `featured: true` 显示在首页；首页按数组顺序排列，论文页和 CV 自动按日期倒序排列。
- 可选字段：`doi`、`volume`、`pages`、`pdf`、`project`、`code`、`underReview`。`underReview` 填在审期刊的全名，出处行显示为“Under review at …”；录用后删除该字段，改填正式出处。
- 预印本转正式发表时，更新原条目的标题、作者、年份和期刊/会议，保留 `arxiv`，避免重复列出。
- `Manuscript` 发布 arXiv 后（如 SAGE），把 `status` 改为 `Preprint`，`publisher` 填 `arXiv`，补 `arxiv` 和完整 `releaseDate`，`website` 改为 arXiv 链接，项目页留在 `project`，按需设 `news: true`。
- 展示姓名使用 `basics.name`（当前为 `Jiaxi (Jay) Liu`）；论文署名通过 `basics.publicationName`（`Jiaxi Liu`）匹配并自动加粗。
- 当前不使用 `_publications/` 中的模板数据，也不要运行旧的 `scripts/update_cv_json.sh` / `scripts/cv_markdown_to_json.py` 来覆盖 JSON；旧转换器只理解模板版 Markdown CV。

## 教学

`teaching` 数组的每一项同时显示在首页 Teaching 和 CV 中，按数组顺序排列（新学期在前），数组为空时两处都隐藏。

- 必填：`course`、`term`、`institution`、`role`。`institution` 与 `basics.institution` 相同时首页不重复显示，CV 中总是显示。
- 可选：`url`、`name`（链接文字）、`summary`，用于课程材料链接。首页渲染为“`name`: `summary`”，所以 `summary` 以小写开头。
- `role` 按实际聘任填写，例如 `Teaching Assistant`；讲过课的写作 `Teaching Assistant and Guest Lecturer`。Lecturer 在 UW–Madison 是正式的教学职位，不要单独使用。

## 本地预览

有 Ruby 和 Bundler 的环境：

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

打开 `http://127.0.0.1:4000`。修改 `_config.yml` 后重启服务。

本次环境原本没有 Ruby，验证时在临时 Conda 环境 `/tmp/jiaxi-site-ruby` 安装依赖；当前会话可以使用：

```bash
conda run --no-capture-output --prefix /tmp/jiaxi-site-ruby bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

`/tmp` 环境可能被系统清理，不是项目永久依赖。当前预览若已占用 4000 端口，可直接访问，或为新服务选择其他端口。

当前会话的 4000 端口运行的是 `python -m http.server`，只展示 `_site/`，不会自动编译源文件。修改后先运行以下命令，再刷新浏览器：

```bash
conda run --no-capture-output --prefix /tmp/jiaxi-site-ruby bundle exec jekyll build --safe
```

需要自动重建时，可另开终端使用 Jekyll 服务，例如指定 `--port 4001`。服务会自动重建大部分内容，但修改 `_config.yml` 后仍需重启。

编辑 JSON 后可以先检查语法：

```bash
python -m json.tool _data/cv.json > /dev/null
```

JSON 使用双引号，不允许注释或末尾多余的逗号。不要直接编辑 `_site/`，下次构建会覆盖其中内容。

## 简历与文件

CV 页面支持 Print / Save as PDF。用户提供的旧 CV 仅用作教育信息核对，未作为公开下载文件；本科和硕士经历简要展示，硕士毕业时间仍留空。

`local/` 保存本次桌面/手机/深色截图、PDF 预览和临时核对资料，已经被 Git 和 Jekyll 忽略。`CONTENT_SOURCES.md`、本说明及旧 CV 均不进入 Jekyll 生成网站。旧 CV 已同时加入 `.gitignore` 和 Jekyll 的 `exclude`，保留在本地。

## 验证

- `bundle exec jekyll build --safe` 成功，使用 GitHub Pages 兼容的 Jekyll 3.10.0。
- 检查生成 HTML 的站内页面、脚本、图片、CSS 和锚点链接。
- 检查生成网站中不存在虚构学历、示例论文及旧 CV。
- 浏览器验证首页、论文、CV 的桌面和手机布局、无横向溢出、深色切换及刷新记忆、PDF 打印。

本地修改与 GitHub 同步是分开的步骤；远端状态以 Git 提交及仓库设置为准。

## 参考主页后的新版布局

- 侧栏模板：`_includes/academic-profile.html`。身份简介、照片和学术链接读取 `_config.yml`，姓名、中文名、单位、邮箱和城市读取 `_data/cv.json`。
- 首页研究方向读取 `interests` 数组。论文条目中的 `news: true` 会进入 Recent updates，按日期倒序展示最近四条。
- 首页精选论文通过 `featured: true` 控制；`image` 是本地研究图路径，`imageAlt` 是图像说明，`shortVenue` 是可选的图上会议/期刊标签。
- 图片在首页与论文页显示，CV 保持紧凑的文字列表，打印时也不显示图片。
- 新版截图为 `local/home-reference-desktop.png`、`local/home-reference-mobile.png` 和 `local/home-reference-dark.png`。
- Recent updates 当前只支持论文动态；讲座、获奖、入职等独立新闻需要修改 `_pages/about.md` 的新闻列表，或另外实现新闻数据文件，不能直接写进 `publications`。
- `local/` 下的截图和 PDF 是导出快照，不会随网页内容自动更新；更新 CV 后请在网页重新打印/保存 PDF。
