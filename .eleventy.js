const VitePlugin = require('@11ty/eleventy-plugin-vite')
const legacyPlugin = require('@vitejs/plugin-legacy').default

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(VitePlugin, {
        viteOptions: {
            plugins: [
                legacyPlugin({
                    targets: ['defaults', 'IE 11']
                })
            ]
        }
    })

    eleventyConfig.addPassthroughCopy('src')

    eleventyConfig.setServerPassthroughCopyBehavior("copy");


    return {
        dir: {
            input: '11ty-input',
            output: '_site'
        }
    }
}