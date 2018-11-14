for d in integrations/manual/* ; do
  echo "$d"
  cd $d
  npm install
  cd ../../..
done

