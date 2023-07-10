import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

export const useLogout = () => {
  return { error, logout };
};
