(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{521:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("引用自："),s("a",{attrs:{href:"https://my.oschina.net/liyuj/blog/874929",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用flatten-maven-plugin对发布的POM进行精简"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("使用maven开发的模块化应用，可以发布出去供他人使用，比如各种开源库，使用时，要么是继承，要么是以依赖的形式引入。但我们看各种库的pom.xml文件，通常都比较简单，一般只有一些必要的依赖信息，作为开发者，通常认为使用者也就需要这些信息。但是真正开发时，对应模块的pom可能比较复杂，可能要使用各种插件，引用各种依赖，组件间有继承关系，甚至根据不同的参数走不同的分支，即使用profile机制等，maven默认在部署时，会保留对应模块中的pom的所有信息，不会做改动。这样就给模块的发布带来了一定的麻烦，如果直接发布这样的pom.xml，是可能给使用者造成干扰的，出了问题又很难进行定位。")]),t._v(" "),s("p",[t._v("解决这个问题有很多的做法，比如构建两个工程，一个用于开发，一个用于版本发布，两个工程的pom是不同的，这样看上去也更符合软件开发的常规流程，另外，也可以考虑禁用maven默认的deloy过程，然后直接调用 "),s("code",[t._v("deploy:deploy-file")]),t._v(" 单独部署某个文件。总之，不管怎样，办法肯定是有的。")]),t._v(" "),s("p",[t._v("而本文的目的，是想介绍一种新的方式，来优雅地解决这个问题，也许实际开发中并不需要这样做。")]),t._v(" "),s("p",[t._v("具体做法是，使用社区专门针对这个问题开发的插件，即Maven Flatten Plugin，这个插件使用起来非常简单，如下：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.codehaus.mojo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flatten-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flatten"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("process-resources"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flatten"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("这个插件的作用是，生成一个压缩版的pom.xml文件，然后在install和deploy阶段使用压缩后的pom.xml文件，替换原来的pom.xml文件，具体压缩策略如下：")]),t._v(" "),s("ul",[s("li",[t._v("和构建有关的元素会被删除；")]),t._v(" "),s("li",[t._v("和开发有关的元素默认会被删除；")]),t._v(" "),s("li",[t._v("只包含构件的使用者必须的一些信息；")]),t._v(" "),s("li",[t._v("变量会被解析；")]),t._v(" "),s("li",[t._v("上级关系会被解析，然后被压缩删除；")]),t._v(" "),s("li",[t._v("构建时实际使用的profile会被评估，视情况处理；")]),t._v(" "),s("li",[t._v("由JDK或者OS驱动的profile会被保留，需要时可以动态地控制依赖。")])]),t._v(" "),s("p",[t._v("在默认的压缩逻辑下，插件如何处理各种元素，可以看这里。 下面会重点介绍如何通过各种参数来控制压缩的过程：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("embedBuildProfileDependencies")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("由OS或者JDK的不同而触发的profile，可能根据环境的不同而产生不同的依赖，但是由属性等触发的profile，就不确定了，如果属性设置为true，profile中的依赖会直接写入生成的pom中，如果设置为false，所有的profile信息都会保留,默认是false。")])]),t._v(" "),s("tr",[s("td",[t._v("flattenMode")]),t._v(" "),s("td",[t._v("FlattenMode")]),t._v(" "),s("td",[t._v("插件预定义了若干种压缩模式，下面会详述。")])]),t._v(" "),s("tr",[s("td",[t._v("flattenedPomFilename")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("生成的压缩后的"),s("code",[t._v("pom.xml")]),t._v("文件的文件名，默认为"),s("code",[t._v(".flattened-pom.xml")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[t._v("outputDirectory")]),t._v(" "),s("td",[t._v("File")]),t._v(" "),s("td",[t._v("生成的压缩后的"),s("code",[t._v("pom.xml")]),t._v("文件的存放位置，默认为"),s("code",[t._v("${project.basedir}")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[t._v("pomElements")]),t._v(" "),s("td",[t._v("FlattenDescriptor")]),t._v(" "),s("td",[t._v("该元素定义了如何处理额外的元素，如果可能，尽量使用"),s("code",[t._v("flattenMode")]),t._v("，这个元素仅仅用于进一步提高灵活性，它可以控制具体的某个元素是保留还是删除，比如要指定删除repositories，可以这样："),s("code",[t._v("<pomElements><repositories>flatten</repositories></pomElements>")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[t._v("updatePomFile")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("插件默认只会处理packaging属性为非pom的，如果要处理packaging为pom的，可将本属性值设置为true。")])])])]),t._v(" "),s("p",[t._v("插件预定义了若干种模式，可以满足若干种常见的场景，这些模式定义在org.codehaus.mojo.flatten.FlattenMode枚举中，具体可以看代码，本文简单描述如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("模式")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("minimum")]),t._v(" "),s("td",[t._v("不推荐使用，会展开"),s("code",[t._v("pluginRepositories")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[t._v("bom")]),t._v(" "),s("td",[t._v("会保留"),s("code",[t._v("dependencyManagement")]),t._v("，展开"),s("code",[t._v("properties")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[t._v("oss")]),t._v(" "),s("td",[t._v("推荐开源项目使用，会展开"),s("code",[t._v("ciManagement")]),t._v("、"),s("code",[t._v("contributors")]),t._v("、"),s("code",[t._v("distributionManagement")]),t._v("、"),s("code",[t._v("inceptionYear")]),t._v("、"),s("code",[t._v("issueManagement")]),t._v("、"),s("code",[t._v("mailingLists")]),t._v("、"),s("code",[t._v("organization")]),t._v("、"),s("code",[t._v("prerequisites")])])]),t._v(" "),s("tr",[s("td",[t._v("ossrh")]),t._v(" "),s("td",[t._v("会展开"),s("code",[t._v("name")]),t._v("、"),s("code",[t._v("description")]),t._v("、"),s("code",[t._v("url")]),t._v("、"),s("code",[t._v("scm")]),t._v("、"),s("code",[t._v("developers")])])]),t._v(" "),s("tr",[s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("会展开"),s("code",[t._v("repositories")])])]),t._v(" "),s("tr",[s("td",[t._v("clean")]),t._v(" "),s("td",[t._v("删除全部可选元素")])])])]),t._v(" "),s("p",[t._v("具体可以看"),s("a",{attrs:{href:"https://www.mojohaus.org/flatten-maven-plugin/apidocs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlattenMode的javadoc"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("pomElement处理方式")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("expand")]),t._v(" "),s("td",[t._v("Take the element from the effective POM.")])]),t._v(" "),s("tr",[s("td",[t._v("flatten")]),t._v(" "),s("td",[t._v("Flatten the element.")])]),t._v(" "),s("tr",[s("td",[t._v("interpolate")]),t._v(" "),s("td",[t._v("Take the element from the interpolated POM (original POM with variables interpolated).")])]),t._v(" "),s("tr",[s("td",[t._v("keep")]),t._v(" "),s("td",[t._v("Take the element untouched from the original POM.")])]),t._v(" "),s("tr",[s("td",[t._v("remove")]),t._v(" "),s("td",[t._v("Remove the element entirely so it will not be present in flattened POM.")])]),t._v(" "),s("tr",[s("td",[t._v("resolve")]),t._v(" "),s("td",[t._v("Take the element from the resolved POM.")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);