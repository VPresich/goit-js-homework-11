import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as a}from"./assets/vendor-c279a850.js";import{i as o}from"./assets/icons-aa1fc6ea.js";import{i as r}from"./assets/gallery-images-8dc32416.js";const l=({preview:e,description:t,original:i})=>`<li class="gallery-item">
              <a class="gallery-link" href="${i}">
                <img class="gallery-img"
                    src="${e}"
                    alt="${t}"                    
                 />
              </a>
            </li>`;function s(e,t){const i=e.map(l).join("");t.insertAdjacentHTML("beforeend",i)}const n=document.querySelector(".gallery");s(r,n);new a(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg
    class="lightbox-button-icon-prev"
    width="24"
    height="24"
    aria-label="icon arrow left">
      <use href="${o}#icon-chevron-left"></use>
  </svg>`,`<svg
    class="lightbox-button-icon-next"
    width="24"
    height="24"
    aria-label="icon arrow right">
    <use href="${o}#icon-chevron-right"></use>
  </svg>`],close:!0,closeText:`
  <svg class="lightbox-close-icon" width="16" height="16">
    <use href="${o}#close-form"></use>
  </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0,widthRatio:.85,heightRatio:.9});
//# sourceMappingURL=commonHelpers5.js.map
