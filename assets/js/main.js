;(function () {
  function main() {
    const e = document.body.querySelectorAll('.observe');
    function cb(e) {
      e.forEach(e => {
        if (e.isIntersecting && !e.target.classList.contains('play')) {
          console.log('playing ', e.target)
          e.target.classList.add('play')
        }
      });
    }
    if (window.IntersectionObserver) {
      e.forEach((e) => e.classList.remove('play'));
      
      let o = new IntersectionObserver(cb, { threshold: .25 });
      e.forEach((e) => o.observe(e));
    }
  }

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();