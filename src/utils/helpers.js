export const randomArrayItems = array => array[Math.floor(Math.random() * array.length)]

export const randomBetweenRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const uuid = () => {
  const chars = '0123456789abcdef'.split('')

  const uuid = []
  const rnd = Math.random
  let r
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
  uuid[14] = '4' // version 4

  for (let i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | rnd() * 16

      uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf]
    }
  }

  return uuid.join('')
}

const isAuto = s => s === 'auto'
export const addPixels = object => {
  const top = isAuto(object.top) ? object.top : object.top + 'px'
  const left = isAuto(object.left) ? object.left : object.left + 'px'
  const right = isAuto(object.right) ? object.right : object.right + 'px'

  return {
    ...object,
    size: object.size + 'px',
    top,
    left,
    right
  }
}
