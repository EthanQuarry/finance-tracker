/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freesvg.org',
                port: '',
                pathname: '/img/abstract-user-flat-1.png'
            }
        ]
    }
}

module.exports = nextConfig
