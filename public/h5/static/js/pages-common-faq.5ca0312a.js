(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-faq"],{"40b6":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{article:{}}},onLoad:function(t){var e=t.id;this.id=e},onShow:function(){this.getNewsDetail()},methods:{back:function(){this.$router.back()},getNewsDetail:function(){var t=this;this.$u.api.index.getFAQ().then((function(e){t.article=e.message}))}}}},"4ae0":function(t,e,i){"use strict";i.r(e);var n=i("40b6"),a=i.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},"9ef7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("1952").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("u-navbar",{attrs:{title:this.article.title,"custom-back":this.back}}),e("v-uni-view",{staticClass:"m-30"},[e("v-uni-text",{staticClass:"d-block font-size-32 text-center"},[this._v(this._s(this.article.title))]),e("v-uni-view",{staticClass:"mt-20 text-white",domProps:{innerHTML:this._s(this.article.content)}})],1)],1)},u=[]},b1f1:function(t,e,i){"use strict";i.r(e);var n=i("9ef7"),a=i("4ae0");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(u);var s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0afa32b2",null,!1,n["a"],void 0);e["default"]=c.exports}}]);