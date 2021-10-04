"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79437],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,k=s["".concat(c,".").concat(m)]||s[m]||l[m]||p;return t?n.createElement(k,o(o({ref:r},u),{},{components:t})):n.createElement(k,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<p;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95720:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var n=t(87462),a=t(63366),p=(t(67294),t(3905)),o=["components"],i={},c=void 0,d={unversionedId:"puppeteer.keyboard.sendcharacter",id:"version-10.1.0/puppeteer.keyboard.sendcharacter",isDocsHomePage:!1,title:"puppeteer.keyboard.sendcharacter",description:"Home &gt; puppeteer &gt; Keyboard &gt; sendCharacter",source:"@site/versioned_docs/version-10.1.0/puppeteer.keyboard.sendcharacter.md",sourceDirName:".",slug:"/puppeteer.keyboard.sendcharacter",permalink:"/puppeteer/docs/puppeteer.keyboard.sendcharacter",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.keyboard.sendcharacter.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.keyboard.press",permalink:"/puppeteer/docs/puppeteer.keyboard.press"},next:{title:"puppeteer.keyboard.type",permalink:"/puppeteer/docs/puppeteer.keyboard.type"}},u=[{value:"Keyboard.sendCharacter() method",id:"keyboardsendcharacter-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function s(e){var r=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard"},"Keyboard")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.sendcharacter"},"sendCharacter")),(0,p.kt)("h2",{id:"keyboardsendcharacter-method"},"Keyboard.sendCharacter() method"),(0,p.kt)("p",null,"Dispatches a ",(0,p.kt)("inlineCode",{parentName:"p"},"keypress")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"input")," event. This does not send a ",(0,p.kt)("inlineCode",{parentName:"p"},"keydown")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"keyup")," event."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"sendCharacter(char: string): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"char"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Character to send into the page.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Modifier keys DO NOT effect ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.sendcharacter"},"Keyboard.sendCharacter"),". Holding down ",(0,p.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"page.keyboard.sendCharacter('\u55e8');\n\n")))}s.isMDXComponent=!0}}]);