<template>
  <Modal
      centered
      :title="authModalTitle"
      :label-class="'btn-dark'"
      :hidden-button="true"
      closable
      ref="authModal"
      @close="closeModal()"
  >
    <sign-in v-if="mode==='signIn'" is-modal @logged="$refs.authModal.closeModal()"
             @forgotPassword="mode = 'forgotPassword'"/>
    <sign-up v-if="mode==='signUp'" @registered="$refs.authModal.closeModal()"/>
    <ForgotPass v-if="mode==='forgotPassword'"/>

    <div
        v-if="mode === 'signIn' || mode === 'signUp'">
      <div
          class="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
      >
        <div
            class="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal"
        >
          {{ $t("auth.orContinueWith") }}
        </div>
      </div>
      <div class="max-w-[242px] mx-auto mt-8 w-full">
        <Social @logged="$refs.authModal.closeModal()"/>
      </div>
    </div>
    <div
        class="font-normal text-slate-500 dark:text-slate-400 mt-6 text-sm text-center"
    >
      <span class="cursor-pointer" @click="mode = 'signUp'" v-if="mode === 'signIn'">{{
          $t("auth.dontHaveAccount")
        }}</span>
      <span class="cursor-pointer" @click="mode = 'signIn'" v-if="mode === 'signUp'">{{
          $t("auth.alreadyRegistered")
          }}</span>
      <span class="cursor-pointer" @click="mode = 'signIn'" v-if="mode === 'forgotPassword'">{{
          $t("auth.backToSignIn")
        }}</span>
    </div>

  </Modal>
</template>

<script>
import Modal from "@/components/Modal/Modal.vue";
import Button from "@/components/Button/index.vue";
import FromGroup from "@/components/FromGroup/index.vue";
import Alert from "@/components/Alert/index.vue";
import VueSelect from "@/components/Select/VueSelect.vue";
import SignIn from "@/views/auth/common/Signin.vue";
import emitter from "@/plugins/mitt";
import SignUp from "@/views/auth/common/Signup.vue";
import Social from "@/views/auth/common/Social.vue";
import ForgotPass from "@/views/auth/common/forgot";

export default {
  name: "AuthModal",
  components: {ForgotPass, Social, SignUp, SignIn, VueSelect, Alert, FromGroup, Button, Modal},
  data() {
    return {
      mode: "signIn",
    }
  },
  created() {
    emitter.on("openAuthModal", () => {
      this.$refs.authModal.openModal()
    })
  },
  beforeUnmount() {
    emitter.off('openAuthModal');
  },
  computed: {
    authModalTitle() {
      if (this.mode === "signIn") {
        return this.$t('auth.signIn')
      }
      if (this.mode === "signUp") {
        return this.$t('auth.signUp')
      }
      if (this.mode === "forgotPassword") {
        return this.$t("auth.passwordReset")
      }
      return "";
    }
  }
}
</script>
