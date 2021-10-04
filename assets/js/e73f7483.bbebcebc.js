"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46396],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=p,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,u=new Array(o);u[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,u[1]=a;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57573:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),u=["components"],a={},i=void 0,s={unversionedId:"puppeteer.mouse.up",id:"version-10.1.0/puppeteer.mouse.up",isDocsHomePage:!1,title:"puppeteer.mouse.up",description:"Home &gt; puppeteer &gt; Mouse &gt; up",source:"@site/versioned_docs/version-10.1.0/puppeteer.mouse.up.md",sourceDirName:".",slug:"/puppeteer.mouse.up",permalink:"/puppeteer/docs/puppeteer.mouse.up",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.mouse.up.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.mouse.move",permalink:"/puppeteer/docs/puppeteer.mouse.move"},next:{title:"puppeteer.mouse.wheel",permalink:"/puppeteer/docs/puppeteer.mouse.wheel"}},l=[{value:"Mouse.up() method",id:"mouseup-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:l};function m(e){var t=e.components,r=(0,p.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse"},"Mouse")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.mouse.up"},"up")),(0,o.kt)("h2",{id:"mouseup-method"},"Mouse.up() method"),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"up(options?: MouseOptions): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.mouseoptions"},"MouseOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional ",(0,o.kt)("code",null,"MouseOptions"),".")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);