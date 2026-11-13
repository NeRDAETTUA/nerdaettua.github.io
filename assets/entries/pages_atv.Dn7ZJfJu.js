import{j as e,l as s,m as i,a as r,n as t,g as o,d as w,b as c,N as y,S as b,c as j,e as k,k as C,f as p,A as z,p as E,r as g,h as q,i as d,o as h,R as N,q as S,P as _,s as O,t as A}from"../chunks/chunk-CX9_i4JZ.js";/* empty css                      */const f="NeRD",L=[{id:"3Biv6ltgkYKtgBQxdJrKw"},{id:"xBS5ozESn2cK63icHnvtC",maxWidth:991},{id:"0_ve5QOFHNb0fnZ1GQipb",maxWidth:767},{id:"OIYbx6NwwgecvCYuNuEar",maxWidth:479}],I="apenas_robo_iC01iNW421QRImmL4SK7d.png",P=[],T=[],M=n=>e.jsxs("body",{className:"w-element",children:[e.jsx(s,{children:e.jsx(i,{children:e.jsx(r,{code:`<style>
  /* Remove margin from all paragraphs so we don't need to use a Token on every one. */
  p {
    margin: 0;
  }

  /* Make links scroll to their sections smoothly. */
  * {
    scroll-behavior: smooth;
  }

  /* Show parent dropdown link hover styles when dropdown is active. */
  button[data-state="open"].nav-dropdown-parent {
  --navigation-menu-trigger-icon-transform: 180deg;
  color: var(--foreground-accent);
}
</style>`,className:"w-html-embed"})})}),e.jsx(r,{code:`<script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

  requestAnimationFrame(() => {
    const sliders = document.querySelectorAll('.meu-slider');

    sliders.forEach((container) => {
      // Criar elementos se faltarem
      if (!container.querySelector('.swiper-pagination')) {
        const pag = document.createElement('div');
        pag.classList.add('swiper-pagination');
        container.appendChild(pag);
      }

      if (!container.querySelector('.swiper-button-prev')) {
        const prev = document.createElement('div');
        prev.classList.add('swiper-button-prev');
        container.appendChild(prev);
      }

      if (!container.querySelector('.swiper-button-next')) {
        const next = document.createElement('div');
        next.classList.add('swiper-button-next');
        container.appendChild(next);
      }

      // Inicializa o Swiper
      new Swiper(container, {
        loop: container.dataset.loop === 'true',
        autoplay: container.dataset.autoplay === 'true' ? {
          delay: 3000,
          disableOnInteraction: false,
        } : false,
        slidesPerView: 1, // Alterado de 'auto' para 1
        navigation: {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    });
  });
<\/script>



<style>
.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  opacity: 0.5;
  margin: 0 4px;
  transition: background-color 0.3s, opacity 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: #007aff;
  opacity: 1;
}
  
</style>
`,executeScriptOnCanvas:!1,className:"w-html-embed"}),e.jsx(t,{tag:"nav",id:"a",className:"w-box c1y5gtuy ctwedid c4zv7o8 c1yxbcu3 ca0xin3 cmul90s c19faiz0 c45gf4w c25muhi c1o83613 czm2iir c1hkrd9w chwz02u ccanaxu cu1pvnx c1han7e8 cu196q0 c4tvhmr c7f3paa c6lozm6 c1e66jhm c1sgc962 c1iani63 cyfhg6s c1nj902p",children:e.jsxs("div",{className:"w-element c15wov26 cufu5ux chwz02u ccanaxu c3o4zz4 c3ub148 ctwedid c1y5gtuy c6o4ko5 cw0crdd c383mw5 c1nj902p cauz5uw c1blbg3o c1w68d12 chopplv cmk8617 ch2nya0",children:[e.jsx(t,{className:"w-box c15wov26 ccanaxu cuwsqp1 c45gf4w c1n863ed c8yq6mq cufu5ux",children:e.jsx(s,{children:e.jsx(i,{children:e.jsx(o,{href:"/",target:"_top",className:"w-link",children:e.jsx(w,{loading:"eager",src:"/assets/apenas_robo_iC01iNW421QRImmL4SK7d.png",width:50,alt:"",height:409,className:"w-image"})})})})}),e.jsxs(t,{className:"w-box c15wov26 ccanaxu cciowao cj6cf3e c10c0lh2 c1mes1tv czmc1ut",children:[e.jsx(s,{children:e.jsx(i,{children:e.jsxs(t,{className:"w-box cqdf4j1 c15wov26 ccanaxu cuwsqp1",children:[e.jsx(o,{"tab-item":"true",href:"/",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:e.jsx(c,{className:"w-text cgn0h58 c1hzleoz c16rucjm c1w3mlb2",children:"Inicio"})}),e.jsx(o,{"tab-item":"true",href:"/atv",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:e.jsx(c,{className:"w-text cgn0h58 c1hzleoz c16rucjm c1w3mlb2",children:"Sharetoy"})}),e.jsx(o,{"tab-item":"true",href:"/eq",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:e.jsx(c,{className:"w-text cgn0h58 c1hzleoz c16rucjm c1w3mlb2",children:"Equipa"})}),e.jsx(o,{"tab-item":"true",href:"/c",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:e.jsx(c,{className:"w-text cgn0h58 c1hzleoz c16rucjm c1w3mlb2",children:"Contactos"})}),e.jsx(t,{"tab-underline":"true",className:"w-box ccr8k56 c1emrgym co6bdqb c1gdax9t c1b38i8z cqu17t9 c5oukuu"})]})})}),e.jsx(r,{code:`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
<script>
 (() => {
     const tabs = document.querySelectorAll('[tab-item]');
     const underline = document.querySelector('[tab-underline]');

     gsap.set(underline, {
         width: tabs[1].offsetWidth,
         x: tabs[1].offsetLeft
     });

     tabs.forEach((tab, index) => {
         tab.addEventListener('mouseenter', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tab.offsetWidth,
                 x: tab.offsetLeft,
             });
         });

         tab.addEventListener('mouseleave', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tabs[1].offsetWidth,
                 x: tabs[1].offsetLeft,
             });
         });
     });
 })();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]}),e.jsx(s,{children:e.jsx(i,{children:e.jsxs(y,{children:[e.jsx(b,{children:e.jsx(j,{"aria-label":"Open mobile menu",className:"w-button c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c5d73v1 ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c12hhu5u cg91gp7 c144sho4 cp8q3ji c1pnksm3 c14kc0uq c13gmar c135cqxi cwo0hst c1csq4xe c1soyupv c17v8mua c1dbelh c3reus c15ly9qu c6uto6a",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(k,{className:"w-dialog-overlay ct3vvl5 cme2lch ch9s07v c1x26zy8 c148kyc2 c1pixmbj chx2fba cdy37h1 ciprha1 c17kvbot c1jlskz0 c6uto6a c1w68d12 c1g13imj",children:e.jsxs(C,{className:"w-dialog-content ch9s07v c1209fn5 csqc65v ct3vvl5 c17mwktl c1k6w850 c15oosbi clpy7xl",children:[e.jsx(t,{tag:"div",className:"w-box c1xixdy1 ccoi98v ch9s07v cky5twr c1s5skrx c153v3b2 c1ukpevl",children:e.jsx(s,{children:e.jsx(i,{children:e.jsxs(t,{className:"w-box cqdf4j1 c15wov26 ccanaxu cuwsqp1 cky5twr c17snfqp cevvu9",children:[e.jsx(o,{"tab-item":"true",href:"/",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:e.jsx(t,{className:"w-box c1hbw1sx",children:e.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Início"})})}),e.jsx(o,{"tab-item":"true",href:"/atv",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:e.jsx(t,{className:"w-box c1hbw1sx",children:e.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Sharetoy"})})}),e.jsx(o,{"tab-item":"true",href:"/eq",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:e.jsx(t,{className:"w-box c1hbw1sx",children:e.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Equipa"})})}),e.jsx(o,{"tab-item":"true",href:"/c",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1posnaa c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:e.jsx(t,{className:"w-box c1hbw1sx",children:e.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Contatos"})})})]})})})}),e.jsx(z,{"aria-label":"Close mobile menu",className:"w-close-button c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c1i6u13o ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c12hhu5u cg91gp7 c144sho4 cp8q3ji c1pnksm3 c14kc0uq c13gmar c71lqby c1ldii35 cwo0hst c1csq4xe c1soyupv c17v8mua c3reus c1jtojnc cd7ss8a c15ly9qu c15rh01e c6uto6a",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]})})]})})})]})}),e.jsx(t,{tag:"section",className:"w-box cpv6efc choius5 c1czjpfb",children:e.jsx(r,{code:`<style>
  /* ShareToy — estilos isolados para não interferirem com o restante site */
  .sharetoy-content {
    --red: #d6403f;
    --green: #1f7a3a;
    --orange: #f39a2b;
    --yellow: #f6c343;
    --ink: #2b2b2b;
    --muted: #6b6b6b;
    --cream: #faf7f2;
    --card: #ffffff;
    --line: #ece6dc;

    position: relative;
    isolation: isolate;
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    padding: clamp(1.25rem, 4vw, 4rem);
    overflow: hidden;
    border-radius: clamp(18px, 2.2vw, 28px);
    background: var(--cream);
    color: var(--ink);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  .sharetoy-content *,
  .sharetoy-content *::before,
  .sharetoy-content *::after {
    box-sizing: border-box;
  }

  .sharetoy-content img {
    display: block;
    max-width: 100%;
  }

  .sharetoy-content a {
    -webkit-tap-highlight-color: transparent;
  }

  .sharetoy-content > *:not(.deco) {
    position: relative;
    z-index: 1;
  }

  /* Elementos decorativos */
  .sharetoy-content .deco {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    background-color: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Ccircle cx='16' cy='8' r='6'/%3E%3Ccircle cx='8' cy='16' r='6'/%3E%3Ccircle cx='16' cy='16' r='6'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Ccircle cx='16' cy='8' r='6'/%3E%3Ccircle cx='8' cy='16' r='6'/%3E%3Ccircle cx='16' cy='16' r='6'/%3E%3C/svg%3E") center / contain no-repeat;
    animation: sharetoy-float 7s ease-in-out infinite;
    will-change: transform;
  }

  .sharetoy-content .deco-1 {
    width: clamp(48px, 7.5vw, 90px);
    height: clamp(48px, 7.5vw, 90px);
    top: -25px;
    right: 6%;
    color: var(--red);
    transform: rotate(15deg);
  }

  .sharetoy-content .deco-2 {
    width: clamp(38px, 5vw, 60px);
    height: clamp(38px, 5vw, 60px);
    top: 42%;
    left: -20px;
    color: var(--orange);
    transform: rotate(-20deg);
    animation-delay: -2s;
  }

  .sharetoy-content .deco-3 {
    width: clamp(75px, 11.7vw, 140px);
    height: clamp(75px, 11.7vw, 140px);
    bottom: 18%;
    right: -45px;
    color: var(--green);
    transform: rotate(30deg);
    animation-delay: -4s;
  }

  .sharetoy-content .deco-4 {
    width: clamp(34px, 4.2vw, 50px);
    height: clamp(34px, 4.2vw, 50px);
    bottom: 6%;
    left: 5%;
    color: var(--yellow);
    transform: rotate(10deg);
    animation-delay: -1s;
  }

  /* Hero */
  .sharetoy-content .hero-split {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(1.75rem, 4vw, 3rem);
    align-items: center;
    margin-bottom: clamp(3.5rem, 8vw, 6rem);
  }

  .sharetoy-content .image-column {
    min-width: 0;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    border-radius: clamp(18px, 2.4vw, 28px);
    background: #f1ebe1;
    box-shadow: 0 20px 40px -20px rgba(214, 64, 63, 0.35);
  }

  .sharetoy-content .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 650ms cubic-bezier(.2, .7, .2, 1);
  }

  .sharetoy-content .text-column {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .sharetoy-content .hero-title {
    margin: 0 0 1.1rem;
    color: var(--red);
    font-size: clamp(2.35rem, 7vw, 4rem);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  .sharetoy-content .hero-title span {
    display: block;
    color: var(--green);
  }

  .sharetoy-content .hero-subtitle {
    max-width: 500px;
    margin: 0 0 1.75rem;
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.65;
  }

  .sharetoy-content .hero-subtitle strong {
    color: var(--red);
  }

  .sharetoy-content .scroll-prompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
  }

  .sharetoy-content .scroll-text {
    color: var(--muted);
    font-size: 0.875rem;
  }

  .sharetoy-content .scroll-button {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--red);
    color: #fff;
    font-size: 1.35rem;
    line-height: 1;
    text-decoration: none;
    transition: transform 220ms ease, background-color 220ms ease;
  }

  .sharetoy-content .scroll-button:hover {
    transform: translateY(3px);
    background: var(--green);
    color: #fff;
  }

  /* Títulos e secções */
  .sharetoy-content .section-title {
    margin: 0 0 1.5rem;
    color: var(--red);
    font-size: clamp(1.35rem, 3vw, 1.9rem);
    font-weight: 900;
    letter-spacing: 0.015em;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .sharetoy-content .section-title.green {
    color: var(--green);
  }

  .sharetoy-content .section-block {
    margin-top: clamp(3.5rem, 7vw, 6rem);
  }

  .sharetoy-content .section-block.first {
    margin-top: 0;
    margin-bottom: clamp(3.5rem, 7vw, 6rem);
  }

  .sharetoy-content .section-block .section-title {
    text-align: center;
  }

  .sharetoy-content .about-text {
    max-width: 700px;
    margin: 0 auto;
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.75;
    text-align: center;
  }

  /* Passos */
  .sharetoy-content .steps-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }

  .sharetoy-content .step-card {
    min-width: 0;
    padding: clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.15rem, 2.5vw, 1.5rem);
    border: 1px solid var(--line);
    border-radius: 20px;
    background: var(--card);
    transition: transform 240ms ease, box-shadow 240ms ease;
  }

  .sharetoy-content .step-number {
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 900;
  }

  .sharetoy-content .step-card:nth-child(1) .step-number { background: var(--green); }
  .sharetoy-content .step-card:nth-child(2) .step-number { background: var(--orange); }
  .sharetoy-content .step-card:nth-child(3) .step-number { background: var(--red); }

  .sharetoy-content .step-text {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.6;
  }

  /* Pontos de recolha e oficinas */
  .sharetoy-content .info-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(2rem, 4vw, 3rem);
    scroll-margin-top: 2rem;
  }

  .sharetoy-content .info-card {
    min-width: 0;
  }

  .sharetoy-content .data-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }

  .sharetoy-content .placeholder-item {
    min-width: 0;
    padding: 1rem clamp(1rem, 2.5vw, 1.5rem);
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--card);
    transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
  }

  .sharetoy-content .item-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .sharetoy-content .dot {
    flex: 0 0 22px;
    width: 22px;
    height: 22px;
    background-color: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Ccircle cx='16' cy='8' r='6'/%3E%3Ccircle cx='8' cy='16' r='6'/%3E%3Ccircle cx='16' cy='16' r='6'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Ccircle cx='16' cy='8' r='6'/%3E%3Ccircle cx='8' cy='16' r='6'/%3E%3Ccircle cx='16' cy='16' r='6'/%3E%3C/svg%3E") center / contain no-repeat;
  }

  .sharetoy-content .dot.red { color: var(--red); }
  .sharetoy-content .dot.orange { color: var(--orange); }
  .sharetoy-content .dot.green { color: var(--green); }

  .sharetoy-content .item-title {
    margin: 0;
    color: var(--ink);
    font-size: 1.08rem;
    font-weight: 800;
    line-height: 1.25;
  }

  .sharetoy-content .item-body {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin: 0.3rem 0 0 2.2rem;
  }

  .sharetoy-content .item-detail {
    margin: 0;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  /* Ligações para os Instagrams dos novos pontos de entrega */
  .sharetoy-content .instagram-placeholder-link {
    display: inline-flex;
    min-height: 44px;
    width: fit-content;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.35rem;
    padding: 0.55rem 0.85rem;
    border: 1px solid rgba(214, 64, 63, 0.18);
    border-radius: 999px;
    background: rgba(214, 64, 63, 0.06);
    color: var(--red);
    font-size: 0.9rem;
    font-weight: 800;
    line-height: 1.2;
    text-decoration: none;
    transition: background-color 220ms ease, color 220ms ease, border-color 220ms ease, transform 220ms ease;
  }

  .sharetoy-content .instagram-placeholder-link:hover {
    border-color: rgba(31, 122, 58, 0.25);
    background: rgba(31, 122, 58, 0.08);
    color: var(--green);
  }

  .sharetoy-content .instagram-placeholder-link:active {
    transform: scale(0.98);
  }

  .sharetoy-content .highlight {
    color: var(--green);
    font-weight: 700;
  }

  .sharetoy-content .where-box {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.45rem 0.9rem;
    margin-top: 1.15rem;
    padding: 1rem clamp(1rem, 2.5vw, 1.5rem);
    border-radius: 16px;
    background: rgba(31, 122, 58, 0.08);
  }

  .sharetoy-content .where-label {
    color: var(--green);
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  .sharetoy-content .where-place {
    color: var(--ink);
    font-weight: 800;
  }

  .sharetoy-content .where-sub {
    color: var(--muted);
    font-size: 0.88rem;
  }

  /* Parceiros */
  .sharetoy-content .partners-wrap {
    padding: clamp(1rem, 3vw, 2rem);
    border: 1px solid var(--line);
    border-radius: 24px;
    background: var(--card);
  }

  .sharetoy-content .partners-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 220px;
    margin: 0 auto;
    object-fit: contain;
  }

  /* Chamada final */
  .sharetoy-content .closing {
    margin-top: clamp(3.5rem, 7vw, 6rem);
    padding: clamp(2rem, 5vw, 4rem) clamp(1.1rem, 4vw, 2rem);
    border: 1px solid var(--line);
    border-radius: clamp(20px, 2.5vw, 28px);
    background: #fff;
    text-align: center;
  }

  .sharetoy-content .closing .hero-title {
    margin-bottom: 0.75rem;
    color: var(--green);
    font-size: clamp(1.9rem, 5vw, 3rem);
  }

  .sharetoy-content .closing p {
    margin: 0;
    color: var(--red);
    font-size: clamp(1.05rem, 2.5vw, 1.2rem);
    line-height: 1.5;
  }

  .sharetoy-content .closing p strong {
    font-weight: 900;
  }

  /* Botões */
  .sharetoy-content .cta-button {
    display: inline-flex;
    max-width: 100%;
    min-height: 58px;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 0.65rem 0.75rem 0.65rem 1.5rem;
    border-radius: 999px;
    background: var(--red);
    box-shadow: 0 16px 34px -19px rgba(214, 64, 63, 0.6);
    color: #fff !important;
    font-size: clamp(0.88rem, 2vw, 1rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-align: center;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease;
    touch-action: manipulation;
  }

  .sharetoy-content .cta-button::after {
    content: "";
    flex: 0 0 38px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d6403f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='8' width='18' height='4' rx='1'/%3E%3Cpath d='M12 8v13'/%3E%3Cpath d='M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7'/%3E%3Cpath d='M7.5 8a2.5 2.5 0 0 1 0-5C9 3 10.5 4.5 12 8c1.5-3.5 3-5 4.5-5a2.5 2.5 0 0 1 0 5'/%3E%3C/svg%3E") center / 20px 20px no-repeat;
    transition: transform 220ms ease;
  }

  .sharetoy-content .hero-cta {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .sharetoy-content .closing .cta-button {
    margin-top: 1.5rem;
  }

  /* Comunicação social */
  .sharetoy-content .press-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 340px));
    justify-content: center;
    gap: 1.25rem;
  }

  .sharetoy-content .press-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: var(--card);
    color: inherit !important;
    text-decoration: none !important;
    transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
  }

  .sharetoy-content .press-img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: #f1ebe1;
  }

  .sharetoy-content .press-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.2rem clamp(1rem, 2.5vw, 1.5rem) 1.4rem;
  }

  .sharetoy-content .press-source {
    color: var(--green);
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sharetoy-content .press-text {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.55;
  }

  .sharetoy-content .press-link {
    margin-top: auto;
    padding-top: 0.3rem;
    color: var(--red);
    font-weight: 800;
    transition: color 220ms ease;
  }

  /* Animações de entrada — ativadas por JavaScript quando disponível */
  .sharetoy-content.motion-ready [data-reveal] {
    opacity: 0;
    transform: translate3d(0, 22px, 0);
    transition:
      opacity 650ms ease,
      transform 650ms cubic-bezier(.2, .7, .2, 1);
    transition-delay: var(--reveal-delay, 0ms);
  }

  .sharetoy-content.motion-ready [data-reveal="left"] {
    transform: translate3d(-22px, 0, 0);
  }

  .sharetoy-content.motion-ready [data-reveal="right"] {
    transform: translate3d(22px, 0, 0);
  }

  .sharetoy-content.motion-ready [data-reveal].is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .sharetoy-content .steps-grid .step-card:nth-child(2),
  .sharetoy-content .data-list .placeholder-item:nth-child(2) {
    --reveal-delay: 90ms;
  }

  .sharetoy-content .steps-grid .step-card:nth-child(3),
  .sharetoy-content .data-list .placeholder-item:nth-child(3) {
    --reveal-delay: 180ms;
  }

  .sharetoy-content .data-list .placeholder-item:nth-child(4) {
    --reveal-delay: 270ms;
  }

  @keyframes sharetoy-float {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -9px; }
  }

  /* Tablet e desktop */
  @media (min-width: 768px) {
    .sharetoy-content .steps-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .sharetoy-content .info-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(2rem, 4vw, 4rem);
    }
  }

  @media (min-width: 992px) {
    .sharetoy-content .hero-split {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: clamp(3rem, 5vw, 5rem);
    }

    .sharetoy-content .text-column {
      align-items: flex-end;
      text-align: right;
    }

    .sharetoy-content .scroll-prompt {
      align-self: flex-end;
    }
  }

  /* Telemóveis */
  @media (max-width: 600px) {
    .sharetoy-content {
      padding: 1.1rem;
      border-radius: 18px;
    }

    .sharetoy-content .hero-split {
      gap: 1.4rem;
      margin-bottom: 3.4rem;
    }

    .sharetoy-content .image-column {
      aspect-ratio: 5 / 4;
      border-radius: 18px;
    }

    .sharetoy-content .hero-title {
      margin-bottom: 0.85rem;
      font-size: clamp(2.25rem, 12vw, 3.25rem);
    }

    .sharetoy-content .hero-subtitle {
      margin-bottom: 1.3rem;
      line-height: 1.6;
    }

    .sharetoy-content .hero-cta,
    .sharetoy-content .closing .cta-button {
      width: 100%;
    }

    .sharetoy-content .scroll-prompt {
      align-self: center;
    }

    .sharetoy-content .section-block.first {
      margin-bottom: 3.4rem;
    }

    .sharetoy-content .section-block {
      margin-top: 3.4rem;
    }

    .sharetoy-content .section-title {
      margin-bottom: 1.15rem;
    }

    .sharetoy-content .info-grid {
      gap: 2.2rem;
    }

    .sharetoy-content .closing {
      margin-top: 3.4rem;
    }

    .sharetoy-content .press-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .sharetoy-content .partners-img {
      max-height: 180px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .sharetoy-content .image-column:hover .hero-img {
      transform: scale(1.035);
    }

    .sharetoy-content .step-card:hover,
    .sharetoy-content .placeholder-item:hover {
      transform: translateY(-4px);
      border-color: rgba(31, 122, 58, 0.22);
      box-shadow: 0 16px 30px -18px rgba(0, 0, 0, 0.25);
    }

    .sharetoy-content .press-card:hover {
      transform: translateY(-4px);
      border-color: rgba(214, 64, 63, 0.2);
      box-shadow: 0 16px 30px -18px rgba(0, 0, 0, 0.25);
    }

    .sharetoy-content .press-card:hover .press-link {
      color: var(--green);
    }

    .sharetoy-content .cta-button:hover {
      transform: translateY(-3px);
      background: var(--green);
      box-shadow: 0 18px 34px -18px rgba(31, 122, 58, 0.55);
      color: #fff !important;
    }

    .sharetoy-content .cta-button:hover::after {
      transform: rotate(-8deg) scale(1.04);
    }

    .sharetoy-content .scroll-button:hover {
      transform: translateY(3px);
      background: var(--green);
      color: #fff;
    }
  }

  .sharetoy-content .cta-button:active {
    transform: translateY(-1px) scale(0.99);
  }

  .sharetoy-content a:focus-visible {
    outline: 3px solid var(--yellow);
    outline-offset: 4px;
  }

  /* Respeita utilizadores que preferem menos movimento */
  @media (prefers-reduced-motion: reduce) {
    .sharetoy-content *,
    .sharetoy-content *::before,
    .sharetoy-content *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    .sharetoy-content.motion-ready [data-reveal] {
      opacity: 1;
      transform: none;
    }
  }
</style>

<section class="sharetoy-content" aria-label="Projeto ShareToy 2026">
  <span class="deco deco-1" aria-hidden="true"></span>
  <span class="deco deco-2" aria-hidden="true"></span>
  <span class="deco deco-3" aria-hidden="true"></span>
  <span class="deco deco-4" aria-hidden="true"></span>

  <!-- Hero -->
  <div class="hero-split">
    <div class="image-column" data-reveal="left">
      <img src="sh.png" alt="ShareToy" class="hero-img" fetchpriority="high" decoding="async">
    </div>

    <div class="text-column" data-reveal="right">
      <h1 class="hero-title">Sharetoy<span>2026</span></h1>
      <p class="hero-subtitle">
        O projeto dinamizado por estudantes da Universidade de Aveiro para dar uma nova vida aos brinquedos usados. Participa na nossa missão de recolha e reparação, e ajuda a partilhar sorrisos.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf11CgynINsUk18nhmPoxHLW5z0vBEPx15aV9jmgtSRspGwbA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="cta-button hero-cta">Inscreve-te</a>
      <div class="scroll-prompt">
        <span class="scroll-text">Descobre mais</span>
        <a href="#informacoes" class="scroll-button" aria-label="Descer até aos pontos de recolha e oficinas">↓</a>
      </div>
    </div>
  </div>

  <!-- O Que É? -->
  <div class="section-block first" data-reveal>
    <h2 class="section-title green">O Que É?</h2>
    <p class="about-text">O ShareToy é uma iniciativa solidária que recolhe, limpa e repara brinquedos, dando-lhes uma segunda vida junto das crianças que mais precisam neste Natal.</p>
  </div>

  <!-- Como Participar -->
  <div class="section-block first">
    <h2 class="section-title" data-reveal>Como Participar</h2>
    <div class="steps-grid">
      <div class="step-card" data-reveal>
        <span class="step-number">1</span>
        <p class="step-text">Procura um brinquedo antigo ou sem uso.</p>
      </div>
      <div class="step-card" data-reveal>
        <span class="step-number">2</span>
        <p class="step-text">Encontra o ponto de recolha mais próximo.</p>
      </div>
      <div class="step-card" data-reveal>
        <span class="step-number">3</span>
        <p class="step-text">Nós reparamos o brinquedo e entregamo-lo a quem mais precisa.</p>
      </div>
    </div>
  </div>

  <!-- Pontos de Recolha + Oficinas -->
  <div id="informacoes" class="info-grid">
    <div class="info-card" data-reveal="left">
      <h2 class="section-title green">Pontos de Recolha e Entrega</h2>
      <ul class="data-list">
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot red" aria-hidden="true"></span><strong class="item-title">DETI</strong></div>
          <div class="item-body"><span class="item-detail">Entrada, junto ao Aquário</span></div>
        </li>
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot red" aria-hidden="true"></span><strong class="item-title">Biblioteca</strong></div>
          <div class="item-body"><span class="item-detail">Entrada</span></div>
        </li>
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot red" aria-hidden="true"></span><strong class="item-title">Glicínias</strong></div>
          <div class="item-body"><span class="item-detail">Balcão de informações – piso 0</span></div>
        </li>
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot red" aria-hidden="true"></span><strong class="item-title">Fórum</strong></div>
          <div class="item-body"><span class="item-detail">Pagamento do estacionamento</span></div>
        </li>
        <!-- NOVO PONTO DE ENTREGA 1: substituir o nome e o USERNAME_DO_PONTO_1 pelo perfil real do Instagram. -->
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot green" aria-hidden="true"></span><strong class="item-title">Clínica de medicina dentária</strong></div>
          <div class="item-body">
            <span class="item-detail">Av. da Força Aérea Portuguesa, nº7
3800-407 Aveiro - Barrocas</span>
            <a class="instagram-placeholder-link" href="https://www.instagram.com/clinicabiokids/" target="_blank" rel="noopener noreferrer" aria-label="Abrir o Instagram do ponto de entrega 1">Instagram ↗</a>
          </div>
        </li>
        <!-- NOVO PONTO DE ENTREGA 2: substituir o nome e o USERNAME_DO_PONTO_2 pelo perfil real do Instagram. -->
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot green" aria-hidden="true"></span><strong class="item-title">iBiMED GreenLab</strong></div>
          <div class="item-body">
            <span class="item-detail">Departamento de Ciências Médicas - dcm UA</span>
            <a class="instagram-placeholder-link" href="https://www.instagram.com/ibimed.greenlab_ua/" target="_blank" rel="noopener noreferrer" aria-label="Abrir o Instagram do ponto de entrega 2">Instagram ↗</a>
          </div>
        </li>
      </ul>
    </div>

    <div class="info-card" data-reveal="right">
      <h2 class="section-title">Oficinas de Reparação</h2>
      <ul class="data-list">
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot orange" aria-hidden="true"></span><strong class="item-title">18 de novembro</strong></div>
        </li>
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot orange" aria-hidden="true"></span><strong class="item-title">25 de novembro</strong></div>
        </li>
        <li class="placeholder-item" data-reveal>
          <div class="item-header"><span class="dot orange" aria-hidden="true"></span><strong class="item-title">2 de dezembro</strong></div>
        </li>
      </ul>
      <div class="where-box">
        <span class="where-label">ONDE?</span>
        <span class="where-place">Espaço24</span>
        <span class="where-sub">Catacumbas da UA</span>
      </div>
    </div>
  </div>

  <!-- Parceiros -->
  <div class="section-block" data-reveal>
    <h2 class="section-title green">Parceiros</h2>
    <div class="partners-wrap">
      <img src="logos.png" alt="Parceiros: Fórum Aveiro, Glicínias Plaza Shopping Center, Fnac, MAUSER.PT, Auchan" class="partners-img" loading="lazy" decoding="async">
    </div>
  </div>

  <!-- Conclusão -->
  <div class="closing" data-reveal>
    <h2 class="hero-title">Junta-te a nós!</h2>
    <p>Vamos melhorar o Natal de alguém, <strong>JUNTOS!</strong></p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf11CgynINsUk18nhmPoxHLW5z0vBEPx15aV9jmgtSRspGwbA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="cta-button">Inscrições</a>
  </div>

  <!-- Comunicação social -->
  <div class="section-block">
    <h2 class="section-title" data-reveal>Na Comunicação Social</h2>
    <div class="press-grid">
      <a href="https://www.diarioaveiro.pt/2026/11/12/sharetoy-esta-a-recolher-brinquedos-para-criancas-vulneraveis/" target="_blank" rel="noopener noreferrer" class="press-card" data-reveal>
        <img src="DA.png" alt="ShareToy está a recolher brinquedos para crianças vulneráveis" class="press-img" loading="lazy" decoding="async">
        <div class="press-body">
          <span class="press-source">Diário de Aveiro</span>
          <p class="press-text">ShareToy está a recolher brinquedos para crianças vulneráveis</p>
          <span class="press-link">Ler notícia ↗</span>
        </div>
      </a>

      <a href="https://www.ua.pt/pt/noticias/11/99939" target="_blank" rel="noopener noreferrer" class="press-card" data-reveal>
        <img src="UA.png" alt="ShareToy: Vamos melhorar o Natal de alguém, juntos!" class="press-img" loading="lazy" decoding="async">
        <div class="press-body">
          <span class="press-source">Universidade de Aveiro</span>
          <p class="press-text">ShareToy: Vamos melhorar o Natal de alguém, juntos!</p>
          <span class="press-link">Ler notícia ↗</span>
        </div>
      </a>
    </div>
  </div>
</section>

<script>
  (() => {
    const section = document.querySelector('.sharetoy-content');
    if (!section) return;

    const revealItems = section.querySelectorAll('[data-reveal]');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Sem suporte para IntersectionObserver ou com movimento reduzido,
       o conteúdo fica imediatamente visível. */
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });

    /* A classe só é adicionada quando o observador já está preparado,
       evitando esconder conteúdo caso o JavaScript não esteja disponível. */
    section.classList.add('motion-ready');
    revealItems.forEach((item) => observer.observe(item));
  })();
<\/script>
`,className:"w-html-embed"})}),e.jsx(s,{"data-ani-progress":"slide-up","ata-ani-children":"true",children:e.jsxs(i,{children:[e.jsx(t,{tag:"footer",className:"w-box c1xvh3wi .protecao",children:e.jsxs(t,{className:"w-box c1y5gtuy ctwedid c4zv7o8 c1yxbcu3 ca0xin3 c1rlgl31 c15wov26 c9vbpot cj6cf3e c10c0lh2",children:[e.jsx(E,{className:"w-separator cls0uqx ca0xin3 c1e9izlp cc1w4m0"}),e.jsx(t,{className:"w-box c15wov26 c45gf4w c1n863ed c8yq6mq ccanaxu cuwsqp1",children:e.jsxs(t,{className:"w-box c15wov26 c45gf4w c1b8w41a co0w7fv",children:[e.jsxs(o,{href:"https://www.instagram.com/nerd.aettua",className:"w-link ccbw1jm c1i6u13o c1tdtvjs c14hij5v c1u4qls7 c1mucm95 c17skwfs c1ov2tmq ccanaxu cciowao c1b8w41a co0w7fv cs9dmk2 c1f1r4bb cyp6dig c1ei055y cg9t561 c1dq3r5 cq1libe c1ahkfac cnv3kpj c1tv1qvx c7oeyb0 cp8q3ji c1pnksm3 crbb2yz c189r9yc",children:[e.jsx(r,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0784 4.08455C16.3013 4.6733 16.4177 5.29782 16.4268 5.92733C16.4732 6.71947 16.4734 6.97854 16.475 8.98365L16.4751 9.01165C16.4751 11.0432 16.4643 11.2968 16.4285 12.0968C16.416 12.7197 16.2988 13.3334 16.0801 13.9155C15.6901 14.92 14.8959 15.715 13.8905 16.105C13.3084 16.3237 12.6939 16.441 12.0727 16.4534C11.2786 16.5 11.0183 16.5 8.98766 16.5H8.98754C6.95682 16.5 6.70319 16.4892 5.90238 16.4534C5.27869 16.4335 4.66416 16.3054 4.08538 16.0792C3.07917 15.6901 2.28501 14.8951 1.895 13.8905C1.67629 13.3076 1.55904 12.6939 1.54657 12.0719C1.5 11.2769 1.5 11.0174 1.5 8.9867C1.5 6.95599 1.51081 6.70236 1.54657 5.90155C1.55821 5.28036 1.67629 4.66582 1.895 4.08455C2.28418 3.07917 3.07917 2.28418 4.08455 1.895C4.66582 1.67629 5.28036 1.55904 5.90155 1.54574C6.6957 1.5 6.95599 1.5 8.9867 1.5C11.0174 1.5 11.2711 1.50998 12.071 1.54574C12.693 1.55904 13.3076 1.67629 13.8889 1.895C14.8942 2.28418 15.6884 3.07917 16.0784 4.08455ZM5.13733 8.98255C5.13733 11.1064 6.85786 12.8269 8.98171 12.8269C11.1039 12.8269 12.8261 11.1064 12.8261 8.98255C12.8261 6.85869 11.1039 5.13816 8.98171 5.13816C6.85786 5.13816 5.13733 6.85869 5.13733 8.98255ZM12.0827 4.99596C12.0827 5.49158 12.4827 5.8924 12.9791 5.8924C13.4739 5.8924 13.8747 5.49158 13.8747 4.99596C13.8747 4.50034 13.4739 4.09951 12.9791 4.09951C12.4827 4.09951 12.0827 4.50034 12.0827 4.99596ZM11.4789 8.98251C11.4789 10.3617 10.3608 11.4797 8.98167 11.4797C7.60248 11.4797 6.48444 10.3617 6.48444 8.98251C6.48444 7.60332 7.60248 6.48528 8.98167 6.48528C10.3608 6.48528 11.4789 7.60332 11.4789 8.98251Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed c1i6u13o ct6xi25 c1v15jmv"}),e.jsx(c,{tag:"span",className:"w-text",children:"Instagram"})]}),e.jsxs(o,{href:"https://www.instagram.com/nerd.aettua",className:"w-link ccbw1jm c1i6u13o c1tdtvjs c14hij5v c1u4qls7 c1mucm95 c17skwfs c1ov2tmq ccanaxu cciowao c1b8w41a co0w7fv cs9dmk2 c1f1r4bb cyp6dig c1ei055y cg9t561 c1dq3r5 cq1libe c1ahkfac cnv3kpj c1tv1qvx c7oeyb0 cp8q3ji c1pnksm3 crbb2yz c189r9yc",children:[e.jsx(r,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5C14.663 1.5 15.2989 1.76339 15.7678 2.23223C16.2366 2.70107 16.5 3.33696 16.5 4V14C16.5 14.663 16.2366 15.2989 15.7678 15.7678C15.2989 16.2366 14.663 16.5 14 16.5H4C3.33696 16.5 2.70107 16.2366 2.23223 15.7678C1.76339 15.2989 1.5 14.663 1.5 14V4C1.5 3.33696 1.76339 2.70107 2.23223 2.23223C2.70107 1.76339 3.33696 1.5 4 1.5H14ZM5.66667 7.33333C5.44565 7.33333 5.23369 7.42113 5.07741 7.57741C4.92113 7.73369 4.83333 7.94565 4.83333 8.16667V12.3333C4.83333 12.5543 4.92113 12.7663 5.07741 12.9226C5.23369 13.0789 5.44565 13.1667 5.66667 13.1667C5.88768 13.1667 6.09964 13.0789 6.25592 12.9226C6.4122 12.7663 6.5 12.5543 6.5 12.3333V8.16667C6.5 7.94565 6.4122 7.73369 6.25592 7.57741C6.09964 7.42113 5.88768 7.33333 5.66667 7.33333ZM8.16667 6.5C7.94565 6.5 7.73369 6.5878 7.57741 6.74408C7.42113 6.90036 7.33333 7.11232 7.33333 7.33333V12.3333C7.33333 12.5543 7.42113 12.7663 7.57741 12.9226C7.73369 13.0789 7.94565 13.1667 8.16667 13.1667C8.38768 13.1667 8.59964 13.0789 8.75592 12.9226C8.9122 12.7663 9 12.5543 9 12.3333V9.28333C9.32511 8.92969 9.7205 8.64784 10.1608 8.45583C10.4383 8.3375 10.8558 8.28917 11.1458 8.38083C11.242 8.40524 11.3277 8.46022 11.39 8.5375C11.4333 8.59583 11.5 8.72583 11.5 9V12.3333C11.5 12.5543 11.5878 12.7663 11.7441 12.9226C11.9004 13.0789 12.1123 13.1667 12.3333 13.1667C12.5543 13.1667 12.7663 13.0789 12.9226 12.9226C13.0789 12.7663 13.1667 12.5543 13.1667 12.3333V9C13.1667 8.44167 13.025 7.945 12.73 7.54667C12.4585 7.18546 12.0786 6.9206 11.6458 6.79083C10.8942 6.555 10.0617 6.68583 9.50583 6.92417C9.32774 7.00039 9.15437 7.08721 8.98667 7.18417C8.95173 6.99216 8.85052 6.8185 8.70066 6.69347C8.55081 6.56844 8.36183 6.49997 8.16667 6.5ZM5.66667 4.83333C5.44565 4.83333 5.23369 4.92113 5.07741 5.07741C4.92113 5.23369 4.83333 5.44565 4.83333 5.66667C4.83333 5.88768 4.92113 6.09964 5.07741 6.25592C5.23369 6.4122 5.44565 6.5 5.66667 6.5C5.88768 6.5 6.09964 6.4122 6.25592 6.25592C6.4122 6.09964 6.5 5.88768 6.5 5.66667C6.5 5.44565 6.4122 5.23369 6.25592 5.07741C6.09964 4.92113 5.88768 4.83333 5.66667 4.83333Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed c1i6u13o ct6xi25 c1v15jmv"}),e.jsx(c,{tag:"span",className:"w-text",children:"Linkedin"})]})]})}),e.jsx(t,{className:"w-box c15wov26 chwz02u c1n863ed c8yq6mq c1wpqedh c1sgbbbo c1q5orob c46yij4 cky5twr",children:e.jsx(t,{className:"w-box",children:e.jsx(c,{className:"w-text",children:"2026 NeRD"})})})]})}),e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(r,{code:'<script>(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset==="number"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener("scroll",onScroll,true);window.removeEventListener("resize",onResize,true);window.removeEventListener("load",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector==="string"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener("resize",onResize,true);window.addEventListener("scroll",onScroll,true);window.addEventListener("load",onLoad,true);onResize()}function init(){if(!selector){console.error("must pass selector");return false}setupElements();if(!elements||!elements.length){console.error("no els found");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx(r,{code:`<style>
:root {
  --ani-duration: var(--duration-default, .2s);
  --ani-delay: 0s;
  --ani-slide-offset: 20%;
  --ani-zoom-in-scale: 1;
  --ani-zoom-out-scale: .85;
  --ani-flip-rotate: 30deg;
  --ani-easing: var(--easing-default, ease);
  --ani-fill-mode: forwards;
}
[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}}
@keyframes fadeOut{from{opacity:1}
to{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}
@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}
to{opacity:1;translate:none}}
@keyframes slideOut{from{opacity:1;translate:none}
to{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}
@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}
to{opacity:1;scale:1}}
@keyframes zoomOut{from{opacity:1;scale:1}
to{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}
@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}
to{rotate:y 0;opacity:1}}
@keyframes flipOutY{from{rotate:y 0;opacity:1}
to{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}
@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}
to{rotate:x 0;opacity:1}}
@keyframes flipOutX{from{rotate:x 0;opacity:1}
to{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}
@keyframes expandDown{from{height:0}
to{height:var(--newHeight)}}
@keyframes expandUp{from{height:var(--newHeight)}
to{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}
@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}
</style>`,className:"w-html-embed"}),e.jsx(r,{code:'<script type="module">\nconst config = {\n	intersectionOffset: 0.2,\n	intersectionOnce: true,\n	progressOffset: 0,\n	progressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a="progress"===e;return enterView({selector:r,enter:e=>!a&&t(e,"in","out"),exit:e=>!a&&t(e,"out","in"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute("data-ani-progress")?r.getAttribute("data-ani-progress"):e.getAttribute("data-ani-progress"),s=parseFloat(getComputedStyle(e).getPropertyValue("--ani-slide-offset"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue("--ani-flip-rotate"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue("--ani-zoom-out-scale"))||1);switch(n){case"slide-up":return`translateY(${(1-t)*s}px)`;case"slide-down":return`translateY(-${(1-t)*s}px)`;case"slide-left":return`translateX(${(1-t)*s}px)`;case"slide-right":return`translateX(-${(1-t)*s}px)`;case"flip-x":return`rotateX(${(1-t)*a}deg)`;case"flip-y":return`rotateY(${(1-t)*a}deg)`;case"zoom":return`scale(${o})`;default:return"none"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?\'[data-ani-children="true"] > *\':\':not([data-ani-children="true"])\'}`;return Array.from(document.querySelectorAll(r))}const n=[...r("data-ani"),...r("data-ani",!0)],s=[...r("data-ani-progress"),...r("data-ani-progress",!0)];n.length&&e({trigger:"intersection",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:"progress",selector:s,offset:config.progressOffset,once:config.progressOnce});\n<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})})]})}),e.jsx(s,{children:e.jsx(i,{children:e.jsx(r,{code:`<style>
  .cursor-zone {
    position: relative;
  }

  .svg-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 999999;
    opacity: 0;
    will-change: transform;
    transition: opacity 0.2s ease;
  }

  .svg-cursor svg {
    width: 100%;
    height: 100%;
    stroke: white;
    filter: drop-shadow(0 0 6px white);
    animation: glow 1.5s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 6px white); }
    50% { filter: drop-shadow(0 0 12px white); }
  }
</style>

<div class="cursor-zone">
  <!-- conteúdo da zona -->
</div>

<div id="svgCursor" class="svg-cursor" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 6V14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15 11L12 14L9 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
</div>

<script>
(function(){
  const cursorEl = document.getElementById('svgCursor');
  const zone = document.querySelector('.cursor-zone');

  if (window.matchMedia('(pointer: coarse)').matches) {
    cursorEl.style.display = 'none';
    return;
  }

  let targetX = 0, targetY = 0;
  let currX = 0, currY = 0;
  let rafId = null;

  function onMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    cursorEl.style.opacity = '0.6';
    startLoop();
  }

  function startLoop() {
    if (rafId) return;
    rafId = requestAnimationFrame(tick);
  }

  function tick() {
    const ease = 0.2;
    currX += (targetX - currX) * ease;
    currY += (targetY - currY) * ease;
    cursorEl.style.transform = \`translate(\${currX}px, \${currY}px) translate(-50%, -50%)\`;

    if (Math.abs(currX - targetX) > 0.1 || Math.abs(currY - targetY) > 0.1) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function onLeave() {
    cursorEl.style.opacity = '0';
  }

  // Evento de clique para scroll
  zone.addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight, // 100vh
      behavior: 'smooth'
    });
  });

  zone.addEventListener('mousemove', onMove);
  zone.addEventListener('pointermove', onMove);
  zone.addEventListener('mouseleave', onLeave);
})();
<\/script>
`,executeScriptOnCanvas:!1,className:"w-html-embed"})})})]}),R=n=>{const{origin:a,pathname:m,search:l}=new URL(n);return`${a}${m}${l}`},H=g.memo(({pageKey:n,system:a})=>e.jsx(M,{system:a},n),(n,a)=>n.pageKey===a.pageKey),$=({data:n})=>{const{system:a,resources:m,url:l,pageMeta:u}=n,v=R(l),x=g.useMemo(()=>({imageLoader:h,assetBaseUrl:d,assetUrlsByPath:q,resources:m,breakpoints:L,onError:console.error}),[m]);return e.jsxs(N.Provider,{value:x,children:[e.jsx(S.Provider,{value:l,children:e.jsx(H,{pageKey:v,system:a})}),e.jsx(_,{url:l,pageMeta:u,siteName:f,imageLoader:h,assetBaseUrl:d}),e.jsx(O,{children:u.title})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),V=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:f};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:h({src:`${d}${I}`})}),P.map(a=>e.jsx("link",{rel:"preload",href:`${d}${a}`,as:"font",crossOrigin:"anonymous"},a)),T.map(a=>e.jsx("link",{rel:"preload",href:`${d}${a}`,as:"image"},a))]})},Y=Object.freeze(Object.defineProperty({__proto__:null,Head:V},Symbol.toStringTag,{value:"Module"})),U={hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/atv/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:B}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/atv/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Y}}};export{U as configValuesSerialized};
