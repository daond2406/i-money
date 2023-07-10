<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="mt-4" v-if="user">{{ user.displayName }}</div>
  </div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",
  components: {},

  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
