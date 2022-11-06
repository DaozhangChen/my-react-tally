#!/user/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:DaozhangChen/my-react-tally-web.git &&
git push -u origin master -f
cd -