#!/bin/bash
set -e
export baseDir=`pwd`
for dir in ./integrations/{generated,manual}/*/
do
  cd $baseDir/$dir
  PACKAGE_NAME=`grep -e '"name":' package.json | sed 's/.*: "\(.*\)",/\1/'`
  echo $PACKAGE_NAME
  CUR_VERSION=`npm show $PACKAGE_NAME version`
  NEXT_VERSION=`grep -e '"version":' package.json | sed 's/.*: "\(.*\)",/\1/'`
  if [ "$CUR_VERSION" == "$NEXT_VERSION" ]
  then
    echo -e "  skipping $CUR_VERSION"
  else
    echo -e "  \e[92mpublishing $NEXT_VERSION\e[0m"
    npm publish --access public
  fi
done
