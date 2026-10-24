/* ILF navigation: hover/touch prefetch, progress bar, graceful leave for browsers without view transitions */
(function(){var seen={},vt=CSS.supports&&CSS.supports('view-transition-name:a')&&'onpagereveal' in window;
function ext(a){return!a||a.target==='_blank'||a.origin!==location.origin||a.hasAttribute('download')||/^(tel|mailto|sms)/.test(a.protocol)||(a.pathname===location.pathname&&a.hash)}
function pre(a){if(ext(a)||seen[a.href])return;seen[a.href]=1;var l=document.createElement('link');l.rel='prefetch';l.href=a.href;document.head.appendChild(l)}
function lk(e){var t=e.target.closest&&e.target.closest('a');return t&&t.href?t:null}
['pointerenter','touchstart','focusin'].forEach(function(ev){document.addEventListener(ev,function(e){var a=lk(e);if(a)pre(a)},{passive:true,capture:true})});
var bar=document.createElement('div');bar.className='nvbar';document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(bar)});
document.addEventListener('click',function(e){if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;var a=lk(e);if(!a||ext(a)||a.href===location.href)return;
bar.classList.add('go');if(vt)return;e.preventDefault();document.body.classList.add('leaving');setTimeout(function(){location.href=a.href},170)});
addEventListener('pageshow',function(e){if(e.persisted){document.body.classList.remove('leaving');bar.classList.remove('go')}})})();
