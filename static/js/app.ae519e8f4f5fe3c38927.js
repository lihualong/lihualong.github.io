webpackJsonp([0],[,,,function(t,e,s){t.exports=s.p+"static/img/1.90a1c30.png"},function(t,e,s){"use strict";var i=s(1),n=s(52),r=s(39),a=s.n(r),o=s(33),l=s.n(o),c=s(35),u=s.n(c);i.default.use(n.a);var d=[{path:"/",redirect:"/index"},{name:"index",path:"/index",component:a.a},{name:"info",path:"/info",component:l.a},{name:"study",path:"/study",component:u.a}];e.a=new n.a({routes:d})},function(t,e){},function(t,e,s){function i(t){s(26)}var n=s(0)(s(10),s(46),i,null,null);t.exports=n.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=s(2)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(36),n=s.n(i),r=s(34),a=s.n(r);e.default={components:{List:n.a,Note:a.a},data:function(){return{index:0}},computed:{view:function(){return this.index?"note":"list"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{bg:function(){return s(3)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){console.log("course")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(30);s.n(i);s(20),e.default={name:"discover",data:function(){return{swiperOption:{loop:!1,slidesPerView:2,slidesPerColumn:1,slidesOffsetBefore:10,slidesOffsetAfter:10,spaceBetween:20}}},created:function(){console.log("discorver")},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(37),n=s.n(i),r=s(40),a=s.n(r),o=s(38),l=s.n(o);e.default={data:function(){return{}},components:{Course:n.a,User:a.a,Discover:l.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},created:function(){console.log("user")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),n=s(6),r=s.n(n),a=s(4),o=s(7),l=s.n(o),c=s(5);s.n(c);i.default.config.productionTip=!1,i.default.use(l.a),new i.default({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){var i=s(0)(s(8),s(51),null,null,null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(9),s(47),null,null,null);t.exports=i.exports},function(t,e,s){function i(t){s(23)}var n=s(0)(s(11),s(43),i,null,null);t.exports=n.exports},function(t,e,s){function i(t){s(22)}var n=s(0)(s(12),s(42),i,null,null);t.exports=n.exports},function(t,e,s){function i(t){s(21)}var n=s(0)(s(13),s(41),i,"data-v-10ecd2be",null);t.exports=n.exports},function(t,e,s){function i(t){s(25)}var n=s(0)(s(14),s(45),i,"data-v-62483508",null);t.exports=n.exports},function(t,e,s){function i(t){s(24)}var n=s(0)(s(15),s(44),i,"data-v-5d888abe",null);t.exports=n.exports},function(t,e,s){function i(t){s(27)}var n=s(0)(s(16),s(48),i,"data-v-b781d022",null);t.exports=n.exports},function(t,e,s){function i(t){s(29)}var n=s(0)(s(17),s(50),i,null,null);t.exports=n.exports},function(t,e,s){function i(t){s(28)}var n=s(0)(s(18),s(49),i,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",[s("yd-navbar",{attrs:{bgcolor:"#266dbf",color:"#fff",title:"集智AI学院"}},[s("a",{on:{click:function(e){e.preventDefault(),t.$router.go(-1)}},slot:"left"},[s("yd-navbar-back-icon",{attrs:{color:"#fff"}})],1)]),t._v(" "),s("iframe",{attrs:{width:"100%",src:"http://player.youku.com/embed/XMjk3MzI3MjQ5Ng==",frameborder:"0",allowfullscreen:""}}),t._v(" "),s("section"),t._v(" "),s(t.view,{tag:"component"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",[s("yd-navbar",{attrs:{bgcolor:"#266dbf",color:"#fff",title:"集智AI学院"}},[s("a",{on:{click:function(e){e.preventDefault(),t.$router.go(-1)}},slot:"left"},[s("yd-navbar-back-icon",{attrs:{color:"#fff"}})],1)]),t._v(" "),s("section",{staticClass:"course-img cover-bg",staticStyle:{"background-image":"url('./static/assets/timg.jpg')"}}),t._v(" "),s("section",{staticClass:"section1"},[s("h4",{staticClass:"course-title"},[t._v("集智课程名称")]),t._v(" "),s("div",{staticClass:"author-name"},[t._v("\n      李浩然\n    ")])]),t._v(" "),s("section",{staticClass:"table start"},[s("div",{},[s("div",{staticClass:"money"},[t._v("￥400")]),t._v(" "),s("div",{staticClass:"small"},[t._v("上课时间：共六节课")])]),t._v(" "),s("a",{staticClass:"start-btn",attrs:{href:"#/study"}},[t._v("\n      开始学习\n    ")])]),t._v(" "),s("yd-accordion",[s("yd-accordion-item",{attrs:{title:"课程介绍"}},[s("div",{staticClass:"course-content"},[s("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),t._v(" "),s("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])])]),t._v(" "),s("yd-accordion-item",{attrs:{title:"课程大纲"}},[s("ul",{staticClass:"course-flow"},[s("li",{staticClass:"item"},[s("h4",{staticClass:"title"},[t._v("1、机器人")]),t._v(" "),s("div",{staticClass:"content"},[t._v("课程内容")])]),t._v(" "),s("li",{staticClass:"item"},[s("h4",{staticClass:"title"},[t._v("1、机器人")]),t._v(" "),s("div",{staticClass:"content"},[t._v("课程内容")])]),t._v(" "),s("li",{staticClass:"item"},[s("h4",{staticClass:"title"},[t._v("1、机器人")]),t._v(" "),s("div",{staticClass:"content"},[t._v("课程内容")])])])]),t._v(" "),s("yd-accordion-item",{attrs:{title:"相关课程推荐"}},[s("yd-list",{staticClass:"course-comment",attrs:{theme:"5"}},[s("yd-list-item",[s("img",{attrs:{src:"static/assets/timg.jpg"},slot:"img"}),t._v(" "),s("span",{slot:"title"},[t._v("集智高级课程设计")]),t._v(" "),s("yd-list-other",{slot:"other"},[t._v("\n              哈哈\n            ")])],1),t._v(" "),s("yd-list-item",[s("img",{attrs:{src:"static/assets/timg.jpg"},slot:"img"}),t._v(" "),s("span",{slot:"title"},[t._v("集智高级课程设计")]),t._v(" "),s("yd-list-other",{slot:"other"},[t._v("\n              哈哈\n            ")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("yd-layout",{staticClass:"app-page"},[t._v("\n  111111111111\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("section",[s("ul",[s("li",{staticClass:"flexbox-h list-item active"},[s("div",{staticClass:"cover-bg",style:{backgroundImage:"url("+t.bg+")"}},[s("i",{staticClass:"icon iconfont icon-tingzhi"}),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"flex"},[t._v("\n          sdfsdfdsfdsfdsf\n        ")])]),t._v(" "),s("li",{staticClass:"flexbox-h list-item"},[s("div",{staticClass:"cover-bg",style:{backgroundImage:"url("+t.bg+")"}},[s("i",{staticClass:"icon iconfont icon-bofang"}),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"flex"},[t._v("\n          sdfsdfdsfdsfdsf\n        ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h4",[t._v("正在播放：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"other flexbox-h"},[s("span",[t._v("一上线")]),t._v(" "),s("span",[t._v("111分钟")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"other flexbox-h"},[s("span",[t._v("一上线")]),t._v(" "),s("span",[t._v("111分钟")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",[s("keep-alive",[s("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",[s("section",{staticClass:"discover-box"},[s("i",{staticClass:"icon iconfont icon-sousuo"}),t._v(" "),s("input",{attrs:{type:"text"}})]),t._v(" "),s("section",[s("swiper",{staticClass:"discover-swiper",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"flexbox-v"},[t._v("\n        自然语言\n      ")]),t._v(" "),s("swiper-slide",{staticClass:"flexbox-v"},[s("div",{staticClass:"img",staticStyle:{"background-image":"url('../../assets/timg.jpg')"}}),t._v(" "),s("div",{staticClass:"flex content"},[s("div",[t._v("机器学习机器学习机器学习")]),t._v(" "),s("div",[t._v("王老师")]),t._v(" "),s("div",[t._v("80分钟")])]),t._v(" "),s("a",{staticClass:"abs-link",attrs:{href:"#/info"}})]),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide")],1),t._v(" "),s("swiper",{staticClass:"discover-swiper",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"flexbox-v"},[t._v("\n        自然语言\n      ")]),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide")],1),t._v(" "),s("swiper",{staticClass:"discover-swiper",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"flexbox-v"},[t._v("\n        自然语言\n      ")]),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide"),t._v(" "),s("swiper-slide")],1)],1)])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",[i("div",{staticClass:"user"},[i("yd-flexbox",{attrs:{direction:"vertical"}},[i("yd-flexbox-item",[i("img",{attrs:{src:s(3),alt:""}}),t._v(" "),i("div",[t._v("\n          哈哈哈\n        ")])])],1)],1),t._v(" "),i("yd-cell-group",{staticClass:"user-group"},[i("yd-cell-item",{attrs:{arrow:"",type:"link",href:""}},[i("span",{slot:"left"},[t._v("我的资料")])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:"",type:"link",href:""}},[i("span",{slot:"left"},[t._v("修改密码")])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:"",type:"link",href:""}},[i("span",{slot:"left"},[t._v("意见反馈")])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-page g-flexview"},[s("yd-navbar",{attrs:{bgcolor:"#266dbf",color:"#fff",title:"集智AI学院"}}),t._v(" "),s("yd-tab",[s("yd-tab-panel",{attrs:{label:"我的课程"}},[s("course")],1),t._v(" "),s("yd-tab-panel",{attrs:{label:"个人中心"}},[s("user")],1),t._v(" "),s("yd-tab-panel",{attrs:{label:"探索发现"}},[s("discover")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}}],[19]);
//# sourceMappingURL=app.ae519e8f4f5fe3c38927.js.map