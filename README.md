# LeaferJS

绚丽多彩的 HTML5 Canvas 2D 图形渲染引擎， 可结合 AI 绘图、生成界面。能让你拥有瞬间创建 100 万个图形的超强能力，免费开源、易学易用、场景丰富。

## 运行

LeaferJS 完全依赖于子仓库 [leafer](https://github.com/leaferjs/leafer)、[leafer-ui](https://github.com/leaferjs/ui)、[leafer-in](https://github.com/leaferjs/in) ， 提供运行官网示例代码、自定义打包的能力。

复制以下命令并运行：

```sh

git clone  https://github.com/leaferjs/LeaferJS.git --recurse-submodules

cd LeaferJS

npm install
npm run start

```

将在本地创建一个 LeaferJS 项目，并自动下载 [leafer](https://github.com/leaferjs/leafer)、[leafer-ui](https://github.com/leaferjs/ui)、[leafer-in](https://github.com/leaferjs/in) 子仓库代码到 src 目录。

安装启动完成后，可在浏览器中访问：http://localhost:10101

复制 [官网](https://leaferjs.com) 示例代码到 index.ts 中，可以实时查看运行效果。

## 更新

```sh

git pull --recurse-submodules

```

## 打包

```sh

npm run core # 打包核心代码，环境打包的依赖项

npm run web # 仅打包web环境代码

npm run all # 打包所有环境的代码

npm run dts # 为所有包生成d.ts文件

npm run clear # 清空所有打包内容


```

## License

LeaferJS 是采用 MIT 许可的开源项目，可以永久免费使用。
