(function(){

  window.addEventListener('scroll', onScroll)

  function onScroll(event) {
    if (window.pageYOffset > 100) {
      window.removeEventListener('scroll', onScroll);
      var header = document.querySelector('.bes-header')
      if (header) {
        header.className += ' scrolled'
      }
    }
  }

}())