(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{506:function(s,n,a){"use strict";a.r(n);var t=a(12),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"gitlab-ci环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci环境搭建"}},[s._v("#")]),s._v(" GitLab-CI环境搭建")]),s._v(" "),a("h3",{attrs:{id:"运行gitlab-runner容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行gitlab-runner容器"}},[s._v("#")]),s._v(" 运行GitLab Runner容器")]),s._v(" "),a("blockquote",[a("p",[s._v("参考"),a("a",{attrs:{href:"https://docs.gitlab.com/runner/install/docker.html#docker-image-installation-and-configuration",target:"_blank",rel:"noopener noreferrer"}},[s._v("Run GitLab Runner in a container - Docker image installation and configuration"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("执行下述命令运行gitlab-runner容器。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d --name gitlab-runner --restart always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /srv/gitlab-runner/config:/etc/gitlab-runner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /var/run/docker.sock:/var/run/docker.sock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  gitlab/gitlab-runner:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"注册gitlab-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册gitlab-runner"}},[s._v("#")]),s._v(" 注册GitLab Runner")]),s._v(" "),a("blockquote",[a("p",[s._v("参考"),a("a",{attrs:{href:"https://docs.gitlab.com/runner/register/index.html#gnu-linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("Registering Runners"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("docker exec -it gitlab-runner /bin/bash")]),s._v(" 命令进入 gitlab-runner 容器命令行环境。")]),s._v(" "),a("p",[s._v("执行 "),a("code",[s._v("gitlab-runner register")]),s._v(" 命令开始注册一个 runner。")]),s._v(" "),a("p",[s._v("注册时只有输入共享Runner的注册令牌（token）才能注册为共享Runner。关于Runner executor的介绍可以查看 "),a("a",{attrs:{href:"https://docs.gitlab.com/runner/executors/README.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Executors"),a("OutboundLink")],1),s._v("。Runner executor选择Docker时会要求填写要使用的默认docker镜像。")]),s._v(" "),a("h2",{attrs:{id:"springboot项目的ci配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot项目的ci配置"}},[s._v("#")]),s._v(" SpringBoot项目的CI配置")]),s._v(" "),a("h3",{attrs:{id:"安全变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全变量"}},[s._v("#")]),s._v(" 安全变量")]),s._v(" "),a("p",[s._v("GitLab CI/CD的安全变量有两种，群组安全变量和项目安全变量，群组安全变量可作用于当前群组下所有项目以及子群组项目，递归继承；项目安全变量只作用当前项目。")]),s._v(" "),a("p",[s._v("实际项目配置的群组变量有：CI_REGISTRY（本地Docker Registry的地址），项目变量有：CI_REGISTRY_IMAGE（项目构建的docker镜像名称）")]),s._v(" "),a("h3",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" java:8-jre")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" target/discovery-server-1.0.0.jar app.jar")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" bash -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'touch /app.jar'")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 10030")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.security.edg=file:/dev/./urandom"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Duser.timezone=Asia/Shanghai"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xmx128m"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms64m"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"gitlab-ci-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-yml"}},[s._v("#")]),s._v(" .gitlab-ci.yml")]),s._v(" "),a("p",[s._v(".gitlab-ci.yml文件可以使用的变量除了手动配置的安全变量外，默认还可以使用预定义变量（详情见"),a("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/variables/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitLab CI/CD Variables"),a("OutboundLink")],1),s._v("）。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-Yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("dind\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--insecure-registry=172.17.0.1:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地Docker Registry私服设置为insecure，避免registry默认需要https才能访问")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" package\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" deploy\n  \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maven-package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" maven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("jdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" maven\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" package\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mvn clean install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Dmaven.test.skip=true\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("artifacts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" target/"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.jar")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将maven构建成功的jar包作为构建产出导出，可在下一个stage的任务中使用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('t "$CI_REGISTRY/$CI_REGISTRY_IMAGE" .\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' docker push "$CI_REGISTRY/$CI_REGISTRY_IMAGE"\n  '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('t "$CI_REGISTRY/$CI_REGISTRY_IMAGE'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('$CI_COMMIT_REF_SLUG" .\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' docker push "$CI_REGISTRY/$CI_REGISTRY_IMAGE'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('$CI_COMMIT_REF_SLUG"\n  '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("except")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h2",{attrs:{id:"runner容器的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runner容器的配置"}},[s._v("#")]),s._v(" Runner容器的配置")]),s._v(" "),a("p",[s._v("将maven构建runner容器使用的maven仓库使用数据卷方式进行共享，解决容器每次构建时都要重新下载依赖的问题。具体方法为使用 "),a("code",[s._v("docker exec -it gitlab-runner /bin/bash")]),s._v(" 进入gitlab-runner容器，编辑 "),a("code",[s._v("/etc/gitlab-runner/config.toml")]),s._v(" 文件，在maven构建runner下的volumes加上 "),a("code",[s._v("/root/.m2")]),s._v(" 本地仓库的数据卷映射关系。")]),s._v(" "),a("p",[s._v("docker构建runner的privileged设置为true，以root用户身份进入容器进行构建任务，避免了由于权限不足无法访问/var/run/docker.sock的问题。")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('concurrent = 6\ncheck_interval = 0\n\n[[runners]]\n  name = "public docker runner"\n  url = "http://172.17.0.1:800/"\n  token = "5223e807ba2c42b18e2aadeceb0e0b"\n  executor = "docker"\n  [runners.docker]\n    registry_mirrors = ["https://ub9x5g6o.mirror.aliyuncs.com/"]\n    extra_hosts = ["git.yupaits.com:172.17.0.1"]\n    tls_verify = false\n    image = "docker:latest"\n    privileged = true\n    disable_cache = false\n    volumes = ["/cache"]\n    shm_size = 0\n  [runners.cache]\n\n[[runners]]\n  name = "public maven runner"\n  url = "http://172.17.0.1:800/"\n  token = "b97734914a435c7f3409bea71e122a"\n  executor = "docker"\n  [runners.docker]\n    extra_hosts = ["git.yupaits.com:172.17.0.1"]\n    tls_verify = false\n    image = "maven:3.5-jdk-8-alpine"\n    privileged = true\n    disable_cache = false\n    volumes = ["/cache", "/home/maven/.m2:/root/.m2"]\n    pull_policy = "if-not-present"\n    shm_size = 0\n  [runners.cache]\n\n[[runners]]\n  name = "public node runner"\n  url = "http://172.17.0.1:800/"\n  token = "e0dea1b0cb42a8d2e1df94ee442b82"\n  executor = "docker"\n  [runners.docker]\n    extra_hosts = ["git.yupaits.com:172.17.0.1"]\n    tls_verify = false\n    image = "node:8-alpine"\n    privileged = true\n    disable_cache = false\n    volumes = ["/cache"]\n    shm_size = 0\n  [runners.cache]\n\n[[runners]]\n  name = "public ssh runner"\n  url = "http://172.17.0.1:800/"\n  token = "266dc28d04f012a5ead3987c1f004e"\n  executor = "ssh"\n  [runners.ssh]\n    user = "root"\n    password = "password"\n    host = "172.17.0.1"\n    port = "22"\n    identity_file = "/root/.ssh/id_rsa"\n  [runners.cache]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);