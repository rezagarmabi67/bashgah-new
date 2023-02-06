<template>
  <div class="mary50">
    <Head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      />
    </Head>
    <section class="w100 bort3 dis-col gap40 pad30 bor-rad5 back4">
      <div>
        <label>راه های ارتباطی : </label>
      </div>
      <div class="dis-col gap30">
        <section class="w30 dis gap10">
          <span>
            <slot name="telegram" />
          </span>
          <span>
            <slot name="instagram" />
          </span>
          <span>
            <slot name="whatsapp" />
          </span>
        </section>
        <section>
          <p class="color3">تلفن : 
            <span class="color4 fs14"> <slot name="phone1" /></span> - 
            <span class="color4 fs14"><slot name="phone2" /></span>
          </p>
        </section>
        <section>
          <p class="color3">موبایل : 
            <span class="color4 fs14"><slot name="mobil1" /></span> - 
            <span class="color4 fs14"><slot name="mobil2" /></span>
          </p>
        </section>
        <section>
          <p class="color3 lineh-30">
            آدرس :
           <span class="color4 fs14"><slot name="loctionsclub" /></span>
          </p>
        </section>
      </div>
    </section>
  </div>
</template>