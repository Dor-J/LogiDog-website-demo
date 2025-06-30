# deploy.ps1

set -e

Write-Host "Running build and export..."
bun run build
bun run export

Set-Location -Path .\out

if (-Not (Test-Path .git)) {
    git init
}

git checkout -B gh-pages

git add -A
try {
    git commit -m "Deploy static site to gh-pages [ci skip]"
} catch {
    Write-Host "No changes to commit"
}

git remote remove origin -ErrorAction SilentlyContinue
git remote add origin https://github.com/Dor-J/LogiDog-website-demo.git

Write-Host "Pushing to gh-pages branch..."
git push -f origin gh-pages

Set-Location -Path ..

Write-Host "Deployment complete!"
