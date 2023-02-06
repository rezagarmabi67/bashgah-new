<template>
  <div>
    <section class="rel">
      <div class="head-con-clubs height120 w100">
        <img class="w100 h100 obfit abs" src="/img/std.jpg" alt="" />
      </div>
    </section>
    <section class="w70 margin2">
      <div class="dis">
        <label class="wmax pad20 dis-center fs30 color3 borb4">
          باشگاه های ایران
        </label>
      </div>

      <section class="container-clubs mary50 gap50">
        <nuxt-link to="/clubs/id/adults">
            <div class="cont-clubs rel bshadow1">
                <p class="loction-clubs abs dis-center">
                  <span class="fs12 color2">تهران</span>
                </p>
                <div class="abs w100 h100 pad10">
                  <img class="w100 h100 obfit" src="/img/persepolis.png" alt="" />
                </div>
                <p class="name-clubs dis-center abs w100 height40 blur1">
                  <span class="color5">باشگاه فرهنگی ورزشی پرسپولیس </span>
                </p>
              </div>
        </nuxt-link>

        
      

      </section>
    </section>
  </div>
</template>
<style scoped>

.container-clubs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.cont-clubs {
  width: 240px;
  height: 280px;
  background-image: linear-gradient(45deg, var(--bg21), var(--bg51));
  border-radius: 5px;
}
.loction-clubs {
  top: 15px;
  left: 0;
  background-color: var(--bg5);
  padding: 5px 10px;
}
.cont-clubs div {
  top: 0;
  left: 0;
}

.cont-clubs .name-clubs {
  right: 0;
  bottom: 15px;
  color: #cccccc;
}
</style>