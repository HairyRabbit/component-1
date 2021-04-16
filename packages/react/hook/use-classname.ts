import { useMemo } from 'react'
import { combine_classnames } from '../util'

export function useClassName(
  classNames: ReadonlyArray<string | undefined | null | false>, 
  dependencies: ReadonlyArray<any> = [], 
  constant: boolean = false
): string {
  if(constant) return combine_classnames(...classNames)
  return useMemo(() => combine_classnames(...classNames), dependencies)
}
