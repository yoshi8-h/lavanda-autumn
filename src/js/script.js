
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

/* -------------------------------------------------------------------------------- */
/* swiper (スワイパー) s4-sp セクション */
// swiperの定義
const s4SpSwiper = new Swiper("#js-s4-sp-swiper", {
  loop: true,

  slidesPerView: 'auto', // スライドの幅をCSSで指定
  spaceBetween: 5,
  autoplay: {
    delay: 2300,  // 次のスライドに切り替わるまでの時間
    disableOnInteraction: false,  // ユーザーがドラッグなどの操作をしても自動再生が止まらないように。
  },
  speed: 900,  // 切り替わる最中のスピード(ミリ秒)
});

/* -------------------------------------------------------------------------------- */
/* swiper (スワイパー) s8 */
const s8Swiper = new Swiper("#js-s8-swiper", {
  loop: true,
  effect: 'fade',

  speed: 700,  // 切り替わる最中のスピード(ミリ秒)
  autoplay: {  // 自動再生ON
    delay: 4000,  // 次のスライドに切り替わるまでの時間
    disableOnInteraction: false,  // ユーザーがドラッグなどの操作をしても自動再生が止まらないように。
  },
});
