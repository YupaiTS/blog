(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{392:function(s,a,t){"use strict";t.r(a);var e=t(12),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速搭建微服务-服务调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建微服务-服务调用"}},[s._v("#")]),s._v(" 快速搭建微服务-服务调用")]),s._v(" "),t("p",[s._v("Spring Cloud体系中服务间的调用常见的有Feign和Ribbon两种方式，其中Feign默认集成了Ribbon。Ribbon采用注入RestTemplate实例，通过全局的RestTemplate调用其它可以被发现的服务，而Feign则使用类似于Controller的代码风格配合@FeignClient注解实现服务间接口的调用。由于注入RestTemplate的方式更符合Spring的编程风格，这里仅介绍基于Ribbon方式的服务调用。")]),s._v(" "),t("h2",{attrs:{id:"ribbon配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ribbon配置"}},[s._v("#")]),s._v(" Ribbon配置")]),s._v(" "),t("h3",{attrs:{id:"向spring容器中注入resttemplate实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向spring容器中注入resttemplate实例"}},[s._v("#")]),s._v(" 向Spring容器中注入RestTemplate实例")]),s._v(" "),t("div",{staticClass:"language-Java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@LoadBalanced")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestTemplate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("restTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"负载均衡策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡策略"}},[s._v("#")]),s._v(" 负载均衡策略")]),s._v(" "),t("p",[t("code",[s._v("@LoadBalanced")]),s._v("注解用于开启客户端负载均衡，Ribbon默认的负载均衡策略是轮询选择。Ribbon提供了如下的负载均衡策略：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("AvailabilityFilteringRule：过滤掉那些一直连接失败的被标记为circuit tripped的后端Server，并过滤掉那些高并发的的后端Server或者使用一个AvailabilityPredicate来包含过滤server的逻辑，其实就就是检查status里记录的各个Server的运行状态。")])]),s._v(" "),t("li",[t("p",[s._v("RandomRule：随机选择一个Server。")])]),s._v(" "),t("li",[t("p",[s._v("BestAvailableRule：选择一个最小的并发请求的Server，逐个考察Server，如果Server被tripped了，则跳过。")])]),s._v(" "),t("li",[t("p",[s._v("RoundRobinRule：轮询选择， 轮询index，选择index对应位置的Server。")])]),s._v(" "),t("li",[t("p",[s._v("WeightedResponseTimeRule：根据响应时间分配一个weight(权重)，响应时间越长，weight越小，被选中的可能性越低。")])]),s._v(" "),t("li",[t("p",[s._v("RetryRule：对选定的负载均衡策略机上重试机制，在一个配置时间段内当选择Server不成功，则一直尝试使用subRule的方式选择一个可用的server。")])]),s._v(" "),t("li",[t("p",[s._v("ZoneAvoidanceRule：复合判断Server所在区域的性能和Server的可用性选择Server。")])]),s._v(" "),t("li",[t("p",[s._v("ResponseTimeWeightedRule：作用同WeightedResponseTimeRule，二者作用是一样的，ResponseTimeWeightedRule后来改名为WeightedResponseTimeRule。")])])]),s._v(" "),t("h3",{attrs:{id:"选择负载均衡策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择负载均衡策略"}},[s._v("#")]),s._v(" 选择负载均衡策略")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("注入负载均衡策略IRule实例")]),s._v(" "),t("div",{staticClass:"language-Java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IRule")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ribbonRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RandomRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这里注入的是RandomRule策略，可以按需注入其它策略。")])]),s._v(" "),t("li",[t("p",[s._v("添加ribbon配置信息")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("serviceId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".ribbon.NFLoadBalancerRuleClassName=com.netflix.loadbalancer.RandomRule\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置key中"),t("code",[s._v("[serviceId]")]),s._v("对应服务提供方注册到配置中心的的ServiceId，配置value按需填写策略类的ClassName。")])]),s._v(" "),t("li",[t("p",[s._v("使用负载均衡策略")]),s._v(" "),t("div",{staticClass:"language-Java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestTemplate")]),s._v(" restTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LoadBalancerClient")]),s._v(" loadBalancerClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/resource"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loadBalancerClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("choose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[serviceId]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" restTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getForObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://[serviceId]/get"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("code",[s._v("[serviceId]")]),s._v("填写实际的服务名。")])])]),s._v(" "),t("h3",{attrs:{id:"饥饿加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#饥饿加载"}},[s._v("#")]),s._v(" 饥饿加载")]),s._v(" "),t("p",[s._v("服务调用方采用饥饿加载的方式可以有效解决首次调用服务提供方时大概率出现的超时现象。")]),s._v(" "),t("p",[s._v("在调用方的配置文件中加入如下配置：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ribbon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eager-load")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clients")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" serivce"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中，service-provider1和service-provider2是服务提供方的服务名。")])])}),[],!1,null,null,null);a.default=n.exports}}]);