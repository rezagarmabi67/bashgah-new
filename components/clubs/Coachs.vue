<template>
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      />
    </Head>
    <LabelHome>
      <p class="mary30">کادر فنی</p>
    </LabelHome>
    <div class="coachs rel hmax w100 dis-center overh">
      <div>
        <span class="click-right abs dis-center"> &#9001; </span>
      </div>
      <div>
        <span class="click-left abs dis-center"> &#9002; </span>
      </div>

      <section class="margin1 wmax dis1 h100 gap20 overh pad20 iran">

        <div class="w100 dis-col1 gap15 pad10">
          <slot name="imgfarmehead" />
          <p class="color2 fs20">
            <slot name="namehead" />
          </p>
          <p class="color1 fs12">
            <slot name="headcoach" />
          </p>
          <div class="height40 social-coachs dis gap5">
            <span>
              <slot name="telegramhead" />
            </span>
            <span>
              <slot name="instagramhead" />
            </span>
            <span>
              <slot name="whatsapphead" />
            </span>
          </div>
        </div>

        <div class="w100 dis-col1 gap15 pad10">
          <slot name="imgfarmemanager" />
          <p class="color2 fs20">
            <slot name="namemaneger" />
          </p>
          <p class="color1 fs12">
            <slot name="maneger" />
          </p>
          <div class="height40 social-coachs dis gap5">
            <span>
              <slot name="telegrammanager" />
            </span>
            <span>
              <slot name="instagrammanager" />
            </span>
            <span>
              <slot name="whatsappmanager" />
            </span>
          </div>
        </div>

        <div class="w100 dis-col1 gap15 pad10">
          <slot name="imgfarmecoach" />
          <p class="color2 fs20">
            <slot name="namecoach" />
          </p>
          <p class="color1 fs12">
            <slot name="coach" />
          </p>
          <div class="height40 social-coachs dis gap5">
            <span>
              <slot name="telegramcoach" />
            </span>
            <span>
              <slot name="instagramcoach" />
            </span>
            <span>
              <slot name="whatsappcoach" />
            </span>
          </div>
        </div>

        <div class="w100 dis-col1 gap15 pad10">
          <slot name="imgfarmeanalosor" />
          <p class="color2 fs20">
            <slot name="nameanalosor" />
          </p>
          <p class="color1 fs12">
            <slot name="analosor" />
          </p>
          <div class="height40 social-coachs dis gap5">
            <span>
              <slot name="telegramanalosor" />
            </span>
            <span>
              <slot name="instagramanalosor" />
            </span>
            <span>
              <slot name="whatsappanalosor" />
            </span>
          </div>
        </div>

        
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.coachs {
  background-color: var(--bg3);
}
.click-right {
  bottom: 10px;
  right: 10px;
}
.click-left {
  bottom: 10px;
  left: 10px;
}
.coachs-img {
  height: 200px;
}
</style>