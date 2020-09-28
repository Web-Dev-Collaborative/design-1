'use strict'

const path = require('path')

const ROOT_PATH = path.dirname(__dirname, '..')

module.exports = {
  webpack: (config) => {
    // Includes
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'icons/src'))
    config.module.rules[0].include.push(path.join(ROOT_PATH, 'ui/src'))

    // Aliases
    Object.assign(config.resolve.alias, {
      '@sanity/icons': path.join(ROOT_PATH, 'icons/src'),
      '@sanity/ui': path.join(ROOT_PATH, 'ui/src'),
    })

    return config
  },
}
