!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){var t=function(e,n){"use strict";var o=Object.create(t.prototype),r=0,i=0,s=0,a=[],l=!1,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},p=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var n in e)if(void 0!==t.style[e[n]+"Transform"])return e[n]+"Transform"}return"transform"}();o.options={speed:-2,center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(t){o.options[t]=n[t]}),e||(e=".rellax");var u="string"==typeof e?document.querySelectorAll(e):[e];if(!(u.length>0))throw new Error("The elements you're trying to select don't exist.");if(o.elems=u,o.options.wrapper&&!o.options.wrapper.nodeType){var d=document.querySelector(o.options.wrapper);if(!d)throw new Error("The wrapper you're trying to use don't exist.");o.options.wrapper=d}var f=function(){for(var t=0;t<a.length;t++)o.elems[t].style.cssText=a[t].style;a=[],i=window.innerHeight,s=window.innerWidth,m(),function(){for(var t=0;t<o.elems.length;t++){var e=h(o.elems[t]);a.push(e)}}(),x()},h=function(t){var e=t.getAttribute("data-rellax-percentage"),n=t.getAttribute("data-rellax-speed"),r=t.getAttribute("data-rellax-zindex")||0,a=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,l=o.options.vertical&&(e||o.options.center)?a:0,c=o.options.horizontal&&(e||o.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,p=l+t.getBoundingClientRect().top,u=t.clientHeight||t.offsetHeight||t.scrollHeight,d=c+t.getBoundingClientRect().left,f=t.clientWidth||t.offsetWidth||t.scrollWidth,h=e||(l-p+i)/(u+i),m=e||(c-d+s)/(f+s);o.options.center&&(m=.5,h=.5);var g=n||o.options.speed,x=w(m,h,g),v=t.style.cssText,y="";if(v.indexOf("transform")>=0){var b=v.indexOf("transform"),T=v.slice(b),O=T.indexOf(";");y=O?" "+T.slice(11,O).replace(/\s/g,""):" "+T.slice(11).replace(/\s/g,"")}return{baseX:x.x,baseY:x.y,top:p,left:d,height:u,width:f,speed:g,style:v,transform:y,zindex:r}},m=function(){var t=r;return r=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,!(t==r||!o.options.vertical)},w=function(t,e,n){var r={},i=n*(100*(1-t)),s=n*(100*(1-e));return r.x=o.options.round?Math.round(i):Math.round(100*i)/100,r.y=o.options.round?Math.round(s):Math.round(100*s)/100,r},g=function(){m()&&!1===l&&x(),c(g)},x=function(){for(var t,e=0;e<o.elems.length;e++){var n=(r-a[e].top+i)/(a[e].height+i),l=(0-a[e].left+s)/(a[e].width+s),c=(t=w(l,n,a[e].speed)).y-a[e].baseY,u=t.x-a[e].baseX,d=a[e].zindex,f="translate3d("+(o.options.horizontal?u:"0")+"px,"+(o.options.vertical?c:"0")+"px,"+d+"px) "+a[e].transform;o.elems[e].style[p]=f}o.options.callback(t)};return o.destroy=function(){for(var t=0;t<o.elems.length;t++)o.elems[t].style.cssText=a[t].style;l=!0},f(),window.addEventListener("resize",function(){f()}),g(),o.refresh=f,o};return t})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){"use strict";n.r(e);var o=n(0),r=(new(n.n(o).a)(".rellax"),function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1});r.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,o=200-3*e.length-100*Math.random();this.isDeleting&&(o/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,o=500):(o=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},o)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-rotate"),o=t[e].getAttribute("data-period");n&&new r(t[e],JSON.parse(n),o)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(i)}}]);
//# sourceMappingURL=bundle.js.map