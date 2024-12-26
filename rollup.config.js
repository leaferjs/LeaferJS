import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"

import html from '@rollup/plugin-html'
import copy from 'rollup-plugin-copy'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const port = 10101 // visit http://localhost:10101

const isDev = process.env.NODE_ENV === 'development'
const platformName = process.env.PLATFORM
const dtsPackage = process.env.DTS_PACKAGE

const LeaferUI = 'LeaferUI'

const external = {
    '@leafer/core': LeaferUI,
    '@leafer-ui/draw': LeaferUI,
    '@leafer-ui/core': LeaferUI,
}

const pluginExternal = {
    ...external,
    '@leafer-in/editor': 'LeaferIN.editor',
    '@leafer-in/text-editor': 'LeaferIN.textEditor',
    '@leafer-in/viewport': 'LeaferIN.viewport',
    '@leafer-in/view': 'LeaferIN.view',
    '@leafer-in/scroll': 'LeaferIN.scroll',
    '@leafer-in/arrow': 'LeaferIN.arrow',
    '@leafer-in/html': 'LeaferIN.html',
    '@leafer-in/flow': 'LeaferIN.flow',
    '@leafer-in/animate': 'LeaferIN.animate',
    '@leafer-in/motion-path': 'LeaferIN.motionPath',
    '@leafer-in/state': 'LeaferIN.state',
    '@leafer-in/robot': 'LeaferIN.robot',
    '@leafer-in/color': 'LeaferIN.color',
    '@leafer-in/resize': 'LeaferIN.resize'
}

const LeaferUIExternal = { 
    ...external,
    'leafer-ui': LeaferUI,
    '@leafer-ui/worker': LeaferUI,
    '@leafer-ui/node': LeaferUI,
    '@leafer-ui/miniapp': LeaferUI,
}

const LeaferEditorExternal = {
    ...LeaferUIExternal,
    ...pluginExternal
}

const LeaferGameExternal = {
    ...LeaferUIExternal,
    ...pluginExternal
}
const inPath = 'src/in/packages'
const platformPath = 'src/ui/packages/platform'
const drawPlatformPath = 'src/draw/packages/platform'
const editorPlatformPath = 'src/editor/packages/platform'
const gamePlatformPath = 'src/game/packages/platform'

const platform ={
    'core': [
        {
            dist: 'lib',
            path: 'src/leafer/packages/core',
            withMin: 'min',
            withFormat: ['cjs']
        }, 
        {
            name: 'draw',
            dist: 'lib',
            path: 'src/ui/packages/core/draw',
            withMin: 'min',
            withFormat: ['cjs'],
            external: { '@leafer/core': LeaferUI}
        },
        {
            dist: 'lib',
            path: 'src/ui/packages/core/core',
            withMin: 'min',
            withFormat: ['cjs'],
            external: { '@leafer-ui/draw': LeaferUI, '@leafer/core': LeaferUI }
        }
    ],

    'draw': [
        {
            name: 'web',
            path: 'src/draw',
            withGlobal: LeaferUI,
            withMin: 'min',
            fullGlobal: true,
            withModule: true,
            external
        },
        {
            name: 'worker',
            path:  drawPlatformPath + '/worker',
            withGlobal: LeaferUI,
            withMin: 'min',
            fullGlobal: true,
            withModule: true,
            external
        },
        {
            name: 'node',
            path:  drawPlatformPath + '/node',
            withMin: 'min',
            withFormat: ['cjs'],
            external: {...external, 'fs': 'fs'}
        },
        {
            name: 'miniapp',
            path:  drawPlatformPath + '/miniapp',
            withMin: 'min',
            withModule: true,
            external
        }
    ],

     'editor': [
        {
            name: 'web',
            path: 'src/editor',
            withGlobal: LeaferUI,
            withMin: 'min',
            external,
            fullGlobal: true,
            withModule: true
        },
        {
            name: 'worker',
            path:  editorPlatformPath + '/worker',
            withGlobal: LeaferUI,
            withMin: 'min',
            external,
            fullGlobal: true,
            withModule: true
        },
        {
            name: 'node',
            path:  editorPlatformPath + '/node',
            withMin: 'min',
            withFormat: ['cjs'],
            external: {...external, 'fs': 'fs'}
        },
        {
            name: 'miniapp',
            path:  editorPlatformPath + '/miniapp',
            withMin: 'min',
            external,
            withModule: true
        }
    ],

    'editor': [
        {
            name: 'web',
            path: 'src/editor',
            withGlobal: LeaferUI,
            withMin: 'min',
            fullGlobal: true,
            withModule: true,
            external: LeaferEditorExternal
        },
        {
            name: 'worker',
            path:  editorPlatformPath + '/worker',
            withGlobal: LeaferUI,
            withMin: 'min',
            fullGlobal: true,
            withModule: true,
            external: LeaferEditorExternal
        },
        {
            name: 'node',
            path:  editorPlatformPath + '/node',
            withMin: 'min',
            withFormat: ['cjs'],
            external: {...LeaferEditorExternal, 'fs': 'fs'}
        },
        {
            name: 'miniapp',
            path:  editorPlatformPath + '/miniapp',
            withMin: 'min',
            withModule: true,
            external: LeaferEditorExternal,
        }
    ],

     'game': [
        {
            name: 'web',
            path: 'src/game',
            withGlobal: LeaferUI,
            withMin: 'min',
            withFormat: ['cjs'],
            fullGlobal: true,
            withModule: true,
            external: LeaferGameExternal
        },
        {
            name: 'worker',
            path:  gamePlatformPath + '/worker',
            withGlobal: LeaferUI,
            withMin: 'min',
            withFormat: ['cjs'],
            fullGlobal: true,
            withModule: true,
            external: LeaferGameExternal
        },
        {
            name: 'node',
            path:  gamePlatformPath + '/node',
            withMin: 'min',
            withFormat: ['cjs'],
            external: {...LeaferGameExternal, 'fs': 'fs'}
        },
        {
            name: 'miniapp',
            path:  gamePlatformPath + '/miniapp',
            withMin: 'min',
            withFormat: ['cjs'],
            withModule: true,
            external: LeaferGameExternal,
        }
    ],

    'web': {
        path: 'src/ui',
        withGlobal: LeaferUI,
        withMin: 'min',
        fullGlobal: true,
        withModule: true,
        external
    },
    'worker': {
        path:  platformPath + '/worker',
        withGlobal: LeaferUI,
        withMin: 'min',
        fullGlobal: true,
        withModule: true,
        external
    },
    'node': {
        path:  platformPath + '/node',
        withMin: 'min',
        withFormat: ['cjs'],
        external: {...external, 'fs': 'fs'}
    },
    'miniapp': {
        path:  platformPath + '/miniapp',
        withMin: 'min',
        withModule: true,
        external
    },

   
    'in': [
        {
            name: 'editor',
            path:  inPath + '/editor',
            withGlobal: 'LeaferIN.editor',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'resize',
            path:  inPath + '/resize',
            withGlobal: 'LeaferIN.resize',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'html',
            path:  inPath + '/html',
            withGlobal: 'LeaferIN.html',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'arrow',
            path:  inPath + '/arrow',
            withGlobal: 'LeaferIN.arrow',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'view',
            path:  inPath + '/view',
            withGlobal: 'LeaferIN.view',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'scroll',
            path:  inPath + '/scroll',
            withGlobal: 'LeaferIN.scroll',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'state',
            path:  inPath + '/state',
            withGlobal: 'LeaferIN.state',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'flow',
            path:  inPath+ '/flow',
            withGlobal: 'LeaferIN.flow',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'text-editor',
            path:  inPath + '/text-editor',
            withGlobal: 'LeaferIN.textEditor',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'animate',
            path:  inPath+ '/animate',
            withGlobal: 'LeaferIN.animate',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'robot',
            path:  inPath+ '/robot',
            withGlobal: 'LeaferIN.robot',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'color',
            path:  inPath+ '/color',
            withGlobal: 'LeaferIN.color',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'motion-path',
            path:  inPath+ '/motion-path',
            withGlobal: 'LeaferIN.motionPath',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        },
        {
            name: 'viewport',
            path:  inPath+ '/viewport',
            withGlobal: 'LeaferIN.viewport',
            withMin: 'min',
            withFormat: ['cjs'],
            external: pluginExternal
        }
    ],
} 

const plugins = [ 
    nodeResolve({
        browser: true,
        preferBuiltins: false,
    }),
    typescript({ 
        tsconfig: './tsconfig.json',
        ...(isDev && {
            sourceMap: true,
            inlineSources: true
        })
    }),
    commonjs()
]


let config


if(isDev) {

    config = {
        input: 'index.ts',
        output: {
            sourcemap: true,
            file: 'dist/bundle.js',
            format: 'esm'
        },
        watch: {  exclude: ['node_modules/**']  },
        plugins: [
            ...plugins,
             html({
                title: "LeaferJS",
                meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'}]
            }),
            copy({ targets: [{ src: 'public/*', dest: 'dist/' }]}),
            livereload(),
            serve({contentBase: ['dist/'],  port})
        ]
    }

} else if(dtsPackage) {

    config = {
        input: dtsPackage + '/src/index.ts',
        output: {
            file: dtsPackage + '/types/index.d.ts'
        },
        plugins: [ dts()  ]
    }

} else {

    config = []

    let p = platform[platformName]
    if(!(p instanceof Array)) p = [p]

    const list = []

    p.forEach(c =>{
        
        if(c.input && c.output) {

            list.push(c)

        } else {

            const input = c.input || c.path + '/src/index.ts'
            const fileBase = c.path + '/dist/' + (c.name || platformName)
            
            const global = c.withGlobal
            const min = c.withMin
            let external = c.external

            list.push({external, input, output: fileBase + '.esm.js'})
            if(c.withMin) list.push({ min, external, input, output: fileBase + '.esm.' + min + '.js'})

            if(c.withFormat) {
                c.withFormat.forEach(format =>{
                    const cjs = format === 'cjs'
                    list.push({external, input, output: fileBase + (cjs ? '.cjs' : '.' + format + '.js'), format})
                    if(c.withMin) list.push({ min, external, input, output: fileBase + (cjs ? '.' + min + '.cjs' :'.' + format + '.' + min + '.js'), format})
                })
            }
            
            if(global) {
                if(c.fullGlobal) external = null
                list.push({global, external, input, output: fileBase + '.js'})
                if(c.withMin) list.push({ global, min, external, input, output: fileBase + '.' + min + '.js'})
            }

        }
    })

    list.forEach(c => {
        const item = {
            external: c.external ? Object.keys(c.external) : null,
            input: c.input,
            plugins: [...plugins]
        }

        if(c.global) {

            item.output = {
                file: c.output,
                name: c.global,
                format: c.format || 'iife',
            }

            if(c.external) item.output.globals = c.external

        } else {

            item.output = {
                file: c.output,
                format: c.format || 'esm'
            }

        }

        if(c.min) item.plugins.push(terser({ format: { comments: false} }))

        config.push(item)

    })

}

export default config