import Swiper1 from './swiper-bundle.min.js';

export default function addswipe(block) {
  const swipperwrapper = document.createElement('div');
  swipperwrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swipperwrapper.append(row);
  });
  block.append(swipperwrapper);

  const swiperpagination = document.createElement('div');
  swiperpagination.classList.add('swiper-pagination');
  block.append(swiperpagination);

  const navpaginationnext = document.createElement('div');
  navpaginationnext.classList.add('swiper-button-next');
  const navpaginationprev = document.createElement('div');
  navpaginationprev.classList.add('swiper-button-prev');
  block.append(navpaginationnext);
  block.append(navpaginationprev);
  Swiper1(block, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: swiperpagination,
      clickable: true,
    },

    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
