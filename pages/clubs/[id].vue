<template>
  <div>
    <section class="rel details-clubs">
      <div class="head-con-clubs height120 w100">
        <img class="w100 h100 obfit abs" src="/img/std.jpg" alt="" />
      </div>
    </section>
    <div class="back5 margin1">
      <section class="containers-club rel">
        <div class="dis3 pady10 header-clubs">
          <div class="padx40 mary50 dis-col gap100">
            <div class="w100 dis1 gap50">
              <p class="wmax fs30 name-club">
                <strong>باشگاه فرهنگی ورزشی پرسپولیس</strong>
              </p>
            </div>
            <p class="loction-clubs-header">
              آدرس : تهران سعادت آباد خیابان ایران کوچه ایران پلاک 666666
            </p>
          </div>
          <div class="logo-club padx40 dis-col1 gap10">
            <img class="" src="/img/persepolis.png" alt="" />
            <div class="dis w50">
              <span>int</span>
              <span>wat</span>
              <span>tel</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="margin1">
      <div class="w100 height60 back6 dis padx20 menu-clubs rel iran">
        <div class="dropdown color2">
          <nuxt-link to="/clubs/id/adults"><p class="color2">بزرگسالان</p></nuxt-link> 
          <ul class="dropdown-menu">
            <li><nuxt-link to="/clubs/id/adults/Testing">تست گیری</nuxt-link></li>
            <li><nuxt-link to="/clubs/id/adults/academy">آکادمی</nuxt-link></li>
          </ul>
        </div>
      
        <div class="dropdown color2">
          <nuxt-link to="/clubs/id/hope"><p class="color2">امید</p></nuxt-link> 
          <ul class="dropdown-menu">
            <li><nuxt-link to="/clubs/id/hope/Testing">تست گیری</nuxt-link></li>
            <li><nuxt-link to="/clubs/id/hope/academy">آکادمی</nuxt-link></li>
          </ul>
        </div>
        <div class="dropdown color2">
          <nuxt-link to="/clubs/id/youth"><p class="color2">جوانان</p></nuxt-link> 
          <ul class="dropdown-menu">
            <li><nuxt-link to="/clubs/id/youth/Testing">تست گیری</nuxt-link></li>
            <li><nuxt-link to="/clubs/id/youth/academy">آکادمی</nuxt-link></li>
          </ul>
        </div>
        <div class="dropdown color2">
          <nuxt-link to="/clubs/id/newyouth"><p class="color2">نوجوانان</p></nuxt-link> 
          <ul class="dropdown-menu">
            <li><nuxt-link to="/clubs/id/newyouth/Testing">تست گیری</nuxt-link></li>
            <li><nuxt-link to="/clubs/id/newyouth/academy">آکادمی</nuxt-link></li>
          </ul>
        </div>
        <div class="dropdown color2">
          <nuxt-link to="/clubs/id/toddlers"><p class="color2">نونهالان</p></nuxt-link> 
          <ul class="dropdown-menu">
            <li><nuxt-link to="/clubs/id/toddlers/Testing">تست گیری</nuxt-link></li>
            <li><nuxt-link to="/clubs/id/toddlers/academy">آکادمی</nuxt-link></li>
          </ul>
        </div>
      </div>
    </section>

    <NuxtPage />
    
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.head-con-clubs img {
  height: 220px;
  top: -100px;
  z-index: -1;
}

.header-clubs {
  height: 240px;
  background-image: linear-gradient(30deg, var(--bg51), var(--bg21));
}

.containers-club .name-club {
  color: var(--color2);
}

.containers-club .logo-club img {
  width: 150px;
  height: 180px;
}

.containers-details-club {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.loction-clubs-header {
  color: var(--bg1);
}
 
.dropdown {
  background: var(--bg5);
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  position: relative;
  width: 200px;
  text-align: center;
  text-decoration: none;
  z-index: 1;
  transform: perspective(1000px);
   -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.dropdown-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  opacity: 0;
  text-align: center;
  top: 0;
  visibility: hidden;
  z-index: -99999;
  font-size: 14px;
}

.dropdown-menu li:first-child {
  cursor: default;
}

.dropdown-menu a {
  color: var(--color3);
  display: inline-block;
  width: 100%;
  text-decoration: none;
  -webkit-transition: all 1s;
  transition: all 0.6s;
}

.dropdown-menu a:hover {
  background: var(--bg21);
  color: #fff;
}

.dropdown:hover .dropdown-menu {
  background: var(--bg5);
  opacity: 1;
  visibility: visible;
  top: 100%;
  width: 100%;
  -webkit-transition: all .3s, background, 0.5s .3s linear;
  transition: all .3s, background 0.5s .3s linear;
}

</style>

