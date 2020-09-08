module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './public/index.html'
    ],
    extractors: [
      {
        extractor: class TailwindExtractor {
          static extract(content) {
            return content.match(/[A-z0-9-:/]+/g) || [];
          }
        },
        extensions: ['html', 'vue']
      }
    ],
    whitelist: ['fas', 'fab', 'far'],
    whitelistPatterns: [/fa-[\w-]*/]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
