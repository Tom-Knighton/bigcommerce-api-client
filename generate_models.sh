#!/bin/bash

git submodule update --remote

rm -rf ./src/model/generated/

export CODEGEN_CMD="npx openapi-typescript-codegen --useOptions --exportCore false --exportServices false --client axios"

find bigcommerce-api-specs/reference -type f -name "*.yml" -print0 | xargs -0 -P 16 -I {} bash -c "
    spec='{}'
    echo \"Generating \$spec\"
    model_name=\${spec%.*}
    \$CODEGEN_CMD --input \"\$spec\" --output \"./src/model/generated/\${model_name##*/}\"
"

echo "Fixing the generated models"
find ./src/model/generated/ -name '*.ts' -exec sed -i -e "s/        = '',/        BLANK = '',/g" {} \;
find ./src/model/generated/ -name '*.ts' -exec sed -i -r "s/ (date_.+): string;/ \1: Date;/g" {} \;
find ./src/model/generated/ -name '*.ts' -exec sed -i -r "s/ (.+_date\??): string;/ \1: Date;/g" {} \;
find ./src/model/generated/ -name '*.ts' -exec sed -i -r "s/ (created|updated)_time\?: string;/ \1_time?: Date;/g" {} \;
echo "Finished"