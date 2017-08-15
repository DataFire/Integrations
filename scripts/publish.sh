#!/bin/bash
#set -e
export baseDir=`pwd`
for dir in ./integrations/{generated,manual}/*/
do
  echo $baseDir/$dir
  cd $baseDir/$dir
  npm publish --access public
done
