<template>
  <div class="pad dis-col gap10 rel">
    <label-home>باشگاه و آکادمی</label-home>
    <span class="click-right abs dis-center"> &#9001; </span>
    <span class="click-left abs dis-center"> &#9002; </span>
    <section class="sec-home-5 bshadow2 w100 mary20 gap20 bort3 pady20 overh">
    
      <div class="dis-col gap20 ">
        <div class="dis-center">
          <img src="/img/persepolis.png" alt="" />
        </div>
        <p class="fs14   textcenter">باشگاه و آکادمی پرسپولیس</p>
      </div>
     
      
    </section>
    <div class="all-click w100">
      <nuxt-link to="/clubs"><span>همه باشگاه ها </span></nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.sec-home-5{
  height: 250px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px 5px 0 0;
  background-color: var(--opa1);
}
.click-right {
  bottom: 60px;
  right: 120px;
}
.click-left {
  bottom: 60px;
  right: 155px;
}

.sec-home-5 div img{
  width: 120px;
  height: 120px;
}
.sec-home-5 div p{
  color: var(--bg3);
}
</style>