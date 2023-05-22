/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_API: process.env.NEXT_PUBLIC_API,
        BASE_API_VERSION: process.env.NEXT_PUBLIC_API+"/"+process.env.NEXT_PUBLIC_API_VERSION
    }
}

module.exports = nextConfig
