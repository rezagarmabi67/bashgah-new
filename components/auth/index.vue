<template>
  <section class="form-login">
    <!-- //////////////////////////////////////////         login                  /////////////////// -->

    <div class="margin1 w40">
      <div class="mary50">
        <div class="w100 dis-center mary20">
          <label class="w40 back1 textcenter pad10 color2"> ورود </label>
        </div>
        <Designform>
          <div>
            <Form class="design-form dis-col gap20 pad30">
              <div>
                <label> موبایل : </label>
                <input
                  type="text"
                  class="iran fs12"
                  placeholder="شماره موبایل خود را وارد نمائید"
                />
              </div>

              <div>
                <label>رمز عبور : </label>
                <input
                  type="password"
                  class="iran fs12"
                  placeholder="رمز عبور خود را وارد نمائید"
                />
              </div>

              <div class="w100">
                <button class="btn color2 w30 iran">ارسال</button>
              </div>
            </Form>
          </div>
        </Designform>
      </div>
    </div>

    <!-- /////////////////////////////////////////          register              /////////////////// -->

    <div class="margin1 w40">
      <div class="mary50">
        <div class="w100 dis-center mary20">
          <label class="w40 back1 textcenter pad10 color2">ثبت نام</label>
        </div>
        <Designform>
          <div>
            <Form @submit="register" :validation-schema="registerSchema" class="design-form dis-col gap20 pad30" v-slot="{ meta }">
              <div>
                <label> موبایل : </label>
                <input
                  name="phoneNmber"
                  v-model="registerData.phoneNumber"
                  type="text"
                  class="iran fs12"
                  placeholder="شماره موبایل خود را وارد نمائید"
                />
              </div>

              <div>
                <label>رمز عبور : </label>
                <input
                  name="password"
                  v-model="registerData.password"
                  type="password"
                  class="iran fs12"
                  placeholder="رمز عبور خود را وارد نمائید"
                />
              </div>
              <div>
                <label>تکرار رمز عبور : </label>
                <input
                  name="confirmpassword"
                  v-model="registerData.confirmpassword"
                  type="password"
                  class="iran fs12"
                  placeholder="رمز عبور خود را تکرار نمائید"
                />
              </div>

              <div class="w100">
                <button type="submit" :disabled="meta.valid = false " :loading="loading" class="btn color2 w30 iran">ارسال</button>
              </div>
            </Form>
          </div>
        </Designform>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { RegisterDTo } from "~~/models/auth/registerDTo";
import { RegisterUser } from "~~/services/auth.service";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string().required().min(11, "شماره تلفن نا معتبر است").max(11, "شماره تلفن نا معتبر است"),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "کلمه های عبور یکسان نیستند"
  ),
});
const registerData: RegisterDTo = reactive({
  phoneNumber: "",
  password: "",
  confirmpassword: "",
});
 const loading = ref(false)
const router = useRouter() 
const register = async () => {
  loading.value = true
  var result = await RegisterUser(registerData);
  loading.value = false;

  if (result.isSuccess) {
    router.push("/")
  }else{
    alert(result.metaData.message)
  }
  
};

</script>
  <style scoped>
.form-login {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
  
  


