(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{489:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker容器命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker容器命令"}},[t._v("#")]),t._v(" Docker容器命令")]),t._v(" "),a("blockquote",[a("p",[t._v("引用自"),a("a",{attrs:{href:"http://www.itmuch.com/docker/05-docker-command-containers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Docker系列教程05-容器常用命令》- 周立"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("本节我们来讨论Docker容器的常用命令。")]),t._v(" "),a("h2",{attrs:{id:"新建并启动容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建并启动容器-重要"}},[t._v("#")]),t._v(" 新建并启动容器[重要]")]),t._v(" "),a("p",[t._v("使用以下 "),a("code",[t._v("docker run")]),t._v(" 命令即可新建并启动一个容器。该命令是我们最常用的命令了，它有很多选项，下面笔者列举一些常用的选项。")]),t._v(" "),a("p",[t._v("① -d选项：表示后台运行")]),t._v(" "),a("p",[t._v("② -P选项：随机端口映射")]),t._v(" "),a("p",[t._v("③ -p选项：指定端口映射，有以下四种格式。")]),t._v(" "),a("p",[t._v("ip:hostPort:containerPort")]),t._v(" "),a("p",[t._v("ip::containerPort")]),t._v(" "),a("p",[t._v("hostPort:containerPort")]),t._v(" "),a("p",[t._v("containerPort")]),t._v(" "),a("p",[t._v("④ –network选项：指定网络模式，该选项有以下可选参数：")]),t._v(" "),a("p",[t._v("–network=bridge： 默认选项，表示连接到默认的网桥。")]),t._v(" "),a("p",[t._v("–network=host：容器使用宿主机的网络。")]),t._v(" "),a("p",[t._v("–network=container:NAME_or_ID：告诉Docker让新建的容器使用已有容器的网络配置。")]),t._v(" "),a("p",[t._v("–network=none：不配置该容器的网络，用户可自定义网络配置。")]),t._v(" "),a("p",[t._v("示例1：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run java /bin/echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样终端会打印Hello World的字样，跟在本地直接执行 "),a("code",[t._v("/bin/echo 'Hello World'")]),t._v(" 一样。")]),t._v(" "),a("p",[t._v("示例2：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("91")]),t._v(":80 nginx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样就能启动一个Nginx容器。在本例中，我们为docker run添加了两个参数，含义如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-d                           # 后台运行\n-p 宿主机端口:容器端口         # 开放容器端口到宿主机端口\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("访问 http://Docker宿主机IP:91/ ，将会看到如图12-3的界面：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.itmuch.com/images/docker/12-3.png",alt:"Nginx首页"}})]),t._v(" "),a("p",[t._v("图12-3 Nginx首页")]),t._v(" "),a("p",[a("strong",[t._v("TIPS")])]),t._v(" "),a("p",[t._v("需要注意的是，使用docker run命令创建容器时，会先检查本地是否存在指定镜像。如果本地不存在该名称的镜像，Docker就会自动从Docker Hub下载镜像并启动一个Docker容器。")]),t._v(" "),a("h2",{attrs:{id:"列出容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出容器-重要"}},[t._v("#")]),t._v(" 列出容器[重要]")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker ps")]),t._v(" 命令即可列出运行中的容器。执行该命令后，可看到类似于如下的表格。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                         NAMES\n784fd3b294d7        nginx               "nginx -g \'daemon off"   20 minutes ago      Up 2 seconds        443/tcp, 0.0.0.0:91->80/tcp   backstabbing_archimedes\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("如需列出所有容器（包括已停止的容器），可使用-a参数。")]),t._v(" "),a("p",[t._v("该表格包含了七列，含义如下：")]),t._v(" "),a("p",[t._v("① CONTAINER_ID：表示容器ID。")]),t._v(" "),a("p",[t._v("② IMAGE：表示镜像名称。")]),t._v(" "),a("p",[t._v("③ COMMAND：表示启动容器时运行的命令。")]),t._v(" "),a("p",[t._v("④ CREATED：表示容器的创建时间。")]),t._v(" "),a("p",[t._v("⑤ STATUS：表示容器运行的状态。Up表示运行中，Exited表示已停止。")]),t._v(" "),a("p",[t._v("⑥ PORTS：表示容器对外的端口号。")]),t._v(" "),a("p",[t._v("⑦ NAMES：表示容器名称。该名称默认由Docker自动生成，也可使用docker run命令的–name选项自行指定。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--all, -a")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("列出所有容器，包括未运行的容器，默认只展示运行的容器")])]),t._v(" "),a("tr",[a("td",[t._v("--filter, -f")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("根据条件过滤显示内容")])]),t._v(" "),a("tr",[a("td",[t._v("--format")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("通过Go语言模板文件展示镜像")])]),t._v(" "),a("tr",[a("td",[t._v("--last, -n")]),t._v(" "),a("td",[t._v("-1")]),t._v(" "),a("td",[t._v("显示最近创建n个容器（包含所有状态）")])]),t._v(" "),a("tr",[a("td",[t._v("--latest, -l")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("显示最近创建的容器（包含所有状态）")])]),t._v(" "),a("tr",[a("td",[t._v("--no-trunc")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("不截断输出")])]),t._v(" "),a("tr",[a("td",[t._v("--quiet, -q")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("静默模式，只展示容器的编号")])]),t._v(" "),a("tr",[a("td",[t._v("--size, -s")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("显示总文件大小")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a -q\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"停止容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止容器-重要"}},[t._v("#")]),t._v(" 停止容器[重要]")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker stop")]),t._v(" 命令，即可停止容器。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--time, -t")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("强制杀死容器前等待的时间，单位是秒")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker stop 784fd3b294d7\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中784fd3b294d7 是容器ID，当然也可使用 "),a("code",[t._v("docker stop 容器名称")]),t._v(" 来停止指定容器。")]),t._v(" "),a("h2",{attrs:{id:"强制停止容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制停止容器-重要"}},[t._v("#")]),t._v(" 强制停止容器[重要]")]),t._v(" "),a("p",[t._v("可使用 "),a("code",[t._v("docker kill")]),t._v(" 命令停止一个或更多运行着的容器。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--signal, -s")]),t._v(" "),a("td",[t._v("KILL")]),t._v(" "),a("td",[t._v("向容器发送一个信号")])])])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" 784fd3b294d7\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动已停止的容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动已停止的容器-重要"}},[t._v("#")]),t._v(" 启动已停止的容器[重要]")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker run")]),t._v(" 命令，即可新建并启动一个容器。对于已停止的容器，可使用 "),a("code",[t._v("docker start")]),t._v(" 命令来启动。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--attach, -a")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("连接STDOUT/STDERR并转发信号")])]),t._v(" "),a("tr",[a("td",[t._v("--checkpoint")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("从该检查点还原")])]),t._v(" "),a("tr",[a("td",[t._v("--checkpoint-dir")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("使用自定义的检查点存储目录")])]),t._v(" "),a("tr",[a("td",[t._v("--detach-keys")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("覆盖断开容器的关键顺序")])]),t._v(" "),a("tr",[a("td",[t._v("--interactive, -i")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("连接容器的STDIN")])])])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker start 784fd3b294d7\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"重启容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启容器-重要"}},[t._v("#")]),t._v(" 重启容器[重要]")]),t._v(" "),a("p",[t._v("可使用 "),a("code",[t._v("docker restart")]),t._v(" 命令来重启容器。该命令实际上是先执行了 "),a("code",[t._v("docker stop")]),t._v(" 命令，然后执行了 "),a("code",[t._v("docker start")]),t._v(" 命令。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--time, -t")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("关闭容器前等待的时间，单位是秒")])])])]),t._v(" "),a("h2",{attrs:{id:"进入容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入容器-重要"}},[t._v("#")]),t._v(" 进入容器[重要]")]),t._v(" "),a("p",[t._v("某场景下，我们可能需要进入运行中的容器。")]),t._v(" "),a("p",[t._v("① 使用 "),a("code",[t._v("docker attach")]),t._v(" 命令进入容器。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker attach 784fd3b294d7\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("很多场景下，使用 "),a("code",[t._v("docker attach")]),t._v(" 命令并不方便。当多个窗口同时attach到同一个容器时，所有窗口都会同步显示。同理，如果某个窗口发生阻塞，其他窗口也无法执行操作。")]),t._v(" "),a("p",[t._v("② 使用 "),a("code",[t._v("nsenter")]),t._v(" 进入容器")]),t._v(" "),a("p",[t._v("nsenter工具包含在util-linux 2.23或更高版本中。为了连接到容器，我们需要找到容器第一个进程的PID，可通过以下命令获取：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker inspect --format "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{.State.Pid}}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CONTAINER_ID")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("获得PID后，就可使用nsenter命令进入容器了：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nsenter --target "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PID")]),t._v('"')]),t._v(" --mount --uts --ipc --net --pid\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("下面给出一个完整的例子：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps")]),t._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                         NAMES\n784fd3b294d7        nginx               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx -g \'daemon off"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),t._v(" minutes ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" minutes        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:91-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp   backstabbing_archimedes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# docker inspect --format "{{.State.Pid}}" 784fd3b294d7')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95492")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nsenter --target 95492 --mount --uts --ipc --net --pid")]),t._v("\nroot@784fd3b294d7:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("读者也可将以上两条命令封装成一个Shell，从而简化进入容器的过程。")]),t._v(" "),a("p",[t._v("③ docker exec")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it 容器id /bin/bash\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"删除容器-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除容器-重要"}},[t._v("#")]),t._v(" 删除容器[重要]")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker rm")]),t._v(" 命令即可删除指定容器。")]),t._v(" "),a("p",[t._v("命令格式")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--force, -f")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("通过SIGKILL信号强制删除正在运行中的容器")])]),t._v(" "),a("tr",[a("td",[t._v("--link, -l")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("删除容器间的网络连接")])]),t._v(" "),a("tr",[a("td",[t._v("--volumes, -v")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("删除与容器关联的卷")])])])]),t._v(" "),a("p",[t._v("例1：删除指定容器。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 784fd3b294d7\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("该命令只能删除已停止的容器，如需删除正在运行的容器，可使用-f参数。")]),t._v(" "),a("p",[t._v("例2：删除所有的容器。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a -q"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"导出容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出容器"}},[t._v("#")]),t._v(" 导出容器")]),t._v(" "),a("p",[t._v("将容器导出成一个压缩包文件。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONTAINER\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--output, -o")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("将内容写到文件而非STDOUT")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" red_panda "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" latest.tar\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" --output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest.tar"')]),t._v(" red_panda\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"导入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入容器"}},[t._v("#")]),t._v(" 导入容器")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker import")]),t._v(" 命令即可从归档文件导入内容并创建镜像。")]),t._v(" "),a("p",[t._v("命令格式：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("REPOSITORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称，缩写")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--change, -c")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("将Dockerfile指令应用到创建的镜像")])]),t._v(" "),a("tr",[a("td",[t._v("--message, -m")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("为导入的镜像设置提交信息")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" nginx2.tar nginx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("拓展阅读")])]),t._v(" "),a("p",[t._v("Docker的网络："),a("a",{attrs:{href:"https://docs.docker.com/engine/userguide/networking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/userguide/networking/"),a("OutboundLink")],1),t._v("\nDocker命令："),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/reference/commandline/docker/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);