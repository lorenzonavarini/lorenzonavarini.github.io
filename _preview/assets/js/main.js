document.querySelectorAll('a[href]').forEach(function (link) {
  var url = new URL(link.getAttribute('href'), window.location.href);
  var isExternalWebsite = (url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== window.location.origin;

  if (isExternalWebsite) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.removeAttribute('target');
    link.removeAttribute('rel');
  }
});