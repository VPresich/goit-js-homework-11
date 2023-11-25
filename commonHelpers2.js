import{c as i}from"./assets/create-cards-gallery-6a214f9d.js";/* empty css                      */import{S as c}from"./assets/vendor-9310f15c.js";import{i as l}from"./assets/insert-cards-to-gallery-0720fd4e.js";import{i as e,c as n}from"./assets/cards-04725dd5.js";const o=document.querySelector(".gallery");i(n,o);let h=new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${e}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${e}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${e}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});const t=document.querySelector(".search-form");t.addEventListener("submit",u);function u(r){r.preventDefault();const a=r.currentTarget.search.value.trim();try{l(a,o,t),h.refresh()}catch(s){console.error("Error:",s)}}
//# sourceMappingURL=commonHelpers2.js.map
