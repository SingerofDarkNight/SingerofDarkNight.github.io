# !/usr/bin/bash

set -e

source generate.config.sh

cd ${client_repo}/bbuhot_client
ng build --base_href='\${base_href}' --prod

cd ${github_page_repo}

git pull

cp -r ${client_repo}/bbuhot_client/dist/Gotham-Spinach .
rm -rf ${base_href} || true
mv Gotham-Spinach ${base_href}

git add ${base_href}
git commit -am "Upload again."
git push
