<template>
  <div class="header rel">
    
    <section class="height40 pad menu">
      <div class="iran color2 borb1 dis h100">
        <div class="fs12 dis gap20">
          <p>شنبه 21 دی</p>
          <p>15 : 30</p>
        </div>

        <div class="fs12 dis gap10">
          <i>int</i>
          <i>tel</i>
          <i>wat</i>
        </div>
      </div>
    </section>
    <section class="pad w100">
      <div class="nav">
        <div class="menu dis height60">
          <div class="dis gap50">
            <ul class="dis gap20">
              <NuxtLink to="/addclubs"
                ><li class="back2">ثبت باشگاه +</li></NuxtLink
              >
              <NuxtLink to="/auth"><li class="a">ورود</li></NuxtLink>
            </ul>
            <ul class="dis h100 iran fs16 gap20">
              <NuxtLink to="/"><li class="a">خانه</li></NuxtLink>
              <NuxtLink to="/"><li class="a">قوانین و مقررات</li></NuxtLink>
              <NuxtLink to="/"><li class="a">درباره ما</li></NuxtLink>
              <NuxtLink to="/cl"><li class="a">تماس با ما</li></NuxtLink>
              <NuxtLink to="/">
                <li>
                  <img class="icon-search" src="/img/search.svg" alt="">
                </li>
            </NuxtLink>
            </ul>
          </div>
          <div class="color1 fs30 curp">
            <a>bashgah</a>
          </div>
        </div>
      </div>
    </section>
    
    <HomeSection1 />
  </div>
  <slot />
</template>


<style>


.header {
  height: 100px;
  overflow: hidden;
  background-color: var(--bg1);
}
.nav {
  width: 100%;
  margin: 0 auto;
}
.menu {
  width: 100%;
  margin: 0 auto;
}
.menu ul li {
  padding: 10px 8px;
  color: var(--opa);
}
.search-icon {
  color: var(--opa);
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.icon-search:hover{
  transform: scale(1.2);
  transition: all 0.4s;
}
</style>