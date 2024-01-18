import{i as c}from"./vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const h="Escape",l="https://pixabay.com/api/",f="40880885-4e0dcc0a0fb77dafc41087a3a",v="#ffffff",y="#f5f5f5",d=r=>new Promise((o,n)=>fetch(r).then(a=>(a.ok||n(new Error(`HTTP error, status: ${a.status}`)),a.json())).then(a=>o(a)).catch(a=>n(a))),u=r=>{const{largeImageURL:o,previewURL:n,tags:a,likes:e,views:s,comments:t,downloads:i}=r;return`<li class='card'> 
            <a class='card-link' href='${o}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${n}'
                      alt='${a}'                                                          
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${e}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${s}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${t}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${i}</span>    
                </div>
            </div>
        </li>`};function p(r){return r.map(u).join("")}function b(r,o){const n=p(r);o.innerHTML="",o.insertAdjacentHTML("beforeend",n)}function L(r){const o={key:f,q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},n=`${l}?${new URLSearchParams(o).toString()}`;return new Promise((a,e)=>{d(n).then(s=>{s.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),a(s.hits)}).catch(s=>{e(`Error fetching images: ${s.message}`)})})}const m="/goit-js-homework-11/assets/bi-x-octagon-73f29380.svg";function w(r){c.show({message:r,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${m}`,iconColor:"#fafafb"})}export{y as B,h as K,v as a,b,w as c,L as g};
//# sourceMappingURL=create-msg-08ea2f6a.js.map
