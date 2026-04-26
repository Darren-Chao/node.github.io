(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const k="modulepreload",E=function(e,r){return new URL(e,r).href},w={},C=function(r,n,c){let t=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));t=Promise.allSettled(n.map(u=>{if(u=E(u,c),u in w)return;w[u]=!0;const s=u.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!c)for(let m=a.length-1;m>=0;m--){const v=a[m];if(v.href===u&&(!s||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":k,s||(l.as="script"),l.crossOrigin="",l.href=u,p&&l.setAttribute("nonce",p),document.head.appendChild(l),s)return new Promise((m,v)=>{l.addEventListener("load",m),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return t.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return r().catch(o)})};console.log("NODE Landing Page Initialized");const q=async()=>{try{const{getUser:e,updateAuthUI:r}=await C(async()=>{const{getUser:c,updateAuthUI:t}=await import("./auth-BpilJm9Y.js");return{getUser:c,updateAuthUI:t}},[],import.meta.url),n=await e();r(n)}catch(e){console.error("Auth check failed:",e)}},g=document.querySelector(".mobile-menu-btn"),y=document.body;let h=document.querySelector(".nav-links-mobile");h||(h=document.createElement("div"),h.className="nav-links-mobile",h.innerHTML=`
    <div class="mobile-menu-header">
      <a href="shop.html" class="mobile-shop-link">Shop</a>
      <div class="mobile-header-right">
        <button class="mobile-search-trigger" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <a href="#" class="mobile-signin-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Sign In
        </a>
      </div>
    </div>
    <div class="mobile-divider"></div>
    <div class="mobile-secondary-links">
      <a href="educators.html">For <b>Education</b></a>
      <a href="makers.html">For <b>Makers</b></a>
    </div>
    <div class="mobile-divider"></div>
    <div class="mobile-category-links">
      <div class="mobile-category">
        <h3>Products</h3>
        <ul>
          <li><a href="kit1-info.html">Node Starter Kit</a></li>
          <li><a href="sensor-kit-info.html">Sensor Expansion Kit</a></li>
        </ul>
      </div>
      <div class="mobile-category">
        <h3>Community</h3>
        <ul>
          <li><a href="project-hub.html">Project Hub</a></li>
          <li><a href="forum.html">Forum</a></li>
          <li><a href="github-mock.html">GitHub</a></li>
        </ul>
      </div>
      <div class="mobile-category">
        <h3>Documentation</h3>
        <ul>
          <li><a href="hardware-docs.html">Hardware Docs</a></li>
          <li><a href="software-docs.html">Software Docs</a></li>
          <li><a href="guides.html">Guides</a></li>
        </ul>
      </div>
    </div>
  `,document.body.appendChild(h),h.querySelector(".mobile-search-trigger").addEventListener("click",e=>{e.preventDefault(),h.classList.remove("active"),y.classList.remove("mobile-menu-active"),typeof openSearch=="function"?openSearch():document.querySelector(".search-btn").click()}));q();g&&g.addEventListener("click",()=>{h.classList.toggle("active"),y.classList.toggle("mobile-menu-active");const e=g.querySelectorAll("span");h.classList.contains("active")?(e[0].style.transform="rotate(45deg) translate(5px, 5px)",e[1].style.opacity="0",e[2].style.transform="rotate(-45deg) translate(7px, -7px)"):(e[0].style.transform="none",e[1].style.opacity="1",e[2].style.transform="none")});h.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("active"),y.classList.remove("mobile-menu-active");const r=g.querySelectorAll("span");r[0].style.transform="none",r[1].style.opacity="1",r[2].style.transform="none"})});document.querySelectorAll(".dropdown > a").forEach(e=>{e.addEventListener("click",r=>{if(window.innerWidth<=1024){r.preventDefault();const n=e.nextElementSibling;n.style.visibility=n.style.visibility==="visible"?"hidden":"visible",n.style.opacity=n.style.opacity==="1"?"0":"1",n.style.position="relative",n.style.transform="none"}})});const O={threshold:.1},L=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate-in"),L.unobserve(r.target))})},O);document.querySelectorAll(".feature-card, .hero-content, .ecosystem-content").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",L.observe(e)});const S=document.createElement("style");S.textContent=`
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;document.head.appendChild(S);let b=!1;function B(){const e=document.querySelector(".hero"),r=document.querySelector(".hero-content"),n=document.querySelector(".hero-overlay");if(!e||!r||!n)return;const c=window.pageYOffset,t=e.offsetHeight;if(c<=t){const o=c/t,a=1-o*.15,i=o*.6,p=o*10,u=1-o*1.3;n.style.opacity=i,e.style.filter=`blur(${p}px)`,r.style.transform=`scale(${a})`,r.style.opacity=Math.max(0,u)}b=!1}window.addEventListener("scroll",()=>{b||(window.requestAnimationFrame(B),b=!0)});(function(){document.body.insertAdjacentHTML("beforeend",`
    <div class="search-overlay">
      <div class="search-modal">
        <div class="search-header">
          <div class="search-input-container">
            <input type="text" id="site-search-input" placeholder="Search on NODE" autocomplete="off">
            <button class="close-search" aria-label="Close Search">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="search-results-container">
          <div id="search-results-list" class="search-results-inner"></div>
        </div>
      </div>
    </div>
  `);const r=document.querySelector(".search-overlay"),n=document.getElementById("site-search-input"),c=document.querySelector(".close-search"),t=document.getElementById("search-results-list");let o=[];fetch("./search-index.json").then(s=>s.json()).then(s=>{o=s}).catch(s=>console.error("Could not load search index:",s));function a(){r.classList.add("active"),y.classList.add("mobile-menu-active"),setTimeout(()=>n.focus(),300)}function i(){r.classList.remove("active"),y.classList.remove("mobile-menu-active"),n.value="",t.innerHTML=""}document.addEventListener("click",s=>{(s.target.closest(".search-btn")||s.target.closest('[aria-label="Search"]'))&&(s.preventDefault(),a())}),c.addEventListener("click",i),document.addEventListener("keydown",s=>{s.key==="Escape"&&r.classList.contains("active")&&i()}),n.addEventListener("input",s=>{const d=s.target.value.trim().toLowerCase();if(d.length<2){t.innerHTML="";return}const f=o.filter(l=>l.title.toLowerCase().includes(d)||l.content.toLowerCase().includes(d));p(f,d)});function p(s,d){if(s.length===0){t.innerHTML=`
        <div class="no-results" style="text-align: left;">
          <p style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: 32px;">no results found for "<b>${d}</b>"</p>
          <div class="search-tips">
            <p style="font-weight: 700; margin-bottom: 12px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Search Tips</p>
            <ul style="list-style: disc; margin-left: 20px; color: var(--text-muted); font-size: 0.95rem;">
              <li>Make sure all words are spelled correctly.</li>
              <li>Try using different keywords.</li>
            </ul>
          </div>
          <p style="margin-top: 40px;">
            <a href="https://www.google.com/search?q=${encodeURIComponent(d+" site:"+window.location.hostname)}" target="_blank" style="font-size: 0.8rem; color: #BBB; text-decoration: none;">see results for "${d}" on google</a>
          </p>
        </div>
      `;return}const f=s.map(l=>{const m=u(l.content,d);return`
        <a href="${l.url}" class="search-result-item">
          <h3>${l.title}</h3>
          <p class="search-result-snippet">${m}</p>
        </a>
      `}).join("");t.innerHTML=f}function u(s,d){const f=s.toLowerCase().indexOf(d);if(f===-1)return s.substring(0,150)+"...";const l=Math.max(0,f-60),m=Math.min(s.length,f+d.length+100);let v=s.substring(l,m);const x=new RegExp(`(${d})`,"gi");return v=v.replace(x,"<b>$1</b>"),(l>0?"...":"")+v+(m<s.length?"...":"")}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-container"),r=document.querySelector(".prev-btn"),n=document.querySelector(".next-btn");if(e&&r&&n){const t=(()=>{const o=e.querySelector(".review-card");return o?o.getBoundingClientRect().width+24:300})();r.addEventListener("click",()=>{e.scrollBy({left:-t,behavior:"smooth"})}),n.addEventListener("click",()=>{e.scrollBy({left:t,behavior:"smooth"})})}document.querySelectorAll(".creator-read-more").forEach(c=>{c.addEventListener("click",()=>{const o=c.previousElementSibling.classList.toggle("expanded");c.textContent=o?"Show Less":"Keep Reading"})})});
