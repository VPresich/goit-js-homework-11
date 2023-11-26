import{i as c,c as n,B as i,a as h,b as u}from"./assets/create-msg-c065fbcd.js";/* empty css                      */import{S as g}from"./assets/vendor-9310f15c.js";const t="/goit-js-homework-11/assets/icons-f810c139.svg",r=document.querySelector(".gallery"),s=document.querySelector(".loader"),a=document.querySelector(".search-form");a.addEventListener("submit",m);let l=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${t}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${t}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${t}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function m(e){e.preventDefault();try{s.style.display="block";const o=e.currentTarget.search.value.trim();c(o,f,d)}catch(o){console.error("Error:",o)}}function d(e){a.search.value="",s.style.display="none",n(e),r.classList.remove("gallery-bgr"),r.style.backgroundColor=i,r.innerHTML="",l.refresh()}function f(e){a.search.value="",s.style.display="none",r.style.backgroundColor=h,u(e,r),l.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
