<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "../stores/user";

const router = useRouter();
const user = useUser();

const emailAddress = ref("");
const password = ref("");

const signIn = async () => {
  await user.signIn(emailAddress.value, password.value);
  router.push("/");
};
</script>

<template>
  <form
    class="p-5 sm:pt-10 max-w-md mx-auto flex flex-col gap-4 sm:gap-6"
    @submit.prevent="signIn"
  >
    <div class="flex flex-col">
      <label class="font-medium text-gray-500" for="emailAddress"
        >Email address</label
      >
      <input
        id="emailAddress"
        name="emailAddress"
        class="border border-gray-300 rounded shadow-sm text-gray-600 px-2 py-1"
        v-model="emailAddress"
      />
    </div>

    <div class="flex flex-col">
      <label class="font-medium text-gray-500" for="password">Password</label>
      <input
        id="password"
        name="password"
        class="border border-gray-300 rounded shadow-sm text-gray-600 px-2 py-1"
        type="password"
        v-model="password"
      />
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between">
      <div class="flex gap-2 items-center">
        <input id="rememberMe" name="rememberMe" type="checkbox" />
        <label class="font-medium text-gray-500" for="rememberMe"
          >Remember me</label
        >
      </div>

      <router-link
        class="font-medium text-indigo-600 hover:text-indigo-700 text-center sm:text-right"
        to="#"
        >Forgot your password?</router-link
      >
    </div>

    <button
      class="px-4 py-2 rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Sign in
    </button>
  </form>
</template>
