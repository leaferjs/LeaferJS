import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        alias: [
            {
                find: 'leafer',
                replacement: 'src/leafer/src'
            },
            {
                find: '@leafer/web',
                replacement: 'src/leafer/packages/platform/web/src'
            },
            {
                find: '@leafer/node',
                replacement: 'src/leafer/packages/platform/node/src'
            },
            {
                find: '@leafer/platform',
                replacement: 'src/leafer/packages/platform/platform/src'
            },
            {
                find: /^@leafer\/canvas(.*)/,
                replacement: 'src/leafer/packages/canvas/canvas$1/src'
            },
            {
                find: /^@leafer\/image(.*)/,
                replacement: 'src/leafer/packages/image/image$1/src'
            },
            {
                find: /^@leafer\/event(.*)/,
                replacement: 'src/leafer/packages/event/event$1/src'
            },
            {
                find: /^@leafer\/interaction(.*)/,
                replacement: 'src/leafer/packages/interaction/interaction$1/src'
            },
            {
                find: /^@leafer\/(partner|layouter|watcher|renderer|selector)/,
                replacement: 'src/leafer/packages/partner/$1/src'
            },
            {
                find: /^@leafer\/(display\-module|data|layout|helper)/,
                replacement: 'src/leafer/packages/display-module/$1/src'
            },
            {
                find: /^@leafer\/(.*)/,
                replacement: 'src/leafer/packages/$1/src'
            },
            {
                find: 'leafer-ui',
                replacement: 'src/ui/src'
            },
            {
                find: '@leafer-ui/web',
                replacement: 'src/ui/packages/platform/web/src'
            },
            {
                find: '@leafer-ui/node',
                replacement: 'src/ui/packages/platform/node/src'
            },
            {
                find: '@leafer-ui/platform',
                replacement: 'src/ui/packages/platform/platform/src'
            },
            {
                find: /^@leafer-ui\/(display\-module|data|bounds|hit|render)/,
                replacement: 'src/ui/packages/display-module/$1/src'
            },
            {
                find: /^@leafer-ui\/(partner|effect|paint|text|color|export)/,
                replacement: 'src/ui/packages/partner/$1/src'
            },
            {
                find: /^@leafer-ui\/(.*)/,
                replacement: 'src/ui/packages/$1/src'
            }
        ],
        include: ['src/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/ui/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/leafer/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    }
})