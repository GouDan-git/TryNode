1.package.json，node_modules，package-lock.json 都是 npm 的包管理文件，在安装 node 时会携带下载 npm 工具

2.npm init -y 引入 package.json

3.package.json 配置中 dependencies 表示项目包 devDependencies 表示开发项目包

4.package.json 配置中 main 表示该包的入口文件

5.node.js 使用 commonjs 模板规范 使用 module.exports 导出，require 导入

6.当 require 指定文件夹但没有指定文件时，优先根据文件夹中的 package.json 文件的 main 属性确定引用文件，如果没有 package.json 文件则找该文件夹下的 index.js 文件

7.当 require 指定文件但没有后缀时，比如 require('about')，查找顺序为：about about.js about.json about.node

8.express 服务封装了 node 自带的 http 服务，使用起来更加便利

9.nodemon 热执行 js 服务文件 全局安装:npm install -g nodemon 使用指令:nodemon xxx.js 如果无法运行，删除 npm 全局安装目录下的 nodemon.ps1 文件
