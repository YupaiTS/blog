(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{503:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"/2018/04/10/%E4%BD%BF%E7%94%A8GitHub%E5%92%8CJenkins%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E5%B9%B6%E9%83%A8%E7%BD%B2%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2"}},[s._v("使用GitHub和Jenkins自动构建并部署静态页面")]),s._v("一文介绍了CI/CD的简单实践。本文通过Gitee+Jenkins+Docker的例子对CI/CD做进一步的探索。")]),s._v(" "),a("h2",{attrs:{id:"gitee-webhook配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitee-webhook配置"}},[s._v("#")]),s._v(" Gitee Webhook配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/Webhook%E9%85%8D%E7%BD%AE.png",alt:"Webhook配置"}})]),s._v(" "),a("p",[s._v("URL的格式为 "),a("code",[s._v("http://[username]:[password或者jenkins的api_token]@www.yupaits.com:8080/generic-webhook-trigger/invoke")]),s._v(" 。")]),s._v(" "),a("p",[s._v("webhook请求提交的数据参考"),a("a",{attrs:{href:"http://git.mydoc.io/?t=154711",target:"_blank",rel:"noopener noreferrer"}},[s._v("码云平台帮助文档"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"jenkins插件安装、环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins插件安装、环境配置"}},[s._v("#")]),s._v(" Jenkins插件安装、环境配置")]),s._v(" "),a("h3",{attrs:{id:"必需插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必需插件"}},[s._v("#")]),s._v(" 必需插件")]),s._v(" "),a("p",[s._v("Jenkins需要安装以下插件：")]),s._v(" "),a("ul",[a("li",[s._v("Generic Webhook Trigger Plugin")]),s._v(" "),a("li",[s._v("Git Plugin")]),s._v(" "),a("li",[s._v("NodeJS Plugin")])]),s._v(" "),a("h3",{attrs:{id:"全局环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局环境"}},[s._v("#")]),s._v(" 全局环境")]),s._v(" "),a("p",[s._v("Jenkins需要配置以下全局工具：")]),s._v(" "),a("ul",[a("li",[s._v("JDK")]),s._v(" "),a("li",[s._v("Git")]),s._v(" "),a("li",[s._v("Maven")]),s._v(" "),a("li",[s._v("NodeJS")])]),s._v(" "),a("h2",{attrs:{id:"jenkins任务配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins任务配置"}},[s._v("#")]),s._v(" Jenkins任务配置")]),s._v(" "),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[s._v("#")]),s._v(" General")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-General.png",alt:"任务配置-General"}})]),s._v(" "),a("h3",{attrs:{id:"源码管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码管理"}},[s._v("#")]),s._v(" 源码管理")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%BA%90%E7%A0%81%E7%AE%A1%E7%90%86.png",alt:"任务配置-源码管理"}})]),s._v(" "),a("p",[s._v("填写Gitee代码仓库地址，选择需要构建的分支。")]),s._v(" "),a("h3",{attrs:{id:"构建触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建触发器"}},[s._v("#")]),s._v(" 构建触发器")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E8%A7%A6%E5%8F%91%E5%99%A8.png",alt:"任务配置-构建触发器"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E8%A7%A6%E5%8F%91%E5%99%A81.png",alt:"任务配置-构建触发器1"}})]),s._v(" "),a("p",[s._v("配置触发器参数和触发过滤条件。这里选择了分支名称和项目名称作为构建时的过滤条件。"),a("code",[s._v("Expression")]),s._v("里的"),a("code",[s._v("$")]),s._v("是webhook请求中的请求体JSON数据对象，而"),a("code",[s._v("Variable")]),s._v("中的ref则是Jenkins触发器的变量名，在"),a("code",[s._v("Optional filter")]),s._v("中可以通过"),a("code",[s._v("$ref")]),s._v("来引用该变量。")]),s._v(" "),a("h3",{attrs:{id:"构建环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建环境"}},[s._v("#")]),s._v(" 构建环境")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E7%8E%AF%E5%A2%83.png",alt:"任务配置-构建环境"}})]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("Todo-Tomato")]),s._v("项目里有基于"),a("code",[s._v("vue-loader")]),s._v("的前端SPA，所以构建时需要"),a("code",[s._v("nodejs")]),s._v("和"),a("code",[s._v("npm")]),s._v("环境。")]),s._v(" "),a("h3",{attrs:{id:"构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA.png",alt:"任务配置-构建"}})]),s._v(" "),a("p",[s._v("构建分三步：构建前执行脚本；maven构建；构建后执行脚本。")]),s._v(" "),a("ul",[a("li",[s._v("构建前脚本：停止相关docker容器；安装npm依赖；npm构建；dist文件夹移入后台Spring Boot项目的resources/public资源文件目录下。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\ndocker stop todo-tomato\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/jenkins/workspace/TodoTomato/todo-tomato-web\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/todo-tomato-server/src/main/resources/public\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/todo-tomato-server/src/main/resources/public/**\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf dist/** "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/todo-tomato-server/src/main/resources/public\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("构建后脚本：将构建生成的Jar包和DockerFile移入目标文件夹；停止相关docker容器并删除相关docker镜像；构建docker镜像；运行基于docker镜像的容器。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/lib/jenkins/workspace/TodoTomato/todo-tomato-server/target/docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/jenkins/workspace/TodoTomato/todo-tomato-server/target\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f todo-tomato-server-*.jar docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/src/main/docker/DockerFile docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docker\ndocker stop todo-tomato\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" todo-tomato\ndocker rmi yupaits/todo-tomato:latest\ndocker build -f DockerFile -t yupaits/todo-tomato:latest "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndocker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6060")]),s._v(":6060 --restart always --name todo-tomato -v /root/todo-tomato/logs:/root/logs yupaits/todo-tomato:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"构建后操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建后操作"}},[s._v("#")]),s._v(" 构建后操作")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E5%90%8E%E6%93%8D%E4%BD%9C.png",alt:"任务配置-构建后操作"}})]),s._v(" "),a("p",[s._v("构建完成后，将生成的Jar包和DockerFile进行归档。")])])}),[],!1,null,null,null);t.default=n.exports}}]);