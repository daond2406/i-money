<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(navItem, index) in navItems" :key="index">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-circle
      class="top-0 absolute left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      @click="goToRoute"
      data-circle-inset
      class="absolute w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";

export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const router = useRouter();

    function goToRoute() {
      router.push({ name: "NewTransaction" });
    }

    return { navItems, goToRoute };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div {
  left: 50%;
  transform: translateX(-50%);
}
footer#footer > div[data-circle] {
  @apply bg-dark-light;

  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
