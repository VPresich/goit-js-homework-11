const r="Escape",l=({preview:e,description:s,original:a})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img class="gallery-img"
                  src="${e}"
                  alt="${s}"
                  data-source="${a}"
               />
            </a>
          </li>`;function c(e,s){const a=e.map(l).join("");s.insertAdjacentHTML("beforeend",a)}export{r as K,c};
//# sourceMappingURL=create-gallery-bd47cadd.js.map
