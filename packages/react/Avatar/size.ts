import { style } from './style.css'

export const enum AvatarSize {
  XL,
  LG,
  MD,
  SM,
  XS,
}

export function parse_avatar_size(size: string) {
  switch (size.toLocaleLowerCase()) {
    case 'xl':
    case 'x-large':
    case 'larger':
      return AvatarSize.XL
    case 'l':
    case 'lg':
    case 'large':
      return AvatarSize.LG
    case 'm':
    case 'md':
    case 'middle':
    case 'normal':
      return AvatarSize.MD
    case 's':
    case 'sm':
    case 'small':
      return AvatarSize.SM
    case 'xs':
    case 'x-small':
    case 'smaller':
      return AvatarSize.XS
    default: throw new Error(`Unknown AvatarSize "${size}"`)
  }
}

export function map_size_to_style(size: AvatarSize) {
  switch(size) {
    case AvatarSize.XL: return style.size_xl
    case AvatarSize.LG: return style.size_lg
    case AvatarSize.MD: return style.size_md
    case AvatarSize.SM: return style.size_sm
    case AvatarSize.XS: return style.size_xs
  }
}
