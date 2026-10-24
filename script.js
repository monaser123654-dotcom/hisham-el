(function(){
document.documentElement.classList.add('js');
const {SITE,PHOTOS,AREAS,TIMELINE,MEMBERSHIPS,ROLES,FORMED,ADVISED,CLIENTS}=C,K=KB,cfg=window.CONFIG||{};
const CATX=[{id:'civil',t:{ar:'قضايا مدنية',en:'Civil cases'}},{id:'commercial',t:{ar:'قضايا تجارية',en:'Commercial cases'}},{id:'economic',t:{ar:'قضايا اقتصادية',en:'Economic cases'}},{id:'criminal',t:{ar:'قضايا جنائية',en:'Criminal cases'}},...AREAS,{id:'enforcement',t:{ar:'تنفيذ الأحكام',en:'Enforcement of judgments'}}];
const NAV=[['',{ar:'الرئيسية',en:'Home'}],['about',{ar:'عن المؤسسة',en:'About'}],['practice-areas',{ar:'الخدمات',en:'Services'}],['team',{ar:'المؤسس',en:'Founder'}],['experience',{ar:'الخبرات',en:'Experience'}],['clients',{ar:'العملاء',en:'Clients'}],['help',{ar:'مركز المساعدة',en:'Help centre'}],['ai-assistant',{ar:'المساعد الذكي',en:'AI assistant'}],['contact',{ar:'تواصل',en:'Contact'}]];
let L=(function(){let q=null;try{q=new URLSearchParams(location.search).get('lang')}catch(e){}if(q==='ar'||q==='en'){try{localStorage.setItem('lang',q)}catch(e){}return q}let s=null;try{s=localStorage.getItem('lang')}catch(e){}return s==='en'?'en':'ar'})();
const t=b=>b[L],x=(a,e)=>L==='ar'?a:e,page=document.body.dataset.page,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const red=matchMedia('(prefers-reduced-motion: reduce)').matches,uid=()=>crypto.randomUUID?crypto.randomUUID():String(Date.now());
const href=p=>p?p+'.html':'index.html',WA=txt=>`https://wa.me/${SITE.wa}${txt?'?text='+encodeURIComponent(txt):''}`;
const CO_EN={"Berida Energia (فرع الشركة الإيطالية)": "Berida Energia (branch of the Italian company)", "المجموعة الدولية للخدمات القانونية (بالشراكة مع P.F.E.)": "International Group for Legal Services (in partnership with P.F.E.)", "Khalilof للبرمجة ونظم المعلومات": "Khalilof for Software and Information Systems", "Rainbow للاستيراد والتصدير": "Rainbow for Import and Export", "Rafhia للتجارة والتوزيع": "Rafhia for Trading and Distribution", "Internaut للملاحة البحرية": "Internaut for Maritime Navigation", "مجموعة أبل للإعلان والدعاية": "Apple Group for Advertising and Publicity", "Geam للأجهزة الكهربائية المنزلية الصغيرة": "Geam for Small Household Appliances", "تحويل الشركة المصرية لخدمات الاتصالات إلى شركة مساهمة": "Conversion of the Egyptian telecommunications services company into a joint-stock company", "إيكو طاقة للطاقة المتجددة": "Eco Taqa for Renewable Energy", "مجموعة دلمار للاستثمار الصناعي والزراعي": "Delmar Group for Industrial and Agricultural Investment", "الشركة المصرية السعودية للاستثمار العقاري": "Egyptian Saudi Company for Real Estate Investment", "مجموعة أي سي تي لخدمات الأمن السيبراني": "ICT Group for Cybersecurity Services", "بلدين جي مصر للاستثمار الزراعي": "Baldin G Egypt for Agricultural Investment", "Sustaincubator للطاقة المتجددة والري الحديث": "Sustaincubator for Renewable Energy and Modern Irrigation", "معمل الفيل الطائر (Yaoota)": "The Flying Elephant Lab (Yaoota)", "مجموعة دلمار": "Delmar Group", "Idea for Life للتنمية المستدامة": "Idea for Life for Sustainable Development", "جازفيل لتعبئة الغاز": "Gazville for Gas Filling", "غاز السويس": "Suez Gas", "فرست جاز": "First Gas"};const co=s=>L==="en"?(CO_EN[s]||s):s;
// ---------- v4 helpers: icons, WhatsApp, tracking, home blocks ----------
const WAI='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 00-8.4 15.1L2 22l5-1.6A9.9 9.9 0 1012.04 2zm0 1.8a8.1 8.1 0 11-4.3 15l-.3-.2-3 .9.9-2.9-.2-.3A8.1 8.1 0 0112.04 3.8zm-3.1 4.1c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5 0 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5z"/></svg>';
const CHK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4.5 4.5L19 7"/></svg>';
const ICON={
 corp:'<path d="M4 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6"/><path d="M8 10h2M14 10h2M8 13h2M14 13h2"/>',
 contracts:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/>',
 arb:'<path d="M12 3v18M8 21h8M4 7h16"/><path d="M4 7l-2.5 6a3 3 0 005 0z"/><path d="M20 7l-2.5 6a3 3 0 005 0z"/>',
 inv:'<path d="M3 20h18"/><path d="M5 16l4-4 3 3 6-7"/><path d="M14 8h4v4"/>',
 bank:'<rect x="3" y="6" width="18" height="13" rx="1.5"/><path d="M3 10h18M7 15h4"/>',
 lit:'<path d="M3 9l9-5 9 5"/><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9"/><path d="M3 21h18"/>',
 tech:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 opp:'<path d="M3 21h18"/><path d="M5 21V9l5-3v15"/><path d="M10 21V12l9-3v12"/><path d="M7.5 12h0M7.5 15h0M14 15h2M14 18h2"/>',
 pro:'<path d="M12 21s-7-4.6-9.2-9.1C1.3 8.6 3.2 5 6.6 5c2 0 3.4 1.1 5.4 3.2C14 6.1 15.4 5 17.4 5c3.4 0 5.3 3.6 3.8 6.9C19 16.4 12 21 12 21z"/>'};
const ico=id=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[id]||ICON.inv||''}</svg>`;
// رسالة واتساب جاهزة تتغير حسب الصفحة
const PM={
 home:['السلام عليكم، زرت موقع المؤسسة القانونية الدولية I.L.F وأريد الاستفسار عن مسألة قانونية.','Hello, I visited the I.L.F website and would like to ask about a legal matter.'],
 about:['السلام عليكم، قرأت عن المؤسسة في موقعها وأريد الاستفسار عن خدماتكم.','Hello, I read about the firm on its website and would like to ask about your services.'],
 'practice-areas':['السلام عليكم، اطلعت على الخدمات القانونية في الموقع وأريد الاستفسار عن مسألتي.','Hello, I saw your practice areas on the website and would like to ask about my matter.'],
 team:['السلام عليكم، أريد التواصل مع د. هشام الحناوي بخصوص مسألة قانونية.','Hello, I would like to reach Dr. Hesham El-Henawy about a legal matter.'],
 experience:['السلام عليكم، اطلعت على خبرات المؤسسة ولدي مسألة قانونية أريد الاستفسار عنها.','Hello, I saw the firm’s experience and have a legal matter I would like to ask about.'],
 clients:['السلام عليكم، اطلعت على عملاء المؤسسة وأريد الاستفسار عن خدماتكم لشركتي.','Hello, I saw the firm’s clients and would like to ask about your services for my company.'],
 help:['السلام عليكم، استخدمت مركز المساعدة في الموقع وأريد سؤال محامٍ عن مسألتي.','Hello, I used the help centre on the website and would like to ask a lawyer about my matter.'],
 'ai-assistant':['السلام عليكم، جرّبت المساعد الذكي في الموقع وأريد التحدث مع محامٍ.','Hello, I tried the AI assistant on the website and would like to speak with a lawyer.'],
 insights:['السلام عليكم، قرأت أحد الأدلة في الموقع ولدي استفسار قانوني.','Hello, I read one of the guides on the website and have a legal question.'],
 contact:['السلام عليكم، أريد طلب استشارة قانونية من المؤسسة.','Hello, I would like to request a legal consultation from the firm.']};
const pmsg=()=>{const m=PM[page]||PM.home;return L==='ar'?m[0]:m[1]};
const waTopic=tp=>x(`السلام عليكم، أريد الاستفسار عن «${tp}» (من موقع I.L.F).`,`Hello, I would like to ask about “${tp}” (from the I.L.F website).`);
const waBtn=(label,msg,loc,cls)=>`<a class="btn wa-btn${cls?' '+cls:''}" href="${WA(msg)}" target="_blank" rel="noopener" data-loc="${loc}">${WAI}<span>${label}</span></a>`;
// تتبع الزوار (Google Analytics) يعمل فقط إذا وُضع GA_ID في config.js
const track=(n,p)=>{try{if(window.gtag)gtag('event',n,Object.assign({page_name:page},p||{}))}catch(e){}};
(function(){const id=cfg.GA_ID;if(!/^G-[A-Z0-9]{6,}$/.test(id||''))return;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',id);const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(s)})();
// كيف نعمل معك: 3 خطوات
const how=()=>{const S=[
 [x('تواصل معنا','Reach out'),x('راسلنا على واتساب أو اطلب استشارة، واشرح مسألتك باختصار.','Message us on WhatsApp or request a consultation and briefly describe your matter.')],
 [x('دراسة المسألة','We study your matter'),x('يراجع المحامي ما أرسلته ويحدّد المستندات المطلوبة والخيارات القانونية المتاحة.','The lawyer reviews what you sent and identifies the documents needed and the legal options.')],
 [x('بدء التنفيذ','We get started'),x('بعد اتفاقك مع المكتب على نطاق العمل، يبدأ الفريق التنفيذ ويتابع معك.','Once you agree the scope of work with the firm, the team starts and keeps you updated.')]];
 return `<ol class="how">${S.map((s,i)=>`<li class="rv"><span class="hn">${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol><div class="row how-a">${waBtn(x('ابدأ بمراسلتنا على واتساب','Start with a WhatsApp message'),pmsg(),'how')}<a class="btn ghost" href="contact.html" data-loc="how">${x('اطلب استشارة','Request a consultation')}</a></div>`};
// أسئلة شائعة قصيرة، وكل سؤال ينتهي بزرار تواصل
const faq=()=>{const Q=[
 [x('كيف أبدأ تأسيس شركة؟','How do I start forming a company?'),x('تختلف الخطوات حسب نوع الشركة ونشاطها والشركاء. يراجع المحامي بياناتك ويحدد لك المسار والمستندات المطلوبة قبل أي إجراء.','Steps vary with the company type, its activity and the partners. A lawyer reviews your details and sets out the route and documents before any filing.')],
 [x('هل تراجعون عقدًا قبل توقيعه؟','Can you review a contract before I sign it?'),x('نعم، يراجع المكتب العقود المحلية والدولية وينبّهك إلى البنود التي تحتاج إلى تعديل قبل التوقيع.','Yes. The firm reviews local and international contracts and flags clauses that need changes before signing.')],
 [x('متى يكون التحكيم خيارًا مناسبًا؟','When is arbitration the right option?'),x('عندما يتفق الطرفان عليه أو يرد شرط تحكيم في العقد. يشرح لك المحامي مزاياه وحدوده في حالتك.','When the parties agree to it or the contract contains an arbitration clause. A lawyer explains its advantages and limits in your case.')],
 [x('هل يمكن الحصول على استشارة عن بُعد؟','Can I get advice remotely?'),x('يقدّم المكتب دعمًا قانونيًا عن بُعد، ويمكنك البدء برسالة على واتساب.','The firm offers remote legal support, and you can start with a WhatsApp message.')],
 [x('أين يقع المكتب؟','Where is the firm located?'),t(SITE.address)]];
 return `<div class="faq">${Q.map(q=>`<details class="q rv"><summary>${q[0]}</summary><p>${q[1]}</p><div class="row faq-a">${waBtn(x('اسأل عبر واتساب','Ask on WhatsApp'),waTopic(q[0]),'faq','sm')}<a class="btn ghost sm" href="contact.html" data-loc="faq">${x('اطلب استشارة','Request a consultation')}</a></div></details>`).join('')}<p class="note">${x('إجابات عامة وليست استشارة قانونية.','General answers, not legal advice.')}</p></div>`};

const sec=(c,h,b)=>`<section class="sec ${c}"><div class="wrap">${h?`<h2 class="rv">${h}</h2>`:''}${b}</div></section>`;
const ph=(h,p)=>`<div class="ph"><div class="wrap"><h1>${h}</h1>${p?`<p>${p}</p>`:''}</div></div>`;
const mosaic=()=>`<div class="mosaic">${PHOTOS.map((p,k)=>`<button class="mz rv" data-k="${k}" aria-label="${t(p.cap)}"><img src="${p.src}" alt="${t(p.cap)}" loading="lazy"></button>`).join('')}</div>`;
const ul=a=>`<ul class="ul">${a.map(i=>`<li>${i}</li>`).join('')}</ul>`;
const tl=()=>`<ol class="tl">${TIMELINE.map(e=>`<li class="rv nd"><span>${t(e.t)}</span></li>`).join('')}</ol>`;
const cta=()=>`<div class="cta"><div class="wrap rv"><h2>${x('لديك مسألة قانونية؟','Have a legal matter?')}</h2><p>${x('راسلنا على واتساب أو اطلب استشارة مباشرة من المكتب.','Message us on WhatsApp or request a consultation directly.')}</p><div class="row" style="justify-content:center">${waBtn(x('تواصل عبر واتساب','Contact on WhatsApp'),pmsg(),'cta')}<a class="btn ghost" href="contact.html" data-loc="cta">${x('اطلب استشارة','Request a consultation')}</a></div></div></div>`;
const flips=()=>`<div class="flips">${AREAS.map(a=>`<div class="flip rv" tabindex="0" role="button" aria-label="${t(a.t)}"><div class="fi"><div class="ff"><span class="ico"><b>${ico(a.id)}</b></span><div><h3>${t(a.t)}</h3><small>${t(a.s)}</small></div></div><div class="fb"><ul>${a.d.map(d=>`<li>${t(d)}</li>`).join('')}</ul><div class="fl2"><a href="contact.html?cat=${a.id}" data-loc="service-${a.id}">${a.id==='pro'?x('اطلب المساعدة','Request help'):x('اطلب استشارة في هذا المجال','Request a consultation')}</a><a href="${WA(waTopic(t(a.t)))}" target="_blank" rel="noopener" data-loc="service-${a.id}">${x('واتساب','WhatsApp')}</a></div></div></div></div>`).join('')}</div>`;
const gallery=()=>`<div class="gal" tabindex="0" aria-roledescription="carousel" aria-label="${x('صور المؤسس','Founder photos')}"><div class="stage" dir="ltr">${PHOTOS.map((p,k)=>`<button class="slide" data-k="${k}" aria-label="${t(p.cap)}"><img src="${p.src}" alt="${t(p.cap)}" loading="lazy"></button>`).join('')}</div><div class="gc"><button data-g="-1" aria-label="${x('السابقة','Previous')}">‹</button><span id="cap"></span><button data-g="1" aria-label="${x('التالية','Next')}">›</button><button class="sm" id="play" aria-pressed="false"></button></div><div class="dots">${PHOTOS.map(()=>'<i></i>').join('')}</div></div>`;
const ringHTML=()=>`<div class="ringw" aria-label="${x('عملاء المؤسسة','Our clients')}"><div class="ring">${CLIENTS.map(c=>`<button data-id="${c.id}" aria-label="${t(c.n)}"><img src="${c.logo}" alt="${t(c.n)}"></button>`).join('')}</div></div><div class="spin"><button data-spin="-1" aria-label="${x('السابق','Previous')}">‹</button><button data-spin="1" aria-label="${x('التالي','Next')}">›</button></div>`;
const logos=()=>`<ul class="logos">${CLIENTS.map(c=>`<li><button data-id="${c.id}" aria-label="${t(c.n)}"><img src="${c.logo}" alt="${t(c.n)}" loading="lazy"></button></li>`).join('')}</ul>`;
const nco=FORMED.reduce((s,f)=>s+f.n.length,0);
const guide=id=>{const e=K.entries.find(e=>e.id===id);return `<details class="q rv"><summary>${t(e.t)}</summary><p>${e.a[L]}</p><p class="note">${x('دليل تعريفي عام وليس استشارة قانونية.','General guide, not legal advice.')}</p></details>`};
const docsList=()=>AREAS.map(a=>`<details class="q"><summary>${t(a.t)}</summary>${ul(K.DOCS[a.id][L])}</details>`).join('');
const introVideo=()=>{const v=cfg.INTRO_VIDEO||{};let inner='';
 if(v.youtube){const m=String(v.youtube).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/),id=m?m[1]:String(v.youtube).trim();
  inner=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${x('فيديو تعريفي عن المؤسسة','Firm introduction video')}" loading="lazy" allow="accelerometer;encrypted-media;picture-in-picture;fullscreen" allowfullscreen></iframe>`}
 else{inner=`<video controls playsinline preload="metadata" poster="${v.poster||PHOTOS[0].src}"><source src="${v.file||'img/intro.mp4'}" type="video/mp4" onerror="this.closest('section').remove()">${x('المتصفح لا يدعم تشغيل الفيديو.','Your browser does not support video.')}</video>`}
 return sec('dk',x('تعرّف على المؤسسة','Meet the firm'),`<div class="vid rv" dir="ltr">${inner}</div>`)};
// ---------- views ----------
const V={
home:()=>`<header class="hero"><div class="wrap hg"><div class="hc"><h1>${x('خير من يمثلك','The best to represent you')}</h1><p class="lead">${x('برئاسة الدكتور هشام الحناوي','Headed by Dr. Hesham El-Henawy')}</p><ul class="trust"><li>${CHK}<span>${x('محامٍ بالنقض','Advocate before the Court of Cassation')}</span></li><li>${CHK}<span>${x('محكّم بمركز القاهرة الإقليمي للتحكيم التجاري الدولي','Arbitrator, Cairo Regional Centre for International Commercial Arbitration')}</span></li><li>${CHK}<span>${x('دكتوراه في القانون','Ph.D. in Law')}</span></li></ul><div class="row">${waBtn(x('تواصل عبر واتساب','Contact on WhatsApp'),pmsg(),'hero')}<a class="btn ghost" href="contact.html" data-loc="hero">${x('اطلب استشارة','Request a consultation')}</a></div></div>
 <figure class="hp tilt"><img src="${PHOTOS[0].src}" alt="${t(PHOTOS[0].cap)}"></figure></div></header>
 <div class="stats"><div class="wrap"><div><b class="num" data-to="${nco}">${nco}</b><small>${x('شركة تولّى المكتب تأسيسها','companies formed by the firm')}</small></div><div><b>${x('متعددة','Multiple')}</b><small>${x('مجالات قانونية متنوعة','diverse practice areas')}</small></div><div><b class="num" data-to="${MEMBERSHIPS.length}">${MEMBERSHIPS.length}</b><small>${x('عضويات مهنية للمؤسس','professional memberships')}</small></div></div></div>`
 +sec('',x('المؤسس','The founder'),`<div class="split"><div class="rv"><h3>${t(SITE.founder)}</h3><p>${x('محامٍ بالنقض والإدارية العليا والدستورية العليا، ومحكّم بمركز القاهرة الإقليمي للتحكيم التجاري الدولي. حاصل على دكتوراه في القانون.','Advocate before the Courts of Cassation, Supreme Administrative and Supreme Constitutional Courts, and arbitrator at the Cairo Regional Centre for International Commercial Arbitration. Holds a Ph.D. in Law.')}</p><a class="more" href="team.html">${x('الملف المهني','Full profile')}</a></div>${gallery()}</div>`)
 +sec('alt',x('الخدمات القانونية','Practice areas'),`${flips()}`)
 +sec('dk',x('عملاء المؤسسة','Our clients'),`${ringHTML()}`)
 
 +sec('dk',x('كيف نعمل معك','How we work with you'),how())
 +sec('alt',x('أسئلة شائعة','Common questions'),faq())
 +sec('',x('أدلة سريعة','Quick guides'),guide('company')+guide('contract')+guide('arbitration'))+cta(),
about:()=>ph(x('عن المؤسسة','About the firm'),x('مؤسسة قانونية دولية داخل جمهورية مصر العربية.','An international law firm within the Arab Republic of Egypt.'))
 +sec('',x('من نحن','Who we are'),`<div class="split"><div class="rv"><p>${x('المؤسسة القانونية الدولية I.L.F مؤسسة محاماة أسسها د. هشام الحناوي وشركاه. تعمل في تأسيس الشركات والعقود المحلية والدولية والتحكيم ومنازعات الاستثمار والتقاضي، وتتولى الأعمال القانونية لشركات في قطاعات متنوعة.','I.L.F International Legal Firm was founded by Dr. Hesham El-Henawy and partners. It works on company formation, local and international contracts, arbitration, investment disputes and litigation, serving companies across diverse sectors.')}</p></div><div class="rv"><img src="${PHOTOS[1].src}" alt="${t(PHOTOS[1].cap)}" style="width:100%;box-shadow:0 30px 60px #0004"></div></div>`)
 +introVideo()
 +sec('alt',x('ما يميز عمل المؤسسة','What defines the firm’s work'),`<div class="flips">${[[x('التقاضي والتحكيم المؤسسي','Litigation and institutional arbitration'),x('خبرة في جميع درجات التقاضي والتحكيم المؤسسي لدى المراكز الدولية والإقليمية.','Experience at every court level and in institutional arbitration before international and regional centres.')],[x('من التأسيس إلى التشغيل','From formation to operation'),x('تأسيس الشركات وتحويلها وتصفيتها وعمليات الدمج والاستحواذ.','Forming, converting and liquidating companies, and mergers and acquisitions.')],[x('قطاعات متنوعة','Diverse sectors'),L==='ar'?['قطاع الطاقة','قطاع المياه','قطاع الاستثمار العقاري','قطاع الاتصالات']:['Energy sector','Water sector','Real estate investment sector','Telecommunications sector']]].map(c=>`<div class="ff rv" style="position:static;height:auto"><h3>${c[0]}</h3>${Array.isArray(c[1])?ul(c[1]):`<p>${c[1]}</p>`}</div>`).join('')}</div>`)
 +cta(),
'practice-areas':()=>ph(x('الخدمات القانونية','Practice areas'),x('مجالات متعددة ومتنوعة، كلٌّ منها بتفاصيله وقائمة المستندات المطلوبة.','Multiple and diverse areas, each with its details and the documents to prepare.'))+sec('',null,flips())+sec('alt',x('جهّز مستنداتك','Prepare your documents'),docsList())+cta(),
team:()=>ph(t(SITE.founder),x('مؤسس المؤسسة القانونية الدولية I.L.F','Founder, I.L.F International Legal Firm'))
 +sec('',null,`<div class="split"><div class="rv"><p>${x('محامٍ بالنقض والإدارية العليا والدستورية العليا، ومحكّم بمركز القاهرة الإقليمي للتحكيم التجاري الدولي. حاصل على دكتوراه في القانون برسالة عن الحماية الدولية للحق في الحياة.','Advocate before the Courts of Cassation, Supreme Administrative and Supreme Constitutional Courts, and arbitrator at the Cairo Regional Centre for International Commercial Arbitration. Holds a Ph.D. in Law, with a thesis on the international protection of the right to life.')}</p></div><div>${mosaic()}</div></div>`)
 +sec('alt',x('المسيرة','Career'),tl())+sec('',x('العضويات','Memberships'),ul(MEMBERSHIPS.map(t)))
 +sec('alt',x('أبحاث ودورات','Research & training'),ul([x('رسالة الدكتوراه: «الحماية الدولية للحق في الحياة ومدى تطبيقها في النظام القانوني المصري»','Doctoral thesis: international protection of the right to life and its application in Egyptian law'),x('بحث «الاعتراف بالدولة» وبحث «امتيازات السلطة التنفيذية»','Papers: “Recognition of States” and “Prerogatives of the executive authority”'),x('بحث عن تطبيق التحكيم في مصر مقارنةً بالقضاء، قُدّم لنقابة المحامين','Paper on arbitration in Egypt compared with the courts, submitted to the Bar Association'),x('دورات في التحكيم الدولي: مركز القاهرة الإقليمي، مركز التحكيم بجامعة عين شمس، ونقابة المحامين','Courses in international arbitration: Cairo Regional Centre, Ain Shams arbitration centre, Bar Association')]))
 +sec('',x('مناصب استشارية','Advisory roles'),ul(ROLES.map(t)))+cta(),
experience:()=>ph(x('الخبرات','Experience'),x('الشركات التي تولّى المكتب تأسيسها والعملاء الذين يقدّم لهم الاستشارات.','Companies the firm has formed and clients it advises.'))
 +sec('',x('شركات تولّى المكتب تأسيسها وأعمالها القانونية','Companies formed and served by the firm'),`<div class="rv">${ul(FORMED.flatMap(f=>f.n).map(co)).replace('class="ul"','class="ul cols"')}</div>`)
 +sec('alt',x('مستشار قانوني ومحامٍ','Legal adviser and counsel'),ul(ADVISED.map(co)).replace('class="ul"','class="ul cols"'))
 +sec('',x('مناصب استشارية','Advisory roles'),ul(ROLES.map(t)))+cta(),
clients:()=>ph(x('عملاء المؤسسة','Our clients'),x('شركات وهيئات تتولى المؤسسة أعمالها القانونية.','Companies and bodies whose legal work the firm handles.'))+sec('dk','',ringHTML())+sec('',null,logos())+cta(),
help:()=>ph(x('مركز المساعدة القانونية','Legal help centre'),x('أدوات مجانية تساعدك على فهم موقفك وتجهيز أوراقك قبل التواصل مع المكتب.','Free tools to understand your position and prepare before contacting the firm.'))
 +sec('',null,`<div class="tabs" role="tablist">${[['wiz',x('ما مسألتك؟','Your matter')],['road',x('خارطة تأسيس شركة','Company roadmap')],['cc',x('قائمة مراجعة عقد','Contract checklist')],['faq',x('أسئلة شائعة','FAQ')]].map((a,i)=>`<button role="tab" data-tab="${a[0]}" aria-selected="${i===0}">${a[1]}</button>`).join('')}</div>
 <div id="tab-wiz" class="tp"></div>
 <div id="tab-road" class="tp" hidden><h3>${x('خطوات تأسيس شركة في مصر','Steps to form a company in Egypt')}</h3><ul class="chk">${K.ROAD[L].map(s=>`<li><label><input type="checkbox">${s}</label></li>`).join('')}</ul><p class="note">${x('خطوات عامة؛ الاشتراطات تتغير ويؤكدها المحامي لنشاطك.','General steps; requirements change and a lawyer confirms them for your activity.')}</p><button class="btn" onclick="print()">${x('طباعة القائمة','Print')}</button> <a class="btn ghost" style="color:var(--navy)" href="contact.html?cat=corp">${x('اطلب مساعدة في التأسيس','Get help forming a company')}</a></div>
 <div id="tab-cc" class="tp" hidden><h3>${x('ماذا يتضمن العقد التجاري الجيد؟','What a sound commercial contract contains')}</h3><ul class="chk">${K.CCHK[L].map(s=>`<li><label><input type="checkbox">${s}</label></li>`).join('')}</ul><button class="btn" onclick="print()">${x('طباعة القائمة','Print')}</button> <a class="btn ghost" style="color:var(--navy)" href="contact.html?cat=contracts">${x('اطلب مراجعة عقد','Request a contract review')}</a></div>
 <div id="tab-faq" class="tp" hidden>${['firm','founder','services','consult','contact','privacy'].map(guide).join('')}</div>`)+cta(),
'ai-assistant':()=>ph(x('المساعد القانوني الذكي','AI legal assistant'),x('يعرّفك بالمكتب وخدماته، ويرشدك قانونيًا بشكل عام، ويجهّز طلبك للمحامي.','Introduces the firm and its services, gives general legal guidance, and prepares your request for a lawyer.'))
 +sec('',null,`<div class="aigrid"><div data-chat></div><aside class="side"><h3>${x('جرّب أن تسأل','Try asking')}</h3>${[x('كيف أؤسس شركة؟','How do I form a company?'),x('ماذا يجب أن يتضمن العقد التجاري؟','What should a commercial contract include?'),x('ما الفرق بين التحكيم والقضاء؟','Arbitration vs court?'),x('ما خدمات المكتب؟','What are the firm’s services?'),x('كيف أحجز استشارة؟','How do I book a consultation?')].map(q=>`<button data-ask="${q}">${q}</button>`).join('')}<p class="note" style="margin-top:1rem">${x('الردود العامة لا تغني عن محامٍ يطّلع على أوراقك. في الحالات العاجلة اتصل على','General answers are no substitute for a lawyer reviewing your papers. In urgent cases call')} <a href="tel:${SITE.phone}" dir="ltr">${SITE.phone}</a></p></aside></div>`),
insights:()=>ph(x('أدلة ومقالات قانونية','Legal guides & articles'),x('أدلة تعريفية عامة. المقالات التي يعتمدها المكتب ستُضاف هنا.','General guides. Articles approved by the firm will be added here.'))
 +sec('',null,`<div class="f"><label for="gs">${x('ابحث في الأدلة','Search guides')}</label><input id="gs"></div><div id="gl2">${['company','contract','arbitration','investment','banking','litigation','tech','opportunities'].map(guide).join('')}</div><p class="note">${x('المحتوى تثقيفي عام ولا يغني عن استشارة قانونية خاصة بحالتك، وهو قيد مراجعة المكتب.','Educational content is not a substitute for case-specific legal advice and is pending review by the firm.')}</p>`)+cta(),
contact:()=>ph(x('تواصل واطلب استشارة','Contact & consultation'))+sec('',null,`<div class="cg"><div class="rv cinfo"><p><b>${x('المؤسسة','Firm')}</b>${t(SITE.address)}</p><p><b>${x('واتساب','WhatsApp')}</b><a href="${WA(pmsg())}" target="_blank" rel="noopener">${x('راسلنا على واتساب','Message us on WhatsApp')}</a></p><p><b>${x('البريد الإلكتروني','Email')}</b><a href="mailto:${SITE.email}">${SITE.email}</a></p><p></p></div>
 <form id="cf" class="form" novalidate><div class="f"><label for="name">${x('الاسم بالكامل','Full name')}</label><input id="name" name="name" autocomplete="name"><small data-e="name"></small></div>
 <div class="two"><div class="f"><label for="method">${x('وسيلة التواصل','Preferred contact')}</label><select id="method" name="method"><option value="wa">${x('واتساب','WhatsApp')}</option><option value="email">${x('بريد إلكتروني','Email')}</option></select></div><div class="f"><label for="contact">${x('رقم واتساب أو البريد الإلكتروني','WhatsApp number or email')}</label><input id="contact" name="contact"><small data-e="contact"></small></div></div>
 <div class="two"><div class="f"><label for="cat">${x('نوع الخدمة المطلوبة','Service required')}</label><select id="cat" name="cat">${CATX.map(a=>`<option value="${a.id}">${t(a.t)}</option>`).join('')}<option value="other">${x('أخرى','Other')}</option></select></div><div class="f"><label for="plang">${x('اللغة المفضلة','Language')}</label><select id="plang" name="lang"><option value="ar">العربية</option><option value="en">English</option></select></div></div>
 <div class="f"><label for="msg">${x('وصف موجز','Brief description')}</label><textarea id="msg" name="msg" rows="4" maxlength="2000"></textarea><small data-e="msg"></small></div><p class="note">${x('لا تُدرج كلمات مرور أو بيانات مالية.','Do not include passwords or financial credentials.')}</p>
 <label class="ck"><input type="checkbox" name="consent">${x('أوافق على استخدام بياناتي للرد على طلبي فقط.','I agree my details are used only to respond to my request.')}</label><small data-e="consent"></small><p id="fs" class="er" role="alert" hidden></p><button type="submit">${x('اطلب استشارة','Request consultation')}</button></form></div>`)
};
// ---------- shell ----------
let ringRaf=0;
const mqD=matchMedia('(min-width:1200px)'),syncMenu=()=>{const m=$('.menu');if(m)m.open=mqD.matches};
if(mqD.addEventListener)mqD.addEventListener('change',syncMenu);
function shell(){
 document.documentElement.lang=L;document.documentElement.dir=L==='ar'?'rtl':'ltr';cancelAnimationFrame(ringRaf);
 const cur=NAV.find(n=>(n[0]||'home')===page);if(L==='en')document.title=(cur&&page!=='home'?t(cur[1])+' | ':'')+t(SITE.name);
 $('#nav').innerHTML=`<a class="skip" href="#m">${x('تخطَّ إلى المحتوى','Skip to content')}</a><nav class="nav" aria-label="${x('التنقل الرئيسي','Main navigation')}"><div class="wrap"><a href="index.html" class="logo"><img src="img/logo.jpg" alt="" width="64" height="44"><span>${t(SITE.name)}</span></a><div class="navr"><button type="button" id="lang" class="langbtn" aria-label="${x('Switch to English','التبديل إلى العربية')}" title="${x('English','العربية')}"><b class="${L==='ar'?'on':''}" lang="ar">ع</b><b class="${L==='en'?'on':''}" lang="en">EN</b></button><details class="menu"><summary>${x('القائمة','Menu')}</summary><div>${NAV.map(n=>`<a href="${href(n[0])}"${(n[0]||'home')===page?' aria-current="page"':''}>${t(n[1])}</a>`).join('')}</div></details></div></div></nav>`;
 $('#m').innerHTML=V[page]();
 $('#foot').innerHTML=`<footer><div class="wrap"><div><h3>${t(SITE.name)}</h3><p>${t(SITE.address)}</p><p class="note">${x('المعلومات في هذا الموقع عامة ولا تُعد استشارة قانونية ولا تنشئ علاقة موكّل ومحامٍ.','Information on this site is general, is not legal advice and creates no attorney-client relationship.')}</p></div><div><h3>${x('روابط','Links')}</h3>${NAV.slice(0,6).map(n=>`<a href="${href(n[0])}">${t(n[1])}</a>`).join('')}</div><div><h3>${x('تواصل','Contact')}</h3><a href="${WA(pmsg())}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:${SITE.email}">${SITE.email}</a></div></div></footer>
 <div class="fab">${page==='ai-assistant'?'':`<button class="fab-ai" data-open-ai>${x('اسأل المساعد الذكي','Ask the AI assistant')}</button>`}<a class="wa" href="${WA(pmsg())}" target="_blank" rel="noopener" data-loc="fab">${WAI}<span>${x('اسأل محاميًا الآن','Ask a lawyer now')}</span></a></div><div id="pnl"></div>`;
 if(page==='ai-assistant')mountChat($('[data-chat]'));
 initGal();initRing();initReveal();wiz();prefill();syncMenu();
}
// ---------- reveal / counters / tilt ----------
function initReveal(){const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;$$('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
 const co=io&&new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const to=+e.target.dataset.to;if(red)return;const t0=performance.now();(function f(n){const p=Math.min((n-t0)/1200,1);e.target.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}));$$('.num').forEach(n=>{if(co&&!red){n.textContent='0';co.observe(n)}})}
let cur=null;document.addEventListener('pointermove',e=>{if(!matchMedia('(hover:hover)').matches||red)return;const el=e.target.closest&&e.target.closest('.tilt');if(cur&&cur!==el)cur.style.transform='';cur=el;if(!el)return;const r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateY(${px*14}deg) rotateX(${-py*14}deg)`});
// ---------- modal ----------
let lb=false;
function modal(h){closeM();const o=document.createElement('div');o.className='ov';o.innerHTML=`<div class="dlg" role="dialog" aria-modal="true"><button class="x" aria-label="Close">×</button>${h}</div>`;document.body.appendChild(o);document.body.style.overflow='hidden';o.querySelector('.x').focus()}
function closeM(){const o=$('.ov');if(o)o.remove();document.body.style.overflow='';lb=false}
// ---------- gallery ----------
let gi=0,timer=null,sx=0;const n=PHOTOS.length;
function updGal(){$$('.gal').forEach(g=>{g.querySelectorAll('.slide').forEach((s,k)=>{let r=k-gi;if(r>n/2)r-=n;if(r<-n/2)r+=n;const a=Math.abs(r);s.style.transform=`translateX(${r*52}%) rotateY(${-r*26}deg) scale(${1-a*.16})`;s.style.zIndex=9-a;s.style.opacity=a>1?0:1-a*.35;s.tabIndex=a?-1:0});g.querySelectorAll('.dots i').forEach((d,k)=>d.className=k===gi?'on':'');g.querySelector('#cap').textContent='';const p=g.querySelector('#play');p.textContent=timer?x('إيقاف التشغيل التلقائي','Pause autoplay'):x('تشغيل تلقائي','Autoplay');p.setAttribute('aria-pressed',!!timer)});
 if(lb){const i=$('.dlg .big');if(i){i.src=PHOTOS[gi].src;i.alt=t(PHOTOS[gi].cap);$('.dlg .lc').textContent=''}}}
function go(d){gi=(gi+d+n)%n;updGal()}
function initGal(){if(!$('.gal')){clearInterval(timer);timer=null;return}updGal()}
// ---------- 3D ring ----------
let impulse=0;
function initRing(){const el=$('.ring');if(!el)return;const it=[...el.children],N=it.length,R=Math.max(250,Math.round(210*N/(2*Math.PI)*1.3));let ang=0,drag=false,px=0,moved=0;
 it.forEach((b,i)=>b.style.transform=`rotateY(${i*360/N}deg) translateZ(${R}px)`);const w=$('.ringw');
 w.addEventListener('pointerdown',e=>{drag=true;px=e.clientX;moved=0});addEventListener('pointerup',()=>drag=false);
 addEventListener('pointermove',e=>{if(!drag)return;const d=e.clientX-px;px=e.clientX;moved+=Math.abs(d);ang+=d*.35});
 w.addEventListener('click',e=>{if(moved>6){e.stopPropagation();e.preventDefault();moved=0}},true);
 let hov=false;w.addEventListener('pointerenter',()=>hov=true);w.addEventListener('pointerleave',()=>hov=false);
 (function tick(){if(!drag&&!red&&!hov)ang+=.18;ang+=impulse;impulse*=.92;el.style.transform=`translateZ(${-R}px) rotateY(${ang}deg)`;ringRaf=requestAnimationFrame(tick)})()}
// ---------- help wizard ----------
let wz=null,urg=null;
function wiz(){const el=$('#tab-wiz');if(!el)return;
 if(!wz){el.innerHTML=`<h3>${x('ما نوع مسألتك؟','What kind of matter is it?')}</h3><div class="cats">${AREAS.map(a=>`<button data-cat="${a.id}"><b>${t(a.t)}</b><br><small style="color:inherit;opacity:.7">${t(a.s)}</small></button>`).join('')}</div>`;return}
 const a=AREAS.find(a=>a.id===wz),e=K.entries.find(e=>e.cat===wz);
 el.innerHTML=`<button class="lnk" data-cat="">‹ ${x('رجوع','Back')}</button><div class="res"><h3>${t(a.t)}</h3><p>${e?e.a[L]:t(a.s)}</p><h3 style="font-size:1.15rem">${x('ما الذي تجهّزه؟','What to prepare')}</h3>${ul(K.DOCS[wz][L])}${e&&e.f[L].length?`<h3 style="font-size:1.15rem">${x('أسئلة سيطرحها المحامي','Questions the lawyer will ask')}</h3>${ul(e.f[L])}`:''}
 <h3 style="font-size:1.15rem">${x('هل هناك موعد أو جلسة خلال أيام قليلة؟','Is there a deadline or hearing within days?')}</h3><div class="row"><button class="btn ghost" style="color:var(--navy)" data-urg="1">${x('نعم','Yes')}</button><button class="btn ghost" style="color:var(--navy)" data-urg="0">${x('لا','No')}</button></div>
 ${urg==='1'?`<div class="ur" role="alert">${x('الأمر عاجل: اتصل بالمكتب الآن','This is urgent: call the firm now')} <a href="tel:${SITE.phone}" dir="ltr"><b>${SITE.phone}</b></a> · <a href="${WA(t(a.t))}" target="_blank" rel="noopener">WhatsApp</a></div>`:''}
 <div class="row" style="margin-top:1rem"><a class="btn" href="contact.html?cat=${wz}">${x('اطلب استشارة','Request a consultation')}</a><button class="btn ghost" style="color:var(--navy)" data-ask="${t(a.t)}">${x('اسأل المساعد عن هذا المجال','Ask the assistant about this')}</button></div></div>`}
// ---------- chat ----------
let msgs=[],busy=false,consent=(()=>{try{return localStorage.getItem('aiConsent')==='1'}catch(e){return false}})(),cid=uid();
const starters=()=>L==='ar'?['ما خدمات المكتب؟','كيف أؤسس شركة؟','عندي سؤال عن عقد','أريد حجز استشارة','ما الفرق بين التحكيم والقضاء؟']:['What services do you offer?','How do I form a company?','I have a contract question','I want to book a consultation','Arbitration vs court?'];
const chatShell=p=>`<div class="cw" data-chat-in><div class="ch"><span class="orb"></span><div><b>${x('مساعد I.L.F','I.L.F assistant')}</b><small>${x('مساعد آلي، ليس محاميًا','Automated assistant, not a lawyer')}</small></div><button data-act="new">${x('محادثة جديدة','New chat')}</button>${p?`<button data-act="close" aria-label="${x('إغلاق','Close')}">×</button>`:''}</div>
 <p class="note">${x('معلومات عامة فقط، ولا تنشئ علاقة موكّل ومحامٍ. لا ترسل كلمات مرور أو بيانات مالية.','General information only; creates no attorney-client relationship. Never send passwords or financial data.')}</p>
 <div class="msgs" aria-live="polite"></div><div class="chips"></div><p class="er" role="alert" hidden style="padding:0 1rem"></p>
 <label class="ck"><input type="checkbox" data-consent ${consent?'checked':''}>${x('أسمح بإرسال رسائلي لخدمة المساعد الذكي لردود موسّعة (وإلا أُجيب من دليل المكتب داخل متصفحك).','Allow sending my messages to the AI service for fuller answers (otherwise I answer from the firm guide inside your browser).')}</label>
 <div class="in"><input maxlength="1500" placeholder="${x('اكتب سؤالك هنا','Type your question')}" aria-label="${x('رسالتك','Your message')}"><button data-act="send">${x('إرسال','Send')}</button></div></div>`;
function mountChat(host,p){host.innerHTML=chatShell(p);draw()}
const root=()=>$('[data-chat-in]');
function md(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/^[-•] (.+)$/gm,'• $1').replace(/\n/g,'<br>')}
function draw(){const r=root();if(!r)return;const box=r.querySelector('.msgs');box.textContent='';
 if(!msgs.length){const p=document.createElement('p');p.className='b a';p.textContent=x('أهلًا بك. أعرّفك بالمكتب وخدماته، وأرشدك قانونيًا بشكل عام، وأجهّز طلبك للمحامي. اختر سؤالًا أو اكتب مسألتك.','Welcome. I introduce the firm and its services, give general legal guidance and prepare your request for a lawyer. Pick a question or describe your matter.');box.appendChild(p)}
 msgs.forEach(m=>{const p=document.createElement('p');p.className='b '+m.r;if(m.r==='a'&&m.src){const g=document.createElement('span');g.className='tag';g.textContent=m.src==='ai'?x('مساعد ذكي (رد آلي)','AI assistant (automated)'):x('من دليل المكتب','From the firm guide');p.appendChild(g)}
  if(m.src==='ai'){const d=document.createElement('span');d.innerHTML=md(m.x);p.appendChild(d)}else p.appendChild(document.createTextNode(m.x));box.appendChild(p)});
 if(busy){const p=document.createElement('p');p.className='b a dots2';p.innerHTML='<i></i><i></i><i></i>';box.appendChild(p)}box.scrollTop=box.scrollHeight;
 const ch=r.querySelector('.chips');ch.textContent='';const lastA=[...msgs].reverse().find(m=>m.r==='a');
 const add=(l,a)=>{const e=document.createElement(a.href?'a':'button');e.textContent=l;if(a.href){e.href=a.href;if(a.ext){e.target='_blank';e.rel='noopener'}}else e.dataset.ask=a.q;ch.appendChild(e)};
 if(!msgs.length)starters().forEach(q=>add(q,{q}));else if(lastA&&!busy){(lastA.fu||[]).forEach(q=>add(q,{q}));add(x('اطلب استشارة','Request consultation'),{href:'contact.html'+(lastA.cat?'?cat='+lastA.cat:'')});add('WhatsApp',{href:WA(msgs.filter(m=>m.r==='u').slice(-1)[0].x),ext:1})}}
function er(m,h){const e=root().querySelector('.er');e.hidden=!m;e.textContent=m||'';e.style.color=h?'inherit':''}
async function post(url,body){const ac=new AbortController(),to=setTimeout(()=>ac.abort(),35000);try{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:ac.signal});if(!r.ok)throw new Error('http');const tx=await r.text();try{return JSON.parse(tx)}catch(e){return{reply:tx}}}finally{clearTimeout(to)}}
const pickReply=j=>{j=Array.isArray(j)?j[0]:j;if(typeof j==='string')return j;if(!j)return'';const r=j.reply||j.output||j.text||j.message||j.answer||(j.data&&(j.data.reply||j.data.output||j.data.text))||(j.json&&(j.json.reply||j.json.output));return typeof r==='string'?r:''};
async function askAI(body){const e1=cfg.CHAT_ENDPOINT,e2=cfg.CHAT_ENDPOINT_2,seq=[e1,e2||e1,e1].filter(Boolean);for(let i=0;i<seq.length;i++){try{const r=pickReply(await post(seq[i],body));if(r.trim())return r}catch(e){}if(i<seq.length-1)await new Promise(r=>setTimeout(r,700))}return''}
async function send(text){text=(text||'').trim();if(!text||busy||!root())return;er('');busy=true;const hist=msgs.slice(-10).map(m=>({r:m.r,x:m.x}));msgs.push({r:'u',x:text});draw();let ok=false,failed=false;
 if(consent&&cfg.CHAT_ENDPOINT){const r=await askAI({type:'chat',conversationId:cid,message:text,lang:L,consent:true,history:hist});if(r.trim()){msgs.push({r:'a',x:r,src:'ai'});ok=true}else failed=true}
 if(!ok){await new Promise(r=>setTimeout(r,350));const a=K.answer(text,L);
  if(failed&&root())er(x('تعذّر الاتصال بالمساعد الذكي، فأجبتك من دليل المكتب.','Could not reach the AI service, so I answered from the firm guide.'));
  if(a)msgs.push({r:'a',x:a.x,src:'kb',fu:a.f,cat:a.cat});else msgs.push({r:'a',x:x('لم أجد إجابة دقيقة لهذا السؤال في دليل المكتب، والأفضل أن يراجعه محامٍ. يمكنك طلب استشارة أو مراسلة المكتب على واتساب، أو اختيار موضوع من الأسفل.','I could not find a precise answer in the firm guide, and a lawyer should review it. You can request a consultation, message the firm on WhatsApp, or pick a topic below.'),src:'kb',fu:starters().slice(0,3)})}
 if(!consent&&cfg.CHAT_ENDPOINT&&!window.__aiHint&&root()){window.__aiHint=1;er(x('لردود أوسع من المساعد الذكي، فعّل خانة الموافقة أدناه.','For fuller answers from the AI assistant, tick the consent box below.'),1)}
 busy=false;draw()}
function openAI(q){if(page==='ai-assistant'){if(q)send(q);return}let p=$('#pnl');if(!p.firstChild){p.innerHTML='<div class="panel"></div>';mountChat(p.firstChild,1)}else p.firstChild.hidden=false;track('ai_open');if(q)send(q)}
// ---------- prefill / events ----------
function prefill(){const c=new URLSearchParams(location.search).get('cat'),s=$('#cat');if(c&&s&&[...s.options].some(o=>o.value===c))s.value=c}
document.addEventListener('click',e=>{const T=e.target,c=s=>T.closest(s);let m;{const w=c('a[href^="https://wa.me"]');if(w)track('whatsapp_click',{location:w.dataset.loc||'link'});if(c('a[href^="tel:"]'))track('phone_click');const k=c('a[href^="contact.html"]');if(k)track('consult_click',{location:k.dataset.loc||'link'})}
 if(c('#lang.langbtn')){e.preventDefault();const nl=L==='ar'?'en':'ar';try{localStorage.setItem('lang',nl)}catch(_){}try{const u=new URL(location.href);u.searchParams.set('lang',nl);location.replace(u.toString())}catch(_){location.search='?lang='+nl}return}
 if(m=c('.flip')){m.classList.toggle('on');return}
 if(m=c('[data-g]')){go(+m.dataset.g);return}
 if(m=c('.mz')){gi=+m.dataset.k;lb=true;modal(`<img class="big" src="${PHOTOS[gi].src}" alt="${t(PHOTOS[gi].cap)}"><div class="gc" dir="ltr"><button data-g="-1" aria-label="Previous">‹</button><span class="lc"></span><button data-g="1" aria-label="Next">›</button></div>`);return}
 if(m=c('.slide')){const k=+m.dataset.k;if(k===gi){lb=true;modal(`<img class="big" src="${PHOTOS[gi].src}" alt="${t(PHOTOS[gi].cap)}"><div class="gc" dir="ltr"><button data-g="-1" aria-label="Previous">‹</button><span class="lc"></span><button data-g="1" aria-label="Next">›</button></div>`)}else{gi=k;updGal()}return}
 if(T.id==='play'){if(timer){clearInterval(timer);timer=null}else if(!red)timer=setInterval(()=>go(1),4500);updGal();return}
 if(m=c('[data-spin]')){impulse+=+m.dataset.spin*-5;return}
 if(m=c('[data-id]')){const k=CLIENTS.find(k=>k.id===m.dataset.id);modal(`<img class="lg" src="${k.logo}" alt="${t(k.n)}"><h3>${t(k.n)}</h3><dl><dt>${x('العلاقة','Relationship')}</dt><dd>${t(k.rel)}</dd>${t(k.ind)?`<dt>${x('المجال','Field')}</dt><dd>${t(k.ind)}</dd>`:''}</dl>`);return}
 if(T.classList.contains('x')||T.classList.contains('ov')){closeM();return}
 if(m=c('[data-tab]')){$$('[data-tab]').forEach(b=>b.setAttribute('aria-selected',b===m));$$('.tp').forEach(p=>p.hidden=p.id!=='tab-'+m.dataset.tab);return}
 if(m=c('[data-cat]')){wz=m.dataset.cat||null;urg=null;wiz();return}
 if(m=c('[data-urg]')){urg=m.dataset.urg;wiz();return}
 if(c('[data-open-ai]')){openAI();return}
 if(m=c('[data-ask]')){openAI(m.dataset.ask);if(page!=='ai-assistant'&&c('#tab-wiz,.side'))return;return}
 if(m=c('[data-act]')){if(m.dataset.act==='send'){const i=root().querySelector('input[type=text],input:not([type])');send(i.value);i.value=''}if(m.dataset.act==='new'){msgs=[];cid=uid();draw();er('')}if(m.dataset.act==='close'){const pl=$('#pnl .panel');if(pl)pl.hidden=true}}
});
document.addEventListener('change',e=>{if(e.target.matches('[data-consent]'))consent=e.target.checked;try{localStorage.setItem('aiConsent',consent?'1':'0')}catch(_){}document.querySelectorAll('[data-consent]').forEach(c=>c.checked=consent)});
document.addEventListener('input',e=>{if(e.target.id==='gs'){const q=e.target.value.toLowerCase();$$('#gl2 details').forEach(d=>d.hidden=q&&!d.textContent.toLowerCase().includes(q))}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();
 if(e.key==='Enter'&&e.target.closest&&e.target.closest('[data-chat-in]')&&e.target.tagName==='INPUT'&&e.target.type!=='checkbox'){send(e.target.value);e.target.value=''}
 if(e.key==='Enter'&&e.target.classList&&e.target.classList.contains('flip'))e.target.classList.toggle('on');
 if((lb||(e.target.closest&&e.target.closest('.gal')))&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))go(e.key==='ArrowRight'?1:-1)});
document.addEventListener('touchstart',e=>{if(e.target.closest('.stage'))sx=e.touches[0].clientX},{passive:true});
document.addEventListener('touchend',e=>{if(e.target.closest('.stage')){const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)go(d<0?1:-1)}});
document.addEventListener('submit',async e=>{if(e.target.id!=='cf')return;e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f)),er2={},fs=$('#fs'),btn=f.querySelector('button[type=submit]');if(btn.disabled)return;
 if(!(d.name||'').trim())er2.name=x('اكتب اسمك','Enter your name');
 if(d.method==='email'?!/^\S+@\S+\.\S+$/.test(d.contact||''):!/^[+\d][\d\s-]{7,}$/.test(d.contact||''))er2.contact=x('بيانات التواصل غير صحيحة','Invalid contact detail');
 if((d.msg||'').trim().length<10)er2.msg=x('اشرح طلبك في 10 أحرف على الأقل','Describe your request (10+ characters)');
 if(!d.consent)er2.consent=x('الموافقة مطلوبة','Consent is required');
 f.querySelectorAll('[data-e]').forEach(s=>s.textContent=er2[s.dataset.e]||'');fs.hidden=true;if(Object.keys(er2).length)return;
 const url=cfg.LEADS_ENDPOINT||cfg.CHAT_ENDPOINT,cat=(CATX.find(a=>a.id===d.cat)||{t:{ar:'أخرى',en:'Other'}}).t,mt=d.method==='email'?x('بريد إلكتروني','Email'):x('واتساب','WhatsApp');
 const msg=x('السلام عليكم د. هشام، أرسلت لك هذا الطلب من موقع المؤسسة:','Hello Dr. Hesham, I am sending this request from the firm website:')+`\n\n${x('الاسم','Name')}: ${d.name}\n${x('نوع الخدمة المطلوبة','Service required')}: ${t(cat)}\n${x('وسيلة التواصل','Preferred contact')}: ${mt}\n${x('بيانات التواصل','Contact detail')}: ${d.contact}\n\n${x('تفاصيل الطلب','Details')}:\n${d.msg}`,link=WA(msg);
 try{if(url)post(url,{type:'consultation',lang:L,consent:true,intake:{name:d.name,method:d.method,contact:d.contact,category:t(cat),language:d.lang,description:d.msg}}).catch(()=>{})}catch(_){}
 track('generate_lead',{category:d.cat});
 const w=window.open(link,'_blank');if(w){try{w.opener=null}catch(_){}}else location.href=link;
 f.outerHTML=`<p class="okm" role="status">${x('تم تجهيز طلبك وفتح واتساب د. هشام الحناوي. اضغط إرسال داخل واتساب لإتمام الطلب. ','Your request is ready and WhatsApp with Dr. Hesham El-Henawy has opened. Tap send in WhatsApp to complete it. ')}<a href="${link}" target="_blank" rel="noopener"><b>${x('لم يفتح واتساب؟ اضغط هنا','WhatsApp did not open? Tap here')}</b></a></p>`});
shell();
})();
