(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const o=r=>{const{webformatURL:a,largeImageURL:n,previewURL:i,tags:e,likes:s,views:l,comments:c,downloads:t}=r;return`<li class='card'> 
            <a class='card-link' href='${n}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${i}'
                      alt='${e}'  
                      data-source='${n}'                                      
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
                    <span class="value">${l}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${c}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${t}</span>    
                </div>
            </div>
        </li>`};function d(r){return r.map(o).join("")}function u(r,a){const n=d(r);a.innerHTML="",a.insertAdjacentHTML("beforeend",n)}export{u as c};
//# sourceMappingURL=create-cards-gallery-6a214f9d.js.map
