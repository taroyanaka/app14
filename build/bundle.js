var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function b(t){h=t}const p=[],$=[];let y=[];const v=[],_=Promise.resolve();let w=!1;function A(t){y.push(t)}const B=new Set;let x=0;function R(){if(0!==x)return;const t=h;do{try{for(;x<p.length;){const t=p[x];x++,b(t),E(t.$$)}}catch(t){throw p.length=0,x=0,t}for(b(null),p.length=0,x=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];B.has(e)||(B.add(e),e())}y.length=0}while(p.length);for(;v.length;)v.pop()();w=!1,B.clear(),b(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;function M(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];y.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),y=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(p.push(t),w||(w=!0,_.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(s,r,c,a,u,f,d,m=[-1]){const g=h;b(s);const p=s.$$={fragment:null,ctx:[],props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:r.target||g.$$.root};d&&d(p.root);let $=!1;if(p.ctx=c?c(s,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),$&&N(s,t)),e})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&((y=s.$$.fragment)&&y.i&&(k.delete(y),y.i(v))),function(t,n,s,r){const{fragment:c,after_update:i}=t.$$;c&&c.m(n,s),r||A((()=>{const n=t.$$.on_mount.map(e).filter(l);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(A)}(s,r.target,r.anchor,r.customElement),R()}var y,v;b(g)}class S{$destroy(){M(this,1),this.$destroy=t}$on(e,n){if(!l(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function j(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function Y(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function C(e){let n,o,l=e[9]+"";return{c(){n=u("div"),o=f(l),m(n,"class","symbol svelte-3bew6g"),m(n,"data-symbol",e[9])},m(t,e){c(t,n,e),r(n,o)},p:t,d(t){t&&i(n)}}}function I(e){let n,o,l=e[9]+"";return{c(){n=u("div"),o=f(l),m(n,"class","symbol svelte-3bew6g"),m(n,"data-symbol",e[9])},m(t,e){c(t,n,e),r(n,o)},p:t,d(t){t&&i(n)}}}function L(e){let n,o,l=e[9]+"";return{c(){n=u("div"),o=f(l),m(n,"class","symbol svelte-3bew6g"),m(n,"data-symbol",e[9])},m(t,e){c(t,n,e),r(n,o)},p:t,d(t){t&&i(n)}}}function q(e){let n,o,l,s,h,b,p,$,y,v,_,w,A,B,x,R,E,k,M,N,O,S,q,P,z=e[1]?`ボーナスタイム${e[1]}回(当たりが10倍になる)`:"",D=e[4],F=[];for(let t=0;t<D.length;t+=1)F[t]=C(Y(e,D,t));let G=e[4],H=[];for(let t=0;t<G.length;t+=1)H[t]=I(j(e,G,t));let J=e[4],K=[];for(let t=0;t<J.length;t+=1)K[t]=L(T(e,J,t));return{c(){n=u("div"),o=u("div"),l=u("div"),s=u("div");for(let t=0;t<F.length;t+=1)F[t].c();h=d(),b=u("div"),p=u("div");for(let t=0;t<H.length;t+=1)H[t].c();$=d(),y=u("div"),v=u("div");for(let t=0;t<K.length;t+=1)K[t].c();_=d(),w=u("div"),A=f(z),B=d(),x=u("div"),R=f(e[0]),E=d(),k=u("div"),M=f(e[2]),N=d(),O=u("button"),S=f("Start"),m(s,"class","symbols svelte-3bew6g"),m(s,"id","symbols1"),m(l,"class","reel svelte-3bew6g"),m(l,"id","reel1"),m(p,"class","symbols svelte-3bew6g"),m(p,"id","symbols2"),m(b,"class","reel svelte-3bew6g"),m(b,"id","reel2"),m(v,"class","symbols svelte-3bew6g"),m(v,"id","symbols3"),m(y,"class","reel svelte-3bew6g"),m(y,"id","reel3"),m(o,"id","reels"),m(o,"class","svelte-3bew6g"),m(w,"id","bonus_time"),m(x,"id","coins"),m(k,"id","result"),m(k,"class","svelte-3bew6g"),m(O,"id","start-button"),O.disabled=e[3],m(O,"class","svelte-3bew6g"),m(n,"id","Slot-machine"),m(n,"class","svelte-3bew6g")},m(t,i){c(t,n,i),r(n,o),r(o,l),r(l,s);for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(s,null);r(o,h),r(o,b),r(b,p);for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(p,null);r(o,$),r(o,y),r(y,v);for(let t=0;t<K.length;t+=1)K[t]&&K[t].m(v,null);var a,u,f,d;r(n,_),r(n,w),r(w,A),r(n,B),r(n,x),r(x,R),r(n,E),r(n,k),r(k,M),r(n,N),r(n,O),r(O,S),q||(a=O,u="click",f=e[5],a.addEventListener(u,f,d),P=()=>a.removeEventListener(u,f,d),q=!0)},p(t,[e]){if(16&e){let n;for(D=t[4],n=0;n<D.length;n+=1){const o=Y(t,D,n);F[n]?F[n].p(o,e):(F[n]=C(o),F[n].c(),F[n].m(s,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=D.length}if(16&e){let n;for(G=t[4],n=0;n<G.length;n+=1){const o=j(t,G,n);H[n]?H[n].p(o,e):(H[n]=I(o),H[n].c(),H[n].m(p,null))}for(;n<H.length;n+=1)H[n].d(1);H.length=G.length}if(16&e){let n;for(J=t[4],n=0;n<J.length;n+=1){const o=T(t,J,n);K[n]?K[n].p(o,e):(K[n]=L(o),K[n].c(),K[n].m(v,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=J.length}2&e&&z!==(z=t[1]?`ボーナスタイム${t[1]}回(当たりが10倍になる)`:"")&&g(A,z),1&e&&g(R,t[0]),4&e&&g(M,t[2]),8&e&&(O.disabled=t[3])},i:t,o:t,d(t){t&&i(n),a(F,t),a(H,t),a(K,t),q=!1,P()}}}function P(t){const e=document.getElementById(`symbols${t+1}`);e.style.transition="none",e.style.transform="translateY(0)",setTimeout((()=>{e.style.transition=`transform 1s linear ${.1*t}s`,e.style.transform="translateY(-30rem)"}),100)}function z(t,e,n){let o=100,l=0;const s=["7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔","7","BAR","★","🍒","🔔"];let r=[],c="",i=!1;function a(t,e){r=[],setTimeout((()=>{const e=document.getElementById(`symbols${t+1}`),n=Math.floor(Math.random()*s.length);e.style.transition="transform 1s ease-out",e.style.transform=`translateY(-${50*n}px)`,e.dataset.symbol=s[n],r.push(s[n+1]),console.log(r)}),e)}return[o,l,c,i,s,function(){i||(n(3,i=!0),n(2,c=""),P(0),P(1),P(2),a(0,1e3),a(1,2e3),a(2,3e3),setTimeout((()=>{r[0]===r[1]&&r[1]===r[2]?(n(2,c="当たり!"),"7"===r[0]?n(0,o+=l>0?10:1):"BAR"===r[0]?n(0,o+=l>0?100:10):"★"===r[0]?n(0,o+=l>0?200:20):"🍒"===r[0]?n(0,o+=l>0?40:4):"🔔"===r[0]&&n(0,o+=l>0?70:7),n(1,l+=10)):(n(2,c="ハズレ"),n(0,o-=1),0!==l&&n(1,l+=Math.random()<.1?3:0),0===l&&n(1,l=Math.random()<.05?10:0),o<=0&&n(2,c="ゲームオーバー")),n(1,0===l?l="":l-=1),n(3,i=!1)}),4e3))}]}return new class extends S{constructor(t){super(),O(this,t,z,q,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map