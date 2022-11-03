1.package.json，node_modules，package-lock.json都是npm的包管理文件，在安装node时会携带下载npm工具

2.npm init -y  引入package.json

3.package.json 配置中 dependencies表示项目包  devDependencies表示开发项目包

4.package.json 配置中 main表示该包的入口文件

5.node.js 使用commonjs模板规范 使用module.exports 导出，require导入

6.当require指定文件夹但没有指定文件时，优先根据文件夹中的package.json文件的main属性确定引用文件，如果没有package.json文件则找该文件夹下的index.js文件

7.当require指定文件但没有后缀时，比如require('about')，查找顺序为：about about.js about.json about.node
