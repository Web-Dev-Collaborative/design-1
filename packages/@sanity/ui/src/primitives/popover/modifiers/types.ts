import {Placement} from '../../../types'

export interface PopoverModifiersProps {
  allowedAutoPlacements?: Placement[]
  arrow?: boolean
  arrowElement?: HTMLElement | null
  boundaryElement?: HTMLElement | null
  constrainSize?: boolean
  distance: number
  fallbackPlacements?: Placement[]
  margins?: [number, number, number, number]
  matchReferenceWidth?: boolean
  open: boolean
  preventOverflow?: boolean
  skidding: number
  tether?: boolean
  tetherOffset?: number | ((...args: any[]) => number)
}
