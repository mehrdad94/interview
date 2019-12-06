import { mutations, actions } from '@/store'
import CONSTANTS from '@/configs/constants'
import sinon from 'sinon'

const { OBJECT_FALLING_SPEED } = CONSTANTS

describe('vuex mutations', function () {
  const {
    CREATE_DROP_BOX_OBJECT,
    UPDATE_DROP_BOX_OBJECT,
    SET_IS_PAUSED,
    CREATE_SWING_OBJECT
  } = mutations

  it('should set dropBoxObject', function () {
    const state = { dropBoxObject: {} }

    const objectProperties = {
      left: '20px',
      type: 'circle',
      weight: 2
    }
    CREATE_DROP_BOX_OBJECT(state, objectProperties)

    expect(state.dropBoxObject).toMatchObject(objectProperties)
  })

  it('should update dropBoxObject', function () {
    const state = { dropBoxObject: { a: 2 } }

    const objectProperties = { a: 3 }

    UPDATE_DROP_BOX_OBJECT(state, objectProperties)

    expect(state.dropBoxObject).toEqual(objectProperties)
  })

  it('should add an object to SwingsArray', function () {
    const state = { swingObjects: [] }
    const payload = {
      a: 2
    }
    CREATE_SWING_OBJECT(state, payload)

    expect(state.swingObjects).toEqual([payload])
  })

  it('should set isPaused', function () {
    const state = { isPaused: false }

    SET_IS_PAUSED(state, { value: true })

    expect(state.isPaused).toBeTruthy()
  })
})

describe('vuex actions', function () {
  const {
    moveObjectByArrowLeft,
    pauseDropBoxObjectFalling
  } = actions

  it('should pause the object from falling', function () {
    const commit = sinon.spy()

    pauseDropBoxObjectFalling({ commit })

    expect(commit.args).toEqual([
      [
        'SET_IS_PAUSED',
        {
          value: true
        }
      ]
    ])
  })
  it('should move object by left arrow key', function () {
    const commit = sinon.spy()
    const state = {
      dropBoxObject: {
        left: 20
      }
    }

    moveObjectByArrowLeft({ commit, state })

    expect(commit.args).toEqual([
      [
        'UPDATE_DROP_BOX_OBJECT',
        {
          left: state.dropBoxObject.left - OBJECT_FALLING_SPEED
        }
      ]
    ])
  })
})
