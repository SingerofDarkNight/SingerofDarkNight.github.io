# !/usr/bin/bash

set -e

source generate.config.sh

cd ${client_repo}/bbuhot_client
npm build --base_href=/${base_href} --prod

cd ${github_page_repo}

git pull

cp -r ${client_repo}/bbuhot_client/dist/Gotham-Spinach .
rm -rf ${BASE_HREF} || true
mv Gotham-Spinach ${base_href}

git add .
git commit -am "Upload again."
git push
