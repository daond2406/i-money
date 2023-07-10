<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
        action=""
        @submit.prevent="onSubmit"
      >
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
            Sign In
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
        <span class="font-semibold">I'am a new user.</span>
        <span class="">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary ml-1"
            >Register</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn";

export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const onSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value)
        router.push({
          name: "Home",
        });
    };

    return { onSubmit, email, error, isPending, password };
  },
};
</script>
