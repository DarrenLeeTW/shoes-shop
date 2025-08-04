@echo off
echo 正在準備部署鞋店網站...
echo.

echo 步驟 1: 檢查 Git 狀態
git status
echo.

echo 步驟 2: 添加所有變更
git add .
echo.

echo 步驟 3: 提交變更
set /p commit_msg="輸入提交訊息 (按 Enter 使用預設): "
if "%commit_msg%"=="" set commit_msg=更新網站內容

git commit -m "%commit_msg%"
echo.

echo ================================
echo 🎉 Git 準備完成！
echo.
echo 接下來請按照以下步驟部署到 GitHub Pages:
echo.
echo 1. 前往 https://github.com 並登入
echo 2. 點擊 'New repository' 創建新的 repository
echo 3. 輸入 repository 名稱: shoes-shop
echo 4. 選擇 'Public' 
echo 5. 點擊 'Create repository'
echo.
echo 6. 複製以下命令並在此終端執行:
echo    git remote add origin https://github.com/your-username/shoes-shop.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 7. 在 GitHub repository 中:
echo    - 點擊 'Settings' 標籤
echo    - 滾動到 'Pages' 區域  
echo    - 在 'Source' 選擇 'Deploy from a branch'
echo    - 選擇 'main' branch
echo    - 點擊 'Save'
echo.
echo 8. 您的網站將在 https://your-username.github.io/shoes-shop/ 上線！
echo ================================
echo.
pause
