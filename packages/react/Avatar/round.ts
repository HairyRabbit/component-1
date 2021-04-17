import { style } from './style.css'

/**
 * 
 */
export const enum AvatarRound {
  None,
  Round,
  Circle,
}

export const enum AvatarRoundSize {
  LG,
  MD,
  SM,
}

export function parse_avatar_round_size(size: string) {
  switch (size.toLocaleLowerCase()) {
    case 'l':
    case 'lg':
    case 'large':
      return AvatarRoundSize.LG
    case 'm':
    case 'md':
    case 'middle':
    case 'normal':
      return AvatarRoundSize.MD
    case 's':
    case 'sm':
    case 'small':
      return AvatarRoundSize.SM
    default: throw new Error(`Unknown AvatarRoundSize "${size}"`)
  }
}

export function parse_avatar_round(round: string) {
  switch(round.toLocaleLowerCase()) {
    case 'none':
    case 'edge': return AvatarRound.None
    case 'round': return AvatarRound.Round
    case 'circle': return AvatarRound.Circle
    default: throw new Error(`Unknown AvatarRound "${round}"`)
  }
}


export function map_round_to_style(round: AvatarRound) {
  switch(round) {
    case AvatarRound.None: return style.round_none
    case AvatarRound.Round: return style.round_round //@TODO round size
    case AvatarRound.Circle: return style.round_circle
  }
}
