#!/bin/sh
cd D:\myGitHub\learn-demo\06-node-blog\blog-native\logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log