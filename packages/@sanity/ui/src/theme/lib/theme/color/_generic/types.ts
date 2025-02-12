/**
 * @public
 */
export interface ThemeColorGenericState {
  bg: string
  /**
   * @beta
   */
  bg2?: string
  border: string
  fg: string
  muted: {
    fg: string
  }
  accent: {
    fg: string
  }
  link: {
    fg: string
  }
  code: {
    bg: string
    fg: string
  }
  skeleton?: {
    from: string
    to: string
  }
}
