import Swiper1 from '../swiper/swiper-bundle.min.js';

export default function addswipe(block) {
  const swiper = document.createElement('div');
  swiper.classList.add('swiper');

  const swipperwrapper = document.createElement('div');
  swipperwrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swipperwrapper.append(row);
  });
  swiper.append(swipperwrapper);
  block.append(swiper);
  const swiperpagination = document.createElement('div');
  swiperpagination.classList.add('swiper-pagination');
  swiper.append(swiperpagination);
  Swiper1(swiper, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: swiperpagination,
      clickable: true,
    },
  });
}
