const isGithub = window.location.hostname.includes('github.io');
console.log("isGithub: ", isGithub)
const swPath = isGithub ? '/Nina-Carducci-OpenClassrooms/sw.js' : '/sw.js';
console.log("swPath ", swPath);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(swPathS)
    .then(() => console.log('Service Worker registered'))
    .catch((error) => console.log('Service Worker registration failed:', error));
}

$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
