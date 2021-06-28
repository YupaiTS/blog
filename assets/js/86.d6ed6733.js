(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{499:function(t,a,e){"use strict";e.r(a);var v=e(12),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cap理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[t._v("#")]),t._v(" CAP理论")]),t._v(" "),e("blockquote",[e("p",[t._v("引用自 "),e("a",{attrs:{href:"https://www.hollischuang.com/archives/666",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的CAP理论"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("1998年，加州大学的计算机科学家 Eric Brewer 提出，分布式系统有三个指标。")]),t._v(" "),e("ul",[e("li",[t._v("Consistency")]),t._v(" "),e("li",[t._v("Availability")]),t._v(" "),e("li",[t._v("Partition tolerance\n它们的第一个字母分别是 C、A、P。")])]),t._v(" "),e("p",[t._v("Eric Brewer 说，这三个指标不可能同时做到。这个结论就叫做 CAP 定理。")])]),t._v(" "),e("p",[t._v("无论你是一个系统架构师，还是一个普通开发，当你开发或者设计一个分布式系统的时候，CAP理论是无论如何也绕不过去的。本文就来介绍一下到底什么是CAP理论，如何证明CAP理论，以及CAP的权衡问题。")]),t._v(" "),e("h2",{attrs:{id:"cap理论概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap理论概述"}},[t._v("#")]),t._v(" CAP理论概述")]),t._v(" "),e("p",[t._v("CAP理论：一个分布式系统最多只能同时满足一致性（Consistency）、可用性（Availability）和分区容错性（Partition tolerance）这三项中的两项。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201807/bg2018071607.jpg",alt:"CAP理论"}})]),t._v(" "),e("blockquote",[e("p",[t._v("读者需要注意的是，CAP理论中的CA和数据库事务中ACID的CA并不完全是一回事。两者中的C都是一致性（Consistency）。CAP中的A值得是可用性（Availability），而ACID中的A指的是原子性（Atomicity），切勿混为一谈。")])]),t._v(" "),e("h2",{attrs:{id:"cap的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap的定义"}},[t._v("#")]),t._v(" CAP的定义")]),t._v(" "),e("h3",{attrs:{id:"consistency-一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistency-一致性"}},[t._v("#")]),t._v(" Consistency 一致性")]),t._v(" "),e("p",[t._v("一致性指 "),e("code",[t._v("all nodes see the same data at the same time")]),t._v("，即更新操作成功并返回客户端完成后，所有节点在同一时间的数据完全一致，所以，一致性，说的就是数据一致性。")]),t._v(" "),e("p",[t._v("对于一致性，可以分为从客户端和服务端两个不同的视角。从客户端来看，一致性主要指的是多并发访问时更新过的数据如何获取的问题。从服务端来看，则是更新如何复制分布到整个系统，以保证数据最终一致。")]),t._v(" "),e("p",[t._v("一致性是因为有并发读写才有的问题，因此在理解一致性问题时，一定要注意结合考虑并发读写的场景。")]),t._v(" "),e("p",[t._v("从客户端角度，多进程并发访问时，更新过的数据在不同进程如何获取的不同策略，决定了不同的一致性。")]),t._v(" "),e("h4",{attrs:{id:"三种一致性策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种一致性策略"}},[t._v("#")]),t._v(" 三种一致性策略")]),t._v(" "),e("p",[t._v("对于关系型数据库，要求更新过的数据能被后续的访问都能看到，这是强一致性。")]),t._v(" "),e("p",[t._v("如果能容忍后续的部分或者全部访问不到，这是弱一致性。")]),t._v(" "),e("p",[t._v("如果经过一段时间后要求能访问到更新后的数据，则是最终一致性。")]),t._v(" "),e("p",[t._v("CAP中说，不可能同时满足的这个一致性指的是强一致性。")]),t._v(" "),e("h3",{attrs:{id:"availability-可用性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#availability-可用性"}},[t._v("#")]),t._v(" Availability 可用性")]),t._v(" "),e("p",[t._v("可用性指 "),e("code",[t._v("Reads and writes always succeed")]),t._v("，即服务一直可用，而且是正常响应时间。")]),t._v(" "),e("p",[t._v("对于一个可用性的分布式系统，每一个非故障的节点必须对每一个请求做出响应。所以，一般我们在衡量一个系统的可用性的时候，都是通过停机时间来计算的。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("可用性分类")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可用水平")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("年可容忍停机时间")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("容错可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99.9999")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("< 1min")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("极高可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99.999")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("< 5min")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("具有故障自动恢复能力的可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99.99")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("< 53 min")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("高可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99.9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("< 8.8h")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("商品可用性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("< 87.6h")])])])]),t._v(" "),e("p",[t._v("通常我们描述一个系统的可用性时，我们说淘宝的系统可用性可以达到5个9，意思就是说他的可用水平是99.999%，即全年停机时间不超过 "),e("code",[t._v("(1-0.99999)*365*24*60 = 5.256 min")]),t._v("，这是一个极高的要求。")]),t._v(" "),e("p",[t._v("好的可用性主要是指系统能够很好的为用户服务，不出现用户操作失败或者访问超时等用户体验不好的情况。一个分布式系统，上下游设计很多系统如负载均衡、WEB服务器、应用代码、数据库服务器等，任何一个节点的不稳定都可以影响可用性。")]),t._v(" "),e("h3",{attrs:{id:"partition-tolerance-分区容错性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#partition-tolerance-分区容错性"}},[t._v("#")]),t._v(" Partition Tolerance 分区容错性")]),t._v(" "),e("p",[t._v("分区容错性指 "),e("code",[t._v("the system continues to operate despite arbitrary message loss or failure of part of the system")]),t._v("，即分布式系统在遇到某节点或网络分区故障的时候，仍然能够对外提供满足一致性和可用性的服务。")]),t._v(" "),e("p",[t._v("分区容错性和扩展性紧密相关。在分布式应用中，可能因为一些分布式的原因导致系统无法正常运转。好的分区容错性要求能够使应用虽然是一个分布式系统，而看上去却好像是在一个可以运转正常的整体。比如现在的分布式系统中有某一个或者几个宕掉了，其他剩下的机器还能够正常运转满足系统需求，或者是机器之间有网络异常，将分布式系统分隔为独立的几个部分，各个部分还能维持分布式系统的运作，这样就具有好的分区容错性。")]),t._v(" "),e("p",[t._v("简单点说，就是在网络中断，消息丢失的情况下，系统如果还能正常工作，就是有比较好的分区容错性。")]),t._v(" "),e("h2",{attrs:{id:"cap的证明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap的证明"}},[t._v("#")]),t._v(" CAP的证明")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.hollischuang.com/wp-content/uploads/2016/03/intro_thumb.png",alt:"CAP基本场景"}})]),t._v(" "),e("p",[t._v("如上图，是我们证明CAP的基本场景，网络中有两个节点N1和N2，可以简单的理解N1和N2分别是两台计算机，他们之间网络可以连通，N1中有一个应用程序A，和一个数据库V，N2也有一个应用程序B2和一个数据库V。现在，A和B是分布式系统的两个部分，V是分布式系统数据存储的两个子数据库。")]),t._v(" "),e("p",[t._v("在满足一致性的时候，N1和N2中的数据是一样的，V0=V0。在满足可用性的时候，用户不管是请求N1或者N2，都会得到立即响应。在满足分区容错性的情况下，N1和N2有任何乙方宕机，或者网络不同的时候，都不会影响N1和N2彼此之间的正常运作。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.hollischuang.com/wp-content/uploads/2016/03/scenario1_thumb.png",alt:"分布式系统正常运转流程"}})]),t._v(" "),e("p",[t._v("如上图，是分布式系统正常运转的流程，用户向N1机器请求数据更新，程序A更新数据库V0为V1，分布式系统将数据进行同步操作M，将V1同步到N2中V0，使得N2中的数据V0也更新为V1，N2中的数据再响应N2的请求。")]),t._v(" "),e("p",[t._v("这里，可以定义N1和N2的数据库V之间的数据是否一样为一致性；外部对N1和N2的请求响应为可用性；N1和N2之间的网络环境为分区容错性。这是正常运作的场景，也是理想的场景，然而现实是残酷的，当错误发生的时候，一致性和可用性还有分区容错性，是否能同时满足，还是说要进行取舍呢？")]),t._v(" "),e("p",[t._v("作为一个分布式系统，它和单机系统的最大区别，就在于网络，现在假设一种极端情况，N1和N2之间的网络断开了，我们要支持这种网络异常，相当于要满足分区容错性，能不能同时满足一致性和响应性呢？还是说要对他们进行取舍。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.hollischuang.com/wp-content/uploads/2016/03/scenario2_thumb.png",alt:"分区间网络断开"}})]),t._v(" "),e("p",[t._v("假设再N1和N2之间网络断开的时候，有用户向N1发送数据更新请求，那N1中的数据V0将被更新为V1，由于网络是断开的，所以分布式系统同步操作M无法成功执行，所以N2中的数据依旧是V0；这个时候，有用户向N2发送数据读取请求，由于数据还没有进行同步，应用程序没办法立即给用户返回最新的数据V1，怎么办？")]),t._v(" "),e("p",[t._v("有两种选择，第一，牺牲数据一致性，保证可用性。响应旧的数据V0给用户；")]),t._v(" "),e("p",[t._v("第二，牺牲可用性，保证数据一致性。阻塞等待，知道网络连接恢复，数据更新操作M完成之后，再给用户响应最新的数据V1。")]),t._v(" "),e("p",[t._v("这个过程，证明了要满足分区容错性的分布式系统，只能再一致性和可用性两者中，选择其中一个。")]),t._v(" "),e("h2",{attrs:{id:"cap权衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap权衡"}},[t._v("#")]),t._v(" CAP权衡")]),t._v(" "),e("p",[t._v("通过CAP理论及前面的证明，我们知道无法同时满足一致性、可用性和分区容错性这三个特性，那要舍弃哪个呢？")]),t._v(" "),e("p",[t._v("我们分三种情况来阐述一下。")]),t._v(" "),e("h3",{attrs:{id:"ca-without-p"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ca-without-p"}},[t._v("#")]),t._v(" CA without P")]),t._v(" "),e("p",[t._v("这种情况在分布式系统中几乎是不存在的。首先在分布式环境下，网络分区是自然的事实。因为分区是必然的，所以如果舍弃P，意味着要舍弃分布式系统。那也就没有必要再讨论CAP理论了。这也是为什么在前面的CAP证明中，我们以系统满足P为前提论述了无法同时满足C和A。")]),t._v(" "),e("p",[t._v("比如我们熟知的关系型数据库，如MySQL和Oracle就是保证了可用性和数据一致性，但是它并不是个分布式系统。一旦关系型数据库要考虑主备同步、集群部署等就必须要把P也考虑进来。")]),t._v(" "),e("p",[t._v("其实，在CAP理论中。C、A、P三者并不是平等的，CAP之父在《Spanner，真时，CAP理论》一文中写道：")]),t._v(" "),e("blockquote",[e("p",[t._v("如果说Spanner真有什么特别之处，那就是谷歌的广域网。Google通过建立私有网络以及强大的网络工程能力来保证P，在多年运营改进的基础上，在生产环境中可以最大程度的减少分区发生，从而实现高可用性。")])]),t._v(" "),e("p",[t._v("从Google的经验中可以得到的结论是，无法通过降低CA来提升P。要想提升系统的分区容错性，需要通过提升基础设施的稳定性来保障。")]),t._v(" "),e("p",[t._v("所以，对于一个分布式系统来说。P是一个基本要求，CAP三者中，只能在CA两者之间做权衡，并且要想尽办法提升P。")]),t._v(" "),e("h3",{attrs:{id:"cp-without-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cp-without-a"}},[t._v("#")]),t._v(" CP without A")]),t._v(" "),e("p",[t._v("如果一个分布式系统不要求强的可用性，即容许系统停机或者长时间无响应的话，就可以在CAP三者中保障CP而舍弃A。")]),t._v(" "),e("p",[t._v("一个保证了CP而舍弃了A的分布式系统，一旦发生网络故障或者消息丢失等情况，就要牺牲用户的体验，等待所有数据全部一致了之后再让用户访问系统。")]),t._v(" "),e("p",[t._v("设计称CP的系统其实也不少，其中最典型的就是很多分布式数据库，它们都是设计成CP的。在发生极端情况时，优先保证数据的强一致性，代价就是舍弃系统的可用性。如Redis、HBase等，还有分布式系统中常用的Zookeeper也是在CAP三者之中选择优先保证CP的。")]),t._v(" "),e("p",[t._v("无论是像Redis、HBase这种分布式存储系统，还是向Zookeeper这种分布式协调组件。数据的一致性是它们最最基本的要求。一个连数据一致性都保证不了的分布式存储是没有意义的。")]),t._v(" "),e("p",[t._v("这里简单介绍一下Zookeeper关于CAP的思考：")]),t._v(" "),e("p",[t._v("Zookeeper是保证了CP（一致性 + 分区容错性）的，即任何时刻对Zookeeper的访问请求能得到一致的数据结果，同时系统对网络分隔具备容错性。但是它不能保证每次服务请求的可用性，也就是在极端环境下，Zookeeper可能会丢弃一些请求，消费者程序需要重新请求才能获得结果。Zookeeper是分布式协调服务，它的职责是保证数据在其管辖下的所有服务之间保持同步、一致。所以就不难理解为什么Zookeeper被设计成CP而不是AP特性的了。")]),t._v(" "),e("h3",{attrs:{id:"ap-without-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ap-without-c"}},[t._v("#")]),t._v(" AP without C")]),t._v(" "),e("p",[t._v("要高可用并允许分区，则需放弃一致性。一旦网络问题发生，节点之间可能会失去联系。为了保证高可用，需要在用户访问时可以马上得到返回，则每个节点只能用本地数据提供服务，而这样会导致全局数据的不一致性。")]),t._v(" "),e("p",[t._v("这种舍弃强一致性而保证系统的分区容错性和可用性的场景和案例非常多。前面我们介绍可用性的时候说到过，很多系统在可用性方面会做很多事情来保证系统的全年可用性可以达到N个9，所以，对于很多业务系统来说，比如淘宝的购物，12306的买票。都是在可用性和一致性之间舍弃了一致性而选择可用性。")]),t._v(" "),e("p",[t._v("你在12306买票的时候肯定遇到过这种场景，当你购买的时候提示你是有票的（但是可能实际已经没票了），你也正常的去输入验证码，下单了。但是过了一会系统提示你下单失败，余票不足。这其实就是先在可用性方面保证系统可以正常的服务，然后在数据的一致性方面做了些牺牲，会影响一些用户体验，但是也不至于造成用户流程的严重阻塞。")]),t._v(" "),e("p",[t._v("但是，我们说很多网站牺牲了一致性，选择了可用性，这其实也不准确的。就比如上面的买票的例子，其实舍弃的只是强一致性。退而求其次保证了最终一致性。也就是说，虽然下单的瞬间，关于车票的库存可能存在数据不一致的情况，但是过了一段时间，还是要保证最终一致性的。")]),t._v(" "),e("p",[t._v("对于多数大型互联网应用的场景，主机众多、部署分散，而且现在的集群规模越来越大，所以节点故障、网络故障是常态，而且要保证服务可用性达到N个9，即保证P和A，舍弃C（退而求其次保证最终一致性）。虽然某些地方会影响客户体验，但没达到造成用户流程的严重程度。")]),t._v(" "),e("h3",{attrs:{id:"适合的才是最好的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适合的才是最好的"}},[t._v("#")]),t._v(" 适合的才是最好的")]),t._v(" "),e("p",[t._v("上面介绍了如何对CAP进行权衡取舍以及典型案例。孰优孰劣，没有定论，只能根据场景定夺，适合的才是最好的。")]),t._v(" "),e("p",[t._v("对于涉及到钱财这样不能有一丝让步的场景，C必须保证。网络发生故障宁可停止服务，这是保证CP，舍弃A。比如前几年支付宝光缆被挖断的事件，在网络出现故障的时候，支付宝就在可用性和数据一致性之间选择数据一致性，用户感受到的是支付宝系统长时间宕机，但是其实背后时无数的工程师在恢复数据，保证数据的一致性。")]),t._v(" "),e("p",[t._v("对于其他场景，比较普遍的做法时选择可用性和分区容错性，舍弃强一致性，退而求其次使用最终一致性来保证数据的安全。这其实时分布式领域的另外一个理论——BASE理论。")]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("无论你是一个架构时，还是一个普通开发，在涉及或开发分布式系统的时候，不可避免的要在CAP中做权衡。需要根据自己的系统的实际情况，选择最适合自己的方案。")])])}),[],!1,null,null,null);a.default=_.exports}}]);