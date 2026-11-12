(function(){
 var s=[].slice.call(document.querySelectorAll('.slide')),d=document.getElementById('dots'),i=0,t;
 s.forEach(function(_,k){var b=document.createElement('button');b.setAttribute('aria-label','স্লাইড '+(k+1));b.onclick=function(){go(k);};d.appendChild(b);});
 var dots=d.children;
 function go(n){s[i].classList.remove('on');dots[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');dots[i].classList.add('on');clearInterval(t);t=setInterval(function(){go(i+1);},5000);}
 document.querySelector('.prev').onclick=function(){go(i-1);};
 document.querySelector('.next').onclick=function(){go(i+1);};
 s.forEach(function(e){e.style.setProperty('--u','url("'+e.querySelector('img').src+'")');});
 go(0);
 var nav=document.getElementById('nav'),bg=document.getElementById('burger');
 bg.onclick=function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);};
 nav.addEventListener('click',function(){nav.classList.remove('open');});
 var links=[].slice.call(nav.querySelectorAll('a'));
 window.addEventListener('scroll',function(){var y=window.scrollY+120,cur=0;
  ['home','service','about','contact'].forEach(function(id,k){var e=document.getElementById(id);if(e&&e.offsetTop<=y)cur=k;});
  links.forEach(function(a,k){a.classList.toggle('on',k===cur);});},{passive:true});
 document.getElementById('f').onsubmit=function(e){e.preventDefault();
  var txt='নাম: '+document.getElementById('n').value+'\n'+document.getElementById('m').value;
  window.open('https://wa.me/8801910203209?text='+encodeURIComponent(txt),'_blank');};
})();

(function(){
 var mas=document.getElementById('mas'),n=0;
 [].slice.call(document.querySelectorAll('.slide img')).forEach(function(im){
  var b=document.createElement('button');b.className='gi';b.setAttribute('aria-label','ছবি বড় করে দেখুন');
  b.innerHTML='<img alt="'+im.alt+'" loading="lazy"><span class="zm"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M11 8v6M8 11h6"/></svg></span>';
  b.firstChild.src=im.src;mas.appendChild(b);});
 var items=[].slice.call(mas.querySelectorAll('.gi')),lb=document.getElementById('lb'),li=document.getElementById('lbi'),lc=document.getElementById('lbc'),cur=0,last=null,sx=0;
 function bn(k){return String(k).replace(/\d/g,function(d){return '০১২৩৪৫৬৭৮৯'[d];});}
 function show(k){cur=(k+items.length)%items.length;var im=items[cur].querySelector('img');li.src=im.src;li.alt=im.alt;li.className='';li.style.transformOrigin='';lc.textContent=bn(cur+1)+' / '+bn(items.length);}
 function open(k){last=document.activeElement;show(k);lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.lb-x').focus();}
 function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus();}
 items.forEach(function(b,k){b.onclick=function(){open(k);};});
 lb.querySelector('.lb-x').onclick=close;
 lb.querySelector('.lb-p').onclick=function(){show(cur-1);};
 lb.querySelector('.lb-n').onclick=function(){show(cur+1);};
 lb.addEventListener('click',function(e){if(e.target===lb)close();});
 function org(e){var r=li.getBoundingClientRect(),p=e.touches?e.touches[0]:e;
  li.style.transformOrigin=Math.max(0,Math.min(100,(p.clientX-r.left)/r.width*100))+'% '+Math.max(0,Math.min(100,(p.clientY-r.top)/r.height*100))+'%';}
 li.onclick=function(e){if(li.classList.contains('z')){li.classList.remove('z');}else{org(e);li.classList.add('z');}};
 li.addEventListener('mousemove',function(e){if(li.classList.contains('z'))org(e);});
 li.addEventListener('touchmove',function(e){if(li.classList.contains('z'))org(e);},{passive:true});
 lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
 lb.addEventListener('touchend',function(e){if(li.classList.contains('z'))return;var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>60)show(cur+(d<0?1:-1));});
 document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
})();
