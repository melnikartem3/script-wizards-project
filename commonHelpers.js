import{S as m,N as f,K as p,M as v,i as g}from"./assets/vendor-1e137dd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const b=document.querySelectorAll(".nav-links, .header-order-link"),y=document.querySelectorAll(".nav-links"),E=document.querySelector(".nav-general-link"),L=document.querySelector(".nav-list");for(const e of b)e.addEventListener("click",S);function S(e){e.preventDefault();const t=this.getAttribute("href"),n=document.querySelector(t).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}E.addEventListener("click",function(e){e.preventDefault(),y.forEach(t=>{t.classList.toggle("show")})});L.addEventListener("mouseover",function(){y.forEach(e=>{e.classList.add("show")})});L.addEventListener("mouseout",function(){y.forEach(e=>{e.classList.remove("show")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".js-menu-link"),o=()=>{const r=t.getAttribute("aria-expanded")==="true"||!1;r?document.body.classList.remove("no-scroll"):document.body.classList.add("no-scroll"),t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open")};t.addEventListener("click",o),n.addEventListener("click",o),s.forEach(r=>{r.addEventListener("click",c=>{c.preventDefault();const i=r.getAttribute("href").substring(1),l=document.getElementById(i);l&&(l.scrollIntoView({behavior:"smooth"}),o())})}),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))})})();const q=new m(".swiper-reviews-wrapper",{modules:[f,p,v],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}}),d=new m(".swiper-projects",{modules:[f,p,v],navigation:{prevEl:".arrow-btn-left",nextEl:".arrow-btn-right"},watchOverflow:!0,slidesPerGroup:1,slidesPerView:1,speed:300,mousewheel:{invert:!0},keyboard:{enabled:!0}}),k=new m(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[f,p,v],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}}),P=document.querySelectorAll(".accordion-header"),A=document.querySelector(".accordion-panel"),I=document.querySelector(".about-ac"),T=document.querySelector(".mobile-open-ac");A.style.maxHeight="100%";I.classList.add("active");T.style.transform="rotate(180deg)";P.forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".about-ac"),n=t.querySelector(".accordion-panel"),s=this.querySelector(".mobile-open-ac");t.classList.toggle("active"),t.classList.contains("active")?(n.style.maxHeight=n.scrollHeight+"px",s.style.transform="rotate(180deg)"):(n.style.maxHeight="0",s.style.transform="rotate(0deg)")})});document.querySelector(".about-swiper-button").addEventListener("click",()=>{k.slideNext()});const x=document.querySelector(".swiper-projects");x.addEventListener("keydown",e=>{e.key==="Tab"&&(d.isEnd?d.slideTo(0):d.slideNext())});document.querySelector(".faq-column-line");document.querySelectorAll(".faq-list-item");document.querySelector(".faq-list");const O=document.querySelectorAll(".faq-list-item-btn");O.forEach(function(e){e.addEventListener("click",function(){const t=e.parentElement,n=t.querySelector(".faq-list-item-text"),s=e.querySelector(".faq-svg"),o=t.querySelector(".faq-list-item-title");n.classList.contains("is-active")?(n.classList.remove("is-active"),n.classList.add("faq-mobile-text"),o.classList.remove("faq-title-is-active"),e.parentElement.classList.remove("close-fqa-list-item-laptop"),s.classList.add("close-svg")):(n.classList.remove("faq-mobile-text"),n.classList.add("is-active"),o.classList.add("faq-title-is-active"),s.classList.remove("close-svg"),e.parentElement.classList.add("close-fqa-list-item-laptop"))})});const M=document.querySelectorAll(".covers-scroller-inner"),B=document.querySelector(".covers"),u=Array.from(M);function C(){u.forEach(e=>{Array.from(e.children).forEach(n=>{const s=n.cloneNode(!0);s.setAttribute("aria-hidden",!0),e.appendChild(s)})})}C();const H={threshold:.5,rootMargin:"-40px"},j=new IntersectionObserver(function(e,t){e.forEach(n=>{n.isIntersecting?u.forEach(s=>{s.style.animationPlayState="running"}):u.forEach(s=>{s.style.animationPlayState="paused"})})},H);j.observe(B);const V="https://portfolio-js.b.goit.study/api/reviews",w=document.querySelector(".reviews-list"),N=document.querySelector(".reviews-btn-wrapper");async function D(){try{const e=await fetch(V);if(!e.ok)throw new Error(e.status);const t=await e.json();w.innerHTML=R(t),q.update()}catch{g.error({theme:"dark",message:"Oops, sorry, something went wrong. Please try again later.",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3}),w.innerHTML='<span class="reviews-plug">Not found 😔</span>',N.style.display="none"}}function R(e){return e.map(({avatar_url:t,_id:n,author:s,review:o})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${t}"
            alt="${n}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${s}</h3>
          <p class="reviews-item-text">${o}</p>
        </li>`).join("")}function z(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-page");let t=!1;window.addEventListener("scroll",function(){!t&&z(e)&&(t=!0,D())})});const h=document.querySelector(".footer-form");h.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".footer-modal-background"),n=document.querySelector(".footer-input-success-message"),s=document.querySelector(".footer-input-error-message"),o=document.getElementById("email"),r=document.getElementById("comment");o.classList.remove("footer-input-error"),s.style.display="none";const c={email:o.value,comment:r.value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(i=>(i.ok?(t.classList.add("footer-modal-is-open"),document.querySelector(".footer-modal-btn").addEventListener("click",function(){t.classList.remove("footer-modal-is-open")}),document.addEventListener("keydown",function(a){a.key==="Escape"&&t.classList.remove("footer-modal-is-open")}),t.addEventListener("click",function(a){a.target===t&&t.classList.remove("footer-modal-is-open")}),o.classList.add("footer-input-success"),n.style.display="block",setTimeout(function(){n.style.display="none",o.classList.remove("footer-input-success")},1e4),h.reset()):(g.error({title:"Oops!",message:"Please, enter a valid email address"}),o.classList.add("footer-input-error"),s.style.display="block"),i.json())).then(i=>i).catch(i=>i)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTopBtn"),t=e.querySelector(".scroll-icon"),n=document.getElementById("about-me");let s=!1;window.addEventListener("scroll",function(){if(!s){const o=n.offsetTop;(window.scrollY||document.documentElement.scrollTop)>o?e.style.display="block":e.style.display="none"}}),e.addEventListener("click",function(){s||(s=!0,window.scrollTo(0,0),e.classList.add("scroll-icon-active"),t.addEventListener("animationend",function o(){e.classList.remove("scroll-icon-active"),t.style.transform="translateY(0)",s=!1,t.removeEventListener("animationend",o)}))}),e.addEventListener("mouseenter",function(){s||(t.style.transform="translateY(0)")}),e.addEventListener("focus",function(){s||(t.style.transform="translateY(0)")})});
//# sourceMappingURL=commonHelpers.js.map
