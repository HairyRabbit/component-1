export function merge_styles(...args: { [key: string]: string | number }[]): { [key: string]: string | number } {
  const obj = Object.create(null)
  for (let i = 0; i < args.length; i++) {
    const style = args[i]
    for (const key in style) {
      if (Object.prototype.hasOwnProperty.call(style, key)) {
        const value = style[key]
        obj[key] = value
      }
    }
  }

  return obj
}
