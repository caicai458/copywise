# Copywise One-Click Deploy Script
# Usage: .\deploy.ps1

Write-Host "=== Copywise Deploy ===" -ForegroundColor Green

# 1. Commit all changes
Write-Host "`n[1/4] Committing changes..." -ForegroundColor Yellow
& "C:\PortableGit\bin\git.exe" add .
& "C:\PortableGit\bin\git.exe" commit -m "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 2. Push to GitHub
Write-Host "`n[2/4] Pushing to GitHub..." -ForegroundColor Yellow
& "C:\PortableGit\bin\git.exe" push

# 3. Deploy to Vercel
Write-Host "`n[3/4] Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod --yes

# 4. Done
Write-Host "`n[4/4] Deploy complete!" -ForegroundColor Green
Write-Host "Website: https://copywise.vercel.app" -ForegroundColor Cyan
Write-Host "Blog: https://copywise.vercel.app/blog" -ForegroundColor Cyan
Write-Host "GitHub: https://github.com/caicai458/copywise" -ForegroundColor Cyan
