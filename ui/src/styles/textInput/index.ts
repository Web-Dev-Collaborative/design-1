import {css} from 'styled-components'
import {ColorSchemeKey, Theme} from '../../theme'
import {rem} from '../helpers'

export const textInput = {base: textInputBase, color: textInputColor, inputBase, inputSize}

function textInputBase() {
  return css`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: ${rem(1)} 0;
    overflow: hidden;
  `
}

function textInputColor({
  disabled,
  scheme,
  theme,
}: {
  disabled: boolean
  scheme: ColorSchemeKey
  theme: Theme
}) {
  const tone = theme.color[scheme].input.tones.default

  if (disabled) {
    return css`
      background-color: ${tone.disabled.bg};
      box-shadow: inset 0 0 0 1px ${tone.disabled.border};

      & > input,
      & > textarea {
        color: ${tone.disabled.fg};

        &::placeholder {
          color: ${tone.disabled.placeholder};
        }
      }
    `
  }

  return css`
    background-color: ${tone.enabled.bg};
    box-shadow: inset 0 0 0 1px ${tone.enabled.border};

    & > input,
    & > textarea {
      color: ${tone.enabled.fg};

      &::placeholder {
        color: ${tone.enabled.placeholder};
      }
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${tone.hovered.bg};
        box-shadow: inset 0 0 0 1px ${tone.hovered.border};

        & > input,
        & > textarea {
          color: ${tone.hovered.fg};

          &::placeholder {
            color: ${tone.hovered.placeholder};
          }
        }
      }
    }

    &:focus-within {
      box-shadow: 0 0 0 2px var(--card-focus-ring-color);
    }
  `
}

function inputBase(props: {uiSize: number[]; theme: Theme; weight?: string}) {
  const {theme, weight} = props
  const font = theme.fonts.text

  return css`
    display: block;
    appearance: none;
    color: inherit;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${font.family};
    font-weight: ${font.weights[weight || 'regular']};
    margin: 0;
  `
}

function inputSize(props: {uiSize: number[]; theme: Theme}) {
  const {theme} = props
  const size = theme.fonts.text.sizes[props.uiSize[0]]

  return css`
    margin-top: ${rem(0 - size.ascenderHeight - 1)};
    margin-bottom: ${rem(0 - size.descenderHeight - 1)};
    font-size: ${rem(size.fontSize)};
    line-height: ${size.lineHeight / size.fontSize};

    &:is(textarea) {
      resize: none;
    }
  `
}