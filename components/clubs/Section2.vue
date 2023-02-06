<template>
  <div class="margin1 dis3 gap30">
    <section class="w70 dis-col gap50">
      <ClubsBioClubs>
        <template #bioclubs>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo
          maiores nam maxime, sunt vero nulla harum quidem praesentium alias,
          ipsum, porro perferendis autem voluptatum? Aperiam placeat dolorem
          ullam repellat!
        </template>
      </ClubsBioClubs>

      <div class="cont-kadr">
        <ClubsCoachs>
          <!-- ///////////////////////////////////          head   coach    ///////////////// -->
          <template #imgfarmehead>
            <img
              class="w200 coachs-img h100 obfit bor-rad-50"
              src="/img/یحیی.jpg"
              alt=""
            />
          </template>

          <template #namehead> یحیی گل محمدی </template>
          <template #headcoach> سرمربی </template>

          <template #telegramhead>
            <i class="fab fa-telegram fs20"></i>
          </template>
          <template #instagramhead>
            <i class="fab fa-instagram fs20"></i>
          </template>
          <template #whatsapphead>
            <i class="fab fa-whatsapp fs20"></i>
          </template>
          <!-- ////////////////////////////////           manager        ///////////////////////-->

          <template #imgfarmemanager>
            <img
              class="w200 coachs-img h100 obfit bor-rad-50"
              src="/img/افشین.jpg"
              alt=""
            />
          </template>

          <template #namemaneger> افشین پیروانی </template>

          <template #maneger> سرپرست </template>

          <template #telegrammanager>
            <i class="fab fa-telegram fs20"></i>
          </template>

          <template #instagrammanager>
            <i class="fab fa-instagram fs20"></i>
          </template>

          <template #whatsappmanager>
            <i class="fab fa-whatsapp fs20"></i>
          </template>

          <!-- //////////////////////////////          coach              /////////////////// -->
          
          <template #imgfarmecoach>
            <img
              class="w200 coachs-img h100 obfit bor-rad-50"
              src="/img/اسمار.jpg"
              alt=""
            />
          </template>

          <template #namecoach> اسمار </template>

          <template #coach> مربی </template>

          <template #telegramcoach>
            <i class="fab fa-telegram fs20"></i>
          </template>

          <template #instagramcoach>
            <i class="fab fa-instagram fs20"></i>
          </template>

          <template #whatsappcoach>
            <i class="fab fa-whatsapp fs20"></i>
          </template>
   
          <template #imgfarmeanalosor>
            <img
              class="w200 coachs-img h100 obfit bor-rad-50"
              src="/img/خانبان.jpg"
              alt=""
            />
          </template>

          <template #nameanalosor> خانبان </template>

          <template #analosor> آنالیزور </template>

          <template #telegramanalosor>
            <i class="fab fa-telegram fs20"></i>
          </template>

          <template #instagramanalosor>
            <i class="fab fa-instagram fs20"></i>
          </template>

          <template #whatsappanalosor>
            <i class="fab fa-whatsapp fs20"></i>
          </template>

        </ClubsCoachs>
      </div>
    </section>
    <section class="w30">
      <ClubsKitClubs>
        <template #kitclub>
          <img src="/img/کیت1.jpg" alt="" />
        </template>
      </ClubsKitClubs>
      <ClubsContantClubs>
        <template #telegram>
          <i class="fab fa-telegram"></i>
        </template>

        <template #instagram>
          <i class="fab fa-instagram"></i>
        </template>
        <template #whatsapp>
          <i class="fab fa-whatsapp"></i>
        </template>

        <template #phone1> 02112345678 </template>

        <template #phone2> 02187654321 </template>

        <template #mobil1>
          091212345678
        </template>

        <template #mobil2>
          091912345678
        </template>

        <template #loctionsclub>
          تهران - سعادت آباد - خیابان ایران - کوچه ایران - پلاک 123456
        </template>
        </ClubsContantClubs
      >
    </section>
  </div>

</template>

<style scoped>
.kit-clubs div section div {
  height: 250px;
}
.cont-kadr i {
  color: var(--opa);
}

.coachs-img {
  height: 200px;
}
</style>
