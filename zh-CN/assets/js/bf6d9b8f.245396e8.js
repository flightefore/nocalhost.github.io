"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2088],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+m:m}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,m=39;var p=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,u=e.className,k=r(),v=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(i),h=N[0],f=N[1],b=a.Children.toArray(e.children),w=[];if(null!=d){var C=v[d];null!=C&&C!==h&&p.some((function(e){return e.value===C}))&&f(C)}var y=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;f(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,i,r,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:y,onClick:y},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9704:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return v}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(5064),s=n(8215),l=n(4996),c=["components"],m={},p="\u5feb\u901f\u5f00\u59cb",d={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"- \u4efb\u4f55\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4 (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...)\u3002 \u5355\u8282\u70b9\u96c6\u7fa4\u5982 Docker Desktop \u548c minikube \u5206\u914d\u81f3\u5c11 4GB \u7684\u5185\u5b58",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh-CN/docs/quick-start",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/quick-start.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629721139,formattedLastUpdatedAt:"8/23/2021",frontMatter:{},sidebar:"docs",previous:{title:"\u4ec0\u4e48\u662f Nocalhost?",permalink:"/zh-CN/docs/introduction"},next:{title:"\u5b89\u88c5 Nocalhost",permalink:"/zh-CN/docs/installation"}},u=[{value:"1. \u5b89\u88c5 Nocalhost VS Code \u63d2\u4ef6",id:"1-\u5b89\u88c5-nocalhost-vs-code-\u63d2\u4ef6",children:[]},{value:"2. \u8fde\u63a5 Kubernetes \u96c6\u7fa4",id:"2-\u8fde\u63a5-kubernetes-\u96c6\u7fa4",children:[]},{value:"3. \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f",id:"3-\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f",children:[]}],k={toc:u};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u672c\u6307\u5357 ",(0,r.kt)("strong",{parentName:"h5"},"\u76ee\u6807:")," \u5b89\u88c5 Nocalhost\uff0c\u4f53\u9a8c\u6838\u5fc3\u529f\u80fd\uff0c\u4eab\u53d7\u4fbf\u6377\u9ad8\u6548\u7684\u4e91\u539f\u751f\u5f00\u53d1\u4f53\u9a8c\u3002 ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"h5"},"\u9884\u8ba1\u9605\u8bfb\u65f6\u95f4:")," 5 \u5206\u949f ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"h5"},"\u524d\u7f6e\u6761\u4ef6:"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u672c\u5730\u6216\u8fdc\u7a0b Kubernetes \u96c6\u7fa4 (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...)\u3002 \u5355\u8282\u70b9\u96c6\u7fa4\u5982 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/kubernetes/"},"Docker Desktop")," \u548c ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," \u5206\u914d\u81f3\u5c11 4GB \u7684\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RBAC")," \u5fc5\u987b\u5728\u4e0a\u8ff0\u673a\u7fa4\u4e2d\u542f\u7528"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u597d\u7684 kubeconfig \u6587\u4ef6")," \u5177\u5907\u547d\u540d\u7a7a\u95f4\u7684\u7ba1\u7406\u5458\u6743\u9650"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes API \u670d\u52a1\u53ef\u4ee5\u5728\u5185\u90e8\u548c\u5916\u90e8\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ul"},"Visual Studio Code (1.52+)")))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Apple Silicon \u652f\u6301 ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6211\u4eec\u5728\u5168\u529b\u5bf9 Apple Silicon \u7684\u652f\u6301\u505a\u4f18\u5316\u3002 \u76ee\u524d\u67d0\u4e9b\u529f\u80fd\u53ef\u80fd\u9700\u8981\u53d8\u901a\u65b9\u5f0f\u5b9e\u73b0\u6216\u4e0d\u53ef\u7528\u3002 "))),(0,r.kt)("h2",{id:"1-\u5b89\u88c5-nocalhost-vs-code-\u63d2\u4ef6"},"1. \u5b89\u88c5 Nocalhost VS Code \u63d2\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00 VScode \u7f16\u8f91\u5668\uff0c\u7136\u540e\u5355\u51fb\u5de6\u4fa7\u680f\u4e2d\u7684 ",(0,r.kt)("img",{src:(0,l.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u8f93\u5165\u6846\u4e2d\u952e\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"nocalhost")),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Nocalhost")," \u63d2\u4ef6\uff0c\u7136\u540e\u5355\u51fb",(0,r.kt)("inlineCode",{parentName:"li"},"\u5b89\u88c5"),"\u6309\u94ae\u8fdb\u884c\u5b89\u88c5\u3002")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/installation/vscode-market.png")}),(0,r.kt)("figcaption",null,"VS Code \u63d2\u4ef6\u5e02\u573a")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"JetBrains \u63d2\u4ef6 ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Nocalhost \u540c\u65f6\u652f\u6301 JetBrains\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"./installation##install-jetbrains-plugin"},"\u5b89\u88c5 JetBrains \u63d2\u4ef6")," "))),(0,r.kt)("h2",{id:"2-\u8fde\u63a5-kubernetes-\u96c6\u7fa4"},"2. \u8fde\u63a5 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u5728\u5de6\u4fa7\u9762\u677f\u70b9\u51fb Nocalhost \u63d2\u4ef6\u6309\u94ae ",(0,r.kt)("img",{className:"svg-icon",src:(0,l.Z)("/img/icons/logo-light.svg"),width:"20"}),"\uff0c \u6253\u5f00 Nocalhost \u63d2\u4ef6."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/installation/vs-plugin.jpg")}),(0,r.kt)("figcaption",null,"VS Code \u8fde\u63a5\u96c6\u7fa4")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8fde\u63a5 Kubernetes \u96c6\u7fa4:"),(0,r.kt)(o.Z,{defaultValue:"kubeconfig",values:[{label:"\u901a\u8fc7 KubeConfig \u8fde\u63a5",value:"kubeconfig"},{label:"\u9ecf\u8d34 KubeConfig \u6587\u672c\u5185\u5bb9",value:"text"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"kubeconfig",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4ece\u672c\u5730\u6587\u4ef6\u5939\u4e2d\u9009\u62e9 ",(0,r.kt)("code",null,"KubeConfig")," \u6587\u4ef6\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u9ed8\u8ba4 KubeConfig")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Nocalhost \u4f1a\u9ed8\u8ba4\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," \u81ea\u52a8\u8bfb\u53d6\u4f60\u7684  ",(0,r.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"\u3002")))),(0,r.kt)(s.Z,{value:"text",mdxType:"TabItem"},(0,r.kt)("p",null,"Past the ",(0,r.kt)("code",null,"KubeConfig")," as a text"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u83b7\u53d6 KubeConfig \u7684\u6587\u672c\u5185\u5bb9")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u67e5\u770b\u5e76\u590d\u5236\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"KubeConfig")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config view --raw --flattern\n")))))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"KubeConfig")," \u6210\u529f\u8bfb\u53d6\u540e\uff0c\u9009\u62e9\u9700\u8981\u8bbf\u95ee\u7684\u673a\u7fa4\uff0c\u7136\u540e\u8fde\u63a5\u5230\u8be5\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u8fde\u63a5\u6210\u529f\u540e\uff0c",(0,r.kt)("strong",{parentName:"p"},"Nocalhost")," \u4f1a\u81ea\u52a8\u663e\u793a\u60a8\u7684\u96c6\u7fa4\u5217\u8868\u3002"),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/installation/cluster-list.jpg")}),(0,r.kt)("figcaption",null,"VS Code \u96c6\u7fa4\u5217\u8868")),(0,r.kt)("h2",{id:"3-\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f"},"3. \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5e94\u7528 \u6211\u4eec\u5c06\u5728\u8fd9\u91cc\u4ee5 bookinfo \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u793a\u4f8b\u3002 \u60a8\u53ef\u4ee5\u9009\u62e9\u5df2\u7ecf\u90e8\u7f72\u5728\u60a8 Kubernetes \u96c6\u7fa4\u4e2d\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u6309\u7167 ",(0,r.kt)("strong",{parentName:"h5"},(0,r.kt)("a",{parentName:"strong",href:"./guides/deploy/deploy-demo"},"\u90e8\u7f72\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f"))," \u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72\u793a\u4f8b\u5e94\u7528\u3002 :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u786e\u4fdd\u60a8\u5df2\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u6210\u529f\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u7136\u540e\uff1a"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u5c55\u5f00\u6811\u76ee\u5f55\uff0c\u627e\u5230\u9700\u8981\u5f00\u53d1\u7684\u5de5\u4f5c\u8d1f\u8f7d"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("img",{className:"svg-icon",src:(0,l.Z)("/img/icons/dev-start.svg"),width:"18"}),"  \u56fe\u6807\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f (",(0,r.kt)("inlineCode",{parentName:"li"},"DevMode"),")"),(0,r.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u6e90\u4ee3\u7801\u672c\u5730\u76ee\u5f55\uff0c\u6216\u8005\u60a8\u53ef\u4ee5\u4ece\u73b0\u6709\u7684 Git \u4ed3\u5e93\u514b\u9686\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ol"},"Nocalhost \u4f1a\u81ea\u52a8\u5728\u65b0\u7a97\u53e3\u4e2d\u542f\u52a8\u5f00\u53d1\u6a21\u5f0f")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/enter-devmode.gif")}),(0,r.kt)("figcaption",null,"\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f")),(0,r.kt)("h2",{parentName:"div",id:"4-\u66f4\u6539\u4ee3\u7801\u5e76\u68c0\u67e5\u7ed3\u679c"},"4. \u66f4\u6539\u4ee3\u7801\u5e76\u68c0\u67e5\u7ed3\u679c"),(0,r.kt)("h3",{parentName:"div",id:"\u5728\u8fdc\u7aef\u5bb9\u5668\u4e2d\u542f\u52a8\u7a0b\u5e8f\u7684\u4e3b\u8fdb\u7a0b"},"\u5728\u8fdc\u7aef\u5bb9\u5668\u4e2d\u542f\u52a8\u7a0b\u5e8f\u7684\u4e3b\u8fdb\u7a0b"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"1.")," \u5728\u8fdc\u7aef Terminal \u4e2d\u4f7f\u7528\u4e0b\u8ff0\u547d\u4ee4\u542f\u52a8\u4e3b\u8fdb\u7a0b"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh run.sh\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:39080"},"http://127.0.0.1:39080")," \u67e5\u770b\u7ed3\u679c"),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/main-process.gif")}),(0,r.kt)("figcaption",null,"\u5728\u8fdc\u7aef Terminal \u4e2d\u542f\u52a8\u4e3b\u8fdb\u7a0b")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7aef\u53e3\u8f6c\u53d1 \u5728\u6211\u4eec\u7684 ",(0,r.kt)("inlineCode",{parentName:"h5"},"bookinfo")," \u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06 port-forward \u9884\u8bbe\u4e3a 39080:9080\uff0c\u8fd9\u610f\u5473\u7740 Nocalhost \u4f1a\u81ea\u52a8\u5c06\u6570\u636e\u4ece\u672c\u5730\u7aef\u53e3 ",(0,r.kt)("strong",{parentName:"h5"},"39080")," \u8f6c\u53d1\u5230",(0,r.kt)("inlineCode",{parentName:"h5"},"\u5f00\u53d1\u5bb9\u5668"),"\u4e0a\u7684\u7aef\u53e3 ",(0,r.kt)("strong",{parentName:"h5"},"9080"),"\u3002 :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"\u4fee\u6539\u4ee3\u7801"},"\u4fee\u6539\u4ee3\u7801"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"1.")," \u4fee\u6539  ",(0,r.kt)("inlineCode",{parentName:"p"},"productpage.py")," \u4e2d\u7684\u4efb\u610f\u4ee3\u7801\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8981"),"\u5fd8\u8bb0\u4fdd\u5b58\u4f60\u7684\u4fee\u6539\u7ed3\u679c\u3002"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"2.")," \u5237\u65b0\u6d4f\u89c8\u5668\u67e5\u770b\u4fee\u6539\u7ed3\u679c"),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/code-change.gif")}),(0,r.kt)("figcaption",null,"\u4fee\u6539\u4ee3\u7801\u5e76\u67e5\u770b\u7ed3\u679c")),(0,r.kt)("p",{parentName:"div"},"\ud83d\udc4d ",(0,r.kt)("strong",{parentName:"p"},"\u606d\u559c!")," \u4f60\u5df2\u7ecf\u901a\u8fc7\u4f7f\u7528 Nocalhost \u4f53\u9a8c\u4e86\u4fbf\u6377\u7684\u4e91\u539f\u751f\u5fae\u670d\u52a1\u5f00\u53d1\u8fc7\u7a0b\u3002"),(0,r.kt)("h2",{parentName:"div",id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u9605\u8bfb ",(0,r.kt)("a",{parentName:"li",href:"./introduction"},"Nocalhost \u7684\u7b80\u4ecb")),(0,r.kt)("li",{parentName:"ul"},"\u8bbf\u95ee",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost"},"\u6211\u4eec\u7684 Github \u4ed3\u5e93")," \u67e5\u770b\u6e90\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://nocalhost.slack.com/"},"Slack \u9891\u9053")," \u6216\u626b\u63cf\u52a0\u5165\u5fae\u4fe1\u7fa4\u3002")),(0,r.kt)("img",{src:(0,l.Z)("/img/nocal-host-wechat.png"),width:"200"}))))}v.isMDXComponent=!0}}]);