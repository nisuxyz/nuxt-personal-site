<template lang="pug">
  div
    h1 Login
    p
      | This is a login page. You can login with your email and password.
    p
      | You can also logout, logout from all sessions, logout from other sessions, renew token, get user profile, and update user profile.
    p
      | Open the console to see the results.
    p
      | Note: This page is only for demonstration purposes. You can remove it from your project.
    p
      |
      NuxtLink(to="/") Go back to home
</template>

<script lang="ts" setup>
import {
  getUserProfile,
  login,
  logout,
  logoutAll,
  logoutOtherSessions,
  renewToken,
  updateUserProfile,
  useAuth,
} from "#pruvious/client";

const auth = useAuth();

// Login with email and password (third argument is `remember`)
const loginRes = await login("user@pruvious.com", "password", true);

if (loginRes.success) {
  console.log("User ID:", auth.value.userId);
} else {
  console.error(loginRes.error, loginRes.code);
}

// Logout
await logout();
console.log(auth.value); // { isLoggedIn: false, userId: null }

// Logout other sessions except the current one
const otherTokensRemoved = await logoutOtherSessions();
console.log(otherTokensRemoved); // 0

// Logout all sessions
const tokensRemoved = await logoutAll();
console.log(tokensRemoved); // 0

// Renew token
const renewRes = await renewToken();

if (renewRes.success) {
  console.log("User ID:", auth.value.userId);
} else {
  console.error(renewRes.error, renewRes.code);
}

// Get user profile
const user = await getUserProfile();
console.log(user); // null

// Update user profile
const profileRes = await updateUserProfile({ password: "new-password" });

if (profileRes.success) {
  console.log("User:", profileRes.data);
} else {
  console.error(profileRes.error, profileRes.code);
}
</script>
