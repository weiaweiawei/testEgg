-------第一步脚手架快速生成项目---------
npm init egg --type=simple

npm i

启动项目
npm run dev
然后打开 localhost:7001

--------------框架目录结构-------------
注意问题：
创建控制器的时候，要使用严格模式 'use strict';



egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app                              //整个项目的一个目录
|   ├── router.js       //用于配置 URL 路由规则
│   ├── controller       //控制器目录
│   |   └── home.js
│   ├── service (可选)                //用于写服务的
│   |   └── user.js
│   ├── middleware (可选)              //中间件
│   |   └── response_time.js
│   ├── schedule (可选)                //用于定时任务
│   |   └── my_task.js
│   ├── public (可选)                  //所有的静态资源目录
│   |   └── reset.css
│   ├── view (可选)                    //用于放视图文件的
│   |   └── home.tpl
│   └── extend (可选)                  //扩展
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config               //框架的各种配置
|   ├── plugin.js        //用于配置需要加载的插件
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test                 //用于单元测试
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js


项目中使用的模版引擎插件为   egg-view-ejs
