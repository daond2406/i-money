<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
        action=""
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              v-model="fullName"
              id="fullName"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              type="text"
              placeholder="iMoney...."
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              v-model="email"
              id="email"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              type="email"
              placeholder="Email address...."
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              v-model="password"
              id="password"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              type="password"
              placeholder="Password...."
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary rounded-lg font-bold text-white"
          >
            Sign Up
          </button>
          <button
            v-else
            type="submit"
            class="py-3 text-center w-full bg-primary rounded-lg font-bold text-white"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>

      <!-- Start error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'am alrealy a memeber.</span>
        <span class="">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary ml-1"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    const onSubmit = async () => {
      await signUp(email.value, password.value, fullName.value);
      if (!error)
        router.push({
          name: "Login",
        });
    };

    return { onSubmit, fullName, email, password, error, isPending };
  },
};
</script>
