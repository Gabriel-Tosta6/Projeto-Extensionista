document.addEventListener('DOMContentLoaded', function() {

    const stickyHeader = document.getElementById('sticky-header');
    const mainHeader = document.querySelector('header');

    if (stickyHeader && mainHeader) {
        const triggerHeight = mainHeader.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.scrollY > triggerHeight) {
                stickyHeader.classList.add('visivel');
            } else {
                stickyHeader.classList.remove('visivel');
            }
        });
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && galleryImages.length > 0 && closeBtn) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
            });
        });

        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
});