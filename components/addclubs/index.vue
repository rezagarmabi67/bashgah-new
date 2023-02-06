<template>
  <div>
    <div class="margin1 w40">
      <div class="mary50">
        <div class="w100 dis-center mary20">
          <label class="w40 back1 textcenter pad10 color2 fs20">ثبت باشگاهی</label>
        </div>
        
          <form class="design-form back4 dis-col gap20 pad30">
            <div>
              <label>نام باشگاه  : </label>
              <input type="text" class="iran fs12" placeholder="نام باشگاه خود را وارد نمائید"/>
            </div>
            <div>
              <label>تلفن : </label>
              <input type="text"  class="iran fs12" placeholder="شماره تلفن باشگاه خود را وارد نمائید"/>
            </div>
            <div>
              <label>موبایل : </label>
              <input type="text"  class="iran fs12" placeholder="موبایل خود را وارد نمائید"/>
            </div>
            <div>
              <label>رده های سنی : </label>
              <section>
                <input class="not-input" type="checkbox" />
                <label class="not-font">نونهالان</label>
              </section>
              <section>
                <input class="not-input" type="checkbox" />
                <label class="not-font">نوجوانان</label>
              </section>
              <section>
                <input class="not-input" type="checkbox" />
                <label class="not-font">جوانان</label>
              </section>
              <section>
                <input class="not-input" type="checkbox" />
                <label class="not-font">امید</label>
              </section>
              <section>
                <input class="not-input" type="checkbox" />
                <label class="not-font">بزرگسالان</label>
              </section>
            </div>

            <div>
              <label>آدرس : </label>
              <input type="text" />
            </div>
            <div>
              <label>بیوگرافی باشگاه : </label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label>بارگذاری عکس تیمی : </label>
              <input type="file" />
            </div>
            <div>
              <label>بارگذاری لوگو : </label>
              <input type="file" />
            </div>
            <div class="w100">
              <button class="btn color2 w30 iran">ارسال</button>
            </div>
          </form>
    
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

