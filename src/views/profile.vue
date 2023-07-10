<template>
  <!-- Start info -->
  <div class="row">
    <div class="container mx-auto p-9">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdekaHkTd43m77Rr6uje124nB6loYbETurmx71YymIhg&s"
            alt="User's Profile Avatar"
            sizes="xs"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>

  <!-- Start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h1 class="font-bold text-xl- text-primary mb-2">General</h1>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              class="text-dark last:text-red"
              v-for="(profileOption, index) in profileOptions"
              :key="index"
            >
              <router-link
                :to="profileOption.route"
                class="flex items-center justify-between py-3"
              >
                <div class="text-left flex items-center">
                  <i class="text 2xl t2ico" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);

    const { getUser } = useUser();
    const { user } = getUser();

    return { profileOptions, user };
  },
};
</script>
