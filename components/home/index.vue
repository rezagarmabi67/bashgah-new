<template>
  <div class="dis-col gap50">
    <Headers class="con-head-home">
      <div class="rel">
        <img class="abs w100 obfit" src="/img/std.jpg" alt="" />
      </div>
     
    </Headers>
    <HomeSection2 />
    <HomeSection5 />
    <HomeSection3 />
    <HomeSection4 />
  </div>
</template>
<style scoped>
.con-head-home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.con-head-home img {
  height: 340px;
  top: -100px;
  z-index: -1;
}
</style>

