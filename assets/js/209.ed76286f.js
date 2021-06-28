(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{355:function(v,_,t){"use strict";t.r(_);var l=t(12),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[v._v("原文地址："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/JOryKkISUvjHmE32jsepcA",target:"_blank",rel:"noopener noreferrer"}},[v._v("阿里一年，聊聊我成长了什么"),t("OutboundLink")],1)])]),v._v(" "),t("blockquote",[t("p",[v._v("2018.5.31~2019.5.31，一段精彩的旅程，渡过了在阿里一年的时光，这段时光有快乐、有焦虑、有迷茫、更有思考，思考的是自己过去的种种不足、思考的是一些现在看来之前错误的想法、思考的是如何成为一个更好的技术人，将这一些思考分享给看到这些文字的每个人，共勉。")])]),v._v(" "),t("h2",{attrs:{id:"应当如何面对线上的异常-故障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应当如何面对线上的异常-故障"}},[v._v("#")]),v._v(" 应当如何面对线上的异常/故障")]),v._v(" "),t("p",[v._v("看起来毫无意义的一个问题，碰到线上异常/故障如何面对，排查解决了不就好了，但是这真的只是第一层。")]),v._v(" "),t("p",[v._v("最近在想“消防”这个词语很有意思，它其实是两层意思：")]),v._v(" "),t("ul",[t("li",[v._v("“消”是消除问题")]),v._v(" "),t("li",[v._v("“防”是防止问题")])]),v._v(" "),t("p",[v._v("即“消防”这个词语表达的意思应该是先消除问题再防止相同的问题再次发生。其实线上的异常/故障也是同样的道理，我们应当先及时止血，把问题处理掉，然后深挖问题，探究根因，举几个例子：")]),v._v(" "),t("ul",[t("li",[v._v("假设是某段代码的空指针异常导致的，那么是否考虑加强Code Review，或者使用findbugs插件去自动扫描代码中可能的异常？")]),v._v(" "),t("li",[v._v("假设是线上某个配置修改导致的，那么是否今后变更的修改必须有人双重检查一遍才可以修改？")]),v._v(" "),t("li",[v._v("假设是本地内存中某些值因为系统重启丢失导致的，那么是否引入定时任务，定时把值写入本地内存中？")]),v._v(" "),t("li",[v._v("假设是某段代码逻辑没测试到导致的，那么是否可以反思总结为什么这段逻辑没有测试到，未来的测试应该如何改进？")])]),v._v(" "),t("p",[v._v("根据我过往的经验，太多公司、太多团队处理线上的问题仅仅满足于把问题处理完就完事，忽略了对问题的复盘，这对团队/对公司的发展都是不利的。")]),v._v(" "),t("h2",{attrs:{id:"什么是真正的技术能力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是真正的技术能力"}},[v._v("#")]),v._v(" 什么是真正的技术能力")]),v._v(" "),t("p",[v._v("之前加了几个技术微信群，看到很多技术朋友在兴高采烈地讨论各种源码，spring源码我彻底撸了一遍、最近深入学习了dubbo底层实现方式，当然曾经的我也是这样的，记得学习volatile的时候一直挖到了volatile在硬件层面上的实现方式，但是这真的说明技术能力强吗？从今天的思考去看这个问题，我认为这更多反应的是一个人的学习能力、钻研能力以及对技术的热情，除此之外再体现不出太多其他东西了。")]),v._v(" "),t("p",[v._v("这个话题，可能是这一年思考的最多个的一个点，钻研是好事，但是实际上大多时候的深入钻研并不在实际工作中有用，且研究得越深，忘得越快，因为研究得越深，那么这个技术点关联的技术点就越多，边边角角的忘了，核心的东西不容易串起来。那么什么是真正的技术能力，我画一张图概括一下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/%E9%98%BF%E9%87%8C%E4%B8%80%E5%B9%B4_%E8%81%8A%E8%81%8A%E6%88%91%E6%88%90%E9%95%BF%E4%BA%86%E4%BB%80%E4%B9%88/001.jpg",alt:"真正的技术能力"}})]),v._v(" "),t("p",[v._v("简而言之，技术能力 = 解决问题的能力，那么同样都在解决问题，大家之间的技术高低又有什么区分呢？我认为有以下几个层次：")]),v._v(" "),t("ul",[t("li",[v._v("第一层级，解决当下问题")]),v._v(" "),t("li",[v._v("第二层级，以优雅且可复用的方式解决当下问题")]),v._v(" "),t("li",[v._v("第三层级，解决的问题不仅仅能满足当下，还能满足未来一段时间")])]),v._v(" "),t("p",[v._v("其实从这个角度上来看，不同的技术能力，在工作过程中区分度是很明显的：")]),v._v(" "),t("ul",[t("li",[v._v("写的代码是否存在异常风险，多线程运行下是否存在线程安全问题，某段代码是否会导致内存泄露")]),v._v(" "),t("li",[v._v("写的代码是否优雅可复用，设计的框架是否足够符合开闭原则，代码结构层次是否清晰明了")]),v._v(" "),t("li",[v._v("针对特定的场景，技术选型、库表结构设计是否足够合理，今天你设计的框架是只能用一年，还是未来三年五年都可以持续使用")]),v._v(" "),t("li",[v._v("来了一个大的需求，就比如做一个App的会员体系功能好了，是否可以在充分分析需求后，精确将需求划分为几个特定的子模块并梳理清楚模块之间的关系")])]),v._v(" "),t("p",[v._v("越厉害的人，在代码设计与开发过程中，越能看到想到一些别人看不到想不到的问题，这叫做高屋建瓴；当代码运行出现问题的时候，有人1小时排查出问题，有人1分钟发现问题，这叫做举重若轻。")]),v._v(" "),t("p",[v._v("因此我认为"),t("strong",[v._v("解决问题的能力才是技术能力的真正体现")]),v._v("，这一年对技术的探究我也从研究源码更多的转变去学习设计模式、去学习分布式环境下各种NoSql的选型对比、去学习使用Lambda让代码更简洁，往真正在实际工作中解决问题的方向去努力。")]),v._v(" "),t("p",[v._v("另外，抛开这个点，这两天我在思考，还有一个体现技术能力的点，就是"),t("strong",[v._v("学习能力")]),v._v("。现实中的全栈是很少的，互联网这个行业的程序员的方向通常有几类：")]),v._v(" "),t("ul",[t("li",[v._v("服务端")]),v._v(" "),t("li",[v._v("前端")]),v._v(" "),t("li",[v._v("移动端")]),v._v(" "),t("li",[v._v("AI")]),v._v(" "),t("li",[v._v("嵌入式")]),v._v(" "),t("li",[v._v("大数据")])]),v._v(" "),t("p",[v._v("在同一类中，基础知识、基本概念、思维方向是一致的，更多可能差异在开发工具、语言上，我精通Java，但是如果明天有一个需求，使用nodejs、scala、go更好，那么是否可以快速学习、快速上手？甚至明天有一个需求需要写前端代码，是否可以快速开发、无bug上线？")]),v._v(" "),t("p",[v._v("所以，解决问题的能力 + 学习能力，是我认为真正的技术能力，不过说到底，学习能力某种程度上也只是为了解决问题而已。")]),v._v(" "),t("h2",{attrs:{id:"不要造轮子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不要造轮子"}},[v._v("#")]),v._v(" 不要造轮子")]),v._v(" "),t("p",[v._v("曾几何时，当我们看着github上这么多优秀的源代码的时候，默默立誓，这辈子我一定要写出一个牛逼的框架，开源在网上。")]),v._v(" "),t("p",[v._v("曾几何时，公司招聘的时候，技术负责人激情满满地介绍着公司内部自研了多少系统并在线上投入使用。")]),v._v(" "),t("p",[v._v("很多对技术有追求的朋友，进入一家公司可能时时刻刻在寻找机会去做一些自己造轮子的事情，但是就如同前面所说的，衡量真正好技术的标准就是能否实实在在地解决问题，自己造轮子风险高、周期长，且需要长时间的验证、排坑才能达到比较好的效果。")]),v._v(" "),t("p",[v._v("随便举几个例子，在互联网发展的今天：")]),v._v(" "),t("ul",[t("li",[v._v("数据库连接池有dbcp、c3p0、druid")]),v._v(" "),t("li",[v._v("本地缓存有ehcache、要用中心缓存有redis、tail")]),v._v(" "),t("li",[v._v("服务化有dubbo、跨语言可以用thrift")]),v._v(" "),t("li",[v._v("分布式任务调度可以考虑schedulex")]),v._v(" "),t("li",[v._v("搜索可以选es、solr")]),v._v(" "),t("li",[v._v("更高级一点图片存储可以用七牛、im可以用融云/环信、音视频这块声网做得比较成熟，所有这些都提供了各个开发版本的sdk，接入简单")])]),v._v(" "),t("p",[v._v("只要你有的技术方面的需求，绝大多数业界已经有了成熟的解决方案了，根本不需要去专门自己搞一套。因此我认为轻易一定不要造轮子，如果一定要造轮子，那么请想清楚下面几个问题：")]),v._v(" "),t("ul",[t("li",[v._v("你要做的事情是否当前已经有了类似解决方案？")]),v._v(" "),t("li",[v._v("如果有，那么你自己做的这一套东西和类似解决方案的差异点在哪里？假设不用你这套，基于已有的解决方案稍加改造是否就能达到目的？")]),v._v(" "),t("li",[v._v("如果没有，那么为什么之前没有？是你们公司这种场景是独一无二的？还是这种场景对应的解决方案根本就是不可行的所以之前没人去搞？")])]),v._v(" "),t("p",[v._v("如果想清楚了这些问题，那么就去干吧。")]),v._v(" "),t("h2",{attrs:{id:"去提升看问题的高度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#去提升看问题的高度"}},[v._v("#")]),v._v(" 去提升看问题的高度")]),v._v(" "),t("p",[v._v("过去有太多人在我的公众号或者博客下反馈了一个问题：在这个公司，整天做着增删改查的工作，对自己一点都没有提高。")]),v._v(" "),t("p",[v._v("对于这种看法，说难听点就是四个字----目光短浅。我们看：")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/%E9%98%BF%E9%87%8C%E4%B8%80%E5%B9%B4_%E8%81%8A%E8%81%8A%E6%88%91%E6%88%90%E9%95%BF%E4%BA%86%E4%BB%80%E4%B9%88/002.jpg",alt:"提高看问题的视野"}})]),v._v(" "),t("p",[v._v("如果以普通的视角去看，那么一颗树那也就只是一棵树而已，但是如果跳脱出目前的视角，站在更高的角度去看，它其实是森林的一部分。你的主管并不是因为他是你的主管所以他就应该你比更高瞻远瞩，而是因为他看问题的高度比你更高、想得更远、做得更深，所以才成为了你的主管。")]),v._v(" "),t("p",[v._v("把这个问题说得实际点：")]),v._v(" "),t("ul",[t("li",[v._v("假设今天你负责的是一个系统，那么你仅仅是把这个系统的基本原理搞懂了？还是可以把上下游有几个系统、每个系统之间如何调用、依赖方式都理顺？")]),v._v(" "),t("li",[v._v("假设今天你负责的是一块业务，那么你仅仅把自己负责的功能点弄清楚了？还是你可以从最上游开始，到你负责的系统，再到最下游，都思考得非常透彻？")])]),v._v(" "),t("p",[v._v("今天与其在抱怨没有机会、抱怨公司对自己能力没有提升，为什么不去思考机会为什么降临在别人头上不降临在你头上？为什么别人可以从小公司写着一样的增删改查走向BAT而你年复一年还在小公司写着增删改查？当你真正能转变自己的思维模式，跳脱出现在的圈子往更高一个层次去看问题、去提升自己，我相信总会有发光发热的一天的。")]),v._v(" "),t("p",[v._v("同样在阿里巴巴，马老师思考自然、思考环保、思考人类的发展，你的主管思考团队未来的方向和打法，我们在思考如何把某个客户需求完整落地，这就是高度，你未必能想到马老师想的，但是你对标层级高一点的人，一步一步尝试往他们的高度去靠。")]),v._v(" "),t("p",[v._v("总而言之：眼界决定高度，多看、多想、多保持好奇心、多问几个为什么，久而久之自然就迈上了一个新的台阶。")]),v._v(" "),t("h2",{attrs:{id:"学会总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学会总结"}},[v._v("#")]),v._v(" 学会总结")]),v._v(" "),t("p",[v._v("需求、项目的复盘是非常重要的一部分内容，然而我之前见过的太多团队、太多Leader，只顾着一个迭代接着一个迭代，一个版本接着一个版本，只满足于把需求做好，而忽略了总结的重要性。")]),v._v(" "),t("p",[v._v("我认为大到项目、小到需求，如果在完成之后缺乏总结那么某种程度上来说是失败的，可以总结的点非常多：")]),v._v(" "),t("ul",[t("li",[v._v("通过这个项目/需求，是否吃透了某一块业务，搞懂了来龙去脉")]),v._v(" "),t("li",[v._v("通过这个项目/需求，是否充分理解了公司某个技术框架/基础组件的用法")]),v._v(" "),t("li",[v._v("在整个项目的设计上，有哪些做的不好的地方")]),v._v(" "),t("li",[v._v("在整个项目的开发（针对程序员而言），是否踩了坑，犯了低级的错误")]),v._v(" "),t("li",[v._v("在整个项目的进度把控上、人员安排上、上下游协调上，是否存在不足之处")]),v._v(" "),t("li",[v._v("经历了某次大促的值班，是否对可以熟练使用公司的监控工具，遇到突发事件，是否快速有效地进行了解决")])]),v._v(" "),t("p",[v._v("任何工作一定对个人都是有提升的，但是不会总结的人，在每个项目/需求中成长的东西都是散的，久而久之就忘了。通过充分的总结之后，犯过的错误我们不会二次再犯，理清楚的业务的来龙去脉铭记在心，对自己是一种提升，分享给别人对别人也是很大的帮助。")]),v._v(" "),t("p",[v._v("失败者失败的原因各有不同，成功者的做事方式总是相似的，从宏观角度去看，我认为总结就是成功者之所以能成功，很重要一个原因。")]),v._v(" "),t("h2",{attrs:{id:"选择大于努力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择大于努力"}},[v._v("#")]),v._v(" 选择大于努力")]),v._v(" "),t("p",[v._v("好吧，我承认调皮了，但是这一段我也是很真诚的！")]),v._v(" "),t("p",[v._v("人，努力是最重要的，但是选择也非常重要。有能力是非常好的，有能力的同时，一个好的Leader、一个好的团队将会让你在平时工作中感到无比舒心，将会让你有家一般的温暖，更能将你的能力最大化！")]),v._v(" "),t("p",[v._v("最后，非常重要的一点：不要害怕面试。通过面试才能发现不足，才能知道未来在技术道路上还需要在哪些方面进行提高，在面试的结尾，你也可以询问面试官自己有什么不足，面试官一定会给到你最诚恳的建议！")]),v._v(" "),t("p",[v._v("期待和每一个优秀的你一起共事。")])])}),[],!1,null,null,null);_.default=i.exports}}]);