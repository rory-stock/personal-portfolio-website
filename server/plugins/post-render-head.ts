export default defineNitroPlugin((nitro) => {
    nitro.hooks.hook('render:html', (html) => {
        html.head.push('<link rel="stylesheet" href="https://use.typekit.net/nqc5atv.css">')
    })
})
