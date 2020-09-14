tags=$(ls .git/refs/tags)
tag=($(echo "$tags" | tr ' ' '\n'))
lastIndex=${#tag[@]}

# 最後のバージョンを取得
echo "${tag[lastIndex - 1]}"
