import $ from 'jquery';
import Swiper from 'swiper';

$(() => {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
  swiper.appendSlide('<div class="swiper-slide">Slide 10</div>');
  swiper.appendSlide('<div class="swiper-slide">Slide 10</div>');
  swiper.appendSlide('<div class="swiper-slide">Slide 10</div>');
});
