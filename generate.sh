# !/usr/bin/bash

BASE_HREF=$1

set -e

cd ~/IdeaProjects/bbuhot/bbuhot_client
npm build --base_href=/${BASE_HREF} --prod

cd ~/github/SingerofDarkNight.github.io

git pull

cp -r ~/IdeaProjects/bbuhot/bbuhot_client/dist/Gotham-Spinach .
rm -rf ${BASE_HREF} || true
mv Gotham-Spinach ${BASE_HREF}

git add .
git commit -am "Upload again."
git push
