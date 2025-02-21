import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  reactStrictMode: true, // Ensure this is included
  webpack(config) {
    config.output.chunkFilename = "static/chunks/[name].[contenthash].js";
    return config;
  },
  /* Other Next.js config options can go here */
};

export default withSentryConfig(nextConfig, {
  org: "ayobami-bolade",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
