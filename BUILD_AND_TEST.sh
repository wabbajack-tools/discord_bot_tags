#!/bin/bash
set -e

echo "=========================================="
echo "Discord Bot Tags Vite Implementation"
echo "=========================================="
echo ""

echo "Step 1: Install dependencies..."
npm install
echo "✓ Dependencies installed"
echo ""

echo "Step 2: Generate metadata from tags folder..."
npm run build:metadata
echo "✓ Metadata generated"
echo ""

echo "Step 3: Lint code and fix issues..."
npm run lint 2>&1 || true
echo "✓ Linting completed"
echo ""

echo "Step 4: Build for production..."
npm run build
echo "✓ Build completed successfully!"
echo ""

echo "=========================================="
echo "Build Output:"
echo "=========================================="
if [ -d "dist" ]; then
  echo "Distribution folder created at: ./dist"
  echo "File count: $(find dist -type f | wc -l) files"
  echo "Total size: $(du -sh dist | cut -f1)"
  echo ""
  echo "Key files:"
  ls -lh dist/ | grep -E "index.html|\.js|\.css" | head -10
fi
echo ""

echo "=========================================="
echo "Ready for deployment!"
echo "=========================================="
