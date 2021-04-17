import type { FunctionComponent } from 'react'
import { combine_classnames } from '../util'
import { AvatarSize, map_size_to_style } from './size'
import { AvatarRound, AvatarRoundSize, map_round_to_style } from './round'
import { style } from './style.css'

export interface AvatarProps {
  src?: string,
  size?: AvatarSize,


  round?: AvatarRound,
  // noRound?: true,
  roundSize?: AvatarRoundSize,
}

export const Avatar: FunctionComponent<AvatarProps> = props => {
  const { 
    src,
    size = AvatarSize.MD,
    round = AvatarRound.Circle,
  } = props

  const classNames = combine_classnames(
    style.main,
    map_size_to_style(size),
    map_round_to_style(round),
  )

  return (
    <div className={style.main}>
      <img
        className={classNames}
        src={src}
      />
    </div>
  )
}


export default Avatar
