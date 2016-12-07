#!/bin/bash
export baseDir=`pwd`
for dir in ./integrations/*/
do
  echo $baseDir/$dir
  cd $baseDir/$dir
  npm publish --access public
done
