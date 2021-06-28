(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{527:function(t,a,s){"use strict";s.r(a);var r=s(12),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("GitLab 是一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务。随着Git的流行和DevOps的逐步落地，GitLab越来越成为日常工作中不可或缺的工具，本文是在实际开发过程中正确高效地使用GitLab方法的总结。")]),t._v(" "),s("h2",{attrs:{id:"_1、gitlab设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、gitlab设置"}},[t._v("#")]),t._v(" 1、GitLab设置")]),t._v(" "),s("h3",{attrs:{id:"_1-1-使用ssh代替账号密码进行认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-使用ssh代替账号密码进行认证"}},[t._v("#")]),t._v(" 1.1 使用SSH代替账号密码进行认证")]),t._v(" "),s("p",[t._v("Git提供了账号密码、SSH、GPG三种方式访问代码，其中使用最多最为方便的是SSH。")]),t._v(" "),s("h4",{attrs:{id:"生成ssh-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-key"}},[t._v("#")]),t._v(" 生成ssh key")]),t._v(" "),s("p",[t._v("生成ssh key需要"),s("a",{attrs:{href:"http://dev.posun.co:600/root/GitLab-Manual/wikis/%E5%AE%89%E8%A3%85git",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Git"),s("OutboundLink")],1),t._v("，在 Git Bash 中依次进行以下操作。")]),t._v(" "),s("ul",[s("li",[t._v("设置Git的全局user的name和email")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.name "xxx"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.email "xxx@posun.cn"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("生成ssh key")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh-keygen -t rsa -C “xxx@posun.cn”\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("之后会看到提示输入保存ssh key的文件名和加密串，建议直接回车跳过。")]),t._v(" "),s("ul",[s("li",[t._v("查看ssh key")])]),t._v(" "),s("p",[t._v("完成上述操作之后，可以在当前用户的 "),s("code",[t._v("home")]),t._v(" 目录下的 "),s("code",[t._v(".ssh")]),t._v(" 文件夹中看到生成的 key，"),s("strong",[t._v("id_rsa")]),t._v(" 是私钥，"),s("strong",[t._v("id_rsa.pub")]),t._v(" 是公钥。")]),t._v(" "),s("h4",{attrs:{id:"上传ssh-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传ssh-key"}},[t._v("#")]),t._v(" 上传ssh key")]),t._v(" "),s("p",[t._v("点击GitLab导航栏的用户头像下拉选择 "),s("strong",[t._v("设置")]),t._v("，在左侧菜单栏选择 "),s("strong",[t._v("SSH密钥")]),t._v(" 进入 SSH 密钥添加页面，使用文本编辑器打开 "),s("strong",[t._v("id_rsa.pub")]),t._v(" 文件并全选复制粘贴至密钥添加页面的相应位置，填写密钥标题，点击 "),s("strong",[t._v("增加密钥")]),t._v(" 按钮即可完成ssh key的上传。")]),t._v(" "),s("h4",{attrs:{id:"使用ssh的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用ssh的好处"}},[t._v("#")]),t._v(" 使用ssh的好处")]),t._v(" "),s("p",[t._v("使用ssh之后，使用git方式（不是http/https方式）pull和push代码时不用每次都填写账号密码，方便快捷，并且更加安全，但是请妥善保管ssh key，谨防泄漏。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-设置语言偏好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-设置语言偏好"}},[t._v("#")]),t._v(" 1.2 设置语言偏好")]),t._v(" "),s("p",[t._v("在GitLab导航栏点击个人头像下拉选择 "),s("strong",[t._v("设置")]),t._v("，在左侧菜单栏选择 "),s("strong",[t._v("Profile")]),t._v(" 进入个人配置页面，在 "),s("strong",[t._v("主要设置")]),t._v(" -> "),s("strong",[t._v("Preferred language")]),t._v(" 中选择 “简体中文”。")]),t._v(" "),s("h2",{attrs:{id:"_2、项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、项目"}},[t._v("#")]),t._v(" 2、项目")]),t._v(" "),s("h3",{attrs:{id:"_2-1-如何新建一个项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-如何新建一个项目"}},[t._v("#")]),t._v(" 2.1 如何新建一个项目")]),t._v(" "),s("p",[t._v("点击GitLab导航条上的 "),s("code",[t._v("+")]),t._v(" 下拉选择 "),s("strong",[t._v("新建项目")]),t._v(" 进入项目创建页面，GitLab提供了以下三种方式创建项目。")]),t._v(" "),s("h4",{attrs:{id:"新建一个空白项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建一个空白项目"}},[t._v("#")]),t._v(" 新建一个空白项目")]),t._v(" "),s("p",[t._v("填写项目路径、名称、描述，选择项目可见等级之后，点击 "),s("strong",[t._v("创建项目")]),t._v(" 按钮即可创建一个空白项目。新项目一般采用此方式进行创建。")]),t._v(" "),s("h4",{attrs:{id:"从模板创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从模板创建"}},[t._v("#")]),t._v(" 从模板创建")]),t._v(" "),s("p",[t._v("GitLab提供了三种项目模板：Ruby on Rails、Spring、NodeJS Express，可按需使用。")]),t._v(" "),s("h4",{attrs:{id:"从其它代码仓库导入项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从其它代码仓库导入项目"}},[t._v("#")]),t._v(" 从其它代码仓库导入项目")]),t._v(" "),s("p",[t._v("从GitHub等其它代码仓库导入项目。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-如何管理项目成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-如何管理项目成员"}},[t._v("#")]),t._v(" 2.2 如何管理项目成员")]),t._v(" "),s("h4",{attrs:{id:"添加-导入项目成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-导入项目成员"}},[t._v("#")]),t._v(" 添加/导入项目成员")]),t._v(" "),s("p",[t._v("进入项目页面，在左侧菜单栏选择 "),s("strong",[t._v("设置")]),t._v(" -> "),s("strong",[t._v("成员")]),t._v("，在 "),s("strong",[t._v("添加成员")]),t._v(" 里依次选择 要邀请的成员（可多选）、角色权限和访问到期日期，点击 "),s("strong",[t._v("添加到项目")]),t._v(" 完成项目成员的添加。除了手动添加之外，还可以点击 "),s("strong",[t._v("导入")]),t._v(" 按钮进入导入成员页面，选择目标项目一键导入目标项目的成员。")]),t._v(" "),s("h4",{attrs:{id:"项目成员管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目成员管理"}},[t._v("#")]),t._v(" 项目成员管理")]),t._v(" "),s("p",[t._v("项目成员页面还提供了成员管理的功能，可以修改成员的角色权限和访问到期日期，还可以踢出成员。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-如何新建一个群组项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-如何新建一个群组项目"}},[t._v("#")]),t._v(" 2.3 如何新建一个群组项目")]),t._v(" "),s("h4",{attrs:{id:"创建一个群组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个群组"}},[t._v("#")]),t._v(" 创建一个群组")]),t._v(" "),s("p",[t._v("在导航栏里点击 "),s("code",[t._v("+")]),t._v(" 下拉选择 "),s("strong",[t._v("新建群组")]),t._v(" 进入新建群组页面，填写群组路径、群组名称、描述，上传群组图表，选择群组可见等级之后，点击 "),s("strong",[t._v("创建群组")]),t._v(" 按钮即可创建一个新的群组。")]),t._v(" "),s("h4",{attrs:{id:"新建群组项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建群组项目"}},[t._v("#")]),t._v(" 新建群组项目")]),t._v(" "),s("p",[t._v("在群组主页点击 "),s("strong",[t._v("新项目")]),t._v(" 按钮进入新建群组项目页面，填写必要信息之后并提交即可创建一个群组项目，群组项目默认的可见等级为 "),s("strong",[t._v("私有")]),t._v("，即只允许群组成员访问。")]),t._v(" "),s("p",[t._v("个人项目在 "),s("strong",[t._v("设置")]),t._v(" -> "),s("strong",[t._v("成员")]),t._v(" -> "),s("strong",[t._v("与群组共享")]),t._v(" 里可以将项目共享给指定群组的成员。")]),t._v(" "),s("h4",{attrs:{id:"子群组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子群组"}},[t._v("#")]),t._v(" 子群组")]),t._v(" "),s("p",[t._v("在群组主页下拉选择并点击 "),s("strong",[t._v("新子群组")]),t._v(" 进入资群组创建页面，子群组可以对父群组的成员进一步细分，子群组成员可以访问父群组项目，非子群组的父群组成员无法访问子群组项目。")]),t._v(" "),s("h2",{attrs:{id:"_3、分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、分支管理"}},[t._v("#")]),t._v(" 3、分支管理")]),t._v(" "),s("h3",{attrs:{id:"_3-1-分支的划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-分支的划分"}},[t._v("#")]),t._v(" 3.1 分支的划分")]),t._v(" "),s("p",[t._v("工程的分支主要分为 "),s("strong",[t._v("master")]),t._v("、"),s("strong",[t._v("dev")]),t._v("、"),s("strong",[t._v("hotfix")]),t._v("、"),s("strong",[t._v("feature")]),t._v(" 四类。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("master")]),t._v("：线上代码主分支，该代码和线上代码一致")]),t._v(" "),s("li",[s("strong",[t._v("dev")]),t._v(": 开发分支，包含即将上线的新功能，由各个新功能开发分支经测试后合入，属于分支测试后的产物")]),t._v(" "),s("li",[s("strong",[t._v("feature")]),t._v(": 功能开发分支，当有新开发任务时，开发需要从dev分支拉取feature分支，开发完毕经过分支测试后，可以进行pull request请求，申请将分支合入dev分支，该分支是开发过程中最常使用的分支")]),t._v(" "),s("li",[s("strong",[t._v("hotfix")]),t._v(": bug修复分支，或紧急需求开发分支（一般不要在hotfix分支上进行新需求的开发）。该分支从master分支拉出，经开发测试完成之后，可以进行pull requets，申请将分支合入master")])]),t._v(" "),s("h4",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ul",[s("li",[t._v("feature只能从dev分支拉出，hotfix分支只能从master拉出")]),t._v(" "),s("li",[t._v("在进行pull request请求之前必须对当前的开发分支进行反合，即dev分支反合feature分支，master分支反合hotfix分支")]),t._v(" "),s("li",[t._v("dev分支会在稳定之后合入master分支")]),t._v(" "),s("li",[t._v("不能将master分支与feature反合，dev分支与hotfix反合")]),t._v(" "),s("li",[t._v("开发只能将代码提交至对应的开发分支，不能直接提交到master分支或dev分支")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-分支的提交注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-分支的提交注意事项"}},[t._v("#")]),t._v(" 3.2 分支的提交注意事项")]),t._v(" "),s("p",[t._v("分支提交的几点注意如下：")]),t._v(" "),s("ul",[s("li",[t._v("在拉取新分支之前一定要确保本地的master分支和dev分支代码是最新的（在拉分支之前进行pull操作）")]),t._v(" "),s("li",[t._v("分支的拉取和push请用git命令或16版本及以上idea完成，不要使用eclipse")]),t._v(" "),s("li",[t._v("本地代码提交时需要确保本地分支对应的远程分支代码最新，具体在进行提交操作之前请进行pull操作")]),t._v(" "),s("li",[t._v("代码提交时要进行相关注释，说明修改的代码内容；建议提高代码提交的频率，这样在出现问题时方便问题的定位与代码的回滚")]),t._v(" "),s("li",[t._v("代码提交时要在本地解决冲突，冲突解决完成，并且代码在本地可以编译通过之后才能提交代码")]),t._v(" "),s("li",[t._v("在windows下进行开发一定要注意git有关换行符的问题（crlf与lf的问题），具体请在git中设置相关的配置（git config --global core.autocrlf true ），并在开发工具中将默认的环境设置为linux，避免提交的代码出现大量的冲突。如果出现这种情况的冲突，请不要提交代码到远程仓库，本地解决之后再提交。")])]),t._v(" "),s("h2",{attrs:{id:"_4、intellij-idea使用gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、intellij-idea使用gitlab"}},[t._v("#")]),t._v(" 4、IntelliJ IDEA使用GitLab")]),t._v(" "),s("h3",{attrs:{id:"_4-1-安装git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-安装git"}},[t._v("#")]),t._v(" 4.1 安装Git")]),t._v(" "),s("h4",{attrs:{id:"下载git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载git"}},[t._v("#")]),t._v(" 下载Git")]),t._v(" "),s("p",[t._v("进入"),s("a",{attrs:{href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git下载页面"),s("OutboundLink")],1),t._v("，选择合适的版本下载。")]),t._v(" "),s("h4",{attrs:{id:"安装git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装Git")]),t._v(" "),s("p",[t._v("Windows下双击下载好的 "),s("code",[t._v("Git-x.xx.x-64-bit.exe")]),t._v(" 安装包执行安装，不建议更改 Git 默认勾选的配置。Git GUI按需使用，实际使用的频率一般比较低。")]),t._v(" "),s("h4",{attrs:{id:"配置git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[t._v("#")]),t._v(" 配置Git")]),t._v(" "),s("p",[t._v("如果在安装时没有勾选 "),s("strong",[t._v("Checkout Windows-style, commit Unix-style line endings")]),t._v(" 项，可以在命令行中执行 "),s("code",[t._v("git config --global core.autocrlf true")]),t._v(" 开启 "),s("strong",[t._v("提交代码时自动转换换行符")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_4-2-安装idea-git插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-安装idea-git插件"}},[t._v("#")]),t._v(" 4.2 安装IDEA Git插件")]),t._v(" "),s("h4",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),s("p",[t._v("在IDEA中搜索 "),s("code",[t._v("Git Integration")]),t._v(" 和 "),s("code",[t._v(".ignore")]),t._v(" 插件并安装，安装完成之后重启IDEA。")]),t._v(" "),s("h4",{attrs:{id:"配置插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置插件"}},[t._v("#")]),t._v(" 配置插件")]),t._v(" "),s("ul",[s("li",[t._v("IDEA Git插件的配置")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-Git%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE.png",alt:"IDEA-Git插件配置"}})]),t._v(" "),s("ul",[s("li",[t._v(".ignore插件")])]),t._v(" "),s("p",[s("strong",[t._v(".ignore")]),t._v(" 插件支持Git推送代码时自动忽略自定义配置的文件或者目录，防止将一些与开发无关的项目配置文件、构建文件推送到代码库，也减少了手动推送的风险。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-从gitlab导入项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-从gitlab导入项目"}},[t._v("#")]),t._v(" 4.3 从GitLab导入项目")]),t._v(" "),s("h4",{attrs:{id:"从远程仓库clone代码到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库clone代码到本地"}},[t._v("#")]),t._v(" 从远程仓库clone代码到本地")]),t._v(" "),s("p",[t._v("在配置好了ssh之后则可进行代码的clone，用http/https的方式不在本文的考虑范围内。clone远程代码到本地请使用git bash操作，不要使用ide，尤其是不要使用eclipse（本项目约定使用命令行进行）。\n"),s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/%E5%A4%8D%E5%88%B6Git%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93%E8%B7%AF%E5%BE%84.png",alt:"复制Git代码仓库路径"}})]),t._v(" "),s("p",[t._v("使用复制好的链接clone代码")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone git@dev.posun.co:root/GitLab-Manual.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/Git-SSH-Clone%E4%BB%A3%E7%A0%81.png",alt:"Git-SSH-Clone代码"}})]),t._v(" "),s("p",[t._v("使用IDEA打开Git项目")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA%E6%89%93%E5%BC%80Git%E9%A1%B9%E7%9B%AE.png",alt:"IDEA打开Git项目"}})]),t._v(" "),s("p",[t._v("选择项目"),s("strong",[t._v("目录")]),t._v("，点击“OK”")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/%E9%80%89%E6%8B%A9Git%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png",alt:"选择Git项目目录"}})]),t._v(" "),s("p",[t._v("成功导入Git项目")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-Git%E9%A1%B9%E7%9B%AE.png",alt:"IDEA-Git项目"}})]),t._v(" "),s("h3",{attrs:{id:"_4-4-本地拉取新的分支并将分支push到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-本地拉取新的分支并将分支push到远程仓库"}},[t._v("#")]),t._v(" 4.4 本地拉取新的分支并将分支push到远程仓库")]),t._v(" "),s("h4",{attrs:{id:"分支操作菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支操作菜单"}},[t._v("#")]),t._v(" 分支操作菜单")]),t._v(" "),s("p",[t._v("IDEA中Git的操作菜单可以在以下两个地方找到。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-Git%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95.png",alt:"IDEA-Git操作菜单"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-Git%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95-%E8%8F%9C%E5%8D%95%E6%A0%8F.png",alt:"IDEA-Git操作菜单-菜单栏"}})]),t._v(" "),s("p",[t._v("分支操作菜单在IDEA界面的右下方有一个快捷入口。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-Git%E5%88%86%E6%94%AF%E8%8F%9C%E5%8D%95.png",alt:"IDEA-Git分支菜单"}})]),t._v(" "),s("h4",{attrs:{id:"拉取分支操作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取分支操作流程"}},[t._v("#")]),t._v(" 拉取分支操作流程")]),t._v(" "),s("h5",{attrs:{id:"创建本地dev分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建本地dev分支"}},[t._v("#")]),t._v(" 创建本地dev分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%88%9B%E5%BB%BA%E6%9C%AC%E5%9C%B0dev%E5%88%86%E6%94%AF.png",alt:"IDEA-创建本地dev分支"}})]),t._v(" "),s("h5",{attrs:{id:"命名本地dev分支，最好跟远程分支保持一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名本地dev分支，最好跟远程分支保持一致"}},[t._v("#")]),t._v(" 命名本地dev分支，最好跟远程分支保持一致")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%91%BD%E5%90%8D%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF.png",alt:"IDEA-命名本地分支"}})]),t._v(" "),s("h5",{attrs:{id:"从dev分支拉取feature分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从dev分支拉取feature分支"}},[t._v("#")]),t._v(" 从dev分支拉取feature分支")]),t._v(" "),s("p",[t._v("拉取分支前需要确认当前本地分支在master或者dev分支，并且分支代码是最新的（拉取feature分支则当前分支需要是dev分支，拉取hotfix分支则要在master分支）")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("切换到dev分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%88%87%E6%8D%A2%E5%88%B0dev%E5%88%86%E6%94%AF.png",alt:"IDEA-切换到dev分支"}})])]),t._v(" "),s("li",[s("p",[t._v("pull dev分支代码，使代码最新")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-pull%E5%88%86%E6%94%AF%E4%BB%A3%E7%A0%81.png",alt:"IDEA-pull分支代码"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-pull%E4%BB%A3%E7%A0%81.png",alt:"IDEA-pull代码"}})])]),t._v(" "),s("li",[s("p",[t._v("创建新的feature分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF.png",alt:"IDEA-创建新的本地分支"}})]),t._v(" "),s("p",[t._v("注意feature分支的命名，"),s("strong",[t._v("feature_任务编号_任务描述_分支创建日期")]),t._v("。任务编号对应GitLab中项目的问题编号。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%88%9B%E5%BB%BAfeature%E5%88%86%E6%94%AF.png",alt:"IDEA-创建feature分支"}})])])]),t._v(" "),s("h4",{attrs:{id:"push新的feature分支到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push新的feature分支到远程仓库"}},[t._v("#")]),t._v(" push新的feature分支到远程仓库")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-push%20feature%E5%88%86%E6%94%AF%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.png",alt:"IDEA-push feature分支到远程仓库"}})]),t._v(" "),s("p",[t._v("push feature分支成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/push%20feature%E5%88%86%E6%94%AF%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%88%90%E5%8A%9F.png",alt:"push feature分支到远程仓库成功"}})]),t._v(" "),s("h3",{attrs:{id:"_4-5-从开发分支上提交代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-从开发分支上提交代码"}},[t._v("#")]),t._v(" 4.5 从开发分支上提交代码")]),t._v(" "),s("ul",[s("li",[t._v("如果有新创建的文件，则在commit之前要进行add")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-git%20add%E6%96%B0%E6%96%87%E4%BB%B6.png",alt:"IDEA-git add新文件"}})]),t._v(" "),s("ul",[s("li",[t._v("commit代码之前要检查代码更改的地方，不要提交一些非智力因素导致的合并错误。IDEA中有两种提交代码的方式。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81.png",alt:"IDEA-提交代码"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81-%E8%8F%9C%E5%8D%95%E6%A0%8F.png",alt:"IDEA-提交代码-菜单栏"}})]),t._v(" "),s("ul",[s("li",[t._v("该面板可以查看有哪些文件进行了修改以及修改详情")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%9F%A5%E7%9C%8B%E4%BB%A3%E7%A0%81%E6%96%87%E4%BB%B6%E5%8F%98%E5%8A%A8%E4%BF%A1%E6%81%AF.png",alt:"IDEA-查看代码文件变动信息"}})]),t._v(" "),s("ul",[s("li",[t._v("确认无误，添加注释，提交代码")])]),t._v(" "),s("p",[t._v("commit: 提交代码\ncommit and push：提交代码并推送至远程仓库")]),t._v(" "),s("p",[s("strong",[t._v("可以一次推送多次提交")]),t._v("，一般一个功能点的修改提交一次代码，一个开发周期（半天、一天）推送一次代码。注意提交注释的格式 "),s("code",[t._v("tasknum#taskdesc:commit message")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E5%A1%AB%E5%86%99%E6%8F%90%E4%BA%A4%E8%AF%B4%E6%98%8E.png",alt:"IDEA-填写提交说明"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%8F%90%E4%BA%A4%E5%AE%8C%E6%88%90%E6%8E%A8%E9%80%81%E4%BB%A3%E7%A0%81.png",alt:"IDEA-提交完成推送代码"}})]),t._v(" "),s("h3",{attrs:{id:"_4-6-查看代码提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-查看代码提交历史"}},[t._v("#")]),t._v(" 4.6 查看代码提交历史")]),t._v(" "),s("h4",{attrs:{id:"查看指定文件的提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看指定文件的提交历史"}},[t._v("#")]),t._v(" 查看指定文件的提交历史")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E7%9A%84%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2.png",alt:"IDEA-查看文件的提交历史"}})]),t._v(" "),s("h4",{attrs:{id:"查看项目的提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看项目的提交历史"}},[t._v("#")]),t._v(" 查看项目的提交历史")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/GitLab%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/IDEA-%E6%9F%A5%E7%9C%8B%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2.png",alt:"IDEA-查看项目的提交历史"}})]),t._v(" "),s("h3",{attrs:{id:"_4-7-代码的回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-代码的回退"}},[t._v("#")]),t._v(" 4.7 代码的回退")]),t._v(" "),s("p",[s("strong",[t._v("不要回退代码，代码提交错误，请手动删除提交错误的代码，然后再次提交，不然会影响一些提交信息的记录，或其他分支的开发。")])]),t._v(" "),s("h3",{attrs:{id:"_4-8-分支反合及冲突的解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-分支反合及冲突的解决"}},[t._v("#")]),t._v(" 4.8 分支反合及冲突的解决")]),t._v(" "),s("p",[t._v("虽然这部分大部分靠经验解决问题，但是仍然需要注意以下注意事项：")]),t._v(" "),s("p",[s("strong",[t._v("分支反合")]),t._v("：即master分支或dev分支合并到开发分支,合并操作可以用命令行进行")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout feature_dev_local\ngit merge origin/dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout hotfix_fixbug_local\ngit merge origin/master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("IDEA中有比较好用的冲突解决工具，命令行执行玩合并之后，用IDEA解决冲突并提交")]),t._v(" "),s("li",[t._v("不要用IDE进行分支反合，尤其不能用Eclipse")])]),t._v(" "),s("h3",{attrs:{id:"_4-9-提交pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-提交pull-request"}},[t._v("#")]),t._v(" 4.9 提交pull request")]),t._v(" "),s("p",[t._v("pull request在分支测试之后提交，在git的web端可以直接操作，一般这部分由QA完成。")]),t._v(" "),s("h4",{attrs:{id:"新建合并请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建合并请求"}},[t._v("#")]),t._v(" 新建合并请求")]),t._v(" "),s("p",[t._v("在GitLab的项目页面中选择 "),s("strong",[t._v("合并请求")]),t._v(" 进入pull request面板页面，点击 "),s("strong",[t._v("新建合并请求")]),t._v("，选择pull request的来源分支和目标分支，点击 "),s("strong",[t._v("比较分支后继续")]),t._v("。")]),t._v(" "),s("p",[t._v("填写标题、描述，指派审查员，可选该合并请求相关的里程碑和标记（与问题看板关联），之后点击 "),s("strong",[t._v("提交合并请求")]),t._v(" 即完成了合并请求的创建。勾选 "),s("strong",[t._v("接受合并请求后删除来源分支")]),t._v("，合并请求完成之后会删除来源分支，一般从feature合并到dev、hotfix合并到master可以勾选，dev合并到master不勾选。")]),t._v(" "),s("h4",{attrs:{id:"合并请求的审查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并请求的审查"}},[t._v("#")]),t._v(" 合并请求的审查")]),t._v(" "),s("p",[t._v("审查员在代码审查通过之后可以选择合并操作完成分支代码的合并。代码审查不通过时，审查员需要填写原因或建议并关闭合并请求，此时开发人员需要根据审查员的审查结果进行修改并在修改完成之后再次pull request。")]),t._v(" "),s("h3",{attrs:{id:"_4-10-gitignore文件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-gitignore文件的使用"}},[t._v("#")]),t._v(" 4.10 .gitignore文件的使用")]),t._v(" "),s("h4",{attrs:{id:"gitignore文件的编写原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore文件的编写原则"}},[t._v("#")]),t._v(" .gitignore文件的编写原则")]),t._v(" "),s("p",[s("code",[t._v(".gitignore")]),t._v(" 文件过滤有两种模式：开放模式和保守模式。开放模式负责设置过滤哪些文件和文件夹，保守模式负责设置哪些文件不被过滤，也就是哪些文件要被跟踪。")]),t._v(" "),s("p",[t._v("gitignore是从上到下逐行匹配的，因此.gitignore文件的编写原则就是："),s("strong",[t._v("先编写开放模式，在编写保守模式")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),s("ul",[s("li",[t._v("以斜杠“/”开头表目录")]),t._v(" "),s("li",[t._v("以星号“*”通配多字符")]),t._v(" "),s("li",[t._v("以问号“?”通配单字符")]),t._v(" "),s("li",[t._v("以方括号“[]”包含单个字符的匹列表")]),t._v(" "),s("li",[t._v("以叹号“!”对匹配结果反")])]),t._v(" "),s("h2",{attrs:{id:"_5、任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、任务"}},[t._v("#")]),t._v(" 5、任务")]),t._v(" "),s("h3",{attrs:{id:"_5-1-任务的创建与执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-任务的创建与执行"}},[t._v("#")]),t._v(" 5.1 任务的创建与执行")]),t._v(" "),s("h4",{attrs:{id:"任务的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务的创建"}},[t._v("#")]),t._v(" 任务的创建")]),t._v(" "),s("p",[t._v("在GitLab的项目页面中选择 "),s("strong",[t._v("问题")]),t._v(" -> "),s("strong",[t._v("列表")]),t._v(" 进入问题列表页面，点击 "),s("strong",[t._v("新建问题")]),t._v(" 进入任务创建页面，填写问题标题、描述，指派任务的执行人员，勾选是否保密，选择截止日期，选择里程碑和标记，之后点击 "),s("strong",[t._v("提交问题")]),t._v(" 即可完成任务的创建。这里的任务标记跟问题面板中的面板标题一致。")]),t._v(" "),s("h4",{attrs:{id:"任务的执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务的执行"}},[t._v("#")]),t._v(" 任务的执行")]),t._v(" "),s("p",[t._v("在 "),s("strong",[t._v("问题")]),t._v(" -> "),s("strong",[t._v("看板")]),t._v(" 页面可以对问题的执行情况进行跟踪。这部分跟大部分团队协作的工具比较类似，不做过多说明。")])])}),[],!1,null,null,null);a.default=_.exports}}]);