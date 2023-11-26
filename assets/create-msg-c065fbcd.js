import{i as l}from"./vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="Escape",f="https://pixabay.com/api/",d="40880885-4e0dcc0a0fb77dafc41087a3a",y="#ffffff",b="#f5f5f5";async function p(a,o){return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}async function L(a,o,r){const n={key:d,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},e=`${f}?${new URLSearchParams(n).toString()}`;p(e).then(s=>{s.hits.length?o&&o(s.hits):r&&r("Sorry, there are no images matching your search query. Please, try again!")}).catch(s=>{throw s})}const u=a=>{const{webformatURL:o,largeImageURL:r,previewURL:n,tags:e,likes:s,views:t,comments:i,downloads:c}=a;return`<li class='card'> 
            <a class='card-link' href='${r}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${n}'
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
                    <span class="value">${i}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${c}</span>    
                </div>
            </div>
        </li>`};function m(a){return a.map(u).join("")}function w(a,o){const r=m(a);o.innerHTML="",o.insertAdjacentHTML("beforeend",r)}const h="/goit-js-homework-11/assets/bi-x-octagon-73f29380.svg";function k(a){l.show({message:a,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${h}`,iconColor:"#fafafb"})}export{b as B,v as K,y as a,w as b,k as c,L as i};
//# sourceMappingURL=create-msg-c065fbcd.js.map
