 #!/bin/bash 

# ------------------------------------------------------------------------------
# VARIABLES
# ------------------------------------------------------------------------------

WL_DIR_NAME=whitelabel/src
unset WL_MODULES
unset WL_THEME

INPUT="./.colorsconfig.js"
WL_COLORS_FILE="./${WL_DIR_NAME}/styles/colors.js"

echo "> Generate ${WL_COLORS_FILE}"

> $WL_COLORS_FILE # gets the content of the file

echo "export default {"  >> $WL_COLORS_FILE
while IFS='=' read -r key value
do
  echo "  $key:\"$value\"," >> $WL_COLORS_FILE
done < "$INPUT"
echo "}"  >> $WL_COLORS_FILE
