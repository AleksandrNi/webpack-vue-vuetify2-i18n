export const svgImages =  loadSVG();

function loadSVG () {
    const locales = require.context('@/assets/svg', true, /[A-Za-z0-9-_,\s]+\.svg$/i)
    const messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
          const locale = matched[1]
          messages[locale] = locales(key)
        }
    })
}
