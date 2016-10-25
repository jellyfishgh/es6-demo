# babel 使用方法

```shell
npm install
npm run build
npm run browser
npm run ugly
```

## npm run build

> babel src -d dist

通过 babel 和 babel-preset-2015 把 es6 转成 es5

## npm run browser

> browserify dist/app.js -o bundle.js

通过 browserify 把 node 环境中的模块化的脚本转成浏览器环境的单一脚本

## npm run ugly

> uglifyjs bundle.js -c -o bundle.min.js

通过 uglifyjs 把 bundle.js 压缩 为 bundle.min.js

index.html 中最终引入的是 bundle.min.js

## 脚本更新

每次更新了 src 中的脚本后，都需要重复执行以上步骤。

也可以使用 webpack 监听文件变化自动执行。