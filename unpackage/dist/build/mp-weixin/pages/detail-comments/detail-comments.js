(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail-comments/detail-comments"],{"2ef4":function(t,n,e){},3982:function(t,n,e){"use strict";(function(t){e("8575"),e("a9ff");o(e("66fd"));var n=o(e("be3d"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"5d69":function(t,n,e){"use strict";var o=e("2ef4"),r=e.n(o);r.a},ab92:function(t,n,e){"use strict";function o(t){return u(t)||a(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,n){if(t){if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{commentsList:[],article_id:"",page:1,pageSize:5,loading:"loading"}},onLoad:function(t){this.article_id=t.id,this.getComments()},onReachBottom:function(){"noMore"!==this.loading&&(this.page++,this.getComments())},methods:{getComments:function(){var t=this;this.$api.get_comments({article_id:this.article_id,page:this.page,pageSize:this.pageSize}).then((function(n){console.log(n);var e=n.data;if(0!==e.length){var r=JSON.parse(JSON.stringify(t.commentsList));r.push.apply(r,o(e)),t.commentsList=r}else t.loading="noMore"}))}}};n.default=s},be3d:function(t,n,e){"use strict";e.r(n);var o=e("da78"),r=e("ddeb");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("5d69");var a,u=e("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},da78:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={commentsBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/comments-box/comments-box")]).then(e.bind(null,"49dc"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"8398"))}},r=function(){var t=this,n=t.$createElement;t._self._c},i=[]},ddeb:function(t,n,e){"use strict";e.r(n);var o=e("ab92"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a}},[["3982","common/runtime","common/vendor"]]]);