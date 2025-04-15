import userStore from "./user";

export default function useStore() {
  return {
    user: userStore()
  };
}
