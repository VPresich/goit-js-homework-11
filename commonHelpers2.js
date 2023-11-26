import{i as c,c as l,a as i}from"./assets/create-msg-e6f4ee7d.js";/* empty css                      */import{S as h}from"./assets/vendor-9310f15c.js";const o="/goit-js-homework-11/assets/icons-f810c139.svg",a=document.querySelector(".gallery"),t=document.querySelector(".loader"),s=document.querySelector(".search-form");s.addEventListener("submit",u);let n=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${o}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${o}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${o}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function u(e){e.preventDefault();try{t.style.display="block";const r=e.currentTarget.search.value.trim();c(r,f,g)}catch(r){console.error("Error:",r)}}function g(e){s.search.value="",t.style.display="none",l(e),a.innerHTML="",n.refresh()}function f(e){s.search.value="",t.style.display="none",i(e,a),n.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
