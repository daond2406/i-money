<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
import { projectFireStore } from "./configs/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
  setup() {
    const route = useRoute();
    const getTransactions = async () => {
      const transaction = collection(projectFireStore, "transactions");
      const transactionSnapshot = await getDocs(transaction);
      const listTransaction = transactionSnapshot.docs.map((doc) => doc.data());
      return listTransaction;
    };

    getTransactions();

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<style></style>
