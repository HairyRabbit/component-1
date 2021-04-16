import type { ComponentType, FunctionComponent, HTMLAttributes, ReactText } from 'react'
import { combine_classnames } from '../util'
import { style } from './index.module.css'

export const enum AvatarSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export const enum AvatarRound {
  None,
  Circle = 'circle',
  Rounded = 'rounded'
}

export interface AvatarCommonProps extends HTMLAttributes<HTMLElement> {
  size?: AvatarSize | string,
  round?: AvatarRound,
  border?: boolean,
  children?: ReactText | ComponentType<{}> | ComponentType<{}>
}

export interface AvatarImageProps extends AvatarCommonProps {
  src?: string,
  fallback?: string,
  onError(): void,
}

export interface AvatarTextProps extends AvatarCommonProps {
  value?: string,
}

export interface AvatarIconProps extends AvatarCommonProps {
  icon?: string,
}

export type AvatarProps = 
  | AvatarImageProps
  | AvatarTextProps
  | AvatarIconProps

// export interface AvatarProps extends HTMLAttributes<HTMLElement> {
//   size?: AvatarSize | string,
//   round?: AvatarRound,
//   src?: string,
//   fallback?: string,
  
//   value?: string,
// }

export const Avatar: FunctionComponent<AvatarProps> = props => {
  const { 
    value, 
    className, 
    size = AvatarSize.MD,
    round = AvatarRound.Circle
  } = props

  const classNames = combine_classnames(
    style.main,
    style[`size_${size}` as keyof typeof style],
    style[`shape_${round}` as keyof typeof style],
    className
  )
  return (
    <view className={style.main}>
      <img
        className={classNames}
        src={value}
      />
    </view>
  )
}


export default Avatar
