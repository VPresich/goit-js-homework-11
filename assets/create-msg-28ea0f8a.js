import{i as l}from"./vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const v="Escape",f="https://pixabay.com/api/",d="40880885-4e0dcc0a0fb77dafc41087a3a",y="#ffffff",b="#f5f5f5";async function u(a,o){return new Promise((n,r)=>{fetch(a).then(e=>{e.ok||r(e.status),n(e.json())}).catch(e=>{r(e)})})}const p=a=>{const{webformatURL:o,largeImageURL:n,previewURL:r,tags:e,likes:s,views:t,comments:c,downloads:i}=a;return`<li class='card'> 
            <a class='card-link' href='${n}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${r}'
                      alt='${e}'                                                          
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${s}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${t}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${c}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${i}</span>    
                </div>
            </div>
        </li>`};function m(a){return a.map(p).join("")}function L(a,o){const n=m(a);o.innerHTML="",o.insertAdjacentHTML("beforeend",n)}async function w(a){const o={key:d,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},n=`${f}?${new URLSearchParams(o).toString()}`;return new Promise((r,e)=>{u(n).then(s=>{s.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),r(s.hits)}).catch(s=>{e(s)})})}const g="/goit-js-homework-11/assets/bi-x-octagon-73f29380.svg";function k(a){l.show({message:a,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${g}`,iconColor:"#fafafb"})}export{b as B,v as K,y as a,L as b,k as c,w as g};
//# sourceMappingURL=create-msg-28ea0f8a.js.map
