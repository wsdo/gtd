#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd docs
# 生成静态文件
vuepress build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
echo 'gtd.info' > CNAME

git init
git remote add origin https://github.com/wsdo/fefaq.git
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f  origin master:gh-pages