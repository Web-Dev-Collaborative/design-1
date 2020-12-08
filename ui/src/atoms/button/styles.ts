import {css} from 'styled-components'
import {ThemeProps} from '../../styles'
import {borderStyle, focusRingStyle} from '../../styles/_internal/focusRing'
import {ButtonMode, ButtonTone} from './types'

export function buttonBaseStyles() {
  return css`
    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    /* width: stretch; */

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `
}

const buttonTheme = {border: {width: 1}}

export function buttonColorStyles(props: {uiMode: ButtonMode; tone: ButtonTone} & ThemeProps) {
  const {theme, uiMode} = props
  const {focusRing} = theme.sanity
  const base = theme.sanity.color.base
  const mode = theme.sanity.color.button[uiMode] || theme.sanity.color.button.default
  const color = mode[props.tone] || mode.default
  const border = {
    width: buttonTheme.border.width,
    color: 'var(--card-border-color)',
  }

  return css`
    --card-bg-color: ${color.enabled.bg};
    --card-fg-color: ${color.enabled.fg};
    --card-border-color: ${color.enabled.border};

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    box-shadow: ${borderStyle(border)};

    &:disabled,
    &[data-disabled='true'] {
      --card-bg-color: ${color.disabled.bg};
      --card-fg-color: ${color.disabled.fg};
      --card-border-color: ${color.disabled.border};
    }

    &:not([data-disabled='true']) {
      &:focus {
        box-shadow: ${focusRingStyle({base, border, focusRing})};
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }

      @media (hover: hover) {
        &:hover {
          --card-bg-color: ${color.hovered.bg};
          --card-fg-color: ${color.hovered.fg};
          --card-border-color: ${color.hovered.border};
        }

        &:active {
          --card-bg-color: ${color.pressed.bg};
          --card-fg-color: ${color.pressed.fg};
          --card-border-color: ${color.pressed.border};
        }

        &[data-selected] {
          --card-bg-color: ${color.selected.bg};
          --card-fg-color: ${color.selected.fg};
          --card-border-color: ${color.selected.border};
        }
      }
    }

    ${theme.sanity.styles?.button?.root}
  `
}
