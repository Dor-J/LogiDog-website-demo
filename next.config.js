/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import("next").NextConfig} */
const config = {
    output: 'export',
    basePath: '/LogiDogWeb',
    assetPrefix: '/LogiDogWeb/',
    images: {
        unoptimized: true // Disable Next.js image optimization for GitHub Pages
    }
}

export default config
