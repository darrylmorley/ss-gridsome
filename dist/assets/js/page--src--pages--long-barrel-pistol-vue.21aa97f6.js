(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{251:function(t,e,a){},252:function(t,e,a){"use strict";var r=a(251);a.n(r).a},253:function(t,e,a){"use strict";a(166);var r={data:function(){return{searchTerm:""}},computed:{searchResults:function(){var t=this.searchTerm;return t.length<3?[]:this.$search.search({query:t,limit:50})}}},i=(a(252),a(50)),s={name:"Sidebar",components:{Search:Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Search",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"input relative z-50 w-full py-2 px-4 border-2 border-b-2",attrs:{id:"search",type:"text",placeholder:"Search Guns"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._l(t.searchResults,(function(e){return a("g-link",{key:e.id,staticClass:"search-item relative z-50 px-4 uppercase border-2 py-2 rounded",attrs:{to:"/guns/"+e.slug}},[null!=e.variant?a("div",[t._v(t._s(e.condition+" "+e.title+" "+e.variant))]):a("div",[t._v(t._s(e.condition+" "+e.title))])])}))],2)}),[],!1,null,null,null).exports}},n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg rounded-t border-ssblue w-full md:w-1/4"},[a("div",{staticClass:"px-6 py-4 mb-2 mt-4 mb-8"},[a("div",{staticClass:"uppercase tracking-wide text-c2 mb-4"},[t._v("Search")]),a("Search",{staticClass:"min-w-full"}),a("div",{staticClass:"uppercase tracking-wide text-c2 mb-4 mt-12"},[t._v("Gun Type")]),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/air-pistol/"}},[t._v("Air Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0"},[a("g-link",{attrs:{to:"/air-rifle/"}},[t._v("Air Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/long-barrel-pistol/"}},[t._v("Long Barrel Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/pistol-black-powder/"}},[t._v("Pistol - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/blank-pistol/"}},[t._v("Pistol - Blanks")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/rifle/"}},[t._v("Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/rifle-black-powder/"}},[t._v("Rifle - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/shotgun/"}},[t._v("Shotgun")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest"},[a("g-link",{attrs:{to:"/shotgun-silenced/"}},[t._v("Shotgun - Silenced")])],1)],1)])}),[],!1,null,null,null);e.a=n.exports},254:function(t,e,a){"use strict";a(0);var r=a(105),i=(a(106),a(51),a(52),a(53),a(25),a(54),a(15),a(55),a(108),a(109),a(17)),s=(a(167),a(4));function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var o={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,n=e.parent,o=a.info,u=a.showLinks,d=a.showNavigation,p=a.ariaLabel,g=function(t,e){var a=t.currentPage,r=void 0===a?1:a,i=t.totalPages,s=void 0===i?1:i,n=Math.ceil(e/2),l=Math.floor(r-n),o=Math.floor(r+n);s<=e?(l=0,o=s):r<=n?(l=0,o=e):r+n>=s&&(l=s-e,o=s);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:r,total:s,start:l,end:o,pages:c}}(o,a.range),f=g.current,v=g.total,b=g.pages,x=g.start,y=g.end,h=Object(s.d)(n.$route),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;e===f&&(s=a.ariaCurrentLabel);var n={to:c(h,e),exact:!0};return a.activeLinkClass&&(n.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(n.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:a.linkClass,attrs:l({},n,{"aria-label":s.replace("%n",e),"aria-current":f===e})},[i])},k=u?b.map((function(t){return m(t,t,a.ariaLinkLabel)})):[];if(d){var C=a.firstLabel,w=a.prevLabel,L=a.nextLabel,_=a.lastLabel,S=a.ariaFirstLabel,P=a.ariaPrevLabel,O=a.ariaNextLabel,j=a.ariaLastLabel;f>1&&k.unshift(m(f-1,w,P)),x>0&&k.unshift(m(1,C,S)),f<v&&k.push(m(f+1,L,O)),y<v&&k.push(m(v,_,j))}return k.length<2?null:t("nav",l({},i,{attrs:{role:"navigation","aria-label":p}}),k)}};function c(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(s.g)(t)+"/".concat(e).concat(a):t}a(107);a.d(e,"a",(function(){return o}))},266:function(t,e,a){},267:function(t,e){},287:function(t,e,a){"use strict";var r=a(266);a.n(r).a},288:function(t,e,a){"use strict";var r=a(267),i=a.n(r);e.default=i.a},304:function(t,e,a){"use strict";a.r(e);var r=a(253),i=a(254),s={components:{Sidebar:r.a,Pager:i.a}},n=(a(287),a(50)),l=a(288),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-1/3"},[a("Sidebar",{staticClass:"min-w-full mt-12 ml-6"})],1),a("div",{staticClass:"w-2/3 flex flex-wrap justify-around w-full ml-12 mt-12"},t._l(t.$page.allGuns.edges,(function(e){return a("div",{key:e.node.id,staticClass:"max-w-sm rounded-b-lg shadow-lg rounded-b-lg w-1/2 mb-8 border-t-4 border-ssblue"},[a("g-link",{attrs:{to:"guns/"+e.node.slug}},[a("g-image",{staticStyle:{width:"800px","object-contain":"contain"},attrs:{src:e.node.images[0].FullPath,alt:e.node.title}}),a("div",{staticClass:"p-4"},[a("h2",{staticClass:"font-bold uppercase text-xl mt-2"},[t._v(t._s(e.node.title))]),a("h3",{staticClass:"font-semibold"},[t._v("Variant: "+t._s(e.node.variant))]),a("table",[a("tr",[a("td",[t._v("Condition: "+t._s(e.node.condition))])])]),a("p",{staticClass:"font-semibold text-lg mt-2"},[t._v("£"+t._s(e.node.price))])])],1)],1)})),0)]),a("div",{staticClass:"flex justify-center mb-8"},[a("Pager",{attrs:{linkClass:{pageNum:!0},info:t.$page.allGuns.pageInfo}})],1)])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);e.default=o.exports}}]);