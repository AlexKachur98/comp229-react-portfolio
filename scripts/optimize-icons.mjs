/**
 * @file scripts/optimize-icons.mjs
 * @purpose Optimize all existing .svg icons in /public/images/icons using svgo.
 * @author Alex Kachur
 * @since 2025-09-26
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { optimize } from 'svgo'

const iconsDir = path.resolve('./public/images/icons')

const svgoConfig = {
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                    cleanupIDs: false
                }
            }
        },
        'removeDimensions',
        'sortAttrs'
    ]
}

const files = readdirSync(iconsDir).filter(f => f.endsWith('.svg'))

for (const file of files) {
    const filePath = path.join(iconsDir, file)
    const rawSvg = readFileSync(filePath, 'utf-8')

    const result = optimize(rawSvg, {
        path: filePath,
        ...svgoConfig
    })

    writeFileSync(filePath, result.data, 'utf-8')
    console.log(`✅ Optimized: ${file}`)
}

console.log(`\nAll optimized → ${iconsDir}`)
