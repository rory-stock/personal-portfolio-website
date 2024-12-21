import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://dcedd1d35bb04fb7ff263cc70be1e2e9@o4507957382676480.ingest.de.sentry.io/4508504050958416",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
