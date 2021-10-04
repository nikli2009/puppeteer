"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45982],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(l,".").concat(g)]||c[g]||s[g]||p;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50524:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},l=void 0,u={unversionedId:"puppeteer.page.addstyletag",id:"version-10.1.0/puppeteer.page.addstyletag",isDocsHomePage:!1,title:"puppeteer.page.addstyletag",description:"Home &gt; puppeteer &gt; Page &gt; addStyleTag",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.addstyletag.md",sourceDirName:".",slug:"/puppeteer.page.addstyletag",permalink:"/puppeteer/docs/puppeteer.page.addstyletag",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.addstyletag.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.addscripttag",permalink:"/puppeteer/docs/puppeteer.page.addscripttag"},next:{title:"puppeteer.page.authenticate",permalink:"/puppeteer/docs/puppeteer.page.authenticate"}},d=[{value:"Page.addStyleTag() method",id:"pageaddstyletag-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.addstyletag"},"addStyleTag")),(0,p.kt)("h2",{id:"pageaddstyletag-method"},"Page.addStyleTag() method"),(0,p.kt)("p",null,"Adds a ",(0,p.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired URL or a ",(0,p.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"addStyleTag(options: {\n        url?: string;\n        path?: string;\n        content?: string;\n    }): Promise<ElementHandle>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},"{ url?: string; path?: string; content?: string; }"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle"),">"),(0,p.kt)("p",null,"Promise which resolves to the added tag when the stylesheet's onload fires or when the CSS content was injected into frame."))}c.isMDXComponent=!0}}]);