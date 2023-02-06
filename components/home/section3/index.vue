<template>
  <div class="pad dis-col gap10">
    <label-home>تست گیری</label-home>
    <section class="sec-home-3-test gap20 bshadow1 mary20 dis padx15 bort3">
      <div class="s-h-test-1 bor-rad-5 w50 h90 rel overh">
        <div class="logo-team-special abs dis-center">
          <img class="w90 h90 obfit" src="/img/persepolis.png" alt="" />
        </div>
        <section class="w100 h100 abs top0"></section>
        <img
          class="img-special-team w100 h100 abs"
          src="/img/perspolis.jpg"
          alt=""
        />
        <label class="abs dis-center fs14">
          <p class="color5">تهران</p>
        </label>
        <span class="w30 abs height20 color2 dis-center iran clip1 blur">
          <p class="fs12 wmax">تمامی رده ها</p>
        </span>
        <div class="wmax abs height40 color2 dis1 clip1 blur">
          <p class="fs20">تست باشگاه فرهنگی ورزشی پرسپولیس</p>
        </div>
      </div>
      <section
        class="s-h-test-2 w50 dis-col gap10 overh h90 color3 fs14 padx10 "
      >
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">
            تست باشگاه فرهنگی ورزشی استقلال
          </p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">
            تست باشگاه فرهنگی ورزشی پرسپولیس
          </p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">
            تست باشگاه فرهنگی ورزشی سپاهان
          </p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">تست باشگاه فرهنگی ورزشی ذوب</p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">تست باشگاه فرهنگی ورزشی نساجی</p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">تست باشگاه فرهنگی ورزشی داماش</p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">تست باشگاه فرهنگی ورزشی پیکان</p>
        </div>
        <div class="bshadow1">
          <p class="w100 height40 dis1 padx30">تست باشگاه فرهنگی ورزشی سایپا</p>
        </div>
      </section>
    </section>
    <div class="all-click w100">
      <nuxt-link to="/testfootball">
        <span>همه تست ها </span>
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>
.sec-home-3-test {
  height: 300px;
  background-color: var(--opa1);
  border-radius: 5px 5px 0 0;
}


.s-h-test-1 .logo-team-special {
  width: 120px;
  height: 100px;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}
.s-h-test-1 .img-special-team {
  object-position: center;
}
.s-h-test-1 section {
  background-image: linear-gradient(rgba(255, 0, 0, 0), #000000);
  z-index: 20;
}
.s-h-test-1 div,
.s-h-test-1 span {
  padding: 0 10px 0 30px;
  z-index: 30;
}

.s-h-test-1 div {
  bottom: 20px;
}

.s-h-test-1 span {
  bottom: 70px;
}

.s-h-test-1 label {
  width: 35px;
  height: 40px;
  background-color: var(--bg5);
  left: 10px;
  border-radius: 0 0 50% 50%;

  z-index: 10;
}

/* ///////////////////////////////////////////////////              section 2            ////////////  */
.s-h-test-2 {
  border-radius: 5px 5px 5px;
}

.s-h-test-2 div:nth-child(even) {
  background-color: var(--opa);
}
.s-h-test-2 div:nth-child(odd) {
  background-color: var(--bg21);
}
.s-h-test-2 div {
  border-radius: 30px 0 30px 0;
}
</style>