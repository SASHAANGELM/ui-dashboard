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
    extend: {
      width: {
        '80': '20rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
