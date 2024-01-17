import{g as l,c as i,B as h,a as u,b as g}from"./assets/create-msg-e461dc7f.js";/* empty css                      */import{S as m}from"./assets/vendor-9310f15c.js";const t="/goit-js-homework-11/assets/icons-f810c139.svg",o=document.querySelector(".gallery"),s=document.querySelector(".loader"),a=document.querySelector(".search-form");a.addEventListener("submit",f);let n=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${t}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${t}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${t}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function f(e){e.preventDefault(),s.style.display="block";const c=e.currentTarget.search.value.trim();l(c).then(r=>b(r)).catch(r=>d(r))}function d(e){a.search.value="",s.style.display="none",i(e),o.style.backgroundColor=h,o.innerHTML="",n.refresh()}function b(e){a.search.value="",s.style.display="none",o.style.backgroundColor=u,g(e,o),n.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
