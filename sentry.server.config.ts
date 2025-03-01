import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://df962fda31dc1028e1dc3f77b91c4cd7@o4506166424371200.ingest.us.sentry.io/4508901414862848",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
