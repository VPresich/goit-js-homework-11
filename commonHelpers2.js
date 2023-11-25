import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as u,S as d}from"./assets/vendor-9310f15c.js";import{i as r}from"./assets/icons-bb323a37.js";const h="40880885-4e0dcc0a0fb77dafc41087a3a";async function f(e,s){return fetch(e).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const p=e=>{const{webformatURL:s,largeImageURL:a,previewURL:o,tags:t,likes:n,views:i,comments:c,downloads:l}=e;return`<li class='card'> 
            <a class='card-link' href='${a}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${o}'
                      alt='${t}'                                        
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${n}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${i}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${c}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${l}</span>    
                </div>
            </div>
        </li>`};function m(e){return e.map(p).join("")}function v(e,s){const a=m(e);s.innerHTML="",s.insertAdjacentHTML("beforeend",a)}const g="/goit-js-homework-11/assets/bi-x-octagon-73f29380.svg";function b(e){u.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${g}`,iconColor:"#fafafb"})}async function w(e,s){const a=`https://pixabay.com/api/?key=${h}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;f(a).then(o=>{if(!o.hits){b("Sorry, there are no images matching your search query. Please, try again!");return}v(o.hits,s)}).catch(o=>console.log(o))}const y=document.querySelector(".search-form"),$=document.querySelector(".gallery");y.addEventListener("submit",k);function k(e){e.preventDefault();let a=e.currentTarget.search.value.trim();a="yellow flowers",w(a,$),new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg
    class="lightbox-button-icon-prev"
    width="24"
    height="24"
    aria-label="icon arrow left">
      <use href="${r}#icon-chevron-left"></use>
  </svg>`,`<svg
    class="lightbox-button-icon-next"
    width="24"
    height="24"
    aria-label="icon arrow right">
    <use href="${r}#icon-chevron-right"></use>
  </svg>`],close:!0,closeText:`
  <svg class="lightbox-close-icon" width="16" height="16">
    <use href="${r}#close-form"></use>
  </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0})}
//# sourceMappingURL=commonHelpers2.js.map
