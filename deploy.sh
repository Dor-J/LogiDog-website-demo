# deploy.sh

set -e  # exit on error

echo "Running build and export..."
bun run build
bun run export

echo "Preparing gh-pages branch..."

cd out

# Initialize git if not already
if [ ! -d .git ]; then
  git init
fi

git checkout -B gh-pages

git add -A
git commit -m "Deploy static site to gh-pages [ci skip]" || echo "No changes to commit"

# Replace the URL below with your repository URL
git remote remove origin || true
git remote add origin https://github.com/Dor-J/LogiDog-website-demo.git

echo "Pushing to gh-pages branch..."
git push -f origin gh-pages

cd ..

echo "Deployment complete!"
