echo delete lib ...
rm -r ./lib
echo delete packages ...
rm -r ./packages
mkdir packages

echo copy files to packages ...
cp -r ./src/components ./packages
cp -r ./src/models ./packages

echo done!!