import react from 'react';
import './Search.css';




//   var swiper = new Swiper(".top-slider", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//     },
//     pagination: {
//         el: ".wiper-pagination",
//         clickable: true,
//     },
// })



const Search = () => {
    <>
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
    </>
    
    return (


        <>
            <div className="mode-title" id="mode-id">
                <div className="weather-info">

                </div>



                <input type="checkbox" id="mode" />
                {/* <div id="coupen">
                    <span><button className="btn-align" onClick="closeCoupen()">&times;</button></span>
                    <h2 className="text-center">OFFERS FOR YOU</h2>
                    <a href="shop.html"><img src="https://i.ibb.co/Cv1QQwh/Baskin-Robbins-Feat-31-Mar-2016.jpg" alt="" /></a>
                </div> */}

            </div>




            <div className="swiper top-slider" id="topslider-id">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/tH3kzh0/silde1.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/pP5gwR6/slide2.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/kHsKDzG/silde3.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/h1y8Hk7/silde4.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/7k01zw4/silde5.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/2qzD9jy/slide6.webp" alt="" className="slide-1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://i.ibb.co/LSwPB7s/silde7.webp" alt="" className="slide-1" />
                    </div>

                </div>
                <div className="swiper-pagination top-dots"></div>
            </div>




        </>
    )
}


export default Search;