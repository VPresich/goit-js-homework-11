var W=Object.defineProperty;var X=(s,e,i)=>e in s?W(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var N=(s,e,i)=>(X(s,typeof e!="symbol"?e+"":e,i),i),M=(s,e,i)=>{if(!e.has(s))throw TypeError("Cannot "+i)};var t=(s,e,i)=>(M(s,e,"read from private field"),i?i.call(s):e.get(s)),r=(s,e,i)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,i)},n=(s,e,i,o)=>(M(s,e,"write to private field"),o?o.call(s,i):e.set(s,i),i),F=(s,e,i,o)=>({set _(f){n(s,e,f,i)},get _(){return t(s,e,o)}});import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as H}from"./assets/gallery-images-cad67be8.js";import"./assets/vendor-9310f15c.js";const j="Escape",K=({preview:s,description:e,original:i})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img class="gallery-img"
                  src="${s}"
                  alt="${e}"
                  data-source="${i}"
               />
            </a>
          </li>`,G=s=>s.map(K).join("");function Y(s,e){const i=G(s);e.insertAdjacentHTML("beforeend",i)}var d,h,a,u;class z{constructor(e,i,o){r(this,d,void 0);r(this,h,void 0);r(this,a,void 0);r(this,u,void 0);n(this,d,e),n(this,h,i),n(this,a,o),n(this,u,Array.from({length:o},()=>({display:!1,offset:0}))),this.setSlidesProperty()}set slidesPerPage(e){n(this,h,e)}get slidesPerPage(){return t(this,h)}get currentSlide(){return t(this,d)}set currentSlide(e){return n(this,d,e)}get slidesNumber(){return t(this,a)}set slidesNumber(e){return n(this,a,e)}setSlidesProperty(){t(this,u).forEach((e,i)=>{i>=t(this,d)&&i<t(this,d)+t(this,h)?e.display=!0:e.display=!1})}onPrevSlide(){t(this,d)>0&&(F(this,d)._--,t(this,u).forEach((e,i)=>{e.offset+=1})),this.setSlidesProperty()}onNextSlide(){t(this,d)<t(this,a)-t(this,h)&&(n(this,d,t(this,d)+1),t(this,u).forEach((e,i)=>{e.offset-=1})),this.setSlidesProperty()}goToSlide(e){const i=e-t(this,d);e<=t(this,a)-t(this,h)&&(n(this,d,t(this,d)+i),t(this,u).forEach(o=>{o.offset-=i})),this.setSlidesProperty()}isExistNext(){return t(this,d)>=t(this,a)-t(this,h)||t(this,a)<=t(this,h)}isExistPrev(){return t(this,d)===0||t(this,a)<=t(this,h)}isDisplaySlide(e){return t(this,u)[e].display}getOffsetSlide(e){return t(this,u)[e].offset}}d=new WeakMap,h=new WeakMap,a=new WeakMap,u=new WeakMap;var g,l,p,v,c,k,m,C,y,L;const b=class{constructor({currentSlide:e,slidesPerPage:i,prevBtnId:o,nextBtnId:f,dotsContainerId:x="",sliderContainerId:P="",slidesCounterId:w="",dotDefaultClass:$="slider-dot",dotActiveClass:A="active-dot",isDotContainText:O=!1,elementsList:R}){r(this,g,0);r(this,l,void 0);r(this,p,void 0);r(this,v,void 0);r(this,c,void 0);r(this,k,void 0);r(this,m,void 0);r(this,C,void 0);r(this,y,void 0);r(this,L,void 0);n(this,l,new z(e,i,R.length)),o&&n(this,p,document.getElementById(o)),f&&n(this,v,document.getElementById(f)),x&&(n(this,c,document.getElementById(x)),n(this,C,$),n(this,y,A),n(this,L,O)),P&&n(this,m,document.getElementById(P)),w&&n(this,k,document.getElementById(w)),this.init()}init(){this.initBtnsFunction(),t(this,m)&&this.initTouchFunction(),t(this,c)&&this.createDots()}update(){this.updateContent(),this.updateButtons(),this.updateDisplayDots(),this.updateCounter()}destroy(){this.removeBtnsFunction(),t(this,c)&&this.removeDots(),t(this,m)&&this.removeTouchFunction()}getCurrentSlide(){return t(this,l).currentSlide}initBtnsFunction(){t(this,p)&&t(this,p).addEventListener("click",this.onPrevBtnClick.bind(this)),t(this,v)&&t(this,v).addEventListener("click",this.onNextBtnClick.bind(this))}initTouchFunction(){n(this,g,0),t(this,m).addEventListener("touchstart",this.onSliderTouchStart.bind(this)),t(this,m).addEventListener("touchmove",this.onSliderTouchMove.bind(this))}createDots(){t(this,c).innerHTML="";for(let e=0;e<t(this,l).slidesNumber;e+=1){const i=document.createElement("div");i.className=t(this,C),i.dataset.index=e,t(this,L)&&(i.textContent=`${e+1}`),t(this,c).appendChild(i)}t(this,c).addEventListener("click",this.onSliderDotsClick.bind(this))}updateContent(){console.log(TODO in children)}updateButtons(){t(this,p).disabled=t(this,l).isExistPrev(),t(this,v).disabled=t(this,l).isExistNext()}updateDisplayDots(){const e=t(this,c).children;for(let i=0;i<e.length;i+=1)i===t(this,l).currentSlide?e[i].classList.add(t(this,y)):e[i].classList.remove(t(this,y))}updateCounter(){t(this,k).textContent=`${t(this,l).currentSlide+1+"/"+t(this,l).slidesNumber}`}removeBtnsFunction(){t(this,p)&&t(this,p).removeEventListener("click",this.onPrevBtnClick.bind(this)),t(this,v)&&t(this,v).removeEventListener("click",this.onNextBtnClick.bind(this))}removeDots(){t(this,c).innerHTML="",t(this,c).removeEventListener("click",this.onSliderDotsClick.bind(this))}removeTouchFunction(){t(this,m).removeEventListener("touchstart",this.onSliderTouchStart.bind(this)),t(this,m).removeEventListener("touchmove",this.onSliderTouchMove.bind(this))}onPrevBtnClick(){t(this,l).onPrevSlide(),this.update()}onNextBtnClick(){t(this,l).onNextSlide(),this.update()}onSliderDotsClick(e){const i=e.target;if(i.classList.contains(t(this,C))){const o=parseInt(i.dataset.index,10);t(this,l).goToSlide(o),this.update()}}onSliderTouchStart(e){n(this,g,e.touches[0].clientX)}onSliderTouchMove(e){const i=e.touches[0].clientX,o=t(this,g)-i;o>b.touchThreshold?(t(this,l).onNextSlide(),n(this,g,i),this.update()):o<-b.touchThreshold&&(t(this,l).onPrevSlide(),n(this,g,i),this.update())}};let T=b;g=new WeakMap,l=new WeakMap,p=new WeakMap,v=new WeakMap,c=new WeakMap,k=new WeakMap,m=new WeakMap,C=new WeakMap,y=new WeakMap,L=new WeakMap,N(T,"touchThreshold",75);var E,B;class J extends T{constructor(i){const{elementsList:o,sliderContent:f}=i;super(i);r(this,E,void 0);r(this,B,void 0);n(this,B,o),n(this,E,f),super.update()}destroy(){super.destroy()}updateContent(){const i=super.getCurrentSlide(),o=t(this,B)[i].querySelector("img");t(this,E).src=o.dataset.source,t(this,E).alt=o.alt}}E=new WeakMap,B=new WeakMap;const S={gallery:document.querySelector(".gallery"),modalBackdrop:document.querySelector(".modal-backdrop"),buttonClose:document.querySelector(".close-button"),modalContent:document.querySelector(".modal-content"),modalClose:document.querySelector("#closeBtn")};Y(H,S.gallery);S.gallery.addEventListener("click",U);S.buttonClose.addEventListener("click",D);S.modalBackdrop.addEventListener("click",Z);S.modalClose.addEventListener("click",D);let I;const Q={slidesPerPage:1,prevBtnId:"prevBtn",nextBtnId:"nextBtn",dotsContainerId:"sliderDots",sliderContainerId:"modalContent",slidesCounterId:"slidesCounter",dotDefaultClass:"slider-dot",dotActiveClass:"active-dot",isDotContainText:!1,sliderContent:S.modalContent};function U(s){const e=s.target;if(!e.classList.contains("gallery-img"))return;s.preventDefault();const o=e.closest(".gallery-item"),f=s.currentTarget.children,x=Array.from(f).indexOf(o);I=new J({...Q,currentSlide:x,elementsList:f}),V()}function V(){S.modalBackdrop.classList.add("is-open"),window.addEventListener("keydown",q)}function D(s){window.removeEventListener("keydown",q),S.modalBackdrop.classList.remove("is-open"),I.destroy()}function q(s){s.code===j&&D()}function Z(s){s.currentTarget===s.target&&D()}
//# sourceMappingURL=commonHelpers3.js.map
