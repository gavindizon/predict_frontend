/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false, child_process: false };

        return config;
    },
    env: {
        BASE_URL: "",
    },
};

module.exports = nextConfig;
