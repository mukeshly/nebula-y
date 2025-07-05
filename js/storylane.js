var storylane1748447601700=function(){"use strict";var ce=Object.defineProperty;var $=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var z=(h,u,d)=>u in h?ce(h,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):h[u]=d,w=(h,u)=>{for(var d in u||(u={}))pe.call(u,d)&&z(h,d,u[d]);if($)for(var d of $(u))me.call(u,d)&&z(h,d,u[d]);return h};var M=(h,u,d)=>new Promise((P,E)=>{var F=b=>{try{x(d.next(b))}catch(C){E(C)}},I=b=>{try{x(d.throw(b))}catch(C){E(C)}},x=b=>b.done?P(b.value):Promise.resolve(b.value).then(F,I);x((d=d.apply(h,u)).next())});const h="storylane-demo-event",u="storylane-embed-demo",d="storylane-token-submit",P="storylane-tracking",E="storylane-host-info",F="storylane-demo-host",I="storylane-close-demo-player",x="hubspotutk",b="_mkto_trk",C=/visitor_id\d+/,R={CloseModal:"sl-close"},U=`.sl-close-btn {
  background: #ffffff;
  color: #1a1348;
  border: 2px solid #fffffe;
  border-radius: 20px;
  line-height: 18px;
  box-shadow: 0px 0px 5px #444;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  width: 24px;
  padding: 0px;
}

.sl-close-btn:hover {
  box-shadow: 0px 0px 6px rgba(255, 255, 100, 1);
}
`;class q extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),o=document.createElement("button");o.classList.add("sl-close-btn"),o.innerHTML='<svg viewBox="0 0 24 24" class="__sl-close-btn" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#9392A3" d="m17.674 15.738-9.5-9.5A1.11 1.11 0 0 0 6.6 6.235l-.274.274a1.11 1.11 0 0 0 0 1.573l9.5 9.5a1.114 1.114 0 0 0 1.574 0l.273-.274a1.11 1.11 0 0 0 0-1.573"></path><path fill="#9392A3" d="m17.675 6.51-.275-.275a1.113 1.113 0 0 0-1.573 0l-9.5 9.5a1.113 1.113 0 0 0 0 1.573l.272.274a1.11 1.11 0 0 0 1.574 0l9.5-9.5a1.113 1.113 0 0 0 0-1.573"></path><path fill="#F3F5F7" d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24"></path><path fill="#9392A3" d="M16.215 14.964 13.251 12l2.964-2.964a.883.883 0 0 0 0-1.25.884.884 0 0 0-1.25 0L12 10.748 9.036 7.785a.885.885 0 0 0-1.251 1.251L10.749 12l-2.964 2.964a.883.883 0 1 0 1.25 1.251L12 13.251l2.964 2.964a.884.884 0 0 0 1.251-1.25"></path></svg>';const n=document.createElement("style");n.textContent=U,e.appendChild(n),e.appendChild(o),this.addCloseEventListener(o)}addCloseEventListener(e){const o=()=>{this.dispatchEvent(new Event(R.CloseModal))};e.addEventListener("click",o),this.addEventListener("disconnected",()=>{e.removeEventListener("click",o)})}}customElements.get("sl-close-button")||customElements.define("sl-close-button",q);class B{constructor(){this.storylane_style="",this.embed_style="",this.demo_html=""}Play(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;switch(this.params=e,this.params.type){case"popup":this.Player(e);break;case"preview_embed":this.PreviewEmbed(e);break}}PreviewEmbed(e){var l;if(typeof e!="object")return console.log("Error: Invalid params."),0;let o={scale:.9};this.params=w(w({},o),e);const n=this.params.demo_url;if(!n)return console.log("Error: Invalid params. Please provide valid demo_url"),0;console.log("creating storylane demo with preview");const r=this.params.element,i=r.closest(".sl-embed-container");if(!i){console.error("Unable to find .sl-embed-container");return}const p=i.querySelector(".sl-preview");if(!p){console.error("Unable to find .sl-preview");return}const a=i.querySelector("iframe.sl-demo");if(!a){console.error('Unable to find "iframe.sl-demo"');return}(l=r.parentElement)!=null&&l.classList.contains("sl-preview-heading")?r.parentElement.style.display="none":r.style.display="none",p.style.display="none",a.style.display="block",a.style.backgroundColor="#f3f5f7",a.style.borderRadius="inherit",a.src=n}Player(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;let o={scale:"0.9",width:"100%",padding_bottom:"calc(56.33% + 27px)",fullscreen:!1};if(this.params=w(w({},o),e),!this.params.hasOwnProperty("demo_url"))return console.log("Error: Invalid params. Please provide valid demo_url"),0;this.storylane_style=`
          #__sl-demo-wrapper{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            background: rgba(0,0,0,0.8);
          }
          .__sl-embed-container{
            z-index: 99999999;
            position: relative;
            width: 100%;
            display: flex;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            align-items: center;
            justify-content: center;
          }
          .__sl-embed{
            position:relative;
            width:100%;
            height:0;
          }
          .__sl-embed-portrait {
            padding-bottom: 0px !important;
            height: 100% !important;
          }
          .__sl-player-iframe {
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            border:none;
          }`,this.embed_style=`
          padding-bottom: $padding_bottom;
          transform: scale($scale);
          -webkit-transform: scale($scale);
          -moz-transform: scale($scale);
          -o-transform: scale($scale);
        `,this.demo_html=`
          <div class="__sl-embed-container">
            <div style="position:absolute; top:8px; right:4px;z-index:1;">
              <sl-close-button></sl-close-button>
            </div>
            <div class="__sl-embed-wrapper" style="width: $embed_width; height: $embed_height; position: relative; display:flex; align-items:center">
              <div class="__sl-embed">
                <iframe class='__sl-player-iframe' allowfullscreen></iframe>
              </div>
            </div>
          </div>
        `,console.log("creating storylane demo");let n=document.getElementById("__sl-demo-wrapper");if(n==null){n=document.createElement("div"),n.id="__sl-demo-wrapper",n.setAttribute("style","display: none;"),document.body.appendChild(n);let g=document.createElement("style");g.innerHTML=this.storylane_style,document.head.appendChild(g)}n.innerHTML=this.demo_html;const r=this.params.element,i=document.getElementsByClassName("__sl-player-iframe")[0],p=document.getElementsByClassName("__sl-embed-wrapper")[0],a=document.getElementsByClassName("__sl-embed")[0],l=parseFloat(this.params.scale),s=window.innerWidth<window.innerHeight;let m=window.innerHeight-50,f=window.innerWidth-50;s&&(m=window.innerHeight,f=window.innerWidth);let c=f,y="auto";if(this.params.fullscreen===!0)c="100%";else{let g=parseFloat(this.params.height),A=parseFloat(this.params.width);if(!isNaN(g)&&g!=0&&!isNaN(A)&&A!=0){let de=parseFloat((g/A).toFixed(2));c=A,g>m&&(c=parseFloat((m/de).toFixed(2))),c>f&&(c=f)}isNaN(l)||(c=(c*l).toFixed(2)),c=c+"px"}s&&(c="100%",this.params.demo_type==="html"&&a&&(y="100%",a.classList.add("__sl-embed-portrait")));let _=p.getAttribute("style")||"";_=_.replaceAll(/\$embed_width/g,c),_=_.replaceAll(/\$embed_height/g,y),p.setAttribute("style",_);let k=this.embed_style.replaceAll(/\$scale/g,"1.0");const S=this.params.padding_bottom;k=k.replaceAll(/\$padding_bottom/g,S),a==null||a.setAttribute("style",k),r&&r.onclick===null?r.addEventListener("click",g=>{i&&this.params&&n&&(i.src=this.params.demo_url,n.style.display="")}):(i&&(i.src=this.params.demo_url),n.style.display="");function O(g){(g.key==="Escape"||g.key==="Esc")&&(i&&n&&(n.style.display="none",i.src=""),document.removeEventListener("keydown",O))}document.addEventListener("keydown",O);const v=document.querySelector("sl-close-button");function T(){i&&n&&(n.style.display="none",i.src=""),v==null||v.removeEventListener(R.CloseModal,T)}v==null||v.addEventListener(R.CloseModal,T)}Embed(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;let o={scale:"0.9"};if(this.params=w(w({},o),e),!this.params.hasOwnProperty("demo_url"))return console.log("Error: Invalid params. Please provide valid demo_url"),0;this.storylane_style=`
          #__sl-demo-embed-wrapper{
            width: 100%;
            height: 100%;
            z-index: 10000;
            background: rgba(0,0,0,0.6);
            background-color: #F3F5F7;
            border: 0px solid black;
          }
          .__sl-iframe{border: 0px; width: 100%; height: 100%; min-height: 100vh;}
  
          .__sl-demo-preview{
            width:100%; height: 100%;
            transform:scale(1.0);
            background-color: #ffffff;
            z-index: 999999999;
          }
  
          .__sl-play{
            z-index: 10003;
            box-sizing: border-box;
              display:block;
              width:140px;
              height:60px;
              padding-top: 14px;
              padding-left: 8px;
              line-height: 20px;
              border: 3px solid #fff;
              border-radius: 5px;
              color: #f5f5f5;
              text-align:center;
              text-decoration:none;
              background-color: #e0007a;
              font-size: 22px;
              font-weight: normal;
              transition: all 0.3s ease;
            position: relative;
            top: 45%;
            left: 45%;
            cursor: pointer;
          }
  
          .__sl-play:hover {
              background-color: #c1066c;
              box-shadow: 0px 0px 6px rgba(255,255,100,1);
          }
        `;let n=document.getElementById("__sl-demo-embed-wrapper");if(n==null){n=document.createElement("div"),n.id="__sl-demo-embed-wrapper",n.removeAttribute("style");const a=document.createElement("style");a.innerHTML=this.storylane_style,document.head.appendChild(a)}let r=this.params.element;const i=this.params.demo_url,p=this.params.demo_preview;if(i){console.log("creating storylane embedded demo");const a=document.createElement("iframe");a.classList.add("__sl-iframe"),a.src=i,n.appendChild(a),r.innerHTML="",r.appendChild(n)}else if(p){console.log("creating storylane embedded demo with preview");const a=r.innerHTML,l=document.createElement("div");l.classList.add("__sl-demo-preview"),l.setAttribute("style","background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('"+p+"') no-repeat; background-size: 100% auto;");const s=document.createElement("a");s.classList.add("__sl-play"),s.text="Start Demo",s.addEventListener("click",m=>{l.remove(),n&&(n.innerHTML=a)}),l.appendChild(s),n.appendChild(l),r.innerHTML="",r.appendChild(n)}}}function K(t,e){var n,r;if(t.origin===""||t.origin==="null")return!0;let o=t.origin===e||/https:\/\/(www\.)?[0-9a-zA-Z-]+\.storylane\.(io|us)\/?$/.test(t.origin);if(!o){const i=/^(?:[a-zA-Z0-9-]+\.)*([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/,p=new URL(e),a=new URL(t.origin),l=(n=p.host.match(i))==null?void 0:n[1],s=(r=a.host.match(i))==null?void 0:r[1];o=l&&s&&l===s}return!o}function W(t){const e=t.data;if(typeof e=="object"&&e!==null&&"message"in e&&e.message===h){if(K(t,window.origin))return console.warn("sl: unable to process message"),!0;let o=t.data.payload;return o.event==="open_external_url"&&o.target.target==="_self"&&window.open(o.target.url,o.target.target),!0}return!1}function Z(t,e){const o=t.split("; ");for(let n=0;n<o.length;n++){const i=o[n].split("=");if(i[0].match(e))return i[1]}return null}function J(t,e,o,n){try{return t.cookie=e+"="+(o||"")+"; max-age="+n+"; path=/; secure",!0}catch(r){return!1}}const D="slReferer";function V(t){try{const e=j(t);!N(t)&&e&&G(t,e)}catch(e){}}function j(t){const e=t.referrer;return e?btoa(e):null}function N(t){const e=Z(t.cookie,D);return e?decodeURIComponent(e):null}function G(t,e){J(t,D,encodeURIComponent(e),31536e3)}function Q(){return M(this,null,function*(){return X()})}function X(){try{const t=document.cookie.match(/_ga=(.+?)(;|$)/);if(!t)return null;const o=t[1].split(".");return o.length>=3?o.slice(2).join("."):null}catch(t){return console.error("Error accessing document.cookie:",t),null}}function Y(t){return M(this,null,function*(){var o,n,r,i,p;const e=t.data;if(typeof e=="object"&&e!==null&&e&&e.source===u){let l=new URL(window.location.toString()).searchParams,s=l.get("email");l.delete("email");let m=[],f={};for(const[y,_]of l.entries())if(y.match(/token/)!==null){m.push(y);let k=(o=y.match(/^token\[(.*)]$/))==null?void 0:o[1];k&&(f[k]=_)}for(const y of m)l.delete(y);s&&((n=t.source)==null||n.postMessage({source:F,lead:{email:s}},{targetOrigin:t.origin})),Object.keys(f).length>0&&((r=t.source)==null||r.postMessage({message:d,payload:{token:f}},{targetOrigin:t.origin}));const c=yield Q();return(i=t.source)==null||i.postMessage({source:E,host:{url:window.location.href,gaClientId:c},url_query:l.toString()},{targetOrigin:t.origin}),(p=t.source)==null||p.postMessage({source:P,tracking:btoa(document.cookie),ref:{original:N(document),current:j(document)}},{targetOrigin:t.origin}),!0}return!1})}const L=({tracking:t,encode:e=!0})=>{try{const o="https://api.storylane.io/api/v1/shared/tracking",n=e?btoa(t):t;if("sendBeacon"in navigator){const r=new FormData;r.set("tracking",n),navigator.sendBeacon(o,r)}else fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},keepalive:!0,body:JSON.stringify({tracking:n})})}catch(o){}};function H(t,e){const o=t.split("; ");for(let n=0;n<o.length;n++){const r=o[n];if(r.split("=")[0].match(e))return r}return null}function ee(t){const e=t.data;if(typeof e=="object"&&e!==null&&e.type==="hsFormCallback"&&e.eventName==="onFormSubmitted"){const o=H(document.cookie,x);return o&&L({tracking:o}),!0}return!1}function te(t){const e=t.data;if(typeof e=="object"&&e!==null&&e.message==="LD_SAVE_FORM_DATA"){const o=H(document.cookie,C);return o&&L({tracking:o}),!0}return!1}function oe(t){if(typeof t.data=="string"&&t.data.startsWith('{"mktoResponse"')){const e=JSON.parse(t.data);if(typeof e=="object"&&"mktoResponse"in e&&e.mktoResponse.error===!1){const o=H(document.cookie,b);o&&L({tracking:o})}return!0}return!1}function ne(t){t.querySelectorAll("form").forEach(o=>{o.addEventListener("submit",n=>{try{L({tracking:t.cookie})}catch(r){console.error(r)}},{passive:!0,capture:!1})})}const re=`.sl-preview-img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 999991;
  object-fit: cover;
  object-position: center;
}
`;function se(t){const e=t.data;if(typeof e=="object"&&e!==null&&"message"in e&&e.message===I){const o=document.getElementById("__sl-demo-wrapper"),n=document.getElementsByClassName("__sl-player-iframe")[0];n&&o&&(o.style.display="none",n.src="")}return!1}function ie(t){const e=t.createElement("style");e.innerHTML=re,t.head.appendChild(e)}function ae(){if("Storylane"in window)return;const t=new B;window.Storylane=t,le();function e(){var p,a,l;ne(document),V(document),ie(document);const o=document.querySelectorAll(".sl-preview");if(o.length>0)for(const s of o){let m=document.createElement("img");m.src=((p=s.style.backgroundImage.match(/(https?:\/\/[^ |'|"]*)/))==null?void 0:p[0])||"",m.classList.add("sl-preview-img"),s.appendChild(m),s.style.backgroundImage="",s.parentElement&&(s.parentElement.style.borderRadius="10px"),s.style.borderRadius="inherit"}const n=document.querySelectorAll(".sl-demo-btn");if(n.length>0)for(const s of n)(a=window.Storylane)==null||a.Player({element:s,demo_url:s.getAttribute("data-sl-url"),scale:s.getAttribute("data-sl-scale")});const r=document.querySelectorAll('a[href*="?sl_popup"],a[href*="&sl_popup"]');if(r.length>0)for(const s of r){let m=new URL(s.getAttribute("href")||""),f=new URLSearchParams(m.search),c=f.get("config"),y=c&&c.length?JSON.parse(atob(c)):{};f.delete("config"),f.delete("sl_popup"),m.search=f.toString();const _={element:s,demo_url:m,type:"popup"};s.onclick=function(k){var S;k.preventDefault(),(S=window.Storylane)==null||S.Play(w(w({},_),y))}}const i=document.querySelectorAll(".sl-inline-embed");if(i.length>0)for(const s of i)(l=window.Storylane)==null||l.Embed({element:s,demo_preview:s.getAttribute("data-sl-preview"),demo_url:s.getAttribute("data-sl-url"),scale:s.getAttribute("data-sl-scale")})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}function le(){const t=[W,ee,Y,te,oe,se];window.addEventListener("message",e=>M(this,null,function*(){for(const o of t)try{if((yield Promise.resolve(o(e)))===!0)break}catch(n){console.error("Error in message handler:",n)}}))}return function(){ae()}(),""}();
