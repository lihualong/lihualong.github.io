webpackJsonp([5],{104:function(t,e,s){function a(t){s(137)}var i=s(0)(s(114),s(154),a,"data-v-1e6e3818",null);t.exports=i.exports},114:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(23),i=s.n(a);e.default={data:function(){return{id:this.$route.params.id,title:this.$store.state.discover.title,perpage:10,page:0,courses:[],types:[]}},created:function(){var t=this;this.types=this.$store.state.discoverTypes.map(function(e){return{label:e.title,method:function(){t.id=e.id,t.title=e.title,t.getData()}}}),this.getData()},methods:{getData:function(){var t=this;this.$api.classifiedcourse({catalog_id:this.id,perpage:this.perpage,page:this.page}).then(function(e){e.data&&1==e.data.code&&(t.courses=e.data.msg)})}},components:{List:i.a}}},125:function(t,e,s){e=t.exports=s(100)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"DiscoverList.vue",sourceRoot:""}])},137:function(t,e,s){var a=s(125);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(101)("aa20c256",a,!0)},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-view"},[s("navbar",{attrs:{title:t.title}}),t._v(" "),s("filter-bar",{attrs:{filterData:t.types}}),t._v(" "),s("list",{attrs:{courses:t.courses}}),t._v(" "),s("search-bar")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.056654f40677550a13a1.js.map