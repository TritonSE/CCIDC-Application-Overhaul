// src/env.d.ts
declare namespace NodeJS {
  type ProcessEnv = {
    REACT_APP_SITE_KEY: string;
    // Add other environment variables as needed
  };
}
