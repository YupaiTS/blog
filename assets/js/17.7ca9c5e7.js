(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{450:function(e,t,l){"use strict";l.r(t);var r=l(12),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[e._v("git-flow 是在 git branch 和 git tag 基础上封装出来的代码分支管理模型，把实际开发模拟称 master develop feature release hotfix support 几种场景，其中 master 对应发布上线，develop 对应开发，其他几个在不同的情况下出现。通过封装，git-flow 屏蔽了 git branch 等相对来说比较复杂生硬的命令（git branch 还是比较复杂的，尤其是在多分支情况下），简单而且规范的解决了代码分支管理问题。")]),e._v(" "),l("p",[e._v("Git Flow 将 branch 分成2个主要分支和3个临时的辅助分支。")]),e._v(" "),l("p",[l("img",{attrs:{src:"/images/GitFlow%E6%A8%A1%E5%9E%8B/git-flow.png",alt:"git-flow"}})]),e._v(" "),l("p",[e._v("主要分支：")]),e._v(" "),l("ul",[l("li",[e._v("master：永远处在即将发布（production-ready）状态。")]),e._v(" "),l("li",[e._v("develop：最新的开发状态。")])]),e._v(" "),l("p",[e._v("辅助分支：")]),e._v(" "),l("ul",[l("li",[e._v("feature：开发新功能的分支，基于 develop，完成后 merge 回 develop。")]),e._v(" "),l("li",[e._v("release：准备要发布版本的分支，用来修复 bug。基于 develop，完成后 merge 回 develop 和 master。")]),e._v(" "),l("li",[e._v("hotfix：修复 master 上的问题，等不及 release 版本就必须马上上线。基于 master，完成后 merge 回 master 和 develop。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);