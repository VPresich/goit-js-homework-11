var K=Object.defineProperty;var G=(s,e,i)=>e in s?K(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var N=(s,e,i)=>(G(s,typeof e!="symbol"?e+"":e,i),i),F=(s,e,i)=>{if(!e.has(s))throw TypeError("Cannot "+i)};var t=(s,e,i)=>(F(s,e,"read from private field"),i?i.call(s):e.get(s)),r=(s,e,i)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,i)},n=(s,e,i,o)=>(F(s,e,"write to private field"),o?o.call(s,i):e.set(s,i),i),q=(s,e,i,o)=>({set _(f){n(s,e,f,i)},get _(){return t(s,e,o)}});import"./assets/create-cards-gallery-6a214f9d.js";/* empty css                      */import{i as H,K as $}from"./assets/insert-cards-to-gallery-a80f76a8.js";import"./assets/vendor-9310f15c.js";var d,h,a,u;class Y{constructor(e,i,o){r(this,d,void 0);r(this,h,void 0);r(this,a,void 0);r(this,u,void 0);n(this,d,e),n(this,h,i),n(this,a,o),n(this,u,Array.from({length:o},()=>({display:!1,offset:0}))),this.setSlidesProperty()}set slidesPerPage(e){n(this,h,e)}get slidesPerPage(){return t(this,h)}get currentSlide(){return t(this,d)}set currentSlide(e){return n(this,d,e)}get slidesNumber(){return t(this,a)}set slidesNumber(e){return n(this,a,e)}setSlidesProperty(){t(this,u).forEach((e,i)=>{i>=t(this,d)&&i<t(this,d)+t(this,h)?e.display=!0:e.display=!1})}onPrevSlide(){t(this,d)>0&&(q(this,d)._--,t(this,u).forEach((e,i)=>{e.offset+=1})),this.setSlidesProperty()}onNextSlide(){t(this,d)<t(this,a)-t(this,h)&&(n(this,d,t(this,d)+1),t(this,u).forEach((e,i)=>{e.offset-=1})),this.setSlidesProperty()}goToSlide(e){const i=e-t(this,d);e<=t(this,a)-t(this,h)&&(n(this,d,t(this,d)+i),t(this,u).forEach(o=>{o.offset-=i})),this.setSlidesProperty()}isExistNext(){return t(this,d)>=t(this,a)-t(this,h)||t(this,a)<=t(this,h)}isExistPrev(){return t(this,d)===0||t(this,a)<=t(this,h)}isDisplaySlide(e){return t(this,u)[e].display}getOffsetSlide(e){return t(this,u)[e].offset}}d=new WeakMap,h=new WeakMap,a=new WeakMap,u=new WeakMap;var C,l,v,p,c,L,m,y,g,k;const b=class{constructor({currentSlide:e,slidesPerPage:i,prevBtnId:o,nextBtnId:f,dotsContainerId:x="",sliderContainerId:P="",slidesCounterId:w="",dotDefaultClass:O="slider-dot",dotActiveClass:W="active-dot",isDotContainText:X=!1,elementsList:A}){r(this,C,0);r(this,l,void 0);r(this,v,void 0);r(this,p,void 0);r(this,c,void 0);r(this,L,void 0);r(this,m,void 0);r(this,y,void 0);r(this,g,void 0);r(this,k,void 0);n(this,l,new Y(e,i,A.length)),o&&n(this,v,document.getElementById(o)),f&&n(this,p,document.getElementById(f)),x&&(n(this,c,document.getElementById(x)),n(this,y,O),n(this,g,W),n(this,k,X)),P&&n(this,m,document.getElementById(P)),w&&n(this,L,document.getElementById(w)),this.init()}init(){this.initBtnsFunction(),t(this,m)&&this.initTouchFunction(),t(this,c)&&this.createDots()}update(){this.updateContent(),this.updateButtons(),this.updateDisplayDots(),this.updateCounter()}destroy(){this.removeBtnsFunction(),t(this,c)&&this.removeDots(),t(this,m)&&this.removeTouchFunction()}getCurrentSlide(){return t(this,l).currentSlide}initBtnsFunction(){t(this,v)&&t(this,v).addEventListener("click",this.onPrevBtnClick.bind(this)),t(this,p)&&t(this,p).addEventListener("click",this.onNextBtnClick.bind(this))}initTouchFunction(){n(this,C,0),t(this,m).addEventListener("touchstart",this.onSliderTouchStart.bind(this)),t(this,m).addEventListener("touchmove",this.onSliderTouchMove.bind(this))}createDots(){t(this,c).innerHTML="";for(let e=0;e<t(this,l).slidesNumber;e+=1){const i=document.createElement("div");i.className=t(this,y),i.dataset.index=e,t(this,k)&&(i.textContent=`${e+1}`),t(this,c).appendChild(i)}t(this,c).addEventListener("click",this.onSliderDotsClick.bind(this))}updateContent(){console.log(TODO in children)}updateButtons(){t(this,v).disabled=t(this,l).isExistPrev(),t(this,p).disabled=t(this,l).isExistNext()}updateDisplayDots(){const e=t(this,c).children;for(let i=0;i<e.length;i+=1)i===t(this,l).currentSlide?e[i].classList.add(t(this,g)):e[i].classList.remove(t(this,g))}updateCounter(){t(this,L).textContent=`${t(this,l).currentSlide+1+"/"+t(this,l).slidesNumber}`}removeBtnsFunction(){t(this,v)&&t(this,v).removeEventListener("click",this.onPrevBtnClick.bind(this)),t(this,p)&&t(this,p).removeEventListener("click",this.onNextBtnClick.bind(this))}removeDots(){t(this,c).innerHTML="",t(this,c).removeEventListener("click",this.onSliderDotsClick.bind(this))}removeTouchFunction(){t(this,m).removeEventListener("touchstart",this.onSliderTouchStart.bind(this)),t(this,m).removeEventListener("touchmove",this.onSliderTouchMove.bind(this))}onPrevBtnClick(){t(this,l).onPrevSlide(),this.update()}onNextBtnClick(){t(this,l).onNextSlide(),this.update()}onSliderDotsClick(e){const i=e.target;if(i.classList.contains(t(this,y))){const o=parseInt(i.dataset.index,10);t(this,l).goToSlide(o),this.update()}}onSliderTouchStart(e){n(this,C,e.touches[0].clientX)}onSliderTouchMove(e){const i=e.touches[0].clientX,o=t(this,C)-i;o>b.touchThreshold?(t(this,l).onNextSlide(),n(this,C,i),this.update()):o<-b.touchThreshold&&(t(this,l).onPrevSlide(),n(this,C,i),this.update())}};let T=b;C=new WeakMap,l=new WeakMap,v=new WeakMap,p=new WeakMap,c=new WeakMap,L=new WeakMap,m=new WeakMap,y=new WeakMap,g=new WeakMap,k=new WeakMap,N(T,"touchThreshold",75);var E,B;class j extends T{constructor(i){const{elementsList:o,sliderContent:f}=i;super(i);r(this,E,void 0);r(this,B,void 0);n(this,B,o),n(this,E,f),super.update()}destroy(){super.destroy()}updateContent(){const i=super.getCurrentSlide(),o=t(this,B)[i].querySelector("img");t(this,E).src=o.dataset.source,t(this,E).alt=o.alt}}E=new WeakMap,B=new WeakMap;const S={gallery:document.querySelector(".gallery"),modalBackdrop:document.querySelector(".modal-backdrop"),buttonClose:document.querySelector(".close-button"),modalContent:document.querySelector(".modal-content"),modalClose:document.querySelector("#closeBtn"),loader:document.querySelector(".loader")};S.gallery.addEventListener("click",Q);S.buttonClose.addEventListener("click",D);S.modalBackdrop.addEventListener("click",V);S.modalClose.addEventListener("click",D);let I;const z={slidesPerPage:1,prevBtnId:"prevBtn",nextBtnId:"nextBtn",dotsContainerId:"sliderDots",sliderContainerId:"modalContent",slidesCounterId:"slidesCounter",dotDefaultClass:"slider-dot",dotActiveClass:"active-dot",isDotContainText:!1,sliderContent:S.modalContent},M=document.querySelector(".search-form");M.addEventListener("submit",J);function J(s){s.preventDefault(),s.currentTarget.search.value.trim(),H({searchForm:M,galleryRef:S.gallery,loaderRef:S.loader})}function Q(s){s.preventDefault();const e=s.target;if(!(e.classList.contains("card-cover")||e.classList.contains("card-cover-darkened")))return;const o=e.closest("li"),f=s.currentTarget.children,x=Array.from(f).indexOf(o);I=new j({...z,currentSlide:x,elementsList:f}),U()}function U(){S.modalBackdrop.classList.add("is-open"),window.addEventListener("keydown",R)}function D(s){window.removeEventListener("keydown",R),S.modalBackdrop.classList.remove("is-open"),I.destroy()}function R(s){s.code===$&&D()}function V(s){s.currentTarget===s.target&&D()}
//# sourceMappingURL=commonHelpers3.js.map
