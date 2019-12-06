/** @module global vuex */
import Vue from 'vue'
import Vuex from 'vuex'
import CONSTANTS from '@/configs/constants'
import { ElementRequiredError } from '@/utils/customError'
import { hasOverlap, getSwingAngel } from '@/utils/physics'
import { randomArrayItems, randomBetweenRange, uuid, addPixels } from '@/utils/helpers'

const {
  OBJECT_TYPES,
  MIN_WEIGHT,
  MAX_WEIGHT,
  SQUARE_PX_BY_KG,
  OBJECT_FALLING_SPEED,
  OBJECT_FALLING_PERIOD,
  MAX_ANGEL,
  MIN_ANGLE
} = CONSTANTS

Vue.use(Vuex)

const objectModel = ({
  type = randomArrayItems(OBJECT_TYPES),
  top = 0,
  left = 0,
  right = 0,
  weight = randomBetweenRange(MIN_WEIGHT, MAX_WEIGHT),
  landed = false
}) => ({
  id: uuid(),
  type, // object type
  top, // top position
  left, // left position
  right, // right position
  landed, // is object on the surface of the swing
  weight // weight of the object (KG)
})

let fallingInterval
let dropBoxElm
let fallingObjectElm

const genState = () => {
  /**
   * The Vuex 'state' object.
   * @name State
   * @type {object}
   * @property {object} dropBoxObject the object that is falling.
   * @property {array} swingObjects list of objects on the surface of the swing
   * @property {boolean} isPaused is application paused
   */
  return {
    dropBoxObject: objectModel({ left: 40, right: 'auto' }),
    swingObjects: [ objectModel({ left: 'auto', right: randomBetweenRange(0, 200) }) ],
    isPaused: true
  }
}

/**
 * The module 'getters' object.
 * @name Getters
 * @type {object}
 * @getter {object} getDropBoxObject=dropBoxObject Returns dropBoxObject with size attr.
 * @getter {object} getSwingObjects=swingObjects Returns swingObjects with appropriate pixels.
 * @getter {object} getSwingAngle=swingObjects Returns swing angle.
 */
export const getters = {
  getDropBoxObject (state) {
    const size = state.dropBoxObject.weight * SQUARE_PX_BY_KG

    return addPixels({ ...state.dropBoxObject, size })
  },
  getSwingObjects (state) {
    return state.swingObjects.map(item => (addPixels({ ...item, size: item.weight * SQUARE_PX_BY_KG })))
  },
  getSwingAngle (state) {
    const angle = getSwingAngel(state.swingObjects)
    if (angle > MAX_ANGEL) return MAX_ANGEL
    else if (angle < MIN_ANGLE) return MIN_ANGLE
    else return angle
  }
}

/**
 * The module 'setters' object.
 * @name Setters
 * @type {object}
 * @mutator {object} CREATE_DROP_BOX_OBJECT=dropBoxObject Sets drop box object.
 * @mutator {object} UPDATE_DROP_BOX_OBJECT=dropBoxObject Update drop box object.
 * @mutator {object} SET_IS_PAUSED=isPaused Update isPaused attr.
 */
export const mutations = {
  CREATE_DROP_BOX_OBJECT (state, { type, left, weight }) {
    Object.assign(state.dropBoxObject, objectModel({ type, left, weight }))
  },
  UPDATE_DROP_BOX_OBJECT (state, payload) {
    Object.assign(state.dropBoxObject, payload)
  },
  CREATE_SWING_OBJECT (state, payload) {
    state.swingObjects.push(payload)
  },
  SET_IS_PAUSED (state, { value }) {
    state.isPaused = value
  },
  RESET_STATE (state) {
    clearInterval(fallingInterval)
    Object.assign(state, genState())
  }
}

export const actions = {
  /**
   * Resume falling
   * @name Actions
   * @action resumeDropBoxObjectFalling=dropBoxObject
   */
  resumeDropBoxObjectFalling ({ commit, getters, state }) {
    const swingElm = document.getElementById('swing')
    fallingObjectElm = document.getElementById('fallingObject')

    // validate elements
    if (!swingElm || !fallingObjectElm) throw new ElementRequiredError('#swing|#fallingObject')

    // save paused state
    commit('SET_IS_PAUSED', { value: false })

    // stop interval if exist
    if (fallingInterval) clearInterval(fallingInterval)

    fallingInterval = setInterval(() => {
      // increment top prop
      commit('UPDATE_DROP_BOX_OBJECT', {
        top: state.dropBoxObject.top + OBJECT_FALLING_SPEED
      })

      // check for collision
      if (hasOverlap(swingElm.getBoundingClientRect(), fallingObjectElm.getBoundingClientRect())) {
        // add a copy of falling object on left of swing
        commit('CREATE_SWING_OBJECT', Object.assign({}, state.dropBoxObject))

        // add another object on right of swing
        commit('CREATE_SWING_OBJECT', objectModel({ left: 'auto', right: randomBetweenRange(0, 200) }))

        // reset object state in drop box
        commit('CREATE_DROP_BOX_OBJECT', {})
      }
    }, OBJECT_FALLING_PERIOD)
  },
  pauseDropBoxObjectFalling ({ commit }) {
    if (fallingInterval) clearInterval(fallingInterval)

    // save paused state
    commit('SET_IS_PAUSED', { value: true })
  },
  moveObjectByArrowLeft ({ commit, state }) {
    if (state.isPaused) return

    // calculate new left
    let left = state.dropBoxObject.left - OBJECT_FALLING_SPEED
    if (left < 0) left = 0

    commit('UPDATE_DROP_BOX_OBJECT', { left })
  },
  moveObjectByArrowRight ({ commit, state }) {
    if (state.isPaused) return
    // check required elements exist
    if (!dropBoxElm) dropBoxElm = document.getElementById('dropBox')
    if (!fallingObjectElm) fallingObjectElm = document.getElementById('fallingObject')

    if (!dropBoxElm || !fallingObjectElm) throw new ElementRequiredError('#dropBox|#fallingObject')
    // calculate new left
    let left = state.dropBoxObject.left + OBJECT_FALLING_SPEED

    // get element positions
    const dropBoxElmRect = dropBoxElm.getBoundingClientRect()
    const fallingObjectElmRect = fallingObjectElm.getBoundingClientRect()

    // falling object should remain in the drop box
    if (fallingObjectElmRect.right >= dropBoxElmRect.right) return

    // update left property
    commit('UPDATE_DROP_BOX_OBJECT', { left })
  }
}

export default new Vuex.Store({
  state: genState(),
  getters,
  mutations,
  actions
})
