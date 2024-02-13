#!/bin/bash
mill=$1
ts=$(date +"%s")
dt=$(date +"%Y%m%d%H%M%S")
echo $ts
echo $dt
echo $mill
cd data/$mill
echo ls data/$mill
echo "module.exports = { dt:'$ts',datetime:'$dt',directory:'data/$mill' }" > millinfo.js

