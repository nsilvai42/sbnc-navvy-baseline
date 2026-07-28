// Roadmap layout toggle: vertical (single scroll) <-> click-through (one panel at a time)
(function(){
  function init(root){
    var panelsEl=root.querySelector('.panels');
    var nav=root.querySelector('.ctnav');
    if(!panelsEl) return;
    var panels=[].slice.call(panelsEl.querySelectorAll('.panel'));
    var dots=nav?[].slice.call(nav.querySelectorAll('.dots i')):[];
    var prev=nav?nav.querySelector('.prev'):null;
    var next=nav?nav.querySelector('.next-ct'):null;
    var scrollHost=root.querySelector('.phone .body, .browser .body');
    var idx=0, mode='vertical';
    function render(){
      var ct=(mode==='clickthrough');
      panelsEl.classList.toggle('clickthrough',ct);
      if(nav) nav.style.display=ct?'flex':'none';
      panels.forEach(function(p,i){p.classList.toggle('active',i===idx);});
      dots.forEach(function(d,i){d.classList.toggle('on',i===idx);});
      if(prev) prev.disabled=(idx===0);
      if(next) next.textContent=(idx===panels.length-1)?'Done':'Next →';
      if(scrollHost) scrollHost.scrollTop=0;
    }
    root.querySelectorAll('.seg button').forEach(function(b){
      b.addEventListener('click',function(){
        root.querySelectorAll('.seg button').forEach(function(x){x.classList.remove('on');});
        b.classList.add('on');
        mode=b.dataset.mode; idx=0; render();
      });
    });
    if(prev) prev.addEventListener('click',function(){if(idx>0){idx--;render();}});
    if(next) next.addEventListener('click',function(){if(idx<panels.length-1){idx++;render();}else{idx=0;render();}});
    render();
  }
  document.querySelectorAll('[data-roadmap]').forEach(init);
})();
