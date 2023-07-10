<template>
  <h1>Logout page...</h1>
  <p>{{ error }}</p>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "@/composables/useLogout";

export default {
  setup() {
    const { logout, error } = useLogout();

    const router = useRouter();

    async function onLogout() {
      await logout();
      if (!error.value) {
        router.push({
          name: "Login",
        });
      }
    }

    onLogout();

    return { error };
  },
};
</script>
