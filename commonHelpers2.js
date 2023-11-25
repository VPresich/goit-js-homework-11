import"./assets/create-cards-gallery-6a214f9d.js";/* empty css                      */import{S as i}from"./assets/vendor-9310f15c.js";import{i as s}from"./assets/insert-cards-to-gallery-413ee344.js";import{i as e}from"./assets/icons-2e9f6e1e.js";const a=document.querySelector(".gallery");let n=new i(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${e}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${e}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${e}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});const t=document.querySelector(".search-form");t.addEventListener("submit",l);function l(o){o.preventDefault(),o.currentTarget.search.value.trim();try{s({searchForm:t,galleryRef:a,modalWndRef:n})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers2.js.map
