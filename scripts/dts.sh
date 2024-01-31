#!/usr/bin/env bash
function loop() {
    filelist=`ls $1`

    for file in $filelist
    do 
        if [ -d $1"/"$file ];then
            if [ $file != "node_modules" ];then
                loop $1/$file $file
            fi
        else 
            if [ $file == "package.json" ];then
                cross-env DTS_PACKAGE=$1 rollup -c
                echo DTS_PACKAGE=$1
            fi
        fi
    done
}

loop src/leafer
loop src/draw
loop src/ui
loop src/in

