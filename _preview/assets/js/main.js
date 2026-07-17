document.querySelectorAll('a[href]').forEach(function(link){if(!link.getAttribute('href').startsWith('#')){link.target='_blank';link.rel='noopener noreferrer'}});
