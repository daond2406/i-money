import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const signIn = async (email, password) => {
  isPending.value = true;
  error.value = null;

  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");

    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useSignIn = () => {
  return { error, isPending, signIn };
};
