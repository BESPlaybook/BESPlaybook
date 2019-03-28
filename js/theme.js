(function(){
  
  console.log('base:', mkdocs_base_url)
  console.log('current:', mkdocs_page_url)
  var navItems = document.querySelectorAll('.bes-playbook-nav li')
  navItems.forEach(function (el) {
    var isLocal = window.location.href.indexOf(mkdocs_base_url) === -1;
    var slug = ''
    if (isLocal) {
      slug = window.location.href.split('8000')[1]
    } else {
      slug = window.location.href.split(mkdocs_base_url)[0];
    }

    var section = slug.split('/')[1];
    var linkSection = el.dataset.url && el.dataset.url.split('/')[1]
    
    console.log('>', section, linkSection)

    if (section && linkSection === section) {
      el.className += ' active'
    }
  });

}())