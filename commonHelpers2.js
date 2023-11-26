import{g as c,c as i,B as h,a as u,b as g}from"./assets/create-msg-28ea0f8a.js";/* empty css                      */import{S as m}from"./assets/vendor-9310f15c.js";const a="/goit-js-homework-11/assets/icons-f810c139.svg",r=document.querySelector(".gallery"),o=document.querySelector(".loader"),n=document.querySelector(".search-form");n.addEventListener("submit",y);let l=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${a}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${a}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${a}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function y(e){e.preventDefault();try{o.style.display="block";const t=e.currentTarget.search.value.trim();c(t).then(s=>f(s)).catch(s=>d(s))}catch(t){console.error("Unknown Error:",t),o.style.display="none"}}function d(e){n.search.value="",o.style.display="none",i(e),r.classList.remove("gallery-bgr"),r.style.backgroundColor=h,r.innerHTML="",l.refresh()}function f(e){n.search.value="",o.style.display="none",r.style.backgroundColor=u,g(e,r),l.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
