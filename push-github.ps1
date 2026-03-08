# Push to GitHub - Thay YOUR_USERNAME bằng username GitHub của bạn
$username = Read-Host "Nhap GitHub username"
git remote remove origin 2>$null
git remote add origin "https://github.com/$username/elementor-agency-affiliate-page.git"
git push -u origin main
