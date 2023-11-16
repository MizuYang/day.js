#!/usr/bin/env sh

# 官方文件: https://v3.vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<mizuyang>.github.io
# git push -f git@github.com:<mizuyang>/<mizuyang>.github.io.git main

# if you are deploying to https://<mizuyang>.github.io/dayjs
# git push -f git@github.com:<mizuyang>/dayjs.git main:gh-pages
git push -f https://github.com/MizuYang/dayjs.git main:gh-pages

cd -
