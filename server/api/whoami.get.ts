export default defineEventHandler((event) => {
  if (!event.context.auth.isLoggedIn) {
    setResponseStatus(event, 401);
    return "You are not logged in";
  }

  return `Hello, ${event.context.auth.user.firstName}`;
});
