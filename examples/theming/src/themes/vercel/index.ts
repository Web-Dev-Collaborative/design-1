import {createColorTheme, RootTheme} from '@sanity/ui'

const pallette = {
  error: {
    lighter: '#F7D4D6',
    light: '#F33',
    default: '#f00',
    dark: '#E60000',
  },

  success: {
    lighter: '#D3E5FF',
    light: '#3291FF',
    default: '#0070F3',
    dark: '#0761D1',
  },

  warning: {
    lighter: '#FFEFCF',
    light: '#F7B955',
    default: '#F5A623',
    dark: '#AB570A',
  },

  violet: {
    lighter: '#E3D7FC',
    light: '#8A63D2',
    default: '#7928CA',
    dark: '#4C2889',
  },

  cyan: {
    lighter: '#AAFFEC',
    light: '#79FFE1',
    default: '#50E3C2',
    dark: '#29BC9B',
  },

  highlight: {
    purple: '#F81CE5',
    magenta: '#EB367F',
    pink: '#FF0080',
    yellow: '#FFF500',
  },

  dark: {
    geist: {
      bg: '#000',
      fg: '#fff',
    },
    accents: {
      '1': '#111',
      '2': '#333',
      '3': '#444',
      '4': '#666',
      '5': '#888',
      '6': '#999',
      '7': '#EAEAEA',
      '8': '#FAFAFA',
    },
  },

  light: {
    geist: {
      bg: '#fff',
      fg: '#000',
    },
    accents: {
      '1': '#FAFAFA',
      '2': '#EAEAEA',
      '3': '#999',
      '4': '#888',
      '5': '#666',
      '6': '#444',
      '7': '#333',
      '8': '#111',
    },
  },
}

const color = createColorTheme({
  base({dark, name}) {
    const p = dark ? pallette.dark : pallette.light

    if (name === 'transparent') {
      return {
        bg: p.accents[1],
        fg: p.geist.fg,
        border: p.accents[1],
        focusRing: pallette.success.default,
        shadow: {
          outline: '#777',
          umbra: '#777',
          penumbra: '#777',
          ambient: '#777',
        },
      }
    }

    return {
      bg: p.geist.bg,
      fg: p.geist.fg,
      border: p.accents[1],
      focusRing: pallette.success.default,
      shadow: {
        outline: '#777',
        umbra: '#777',
        penumbra: '#777',
        ambient: '#777',
      },
    }
  },
  button({solid}) {
    // const p = dark ? pallette.dark : pallette.light

    return solid

    // return {
    //   enabled: {
    //     bg: p.geist.bg,
    //     fg: p.geist.fg,
    //     border: p.accents[2],
    //   },
    //   hovered: {
    //     bg: p.geist.bg,
    //     fg: p.geist.fg,
    //     border: p.accents[3],
    //   },
    //   pressed: {
    //     bg: p.accents[1],
    //     fg: p.geist.fg,
    //     border: p.accents[3],
    //   },
    //   selected: {
    //     bg: p.geist.bg,
    //     fg: p.geist.fg,
    //     border: p.accents[2],
    //   },
    //   disabled: {
    //     bg: p.geist.bg,
    //     fg: p.geist.fg,
    //     border: p.accents[2],
    //   },
    // }
  },
  card({dark, name}) {
    const p = dark ? pallette.dark : pallette.light

    if (name === 'positive') {
      return {
        bg: pallette.success.default,
        fg: p.geist.fg,
        border: dark ? pallette.success.dark : pallette.success.light,
        muted: {
          fg: p.accents[8],
        },
        accent: {fg: pallette.success.default},
        link: {fg: pallette.success.default},
        code: {bg: '#111', fg: '#333'},
      }
    }

    if (name === 'caution') {
      return {
        bg: pallette.warning.default,
        fg: p.geist.fg,
        border: dark ? pallette.warning.dark : pallette.warning.light,
        muted: {
          fg: p.accents[8],
        },
        accent: {fg: pallette.success.default},
        link: {fg: pallette.success.default},
        code: {bg: '#111', fg: '#333'},
      }
    }

    if (name === 'critical') {
      return {
        bg: pallette.error.default,
        fg: p.geist.fg,
        border: dark ? pallette.error.dark : pallette.error.light,
        muted: {
          fg: p.accents[8],
        },
        accent: {fg: pallette.success.default},
        link: {fg: pallette.success.default},
        code: {bg: '#111', fg: '#333'},
      }
    }

    return {
      bg: p.geist.bg,
      fg: p.geist.fg,
      border: p.accents[2],
      muted: {
        fg: p.accents[8],
      },
      accent: {fg: pallette.success.default},
      link: {fg: pallette.success.default},
      code: {bg: '#111', fg: '#333'},
    }
  },
  input({dark}) {
    const p = dark ? pallette.dark : pallette.light

    return {
      bg: p.geist.bg,
      fg: p.geist.fg,
      border: p.accents[2],
      placeholder: p.accents[4],
    }
  },
  solid({dark, tone}) {
    const p = dark ? pallette.dark : pallette.light

    if (tone === 'positive') {
      return {
        bg: pallette.success.default,
        border: pallette.success.default,
        fg: p.geist.fg,
      }
    }

    if (tone === 'caution') {
      return {
        bg: pallette.warning.default,
        border: pallette.warning.default,
        fg: p.geist.fg,
      }
    }

    if (tone === 'critical') {
      return {
        bg: pallette.error.default,
        border: pallette.error.default,
        fg: p.geist.fg,
      }
    }

    return {
      bg: p.accents[2],
      border: p.accents[2],
      fg: p.geist.fg,
    }
  },
})

export const vercelTheme: RootTheme = {
  avatar: {
    sizes: [
      {distance: -3, size: 19},
      {distance: -5, size: 25},
      {distance: -7, size: 33},
    ],
  },
  button: {
    textWeight: 'medium',
  },
  container: [400, 600, 800, 1000, 1200],
  color,
  focusRing: {
    offset: 1,
    width: 1,
  },
  fonts: {
    code: {
      family: 'SF Mono',
      sizes: [
        {
          ascenderHeight: 3,
          descenderHeight: 3,
          fontSize: 12,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 24,
        },
      ],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    heading: {
      family:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      sizes: [
        {
          ascenderHeight: 4,
          descenderHeight: 5,
          fontSize: 20,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 24,
        },
        {
          ascenderHeight: 7,
          descenderHeight: 8,
          fontSize: 24,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 32,
        },
        {
          ascenderHeight: 8,
          descenderHeight: 9,
          fontSize: 32,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 40,
        },
        {
          ascenderHeight: 9,
          descenderHeight: 10,
          fontSize: 40,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 48,
        },
        {
          ascenderHeight: 10,
          descenderHeight: 11,
          fontSize: 48,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 56,
        },
      ],
      weights: {
        regular: 700,
        medium: 800,
        semibold: 900,
        bold: 1000,
      },
    },
    label: {
      family:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      sizes: [
        {
          ascenderHeight: 3,
          descenderHeight: 3,
          fontSize: 12,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 24,
        },
        {
          ascenderHeight: 3,
          descenderHeight: 3,
          fontSize: 12,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 24,
        },
        {
          ascenderHeight: 3,
          descenderHeight: 3,
          fontSize: 12,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 24,
        },
      ],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    text: {
      family:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      sizes: [
        {
          ascenderHeight: 2,
          descenderHeight: 2,
          fontSize: 10,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 12,
        },
        {
          ascenderHeight: 3,
          descenderHeight: 4,
          fontSize: 12,
          iconSize: 17,
          letterSpacing: 0,
          lineHeight: 16,
        },
        {
          ascenderHeight: 3,
          descenderHeight: 3,
          fontSize: 14,
          iconSize: 25.6,
          letterSpacing: 0,
          lineHeight: 16,
        },
        {
          ascenderHeight: 3,
          descenderHeight: 5,
          fontSize: 16,
          iconSize: 25.6,
          letterSpacing: 0,
          lineHeight: 20,
        },
        {
          ascenderHeight: 4,
          descenderHeight: 5,
          fontSize: 20,
          iconSize: 25.6,
          letterSpacing: 0,
          lineHeight: 24,
        },
        {
          ascenderHeight: 6,
          descenderHeight: 8,
          fontSize: 24,
          iconSize: 25.6,
          letterSpacing: 0,
          lineHeight: 32,
        },
      ],
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  input: {
    border: {width: 1},
    checkbox: {
      size: 16,
    },
    radio: {
      size: 19,
      markSize: 19,
    },
    switch: {
      width: 28,
      height: 14,
      padding: 1,
      transitionDurationMs: 150,
      transitionTimingFunction: 'ease-out',
    },
  },
  media: [360, 600, 900, 1200, 1800, 2400],
  radius: [0, 2, 4, 8, 16, 32],
  shadows: [null],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
}
