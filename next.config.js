/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_API: process.env.NEXT_PUBLIC_API
    }
}

module.exports = nextConfig
