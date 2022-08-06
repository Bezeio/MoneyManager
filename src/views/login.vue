<template>

  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onsubmit">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input id="email" type="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" v-model="email"
              placeholder="example@gmail.com" autocomplete="username">
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input id="password" type="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="password" placeholder="Password" autocomplete="current-password">
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">Sign
            In</button>
          <button v-else type="button"
            class="py-3 text-center w-full bg-gray-700 text-white font-bold rounded-lg cursor-not-allowed"
            disabled>Loading...</button>
        </div>
      </form>
      <div v-if="error" class="text-left mt-4">
        <span class="text-rose-700">{{ error }}</span>
      </div>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">Sign Up</router-link>
        </span>
      </div>
    </div>
  </div>

</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn"

export default {
  setup() {
    const { error, isPending, signin } = useSignIn()
    const router = useRouter()

    const email = ref("")
    const password = ref("")
    
    async function onsubmit() {
      await signin(email.value, password.value);
      if (!error.value) router.push({name: "Profile", params: {}})
    }
    return { email, password, error, isPending, onsubmit };
  }
}
</script>