// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

const swiper = new Swiper();

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,
});

export default swiper;
