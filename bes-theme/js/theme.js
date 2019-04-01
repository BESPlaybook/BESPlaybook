(function(){
  
  /* The navigation between playbooks is separate from the navigation
     within a playbook. When building that nav, we do not know what the
     current page is.

     This will look at the URL and the current link and apply a class
     if our current page falls under the playbook
  */
  var navItems = document.querySelectorAll('.bes-playbook-nav li')
  navItems.forEach(function (el) {
    var isLocal = window.location.href.indexOf(mkdocs_base_url) === -1;
    var slug = ''
    if (isLocal) {
      slug = window.location.href.split('8000')[1]
    } else {
      slug = window.location.href.split(mkdocs_base_url)[1];
    }

    var section = slug.split('/')[1];
    var linkSection = el.dataset.url && el.dataset.url.split('/')[1]

    if (section && linkSection === section) {
      el.className += ' active'
    }
  });

}())