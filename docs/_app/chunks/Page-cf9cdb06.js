import{S as d,i as h,s as m,Q as p,e as v,c as g,a as b,d as u,b as y,f as S,G as T,R as P,T as $,U as A,x as C,u as E,A as I,W as q}from"./index-d9f8f6f5.js";import{a as D,s as O}from"./TableOfContent-2e34c6ff.js";function j(a){let s,i,r,f;const o=a[3].default,t=p(o,a,a[2],null);return{c(){s=v("div"),t&&t.c(),this.h()},l(e){s=g(e,"DIV",{class:!0});var n=b(s);t&&t.l(n),n.forEach(u),this.h()},h(){y(s,"class","text-justify overflow-y-auto h-full svelte-oidmvb")},m(e,n){S(e,s,n),t&&t.m(s,null),a[4](s),i=!0,r||(f=T(s,"scroll",a[1]),r=!0)},p(e,[n]){t&&t.p&&(!i||n&4)&&P(t,o,e,e[2],i?A(o,e[2],n,null):$(e[2]),null)},i(e){i||(C(t,e),i=!0)},o(e){E(t,e),i=!1},d(e){e&&u(s),t&&t.d(e),a[4](null),r=!1,f()}}}function k(a,s,i){let{$$slots:r={},$$scope:f}=s,o,t={},e,n;I(()=>{D(o),o.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(l=>{t[l.id]=l.offsetTop})});function c(){for(const l in t)o.scrollTop>=t[l]&&(n=l,clearTimeout(e),e=setTimeout(()=>{O(n)},100))}function _(l){q[l?"unshift":"push"](()=>{o=l,i(0,o)})}return a.$$set=l=>{"$$scope"in l&&i(2,f=l.$$scope)},[o,c,f,r,_]}class G extends d{constructor(s){super(),h(this,s,k,j,m,{})}}export{G as P};
