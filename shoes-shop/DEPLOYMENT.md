# 🌐 部署指南 - 免費託管平台

本指南將教您如何將鞋店網站部署到各種免費託管平台。

## 🥇 方法一：GitHub Pages (推薦)

### 步驟 1：準備 Git Repository

1. **初始化 Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 鞋店網站"
   ```

2. **在 GitHub 創建新 repository**
   - 前往 [GitHub](https://github.com)
   - 點擊 "New repository"
   - 輸入名稱：`shoes-shop` 或 `your-username.github.io`
   - 設為 Public
   - 點擊 "Create repository"

3. **連接並推送代碼**
   ```bash
   git remote add origin https://github.com/your-username/shoes-shop.git
   git branch -M main
   git push -u origin main
   ```

### 步驟 2：啟用 GitHub Pages

1. 進入您的 repository
2. 點擊 "Settings" 頁籤
3. 滾動到 "Pages" 區域
4. 在 "Source" 下選擇 "Deploy from a branch"
5. 選擇 "main" branch 和 "/ (root)"
6. 點擊 "Save"

### 步驟 3：訪問網站
- 網址將是：`https://your-username.github.io/shoes-shop/`
- 或如果 repository 名為 `your-username.github.io`：`https://your-username.github.io/`

---

## 🚀 方法二：Netlify

### 方法 2A：拖拽部署 (最簡單)

1. 前往 [Netlify](https://www.netlify.com/)
2. 註冊免費帳戶
3. 將整個 `shoes-shop` 資料夾壓縮成 ZIP
4. 拖拽 ZIP 檔案到 Netlify 的部署區域
5. 等待部署完成，您會得到一個隨機的網址

### 方法 2B：Git 整合

1. 在 Netlify 點擊 "New site from Git"
2. 選擇 GitHub
3. 選擇您的 repository
4. 部署設定：
   - Branch: `main`
   - Build command: (留空)
   - Publish directory: (留空)
5. 點擊 "Deploy site"

---

## ⚡ 方法三：Vercel

1. 前往 [Vercel](https://vercel.com/)
2. 使用 GitHub 帳戶註冊
3. 點擊 "New Project"
4. 從 GitHub 導入您的 repository
5. 保持預設設定
6. 點擊 "Deploy"

---

## 🌊 方法四：Surge.sh

### 安裝 Surge

```bash
npm install -g surge
```

### 部署

```bash
# 在 shoes-shop 資料夾中執行
surge

# 按照提示操作：
# - 確認專案資料夾路徑
# - 輸入想要的域名（或使用建議的）
# - 登入或註冊 Surge 帳戶
```

---

## 🎯 比較表

| 平台 | 難度 | 速度 | 自定義域名 | Git 整合 | 推薦指數 |
|------|------|------|------------|----------|----------|
| GitHub Pages | ⭐⭐ | ⭐⭐⭐ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Vercel | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ⭐⭐⭐⭐ |
| Surge.sh | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | ❌ | ⭐⭐⭐ |

---

## 📝 部署前檢查清單

- [ ] 所有檔案都在正確位置
- [ ] 圖片路徑正確
- [ ] CSS 和 JS 檔案路徑正確
- [ ] `index.html` 在根目錄
- [ ] 測試所有功能正常運作

---

## 🔧 可能遇到的問題

### 問題 1：圖片無法顯示
**解決方案：** 確保所有圖片使用相對路徑或絕對 URL

### 問題 2：CSS/JS 無法載入
**解決方案：** 檢查檔案路徑，確保區分大小寫正確

### 問題 3：表單無法提交
**解決方案：** 靜態網站無法處理表單，可以使用：
- Netlify Forms (免費)
- Formspree
- EmailJS

---

## 💡 額外提示

1. **使用 CDN**：您的網站已經使用了 CDN 資源（字體、圖標）
2. **壓縮圖片**：使用 TinyPNG 等工具壓縮圖片
3. **測試各裝置**：確保在手機和桌面都正常運作
4. **SEO 優化**：添加 meta 標籤和描述

---

## 🎉 恭喜！

選擇任一方法部署後，您的鞋店網站就會在網路上運行了！記得分享您的網址給朋友們看看。
