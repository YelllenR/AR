function x(){}const W=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function J(){return Object.create(null)}function N(t){t.forEach(U)}function M(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function qt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function zt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,l){if(r){const o=V(e,n,i,l);t.p(o,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t){return t&&M(t.destroy)?t.destroy:x}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),G=X?t=>requestAnimationFrame(t):x;const E=new Set;function Z(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(Z)}function tt(t){let e;return E.size===0&&G(Z),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let L=!1;function mt(){L=!0}function pt(){L=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const l=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(o[c],_)}}function xt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=it("style");return $t(et(t),e),e.sheet}function $t(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(L){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){L&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Kt(){return I(" ")}function Qt(){return I("")}function Wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,r=!1){Et(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Nt(t,e,n,i){return rt(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Vt(t,e,n){return Nt(t,e,n,it)}function At(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Xt(t){return At(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function te(t,e,n){t.classList[n?"add":"remove"](e)}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ne(t,e){return new t(e)}const R=new Map;let q=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:bt(e),rules:{}};return R.set(t,n),n}function B(t,e,n,i,r,l,o,s=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);u+=p*100+`%{${o(y,1-y)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,a=`__svelte_${St(_)}_${s}`,h=et(t),{stylesheet:f,rules:d}=R.get(h)||kt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||jt())}function jt(){G(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),R.clear())})}let j;function S(t){j=t}function st(){if(!j)throw new Error("Function called outside component initialization");return j}function ie(t){st().$$.on_mount.push(t)}function re(t){st().$$.after_update.push(t)}const v=[],K=[],O=[],Q=[],ot=Promise.resolve();let F=!1;function ct(){F||(F=!0,ot.then(lt))}function se(){return ct(),ot}function D(t){O.push(t)}const z=new Set;let w=0;function lt(){if(w!==0)return;const t=j;do{try{for(;w<v.length;){const e=v[w];w++,S(e),Dt(e.$$)}}catch(e){throw v.length=0,w=0,e}for(S(null),v.length=0,w=0;K.length;)K.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];z.has(n)||(z.add(n),n())}O.length=0}while(v.length);for(;Q.length;)Q.pop()();F=!1,z.clear(),S(t)}function Dt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let C;function ut(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function k(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function oe(){g={r:0,c:[],p:g}}function ce(){g.r||N(g.c),g=g.p}function Mt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function ue(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,o,s,c=0;function u(){o&&H(t,o)}function _(){const{delay:h=0,duration:f=300,easing:d=W,tick:m=x,css:p}=r||at;p&&(o=B(t,0,1,f,h,d,p,c++)),m(0,1);const y=Y()+h,A=y+f;s&&s.abort(),l=!0,D(()=>k(t,!0,"start")),s=tt(b=>{if(l){if(b>=A)return m(1,0),k(t,!0,"end"),u(),l=!1;if(b>=y){const $=d((b-y)/f);m($,1-$)}}return l})}let a=!1;return{start(){a||(a=!0,H(t),M(r)?(r=r(i),ut().then(_)):_())},invalidate(){a=!1},end(){l&&(u(),l=!1)}}}function ae(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),o=i?0:1,s=null,c=null,u=null;function _(){u&&H(t,u)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=W,tick:y=x,css:A}=l||at,b={start:Y()+d,b:f};f||(b.group=g,g.r+=1),s||c?c=b:(A&&(_(),u=B(t,o,f,m,d,p,A)),f&&y(0,1),s=a(b,m),D(()=>k(t,f,"start")),tt($=>{if(c&&$>c.start&&(s=a(c,m),c=null,k(t,s.b,"start"),A&&(_(),u=B(t,o,s.b,s.duration,0,p,l.css))),s){if($>=s.end)y(o=s.b,1-o),k(t,s.b,"end"),c||(s.b?_():--s.group.r||N(s.group.c)),s=null;else if($>=s.start){const ft=$-s.start;o=s.a+s.d*p(ft/s.duration),y(o,1-o)}}return!!(s||c)}))}return{run(f){M(l)?ut().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),s=c=null}}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||D(()=>{const o=t.$$.on_mount.map(U).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...o):N(o),t.$$.on_mount=[]}),l.forEach(D)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,l,o,s=[-1]){const c=j;S(t);const u=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Pt(t,a)),h}):[],u.update(),_=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=vt(e.target);u.fragment&&u.fragment.l(a),a.forEach(nt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),pt(),lt()}S(c)}class he{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){if(!M(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,x as B,zt as C,ee as D,wt as E,Ht as F,Ft as G,Bt as H,Lt as I,Gt as J,Wt as K,N as L,D as M,ue as N,Jt as O,ae as P,te as Q,qt as R,he as S,Kt as a,It as b,Xt as c,ce as d,Qt as e,Mt as f,oe as g,nt as h,de as i,re as j,it as k,Vt as l,vt as m,Ut as n,ie as o,Zt as p,I as q,At as r,Rt as s,le as t,Yt as u,ne as v,fe as w,_e as x,Tt as y,Ot as z};
