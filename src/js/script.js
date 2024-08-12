
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
/* swiper (スワイパー) s8 セクション */
const s8Swiper = new Swiper("#js-s8-swiper", {
  loop: true,
  effect: 'fade',

  speed: 700,  // 切り替わる最中のスピード(ミリ秒)
  autoplay: {  // 自動再生ON
    delay: 4000,  // 次のスライドに切り替わるまでの時間
    disableOnInteraction: false,  // ユーザーがドラッグなどの操作をしても自動再生が止まらないように。
  },
});

/* -------------------------------------------------------------------------------- */
/* swiper (スワイパー) s10 セクション */
const s10Swiper = new Swiper("#js-s10-swiper", {
  loop: true,
  effect: 'fade',

  speed: 700,  // 切り替わる最中のスピード(ミリ秒)
  autoplay: {  // 自動再生ON
    delay: 4000,  // 次のスライドに切り替わるまでの時間
    disableOnInteraction: false,  // ユーザーがドラッグなどの操作をしても自動再生が止まらないように。
  },
});




/* ================================================================================ */
/*  アニメーション  */
/* ================================================================================ */
/* １つの要素をフワッと下から出現 */

document.addEventListener('DOMContentLoaded', function() {
  const fadeInUps = document.querySelectorAll(".js-fadeInUp");  // ページ内の、このアニメーションをさせたい全ての要素を取得

  fadeInUps.forEach(item => {
    gsap.fromTo(item, {y:20, autoAlpha:0}, {y:0, autoAlpha:1, scrollTrigger:{
        trigger: item,
        start: 'top 90%',
        // markers:{
        //   startColor: "white",
        // },
      }
    });
  });

});

/* -------------------------------------------------------------------------------- */
/* 複数枚のカードをフワッと下から出現 (左から順番に時差で) */

document.addEventListener('DOMContentLoaded', function() {

  // ページ内の全てのカードコンテナ(複数枚カードのコンテナ。PC時にトリガーとなる要素)を取得
  const cardContainers = document.querySelectorAll(".js-cards-fadeInUp-trigger");

  cardContainers.forEach(container => {
    // 768px以上のとき (PC)

    const cards = container.querySelectorAll(".js-card-fadeInUp");  // そのコンテナ内のカードを全て取得
    gsap.fromTo(cards, {y:40, autoAlpha:0}, {y:0, autoAlpha:1, stagger:.09, scrollTrigger:{
        trigger: container,
        start: 'center bottom',
        // markers:{
        //   startColor: "white",
        // },
      }
    });
  });

});

/* -------------------------------------------------------------------------------- */
/* (マッチメディアで画面幅ごとに制御ver)複数枚のカードをフワッと下から出現 (左から順番に時差で) */
// →今回の『LAVANDA SUMMER 2024』の構成上、上記の複数カードをフワッと表示するアニメーションと同じようなクラスを当てると、
// PC時の画像の配置的に、1枚ずつ時差で表示されるように見えない。
// だから、マッチメディアで画面幅ごとに制御してPC時は分かりやすく時差を付けるように変更。

document.addEventListener('DOMContentLoaded', function() {
  // matchMediaで画面幅ごとに制御
  const mm = gsap.matchMedia();

  // ページ内の全てのカードコンテナ(複数枚カードのコンテナ。PC時にトリガーとなる要素)を取得
  const cardContainers = document.querySelectorAll(".js-cards-fadeInUp-trigger-matchMedia");

  cardContainers.forEach(container => {
    // 768px以上のとき (PC)
    mm.add('(min-width:768px)', function() {
      const cards = container.querySelectorAll(".js-card-fadeInUp-mm");  // そのコンテナ内のカードを全て取得
      gsap.fromTo(cards, {y:40, autoAlpha:0}, {y:0, autoAlpha:1, stagger:.2, scrollTrigger:{  // 時間差を多く取る(staggerで0.2秒)
          trigger: container,
          start: 'center bottom',
          // markers:{
          //   startColor: "white",
          // },
        }
      });
    });

    // 767px以下のとき (SP)
    mm.add('(max-width:767px)', function() {
      const cards = container.querySelectorAll(".js-card-fadeInUp-mm");  // そのコンテナ内のカードを全て取得
      gsap.fromTo(cards, {y:40, autoAlpha:0}, {y:0, autoAlpha:1, stagger:.09, scrollTrigger:{  // SP時は通常の時間差(0.09秒)
          trigger: container,
          start: 'center bottom',
          // markers:{
          //   startColor: "white",
          // },
        }
      });
    });
  });

});
