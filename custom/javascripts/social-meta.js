// Default OG/Twitter meta
var head = document.getElementsByTagName('head')[0];

function addMeta(name, content, property=false) {
  let meta = document.createElement('meta');
  if (property) {
    meta.setAttribute('property', name);
  } else {
    meta.setAttribute('name', name);
  }
  meta.content = content;
  head.appendChild(meta);
}

// Example defaults – customize
addMeta('og:type', 'article', true);
addMeta('og:site_name', 'My Blog', true);
addMeta('twitter:card', 'summary_large_image');

// Page-specific overrides from front matter
if (window && window.document) {
  const image = document.querySelector('meta[name="social:image"]');
  if (image) {
    addMeta('og:image', image.content, true);
    addMeta('twitter:image', image.content);
  } else {
    addMeta('og:image', '/assets/images/social/default-card.png', true);
    addMeta('twitter:image', '/assets/images/social/default-card.png');
  }
}
