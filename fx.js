(function(){'use strict';
var red=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,
$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))},
clamp=function(v,a,b){return Math.max(a,Math.min(b,v))},rtl=function(){return document.documentElement.dir==='rtl'},
vib=function(n){try{navigator.vibrate&&navigator.vibrate(n)}catch(e){}},
mouse={x:innerWidth/2,y:innerHeight/2,gx:innerWidth/2,gy:innerHeight/2},lastY=0,ticking=false,glowOn=false;
function chrome(){if($('.fx-bg'))return;var b=document.createElement('div');b.className='fx-bg';b.setAttribute('aria-hidden','true');b.innerHTML='<i></i><i></i><i></i>';document.body.insertBefore(b,document.body.firstChild);
var p=document.createElement('div');p.className='fx-prog';p.setAttribute('aria-hidden','true');document.body.appendChild(p);
if(fine&&!red){var g=document.createElement('div');g.className='fx-glow';g.setAttribute('aria-hidden','true');document.body.appendChild(g)}}
function glow(){var g=$('.fx-glow');if(!g||glowOn)return;glowOn=true;(function f(){mouse.gx+=(mouse.x-mouse.gx)*.12;mouse.gy+=(mouse.y-mouse.gy)*.12;g.style.transform='translate('+(mouse.gx-210)+'px,'+(mouse.gy-210)+'px)';requestAnimationFrame(f)})()}
function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(function(){ticking=false;var y=scrollY,h=document.documentElement.scrollHeight-innerHeight,nav=$('.nav'),p=$('.fx-prog');
document.documentElement.style.setProperty('--sy',y.toFixed(0));if(p)p.style.transform='scaleX('+(h>0?clamp(y/h,0,1):0)+')';
if(nav){nav.classList.toggle('fx-s',y>24);var open=$('.menu[open]')&&innerWidth<1200;if(y>lastY+4&&y>160&&!open&&!nav.contains(document.activeElement))nav.classList.add('fx-hide');else if(y<lastY-4||open)nav.classList.remove('fx-hide')}lastY=y})}
/* 3D scene: two counter-rotating diamonds (the logo shape) + depth particles, drawn with plain canvas */
function scene(host,kind){if($('.fx-c3d',host))return;var c=document.createElement('canvas');c.className='fx-c3d';c.setAttribute('aria-hidden','true');host.insertBefore(c,host.firstChild);
var g=c.getContext('2d'),W=0,H=0,dpr=Math.min(devicePixelRatio||1,2),vis=true,t=Math.random()*9,mx=0,my=0,tx=0,ty=0,F=4,P=[],N=innerWidth<700?22:56;
for(var i=0;i<N;i++)P.push({x:Math.random()*2-1,y:Math.random()*2-1,z:Math.random()*2-1,s:.6+Math.random()*1.4,g:Math.random()<.4});
var V=[[0,-1.25,0],[0,1.25,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],E=[[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]];
function size(){var r=host.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;g.setTransform(dpr,0,0,dpr,0,0)}size();addEventListener('resize',size);
var io=new IntersectionObserver(function(e){vis=e[0].isIntersecting});io.observe(host);
function rot(p,ax,ay){var c1=Math.cos(ay),s1=Math.sin(ay),x=p[0]*c1+p[2]*s1,z=-p[0]*s1+p[2]*c1,c2=Math.cos(ax),s2=Math.sin(ax);return[x,p[1]*c2-z*s2,p[1]*s2+z*c2]}
function draw(){g.clearRect(0,0,W,H);var hero=kind==='hero',wide=W>=900,cx=hero?(wide?(rtl()?.27:.73):.5):(rtl()?.14:.86),cy=hero?(wide?.5:.2):.55,R=Math.min(W,H)*(hero?(wide?.3:.2):.42);
mx+=(tx-mx)*.06;my+=(ty-my)*.06;var ay=t*.5+mx*.9,ax=.4+my*.5;
for(var i=0;i<P.length;i++){var p=P[i],q=rot([p.x*1.6,p.y*1.2,p.z*1.6],0,t*.12+mx*.3),k=F/(F+q[2]),x=W*.5+q[0]*W*.5*k+mx*20,y=H*.5+q[1]*H*.5*k+my*20,a=clamp(.45*k-.05,.08,.55);
g.beginPath();g.arc(x,y,p.s*k*1.6,0,6.283);g.fillStyle=p.g?'rgba(197,138,27,'+a+')':'rgba(31,63,122,'+a*.8+')';g.fill()}
[[1,'rgba(197,138,27,',ay,ax],[.55,'rgba(31,63,122,',-ay*1.3,ax+.3]].forEach(function(d){var s=R*d[0],pts=V.map(function(v){var q=rot(v,d[3],d[2]),k=F/(F+q[2]);return[cx*W+q[0]*s*k,cy*H+q[1]*s*k+Math.sin(t)*6,k]});
E.forEach(function(e){var a=pts[e[0]],b=pts[e[1]];g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.strokeStyle=d[1]+clamp(.25+(a[2]+b[2]-2)*1.2,.12,.8)+')';g.lineWidth=1.2;g.stroke()});
pts.forEach(function(p){g.beginPath();g.arc(p[0],p[1],2.2*p[2],0,6.283);g.fillStyle=d[1]+'.85)';g.fill()})})}
function loop(){if(!c.isConnected){removeEventListener('resize',size);io.disconnect();return}if(vis&&!document.hidden){t+=.012;draw()}requestAnimationFrame(loop)}
host.addEventListener('pointermove',function(e){var r=host.getBoundingClientRect();tx=clamp((e.clientX-r.left)/r.width*2-1,-1,1);ty=clamp((e.clientY-r.top)/r.height*2-1,-1,1)});
host.addEventListener('pointerleave',function(){tx=ty=0});
addEventListener('deviceorientation',function(e){if(e.gamma==null||!c.isConnected)return;tx=clamp(e.gamma/30,-1,1);ty=clamp((e.beta-45)/30,-1,1)});
if(red)draw();else loop()}
function page(){chrome();$$('.hero').forEach(function(h){scene(h,'hero')});$$('.ph').forEach(function(h){scene(h,'ph')});
$$('.flips,.how,.logos,.stats .wrap,.cats,.steps,.tl,.mosaic').forEach(function(p){$$(':scope > *',p).forEach(function(el,i){el.style.setProperty('--d',Math.min(i,10)*70+'ms')})});
var io=window.__fxio||(window.__fxio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('fx-in');window.__fxio.unobserve(e.target)}})},{threshold:.1}));
$$('.how li,.stats .wrap>div,.logos li,.cats button,.mz,.faq details.q,.side,.cinfo p,.res').forEach(function(el){if(el.classList.contains('rv')||el.dataset.fx)return;el.dataset.fx=1;el.classList.add('fx-r');io.observe(el)});onScroll()}
var TS='.how li,.cats button,.side,.res,.stats .wrap>div,.logos button,.mz',MG='.btn,.more,.fab .wa',RS='.btn,.more,.fab>*,.chips button,.tabs button,.cats button,.langbtn,.gc button,.spin button',curT=null,curM=null,hp=null;
function resetT(){if(curT){['--rx','--ry'].forEach(function(k){curT.style.removeProperty(k)});curT=null}if(curM){curM.style.translate='';curM=null}}
document.addEventListener('pointermove',function(e){mouse.x=e.clientX;mouse.y=e.clientY;
if(hp&&e.pointerType==='touch'){var r=hp.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;hp.style.transform='rotateY('+clamp(px*22,-14,14)+'deg) rotateX('+clamp(-py*22,-14,14)+'deg)';return}
if(red||e.pointerType!=='mouse')return;var tg=e.target.closest?e.target:e.target.parentElement,el=tg&&tg.closest(TS),mg=tg&&tg.closest(MG);
if(curT&&curT!==el){curT.style.removeProperty('--rx');curT.style.removeProperty('--ry');curT=null}
if(curM&&curM!==mg){curM.style.translate='';curM=null}
if(el){curT=el;el.classList.add('fx-tilt');var r2=el.getBoundingClientRect(),px2=(e.clientX-r2.left)/r2.width,py2=(e.clientY-r2.top)/r2.height;el.style.setProperty('--rx',((.5-py2)*8).toFixed(2)+'deg');el.style.setProperty('--ry',((px2-.5)*8).toFixed(2)+'deg');el.style.setProperty('--gx',(px2*100).toFixed(0)+'%');el.style.setProperty('--gy',(py2*100).toFixed(0)+'%')}
if(mg){curM=mg;var r3=mg.getBoundingClientRect();mg.style.translate=((e.clientX-r3.left-r3.width/2)*.18).toFixed(1)+'px '+((e.clientY-r3.top-r3.height/2)*.28).toFixed(1)+'px'}});
document.documentElement.addEventListener('mouseleave',resetT);
var gx=null,sw=false;
document.addEventListener('pointerdown',function(e){var tg=e.target.closest?e.target:e.target.parentElement;if(!tg)return;
var b=tg.closest(RS);if(b&&!red){var r=b.getBoundingClientRect(),s=document.createElement('span'),d=Math.max(r.width,r.height)*2;s.className='fx-rip';s.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';b.appendChild(s);setTimeout(function(){s.remove()},650)}
if(b&&e.pointerType==='touch')vib(8);if(e.pointerType==='touch'){var f=tg.closest('.hp');if(f)hp=f}
if(e.pointerType==='mouse'&&tg.closest('.stage'))gx=e.clientX});
function up(e){if(hp){hp.style.transform='';hp=null}if(gx!=null){var d=e.clientX-gx;gx=null;if(Math.abs(d)>60){var b=$('[data-g="'+(d<0?1:-1)+'"]');if(b){b.click();sw=true;setTimeout(function(){sw=false},80)}}}}
document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
document.addEventListener('click',function(e){if(sw){e.stopPropagation();e.preventDefault();sw=false}},true);
var sx=0,sy=0,tp=null;
document.addEventListener('touchstart',function(e){var t=e.touches[0],tg=e.target.closest?e.target:e.target.parentElement;sx=t.clientX;sy=t.clientY;tp=tg&&tg.closest('.tp')},{passive:true});
document.addEventListener('touchend',function(e){if(!tp)return;var t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;tp=null;if(Math.abs(dx)<80||Math.abs(dx)<Math.abs(dy)*1.6)return;
var tabs=$$('[data-tab]'),i=tabs.findIndex(function(b){return b.getAttribute('aria-selected')==='true'}),j=i+(((dx<0)!==rtl())?1:-1);if(tabs[j]){tabs[j].click();vib(10)}});
var tm;function boot(){clearTimeout(tm);tm=setTimeout(page,60)}
function init(){page();var m=$('#m');if(m&&window.MutationObserver)new MutationObserver(boot).observe(m,{childList:true,subtree:true});glow()}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
