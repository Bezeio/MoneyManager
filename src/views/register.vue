<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onsubmit">
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">Full Name</span>
            <input id="fullname" type="text" class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="iMoney..." v-model="fullname">
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input id="email" type="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com" autocomplete="username" v-model="email">
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input id="password" type="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="Password" autocomplete="current-password" v-model="password">
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">Sign
            up</button>
          <button v-else type="button"
            class="py-3 text-center w-full bg-gray-700 text-white font-bold rounded-lg cursor-not-allowed"
            disabled>Loading...</button>
        </div>
      </form>
      <!-- Start: Error -->
      <div v-if="error" class="text-left mt-4">
        <span class="text-rose-700">{{ error }}</span>
      </div>
      <!-- Start: Direction   -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm ready a member</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }" class="text-primary font-bold">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSignUp } from "@/composables/useSignUp"


export default {
  setup() {
    const { error, isPending, signup } = useSignUp()
    const router = useRouter()

    const fullname = ref("")
    const email = ref("")
    const password = ref("")
    async function onsubmit() {
      await signup(email.value, password.value, fullname.value)
      if(!error.value) router.push({name: 'Home', params: {} })
    }
    return { error, fullname, email, password, isPending, onsubmit }
  }
}
</script>