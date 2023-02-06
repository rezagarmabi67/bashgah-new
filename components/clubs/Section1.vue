<template>
  <div class="rel margin1">
    <section class="dis3 gap30 color2 iran w100 mary50 hmax ">
      <div class="sliders-teams rel w70 bor-rad5">
        
       <slot />
      </div>
      <div class=" club-maneger w30 bor-rad-5 back5  hmax dis-col gap10">
        <img
          class="w100 bor-rad-5 bor1 h100 obfit"
          src="/img/darvish.jpg"
          alt=""
        />
        <div class="pad10">
            <p class="bor1 bor-rad5 pad10 dis-center color4">
                مدیریت : <strong class="color3">حمید رضا گرشاسبی </strong>
              </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.sliders-teams {
  height: 415px;

}

.club-maneger img{
    height: 340px;
  }
  
</style>