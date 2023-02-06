<template>
    <section class="kit-clubs rel w100 bort3 dis-col gap30 pad30 bor-rad5 back6">
        <div>
          <label> کیت  :</label>
        </div>
        <div>
          <section>
              <span class="click-right abs dis-center top50"> &#9001; </span>
              <span class="click-left abs dis-center top50"> &#9002; </span>
              <div class="dis-center h100 w100">
                  <slot name="kitclub"/>
              </div>
          </section>
        </div>
      </section>
</template>

<style scoped>

.kit-clubs div section .click-right{
    right: 10px;
    }
    .kit-clubs div section .click-left{
        left: 10px;
    }
    
</style>