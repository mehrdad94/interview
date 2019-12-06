import CONSTANTS from '@/configs/constants'
const { SWING_LENGTH, MAX_ANGEL } = CONSTANTS

export const hasOverlap = (clientRect1, clientRect2) => {
  return !(clientRect1.right < clientRect2.left ||
    clientRect1.left > clientRect2.right ||
    clientRect1.bottom < clientRect2.top ||
    clientRect1.top > clientRect2.bottom)
}

const getObjectPower = ({ weight, distance }) => {
  return weight * (SWING_LENGTH / 2 - distance)
}

const sum = array => {
  return array.reduce((a, b) => a + b, 0)
}

export const getObjectsPower = objects => {
  const rightPowers = []
  const leftPowers = []

  objects.forEach(object => {
    if (object.left === 'auto') rightPowers.push(getObjectPower({ weight: object.weight, distance: object.right }))
    else leftPowers.push(getObjectPower({ weight: object.weight, distance: object.left }))
  })

  const rightForce = sum(rightPowers)
  const leftForce = sum(leftPowers)

  return {
    leftForce,
    rightForce
  }
}

export const getSwingAngel = objects => {
  const { leftForce, rightForce } = getObjectsPower(objects)

  if (leftForce === 0) return MAX_ANGEL
  else if (leftForce === rightForce) return 0
  else if (leftForce > rightForce) return (leftForce - rightForce) / leftForce * -100
  else return (rightForce - leftForce) / rightForce * 100
}
