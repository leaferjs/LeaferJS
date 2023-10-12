# LeaferJS

绚丽多彩的 HTML5 Canvas 2D 图形渲染引擎， 可结合 AI 绘图、生成界面。能让你拥有瞬间创建 100 万个图形的超强能力，免费开源、易学易用、场景丰富。

## 运行

LeaferJS 依赖子仓库 leafer、ui、in 的代码。

复制以下命令并运行：

```sh

git clone https://github.com/leaferjs/LeaferJS.git

git submodule init
git submodule update

npm install
npm run start

```

将自动在本地创建一个 LeaferJS 项目，并下载 leafer、ui、in 仓库的代码到 src 目录下。

安装启动完成后，可在浏览器中访问 index.ts 的内容：http://localhost:10101

## 调试

index.ts 是入口文件，复制官网示例代码到 index.ts 中可以直接调试运行。

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
