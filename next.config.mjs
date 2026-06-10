

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "a0.muscache.com" },
      { protocol: "https", hostname: "media.vrbo.com" },
      { protocol: "https", hostname: "*.muscache.com" },
      { protocol: "https", hostname: "assets.hospitable.com" },
    ],
  },
};

export default nextConfig;
