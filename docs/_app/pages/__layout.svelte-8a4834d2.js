import{S,i as z,s as C,e as y,t as K,k as T,c as w,a as m,g as Q,d,n as M,b as a,D as _e,E as Z,f as E,F as p,G as ie,h as Ae,C as I,H as ae,I as te,J as x,K as $,r as q,u as b,w as H,x as k,j,m as W,o as O,v as P,L as Ie,M as je,N as We,O as ge,l as ee,P as Oe,Q as Pe,R as Se,T as ze}from"../chunks/index-bcc14066.js";import{t as Ce,s as De}from"../chunks/TableOfContent-fa0561d2.js";import{w as Ne}from"../chunks/index-f8e4721c.js";import{_ as G}from"../chunks/preload-helper-8ac02794.js";import{s as me}from"../chunks/index-79a199b2.js";function pe(i,e,s){const t=i.slice();return t[2]=e[s],t}function ve(i){let e,s,t=i[2].text+"",r,l,n,o,c,u;function h(){return i[1](i[2])}return{c(){e=y("li"),s=y("a"),r=K(t),n=T(),this.h()},l(_){e=w(_,"LI",{class:!0});var f=m(e);s=w(f,"A",{href:!0});var g=m(s);r=Q(g,t),g.forEach(d),n=M(f),f.forEach(d),this.h()},h(){a(s,"href",l="#"+i[2].id),a(e,"class",o=_e(i[2].type)+" svelte-1sm97tj"),Z(e,"selected",i[2].selected)},m(_,f){E(_,e,f),p(e,s),p(s,r),p(e,n),c||(u=ie(e,"click",h),c=!0)},p(_,f){i=_,f&1&&t!==(t=i[2].text+"")&&Ae(r,t),f&1&&l!==(l="#"+i[2].id)&&a(s,"href",l),f&1&&o!==(o=_e(i[2].type)+" svelte-1sm97tj")&&a(e,"class",o),f&1&&Z(e,"selected",i[2].selected)},d(_){_&&d(e),c=!1,u()}}}function Te(i){let e,s=i[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=ve(pe(i,s,r));return{c(){e=y("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=w(r,"UL",{class:!0});var l=m(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(d),this.h()},h(){a(e,"class","list-none")},m(r,l){E(r,e,l);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(r,[l]){if(l&1){s=r[0];let n;for(n=0;n<s.length;n+=1){const o=pe(r,s,n);t[n]?t[n].p(o,l):(t[n]=ve(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},i:I,o:I,d(r){r&&d(e),ae(t,r)}}}function Me(i,e,s){let t;return te(i,Ce,l=>s(0,t=l)),[t,l=>De(l.id)]}class Be extends S{constructor(e){super(),z(this,e,Me,Te,C,{})}}function Ve(i){let e,s,t;return{c(){e=x("svg"),s=x("polyline"),this.h()},l(r){e=$(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=m(e);s=$(l,"polyline",{points:!0}),m(s).forEach(d),l.forEach(d),this.h()},h(){a(s,"points","6 9 12 15 18 9"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width",i[0]),a(e,"height",i[0]),a(e,"fill","none"),a(e,"viewBox","0 0 24 24"),a(e,"stroke","currentColor"),a(e,"stroke-width",i[1]),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round"),a(e,"class",t="feather feather-chevron-down "+i[2])},m(r,l){E(r,e,l),p(e,s)},p(r,[l]){l&1&&a(e,"width",r[0]),l&1&&a(e,"height",r[0]),l&2&&a(e,"stroke-width",r[1]),l&4&&t!==(t="feather feather-chevron-down "+r[2])&&a(e,"class",t)},i:I,o:I,d(r){r&&d(e)}}}function Re(i,e,s){let{size:t="24"}=e,{strokeWidth:r=2}=e,{class:l=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),i.$$set=n=>{"size"in n&&s(0,t=n.size),"strokeWidth"in n&&s(1,r=n.strokeWidth),"class"in n&&s(2,l=n.class)},[t,r,l]}class Le extends S{constructor(e){super(),z(this,e,Re,Ve,C,{size:0,strokeWidth:1,class:2})}}function Fe(i){let e,s,t;return{c(){e=x("svg"),s=x("path"),this.h()},l(r){e=$(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=m(e);s=$(l,"path",{d:!0}),m(s).forEach(d),l.forEach(d),this.h()},h(){a(s,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width",i[0]),a(e,"height",i[0]),a(e,"fill","none"),a(e,"viewBox","0 0 24 24"),a(e,"stroke","currentColor"),a(e,"stroke-width",i[1]),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round"),a(e,"class",t="feather feather-github "+i[2])},m(r,l){E(r,e,l),p(e,s)},p(r,[l]){l&1&&a(e,"width",r[0]),l&1&&a(e,"height",r[0]),l&2&&a(e,"stroke-width",r[1]),l&4&&t!==(t="feather feather-github "+r[2])&&a(e,"class",t)},i:I,o:I,d(r){r&&d(e)}}}function Ue(i,e,s){let{size:t="24"}=e,{strokeWidth:r=2}=e,{class:l=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),i.$$set=n=>{"size"in n&&s(0,t=n.size),"strokeWidth"in n&&s(1,r=n.strokeWidth),"class"in n&&s(2,l=n.class)},[t,r,l]}class Ge extends S{constructor(e){super(),z(this,e,Ue,Fe,C,{size:0,strokeWidth:1,class:2})}}function qe(i){let e,s,t;return{c(){e=x("svg"),s=x("path"),this.h()},l(r){e=$(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=m(e);s=$(l,"path",{d:!0}),m(s).forEach(d),l.forEach(d),this.h()},h(){a(s,"d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width",i[0]),a(e,"height",i[0]),a(e,"fill","none"),a(e,"viewBox","0 0 24 24"),a(e,"stroke","currentColor"),a(e,"stroke-width",i[1]),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round"),a(e,"class",t="feather feather-moon "+i[2])},m(r,l){E(r,e,l),p(e,s)},p(r,[l]){l&1&&a(e,"width",r[0]),l&1&&a(e,"height",r[0]),l&2&&a(e,"stroke-width",r[1]),l&4&&t!==(t="feather feather-moon "+r[2])&&a(e,"class",t)},i:I,o:I,d(r){r&&d(e)}}}function He(i,e,s){let{size:t="24"}=e,{strokeWidth:r=2}=e,{class:l=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),i.$$set=n=>{"size"in n&&s(0,t=n.size),"strokeWidth"in n&&s(1,r=n.strokeWidth),"class"in n&&s(2,l=n.class)},[t,r,l]}class Je extends S{constructor(e){super(),z(this,e,He,qe,C,{size:0,strokeWidth:1,class:2})}}function Ke(i){let e,s,t,r,l,n,o,c,u,h,_;return{c(){e=x("svg"),s=x("circle"),t=x("line"),r=x("line"),l=x("line"),n=x("line"),o=x("line"),c=x("line"),u=x("line"),h=x("line"),this.h()},l(f){e=$(f,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var g=m(e);s=$(g,"circle",{cx:!0,cy:!0,r:!0}),m(s).forEach(d),t=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(t).forEach(d),r=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(r).forEach(d),l=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(l).forEach(d),n=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(n).forEach(d),o=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(o).forEach(d),c=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(c).forEach(d),u=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(u).forEach(d),h=$(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),m(h).forEach(d),g.forEach(d),this.h()},h(){a(s,"cx","12"),a(s,"cy","12"),a(s,"r","5"),a(t,"x1","12"),a(t,"y1","1"),a(t,"x2","12"),a(t,"y2","3"),a(r,"x1","12"),a(r,"y1","21"),a(r,"x2","12"),a(r,"y2","23"),a(l,"x1","4.22"),a(l,"y1","4.22"),a(l,"x2","5.64"),a(l,"y2","5.64"),a(n,"x1","18.36"),a(n,"y1","18.36"),a(n,"x2","19.78"),a(n,"y2","19.78"),a(o,"x1","1"),a(o,"y1","12"),a(o,"x2","3"),a(o,"y2","12"),a(c,"x1","21"),a(c,"y1","12"),a(c,"x2","23"),a(c,"y2","12"),a(u,"x1","4.22"),a(u,"y1","19.78"),a(u,"x2","5.64"),a(u,"y2","18.36"),a(h,"x1","18.36"),a(h,"y1","5.64"),a(h,"x2","19.78"),a(h,"y2","4.22"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width",i[0]),a(e,"height",i[0]),a(e,"fill","none"),a(e,"viewBox","0 0 24 24"),a(e,"stroke","currentColor"),a(e,"stroke-width",i[1]),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round"),a(e,"class",_="feather feather-sun "+i[2])},m(f,g){E(f,e,g),p(e,s),p(e,t),p(e,r),p(e,l),p(e,n),p(e,o),p(e,c),p(e,u),p(e,h)},p(f,[g]){g&1&&a(e,"width",f[0]),g&1&&a(e,"height",f[0]),g&2&&a(e,"stroke-width",f[1]),g&4&&_!==(_="feather feather-sun "+f[2])&&a(e,"class",_)},i:I,o:I,d(f){f&&d(e)}}}function Qe(i,e,s){let{size:t="24"}=e,{strokeWidth:r=2}=e,{class:l=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),i.$$set=n=>{"size"in n&&s(0,t=n.size),"strokeWidth"in n&&s(1,r=n.strokeWidth),"class"in n&&s(2,l=n.class)},[t,r,l]}class Xe extends S{constructor(e){super(),z(this,e,Qe,Ke,C,{size:0,strokeWidth:1,class:2})}}const ne="darkModeDeactivated",J=Ne(!0);function Ye(){localStorage.getItem(ne)=="true"&&J.set(!1),J.subscribe(i=>{i?localStorage.removeItem(ne):localStorage.setItem(ne,"true")})}function Ze(i){let e,s;return e=new Je({props:{class:""}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function et(i){let e,s;return e=new Xe({props:{class:"hover:animate-spin"}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function tt(i){let e,s,t,r,l,n;const o=[et,Ze],c=[];function u(h,_){return h[0]?0:1}return s=u(i),t=c[s]=o[s](i),{c(){e=y("span"),t.c(),this.h()},l(h){e=w(h,"SPAN",{class:!0});var _=m(e);t.l(_),_.forEach(d),this.h()},h(){a(e,"class","cursor-pointer")},m(h,_){E(h,e,_),c[s].m(e,null),r=!0,l||(n=ie(e,"click",i[1]),l=!0)},p(h,[_]){let f=s;s=u(h),s!==f&&(q(),b(c[f],1,1,()=>{c[f]=null}),H(),t=c[s],t||(t=c[s]=o[s](h),t.c()),k(t,1),t.m(e,null))},i(h){r||(k(t),r=!0)},o(h){b(t),r=!1},d(h){h&&d(e),c[s].d(),l=!1,n()}}}function rt(i,e,s){let t;te(i,J,l=>s(0,t=l));function r(){J.update(l=>!l)}return[t,r]}class st extends S{constructor(e){super(),z(this,e,rt,tt,C,{})}}const lt=()=>{const i=Ie("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session}},nt={subscribe(i){return lt().page.subscribe(i)}};function ke(i,e,s){const t=i.slice();return t[6]=e[s],t}function it(i){let e;return{c(){e=K(i[3])},l(s){e=Q(s,i[3])},m(s,t){E(s,e,t)},p:I,d(s){s&&d(e)}}}function at(i){let e,s,t;return{c(){e=y("a"),s=K(i[3]),this.h()},l(r){e=w(r,"A",{href:!0,class:!0});var l=m(e);s=Q(l,i[3]),l.forEach(d),this.h()},h(){a(e,"href",t="/easy-rpc-docs/"+i[0].path),a(e,"class","w-full")},m(r,l){E(r,e,l),p(e,s)},p(r,l){l&1&&t!==(t="/easy-rpc-docs/"+r[0].path)&&a(e,"href",t)},d(r){r&&d(e)}}}function ot(i){let e,s,t;return{c(){e=y("a"),s=K(i[3]),this.h()},l(r){e=w(r,"A",{href:!0,class:!0});var l=m(e);s=Q(l,i[3]),l.forEach(d),this.h()},h(){a(e,"href",t="/easy-rpc-docs/"+i[0].path),a(e,"class","w-full")},m(r,l){E(r,e,l),p(e,s)},p(r,l){l&1&&t!==(t="/easy-rpc-docs/"+r[0].path)&&a(e,"href",t)},d(r){r&&d(e)}}}function be(i){let e,s,t,r,l;return s=new Le({props:{class:(i[1]?"":"-rotate-90")+" duration-200"}}),{c(){e=y("button"),j(s.$$.fragment),this.h()},l(n){e=w(n,"BUTTON",{class:!0});var o=m(e);W(s.$$.fragment,o),o.forEach(d),this.h()},h(){a(e,"class","p-2 rounded-md hover:bg-slate-300 dark:hover:bg-gray-700 duration-200")},m(n,o){E(n,e,o),O(s,e,null),t=!0,r||(l=ie(e,"click",je(i[4]),!0),r=!0)},p(n,o){const c={};o&2&&(c.class=(n[1]?"":"-rotate-90")+" duration-200"),s.$set(c)},i(n){t||(k(s.$$.fragment,n),t=!0)},o(n){b(s.$$.fragment,n),t=!1},d(n){n&&d(e),P(s),r=!1,l()}}}function ye(i){let e,s,t,r=i[0].children,l=[];for(let o=0;o<r.length;o+=1)l[o]=we(ke(i,r,o));const n=o=>b(l[o],1,1,()=>{l[o]=null});return{c(){e=y("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var c=m(e);for(let u=0;u<l.length;u+=1)l[u].l(c);c.forEach(d),this.h()},h(){a(e,"class","pl-5")},m(o,c){E(o,e,c);for(let u=0;u<l.length;u+=1)l[u].m(e,null);t=!0},p(o,c){if(c&1){r=o[0].children;let u;for(u=0;u<r.length;u+=1){const h=ke(o,r,u);l[u]?(l[u].p(h,c),k(l[u],1)):(l[u]=we(h),l[u].c(),k(l[u],1),l[u].m(e,null))}for(q(),u=r.length;u<l.length;u+=1)n(u);H()}},i(o){if(!t){for(let c=0;c<r.length;c+=1)k(l[c]);We(()=>{s||(s=ge(e,me,{},!0)),s.run(1)}),t=!0}},o(o){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)b(l[c]);s||(s=ge(e,me,{},!1)),s.run(0),t=!1},d(o){o&&d(e),ae(l,o),o&&s&&s.end()}}}function we(i){let e,s;return e=new $e({props:{entry:i[6]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,r){const l={};r&1&&(l.entry=t[6]),e.$set(l)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function ct(i){let e,s,t,r,l,n;function o(f,g){return f[0].children.length==0?ot:f[0].indexPage?at:it}let c=o(i),u=c(i),h=i[0].children.length>0&&be(i),_=i[1]&&i[0].children.length>0&&ye(i);return{c(){e=y("span"),u.c(),s=T(),h&&h.c(),r=T(),_&&_.c(),l=ee(),this.h()},l(f){e=w(f,"SPAN",{class:!0});var g=m(e);u.l(g),s=M(g),h&&h.l(g),g.forEach(d),r=M(f),_&&_.l(f),l=ee(),this.h()},h(){a(e,"class",t="flex justify-between items-center font-bold text-xl rounded-md duration-200 py-2 px-3 m-1 "+(i[2]?"bg-slate-200 dark:bg-gray-800":"hover:bg-slate-200 dark:hover:bg-gray-800"))},m(f,g){E(f,e,g),u.m(e,null),p(e,s),h&&h.m(e,null),E(f,r,g),_&&_.m(f,g),E(f,l,g),n=!0},p(f,[g]){c===(c=o(f))&&u?u.p(f,g):(u.d(1),u=c(f),u&&(u.c(),u.m(e,s))),f[0].children.length>0?h?(h.p(f,g),g&1&&k(h,1)):(h=be(f),h.c(),k(h,1),h.m(e,null)):h&&(q(),b(h,1,1,()=>{h=null}),H()),(!n||g&4&&t!==(t="flex justify-between items-center font-bold text-xl rounded-md duration-200 py-2 px-3 m-1 "+(f[2]?"bg-slate-200 dark:bg-gray-800":"hover:bg-slate-200 dark:hover:bg-gray-800")))&&a(e,"class",t),f[1]&&f[0].children.length>0?_?(_.p(f,g),g&3&&k(_,1)):(_=ye(f),_.c(),k(_,1),_.m(l.parentNode,l)):_&&(q(),b(_,1,1,()=>{_=null}),H())},i(f){n||(k(h),k(_),n=!0)},o(f){b(h),b(_),n=!1},d(f){f&&d(e),u.d(),h&&h.d(),f&&d(r),_&&_.d(f),f&&d(l)}}}function ut(i,e,s){let t,r;te(i,nt,u=>s(5,r=u));let{entry:l}=e,n=!0,o=l.name.replace(/^[0-9]{1,}/,"");function c(u){s(1,n=!n)}return i.$$set=u=>{"entry"in u&&s(0,l=u.entry)},i.$$.update=()=>{i.$$.dirty&33&&s(2,t=decodeURI(r.path.substring(1))==l.path)},[l,n,t,o,c,r]}class $e extends S{constructor(e){super(),z(this,e,ut,ct,C,{entry:0})}}function Ee(i,e,s){const t=i.slice();return t[2]=e[s],t}function xe(i){let e,s;return e=new $e({props:{entry:i[2]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p:I,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function ft(i){let e,s,t=i[0],r=[];for(let n=0;n<t.length;n+=1)r[n]=xe(Ee(i,t,n));const l=n=>b(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=ee()},l(n){for(let o=0;o<r.length;o+=1)r[o].l(n);e=ee()},m(n,o){for(let c=0;c<r.length;c+=1)r[c].m(n,o);E(n,e,o),s=!0},p(n,[o]){if(o&1){t=n[0];let c;for(c=0;c<t.length;c+=1){const u=Ee(n,t,c);r[c]?(r[c].p(u,o),k(r[c],1)):(r[c]=xe(u),r[c].c(),k(r[c],1),r[c].m(e.parentNode,e))}for(q(),c=t.length;c<r.length;c+=1)l(c);H()}},i(n){if(!s){for(let o=0;o<t.length;o+=1)k(r[o]);s=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)b(r[o]);s=!1},d(n){ae(r,n),n&&d(e)}}}function ht(i){const e=[...Object.keys({"../../../routes/__layout.svelte":()=>G(()=>Promise.resolve().then(function(){return vt}),void 0)}),...Object.keys({"../../../routes/index.md":()=>G(()=>import("./index.md-6c6d8220.js"),["pages/index.md-6c6d8220.js","chunks/index-bcc14066.js","chunks/Page-256ef71b.js","assets/Page-9ac59aa8.css","chunks/TableOfContent-fa0561d2.js","chunks/index-f8e4721c.js"]),"../../../routes/1\u{1F4AC} What is easy-rpc/1Overview.md":()=>G(()=>import("./1\u{1F4AC} What is easy-rpc/1Overview.md-12b295d3.js"),["pages/1💬 What is easy-rpc/1Overview.md-12b295d3.js","assets/pages/1💬 What is easy-rpc/1Overview.md-d3cbc6c9.css","chunks/index-bcc14066.js","chunks/Page-256ef71b.js","assets/Page-9ac59aa8.css","chunks/TableOfContent-fa0561d2.js","chunks/index-f8e4721c.js","chunks/index-79a199b2.js"]),"../../../routes/1\u{1F4AC} What is easy-rpc/2Features.md":()=>G(()=>import("./1\u{1F4AC} What is easy-rpc/2Features.md-aa9655bc.js"),["pages/1💬 What is easy-rpc/2Features.md-aa9655bc.js","chunks/index-bcc14066.js","chunks/Page-256ef71b.js","assets/Page-9ac59aa8.css","chunks/TableOfContent-fa0561d2.js","chunks/index-f8e4721c.js"]),"../../../routes/2\u{1F3AD} Roles and Endpoints/index.md":()=>G(()=>import("./2\u{1F3AD} Roles and Endpoints/index.md-42c8c693.js"),["pages/2🎭 Roles and Endpoints/index.md-42c8c693.js","chunks/index-bcc14066.js","chunks/Page-256ef71b.js","assets/Page-9ac59aa8.css","chunks/TableOfContent-fa0561d2.js","chunks/index-f8e4721c.js"]),"../../../routes/3\u{1F58B}\uFE0F Syntax/index.md":()=>G(()=>import("./3\u{1F58B}\uFE0F Syntax/index.md-f1222731.js"),["pages/3🖋️ Syntax/index.md-f1222731.js","chunks/index-bcc14066.js","chunks/Page-256ef71b.js","assets/Page-9ac59aa8.css","chunks/TableOfContent-fa0561d2.js","chunks/index-f8e4721c.js"])})].map(t=>t.replace("../../../routes/","")).map(t=>t.split(".").slice(-2)[0].split("/")).filter(t=>!t.some(r=>r.startsWith("__"))),s=[];return e.forEach(t=>{let r={children:s,path:""};t.forEach(l=>{if(l=="index"){r.indexPage=!0;return}let n=r.children.find(o=>o.name==l);n||(n={path:r.path+l+"/",children:[],name:l,indexPage:!1},r.children.push(n)),r=n})}),[s]}class dt extends S{constructor(e){super(),z(this,e,ht,ft,C,{})}}function _t(i){let e,s,t,r,l,n,o,c,u,h,_,f,g,R,B,re,L,se,F,V,U;h=new Ge({}),f=new st({}),B=new dt({});const le=i[2].default,A=Oe(le,i,i[1],null);return V=new Be({}),{c(){e=y("div"),s=y("div"),t=y("span"),r=y("a"),l=y("span"),n=K("easy-rpc"),o=T(),c=y("span"),u=y("a"),j(h.$$.fragment),_=T(),j(f.$$.fragment),g=T(),R=y("nav"),j(B.$$.fragment),re=T(),L=y("main"),A&&A.c(),se=T(),F=y("section"),j(V.$$.fragment),this.h()},l(v){e=w(v,"DIV",{class:!0});var D=m(e);s=w(D,"DIV",{class:!0});var N=m(s);t=w(N,"SPAN",{class:!0});var X=m(t);r=w(X,"A",{href:!0});var oe=m(r);l=w(oe,"SPAN",{class:!0});var ce=m(l);n=Q(ce,"easy-rpc"),ce.forEach(d),oe.forEach(d),o=M(X),c=w(X,"SPAN",{class:!0});var Y=m(c);u=w(Y,"A",{href:!0});var ue=m(u);W(h.$$.fragment,ue),ue.forEach(d),_=M(Y),W(f.$$.fragment,Y),Y.forEach(d),X.forEach(d),g=M(N),R=w(N,"NAV",{class:!0});var fe=m(R);W(B.$$.fragment,fe),fe.forEach(d),re=M(N),L=w(N,"MAIN",{class:!0});var he=m(L);A&&A.l(he),he.forEach(d),se=M(N),F=w(N,"SECTION",{class:!0});var de=m(F);W(V.$$.fragment,de),de.forEach(d),N.forEach(d),D.forEach(d),this.h()},h(){a(l,"class","text-3xl font-bold"),a(r,"href","/easy-rpc-docs/"),a(u,"href","https://github.com/m1212e/easy-rpc"),a(c,"class","flex items-center space-x-4"),a(t,"class","p-3 flex justify-between items-center head svelte-gg46l3"),a(R,"class","nav svelte-gg46l3"),a(L,"class","page h-full svelte-gg46l3"),a(F,"class","toc svelte-gg46l3"),a(s,"class","bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200 grid-container h-full svelte-gg46l3"),a(e,"class","h-screen"),Z(e,"dark",i[0])},m(v,D){E(v,e,D),p(e,s),p(s,t),p(t,r),p(r,l),p(l,n),p(t,o),p(t,c),p(c,u),O(h,u,null),p(c,_),O(f,c,null),p(s,g),p(s,R),O(B,R,null),p(s,re),p(s,L),A&&A.m(L,null),p(s,se),p(s,F),O(V,F,null),U=!0},p(v,[D]){A&&A.p&&(!U||D&2)&&Pe(A,le,v,v[1],U?ze(le,v[1],D,null):Se(v[1]),null),D&1&&Z(e,"dark",v[0])},i(v){U||(k(h.$$.fragment,v),k(f.$$.fragment,v),k(B.$$.fragment,v),k(A,v),k(V.$$.fragment,v),U=!0)},o(v){b(h.$$.fragment,v),b(f.$$.fragment,v),b(B.$$.fragment,v),b(A,v),b(V.$$.fragment,v),U=!1},d(v){v&&d(e),P(h),P(f),P(B),A&&A.d(v),P(V)}}}async function gt(){return Ye(),{}}function mt(i,e,s){let t;te(i,J,n=>s(0,t=n));let{$$slots:r={},$$scope:l}=e;return i.$$set=n=>{"$$scope"in n&&s(1,l=n.$$scope)},[t,l,r]}class pt extends S{constructor(e){super(),z(this,e,mt,_t,C,{})}}var vt=Object.freeze(Object.defineProperty({__proto__:null,default:pt,load:gt},Symbol.toStringTag,{value:"Module"}));export{pt as default,gt as load};