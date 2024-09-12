class DetailsModal extends HTMLElement{constructor(){super(),this.detailsContainer=this.querySelector("details"),this.summaryToggle=this.querySelector("summary"),this.detailsContainer.addEventListener("keyup",event=>event.code.toUpperCase()==="ESCAPE"&&this.close()),this.summaryToggle.addEventListener("click",this.onSummaryClick.bind(this)),this.querySelector('button[type="button"]').addEventListener("click",this.close.bind(this)),this.summaryToggle.setAttribute("role","button")}isOpen(){return this.detailsContainer.hasAttribute("open")}onSummaryClick(event){event.preventDefault(),event.target.closest("details").hasAttribute("open")?this.close():this.open(event)}onBodyClick(event){(!this.contains(event.target)||event.target.classList.contains("modal-overlay"))&&this.close(!1)}open(event){this.onBodyClickEvent=this.onBodyClickEvent||this.onBodyClick.bind(this),event.target.closest("details").setAttribute("open",!0),document.body.addEventListener("click",this.onBodyClickEvent),document.body.classList.add("overflow-hidden"),trapFocus(this.detailsContainer.querySelector('[tabindex="-1"]'),this.detailsContainer.querySelector('input:not([type="hidden"])'))}close(focusToggle=!0){removeTrapFocus(focusToggle?this.summaryToggle:null),this.detailsContainer.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClickEvent),document.body.classList.remove("overflow-hidden")}}customElements.define("details-modal",DetailsModal);
//# sourceMappingURL=/cdn/shop/t/2/assets/details-modal.js.map?v=25581673532751508451722250521
