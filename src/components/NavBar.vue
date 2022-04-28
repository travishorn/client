<script setup>
import { useRouter } from "vue-router";
import { useUser } from "../stores/user";

const router = useRouter();
const user = useUser();

const signOut = async () => {
  await user.signOut();
  router.push("/");
};

const links = [
  { to: "#", text: "Solutions" },
  { to: "#", text: "Pricing" },
  { to: "#", text: "Docs" },
  { to: "#", text: "More" },
];
</script>

<template>
  <div
    class="p-5 sm:py-10 flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center"
  >
    <router-link to="/">
      <img
        class="h-10 w-auto"
        alt="Icon of the Earth"
        src="../../public/world.png"
      />
    </router-link>

    <div class="flex gap-5 sm:gap-12">
      <router-link
        class="font-medium text-gray-500 hover:text-gray-900"
        v-for="link in links"
        :key="link.text"
        :to="link.to"
      >
        {{ link.text }}
      </router-link>
    </div>

    <div class="flex gap-8 items-center" v-if="!user.isSignedIn">
      <router-link
        v-if="$route.path !== '/sign-in'"
        class="font-medium text-gray-500 hover:text-gray-900"
        to="/sign-in"
      >
        Sign in
      </router-link>

      <router-link
        class="px-4 py-2 rounded-md shadow-sm font-medium border border-transparent text-white bg-indigo-600 hover:bg-indigo-700"
        to="#"
      >
        Sign up
      </router-link>
    </div>

    <div v-else>
      <button
        class="px-4 py-2 rounded-md shadow-sm font-medium border text-indigo-600 border-indigo-600 hover:text-white hover:bg-indigo-700"
        @click="signOut"
      >
        Sign out
      </button>
    </div>
  </div>
</template>
