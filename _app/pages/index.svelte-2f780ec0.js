import{S as y,i as g,s as C,e as i,c as u,a as E,d as c,b as r,g as F,J as L,L as p,M as f,K as d,N as b}from"../chunks/vendor-83da8221.js";function k(e){let s,t,a,l;return{c(){s=i("div"),t=i("input"),this.h()},l(n){s=u(n,"DIV",{class:!0});var o=E(s);t=u(o,"INPUT",{placeholder:!0,class:!0}),o.forEach(c),this.h()},h(){r(t,"placeholder",e[0]),r(t,"class","svelte-hzkcpa"),r(s,"class","container svelte-hzkcpa")},m(n,o){F(n,s,o),L(s,t),p(t,e[1]),a||(l=[f(t,"input",e[3]),f(t,"input",e[2])],a=!0)},p(n,[o]){o&1&&r(t,"placeholder",n[0]),o&2&&t.value!==n[1]&&p(t,n[1])},i:d,o:d,d(n){n&&c(s),a=!1,b(l)}}}const h="#2196F3";function z(e){return!!e.match("^#?[0-9a-fA-F]{6}$")}function A(e=""){return e.startsWith("#")?e:"#"+e}function D(e=""){return e.substring(0,7)}function _(e){typeof document!="undefined"&&document.documentElement.style.setProperty("--active-color",e)}function I(e,s,t){let a=h,l="";function n({target:m}){const v=D(A(m.value));t(1,l=v),z(l)||(t(0,a=h),isValid=!1),t(0,a=l),_(a)}_(a);function o(){l=this.value,t(1,l)}return[a,l,n,o]}class O extends y{constructor(s){super();g(this,s,I,k,C,{})}}export{O as default};