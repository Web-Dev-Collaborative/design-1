import {css} from 'styled-components'
import {Theme} from '../../theme'

export function textBaseStyles(props: {accent?: boolean; theme: Theme; muted?: boolean}) {
  const {accent, muted, theme} = props
  const {weights} = props.theme.fonts.text

  return css`
    ${accent &&
    css`
      color: var(--card-accent-fg-color);
    `}

    ${muted &&
    css`
      color: var(--card-muted-fg-color);
    `}

    &:before {
      content: '';
      display: block;
      height: 0;
    }

    &:after {
      content: '';
      display: block;
      height: 0;
    }

    & code {
      font-family: ${theme.fonts.code.family};
      border-radius: 2px;
      background: rgba(127, 127, 127, 0.1);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow: 0 0 0 1px var(--card-bg-color), 0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${weights.bold};
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `
}
