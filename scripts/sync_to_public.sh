#!/bin/bash
# sync_to_public.sh
# Selectively sync ONLY site-essential files from swalpa-private to the public swalpa repo.
# This avoids leaking research/, scripts/, bin/, test files, .env, etc.

set -euo pipefail

PRIVATE_REPO="/Users/apupak/Documents/konjam-private"
PUBLIC_REPO_URL="git@github.com:apupak/konjam.git"
TEMP_DIR=$(mktemp -d)
COMMIT_MSG="${1:-chore: sync site files from private repo}"

echo "📦 Cloning public repo into temp directory..."
git clone --depth=1 "$PUBLIC_REPO_URL" "$TEMP_DIR"

echo "🧹 Removing all tracked files (keeping .git)..."
cd "$TEMP_DIR"
# Remove everything except .git
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

echo "📋 Copying site-essential files..."

# Core site content
cp -R "$PRIVATE_REPO/docs" "$TEMP_DIR/docs"
cp "$PRIVATE_REPO/mkdocs.yml" "$TEMP_DIR/mkdocs.yml"

# Theme overrides
if [ -d "$PRIVATE_REPO/overrides" ]; then
    cp -R "$PRIVATE_REPO/overrides" "$TEMP_DIR/overrides"
fi

# CI/CD
if [ -d "$PRIVATE_REPO/.github" ]; then
    cp -R "$PRIVATE_REPO/.github" "$TEMP_DIR/.github"
fi

# Public README
cp "$PRIVATE_REPO/README.md" "$TEMP_DIR/README.md"

# Gitignore (public version - simpler)
cat > "$TEMP_DIR/.gitignore" << 'EOF'
site/
__pycache__/
*.py[cod]
.vscode/
.idea/
.DS_Store
EOF

echo "📊 Contents being synced:"
ls -la "$TEMP_DIR"
echo ""
du -sh "$TEMP_DIR" --exclude='.git' 2>/dev/null || du -sh "$TEMP_DIR"

echo ""
echo "🚀 Committing and pushing to public repo..."
cd "$TEMP_DIR"
git add -A
git status --short | head -20
echo "..."

git commit -m "$COMMIT_MSG" || echo "No changes to commit."
git push origin main

echo ""
echo "🧹 Cleaning up temp directory..."
rm -rf "$TEMP_DIR"

echo "✅ Done! Public repo now contains only site-essential files."
