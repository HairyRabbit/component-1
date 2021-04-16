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
