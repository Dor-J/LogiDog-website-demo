/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import("next").NextConfig} */
const config = {
    output: 'export',
    basePath: isProd ? '/LogiDog-website-demo' : '',
    assetPrefix: isProd ? '/LogiDog-website-demo/' : '',
    images: {
        unoptimized: true // Disable Next.js image optimization for GitHub Pages
    }
}

export default config
