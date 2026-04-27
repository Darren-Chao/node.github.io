(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function h(r){if(r.ep)return;r.ep=!0;const i=l(r);fetch(r.href,i)}})();const x="modulepreload",k=function(e,s){return new URL(e,s).href},L={},q=function(s,l,h){let r=Promise.resolve();if(l&&l.length>0){const o=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),a=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(l.map(d=>{if(d=k(d,h),d in L)return;L[d]=!0;const t=d.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!h)for(let v=o.length-1;v>=0;v--){const p=o[v];if(p.href===d&&(!t||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":x,t||(u.as="script"),u.crossOrigin="",u.href=d,a&&u.setAttribute("nonce",a),document.head.appendChild(u),t)return new Promise((v,p)=>{u.addEventListener("load",v),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return r.then(o=>{for(const n of o||[])n.status==="rejected"&&i(n.reason);return s().catch(i)})};console.log("NODE Landing Page Initialized");const A=async()=>{try{const{getUser:e,updateAuthUI:s}=await q(async()=>{const{getUser:h,updateAuthUI:r}=await import("./auth-10DlByNt.js");return{getUser:h,updateAuthUI:r}},[],import.meta.url),l=await e();s(l)}catch(e){console.error("Auth check failed:",e)}},g=document.querySelector(".mobile-menu-btn"),y=document.body;let m=document.querySelector(".nav-links-mobile");m||(m=document.createElement("div"),m.className="nav-links-mobile",m.innerHTML=`
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
  `,document.body.appendChild(m),m.querySelector(".mobile-search-trigger").addEventListener("click",e=>{e.preventDefault(),m.classList.remove("active"),y.classList.remove("mobile-menu-active"),typeof openSearch=="function"?openSearch():document.querySelector(".search-btn").click()}));A();g&&g.addEventListener("click",()=>{m.classList.toggle("active"),y.classList.toggle("mobile-menu-active");const e=g.querySelectorAll("span");m.classList.contains("active")?(e[0].style.transform="rotate(45deg) translate(5px, 5px)",e[1].style.opacity="0",e[2].style.transform="rotate(-45deg) translate(7px, -7px)"):(e[0].style.transform="none",e[1].style.opacity="1",e[2].style.transform="none")});m.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("active"),y.classList.remove("mobile-menu-active");const s=g.querySelectorAll("span");s[0].style.transform="none",s[1].style.opacity="1",s[2].style.transform="none"})});document.querySelectorAll(".dropdown > a").forEach(e=>{e.addEventListener("click",s=>{if(window.innerWidth<=1024){s.preventDefault();const l=e.nextElementSibling;l.style.visibility=l.style.visibility==="visible"?"hidden":"visible",l.style.opacity=l.style.opacity==="1"?"0":"1",l.style.position="relative",l.style.transform="none"}})});const C={threshold:.1},w=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate-in"),w.unobserve(s.target))})},C);document.querySelectorAll(".feature-card, .hero-content, .ecosystem-content").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",w.observe(e)});const E=document.createElement("style");E.textContent=`
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;document.head.appendChild(E);let b=!1;function O(){const e=document.querySelector(".hero"),s=document.querySelector(".hero-content"),l=document.querySelector(".hero-overlay");if(!e||!s||!l)return;const h=window.pageYOffset,r=e.offsetHeight;if(h<=r){const i=h/r,o=1-i*.15,n=i*.6,a=i*10,d=1-i*1.3;l.style.opacity=n,e.style.filter=`blur(${a}px)`,s.style.transform=`scale(${o})`,s.style.opacity=Math.max(0,d)}b=!1}window.addEventListener("scroll",()=>{b||(window.requestAnimationFrame(O),b=!0)});(function(){document.body.insertAdjacentHTML("beforeend",`
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
  `);const s=document.querySelector(".search-overlay"),l=document.getElementById("site-search-input"),h=document.querySelector(".close-search"),r=document.getElementById("search-results-list");let i=[];fetch("./search-index.json").then(t=>t.json()).then(t=>{i=t}).catch(t=>console.error("Could not load search index:",t));function o(){s.classList.add("active"),y.classList.add("mobile-menu-active"),setTimeout(()=>l.focus(),300)}function n(){s.classList.remove("active"),y.classList.remove("mobile-menu-active"),l.value="",r.innerHTML=""}document.addEventListener("click",t=>{(t.target.closest(".search-btn")||t.target.closest('[aria-label="Search"]'))&&(t.preventDefault(),o())}),h.addEventListener("click",n),document.addEventListener("keydown",t=>{t.key==="Escape"&&s.classList.contains("active")&&n()}),l.addEventListener("input",t=>{const c=t.target.value.trim().toLowerCase();if(c.length<2){r.innerHTML="";return}const f=i.filter(u=>u.title.toLowerCase().includes(c)||u.content.toLowerCase().includes(c));a(f,c)});function a(t,c){if(t.length===0){r.innerHTML=`
        <div class="no-results" style="text-align: left;">
          <p style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: 32px;">no results found for "<b>${c}</b>"</p>
          <div class="search-tips">
            <p style="font-weight: 700; margin-bottom: 12px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Search Tips</p>
            <ul style="list-style: disc; margin-left: 20px; color: var(--text-muted); font-size: 0.95rem;">
              <li>Make sure all words are spelled correctly.</li>
              <li>Try using different keywords.</li>
            </ul>
          </div>
          <p style="margin-top: 40px;">
            <a href="https://www.google.com/search?q=${encodeURIComponent(c+" site:"+window.location.hostname)}" target="_blank" style="font-size: 0.8rem; color: #BBB; text-decoration: none;">see results for "${c}" on google</a>
          </p>
        </div>
      `;return}const f=t.map(u=>{const v=d(u.content,c);return`
        <a href="${u.url}" class="search-result-item">
          <h3>${u.title}</h3>
          <p class="search-result-snippet">${v}</p>
        </a>
      `}).join("");r.innerHTML=f}function d(t,c){const f=t.toLowerCase().indexOf(c);if(f===-1)return t.substring(0,150)+"...";const u=Math.max(0,f-60),v=Math.min(t.length,f+c.length+100);let p=t.substring(u,v);const S=new RegExp(`(${c})`,"gi");return p=p.replace(S,"<b>$1</b>"),(u>0?"...":"")+p+(v<t.length?"...":"")}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-container"),s=document.querySelector(".prev-btn"),l=document.querySelector(".next-btn");if(e&&s&&l){const n=(()=>{const a=e.querySelector(".review-card");return a?a.getBoundingClientRect().width+24:300})();s.addEventListener("click",()=>{e.scrollBy({left:-n,behavior:"smooth"})}),l.addEventListener("click",()=>{e.scrollBy({left:n,behavior:"smooth"})})}document.querySelectorAll(".creator-read-more").forEach(o=>{o.addEventListener("click",()=>{const a=o.previousElementSibling.classList.toggle("expanded");o.textContent=a?"Show Less":"Keep Reading"})});const h=document.querySelectorAll(".legal-section"),r=document.querySelectorAll(".legal-nav a");if(h.length>0&&r.length>0){const o={root:null,rootMargin:"-100px 0px -60% 0px",threshold:0},n=new IntersectionObserver(a=>{a.forEach(d=>{if(d.isIntersecting){r.forEach(f=>f.classList.remove("active"));const t=d.target.getAttribute("id"),c=document.querySelector(`.legal-nav a[href="#${t}"]`);c&&c.classList.add("active")}})},o);h.forEach(a=>{n.observe(a)}),r.forEach(a=>{a.addEventListener("click",d=>{d.preventDefault();const t=a.getAttribute("href").substring(1),c=document.getElementById(t);c&&c.scrollIntoView({behavior:"smooth"})})})}const i=document.querySelectorAll(".faq-item");i.forEach(o=>{const n=o.querySelector(".faq-question"),a=o.querySelector(".faq-answer");n&&a&&n.addEventListener("click",()=>{const d=o.classList.contains("active");i.forEach(t=>{t.classList.remove("active");const c=t.querySelector(".faq-answer");c&&(c.style.maxHeight=null)}),d||(o.classList.add("active"),a.style.maxHeight=a.scrollHeight+"px")})})});
