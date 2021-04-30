#!/usr/bin/env sh

# abort on errors
set -e

# build
echo '🛠  Build project dist'

yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'francisco.llanquipichun.cl' > CNAME
# add repository readme
echo 'Deployed code for website [francisco.llanquipichun.cl](https://francisco.llanquipichun.cl)' > README.md

echo '🚀  Deploying in abogados-zona-sur/static-website repository'

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:franciscollanquipichun/franciscollanquipichun.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:franciscollanquipichun/gh-pages-test.git main:gh-pages

cd -