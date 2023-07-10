import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

const signUp = async (email, password, fullname) => {
  isPending.value = true;
  error.value = null;

  try {
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");

    await updateProfile(projectAuth.currentUser, {
      displayName: fullname,
    });

    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useSignUp = () => {
  return { error, isPending, signUp };
};
