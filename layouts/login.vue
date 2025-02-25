<template lang="pug">
Container.grid.place-items-center(class="translate-y-1/2")
  div(class="max-w-content")
    h1(class="text-3xl font-bold text-center") sign in
    form(class="mt-12 space-y-6" @submit="handleSubmit")
      div
        label(for="email") email
        input(id="email" type="email" v-model="email" required class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md text-black")
      div
        label(for="password") password
        input(id="password" type="password" v-model="password" required class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md text-black")
      div
        button(type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md") sign in
</template>

<script setup lang="ts">
import { defineLayout } from "#pruvious";
import { login, useAuth } from "#pruvious/client";
import { ref } from "vue";

defineLayout({
  allowedBlocks: [],
});

const auth = useAuth();

const email = ref("");
const password = ref("");

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  console.log({ email });
  console.log({ password });

  const loginRes = await login(email.value, password.value, true);

  if (loginRes.success) {
    console.log("Login successful", auth.value.userId);
    window.location.href = "/";
  } else {
    console.log("Login failed", loginRes.error, loginRes.code);
  }
};
</script>
