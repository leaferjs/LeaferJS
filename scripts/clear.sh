#!/usr/bin/env bash
function loop() {
    filelist=`ls $1`

    for file in $filelist
    do 
        if [ -d $1"/"$file ];then
            if [ $file != "node_modules" ];then
                loop $1/$file
            fi
        else 
            if [ $file == "package.json" ];then
                rm -rf $1/dist
                rm -rf $1/types
                rm -rf $1/node_modules
                echo $1
            fi
        fi
    done
}

loop src/leafer
loop src/ui
loop src/in