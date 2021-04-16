export function combine_classnames(...args: (string | false | null | undefined)[]): string {
  let str = ''
  const len = args.length

  if(0 === len) return str
  else if(1 === len) return args[0] || str
  
  for(let i = 0; i < args.length; i++) {
    const arg = args[i]
    if(arg) str += arg + ' '
  }
  
  return str
}
