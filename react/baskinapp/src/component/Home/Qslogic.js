import react from 'react';


<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

var swiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

export default Qslogic;