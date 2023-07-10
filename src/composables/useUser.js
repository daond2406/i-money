import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(function (_user) {
  if (_user) _user.value = _user;
});

const getUser = () => {
  return { user };
};

export const useUser = () => {
  return {
    getUser,
  };
};

function solution(sequence) {
  let pointCheck = 0;
  for (let i = 1; i < sequence.length; i++) {
    console.log("ia", i);

    if (sequence[i] <= sequence[i - 1]) {
      pointCheck++;
      if (pointCheck > 1) return false;
      console.log("i", i);
      console.log("sequence[i - 2]", sequence[i - 2]);
      console.log("sequence[i]", sequence[i]);
      if (sequence[i] <= sequence[i - 2] && sequence[i] >= sequence[i + 1])
        return false;
    }
  }
  return true;
}

console.log(solution([1, 3, 2, 1]));

function sortByHeight(a) {
  let aFiltered = a
    .filter((x) => {
      if (x !== -1) {
        return x;
      }
    })
    .sort();

  console.log(aFiltered);
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = aFiltered.shift();
    }
  }

  return a;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
