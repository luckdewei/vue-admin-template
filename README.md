# vue-admin-template
中后台管理平台脚手架

vue3 + vite + ts


## 目录结构
    |- .husky/    # git钩子配置
    |- dist/    # 项目打包后的目录 
    |- mock/    # 数据请求模拟
    |- public/    # 不经过打包的静态资源
    |- type/    # ts类型定义
    |- src/        # 项目资源
        |- api/        # ajax http请求管理
        |- assets/    # 经过打包的静态资源
        |- components/    # 通用组件
        |- router/    # 项目路由管理
        |- store/    # 组件状态管理
        |- styles/    # 项目通用样式
        |- utils/    # 工具函数
            |- request/ # axios封装
        |- views/    # 页面组件


## 安装依赖

```shell
pnpm install axios pinia pinia-plugin-persistedstate vue vue-router nprogress
```

本项目使用 element plus 大家可以根据个人习惯选择自己常用的组件库
```shell
pnpm install element-plus @element-plus/icons-vue

pnpm install -D typescript less

pnpm install -D vite @vitejs/plugin-vue @vitejs/plugin-vue-jsx

pnpm install -D @types/node @types/nprogress vue-tsc
```

● vite：项目构建工具

● @vitejs/plugin-vue：使vite能够编译vue组件

● @vitejs/plugin-vue-jsx：使vite能够编译jsx组件

● @types/node：node类型包，使ts支持node

● @types/nprogress：nprogress的类型支持

● vue-tsc：vue文件的类型检查工具