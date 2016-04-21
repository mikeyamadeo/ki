import { createReducer } from '../../utils.redux'

export const ACTIVATE_KI = 'ACTIVATE_KI'
export const DEACTIVATE_KI = 'DEACTIVATE_KI'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_INACTIVE = 'SHOW_INACTIVE'

const hardcodedEntities = {
  ki: {
    1: {
      id: 1,
      title: 'Wake up by 4:30',
      active: true
    },
    2: {
      id: 2,
      title: 'Brush Teeth',
      active: true
    },
    3: {
      id: 3,
      title: 'Write in Journal',
      active: false
    }
  }
}
const { ki } = hardcodedEntities

const initialActiveKi = Object.keys(ki).filter((id) => ki[id].active)
const initialInactiveKi = Object.keys(ki).filter((id) => !ki[id].active)

const addTo = (collection, id) => ([
  ...collection,
  id
])

const removeFrom = (collection, id) =>
  collection.filter(cid => cid !== id)

export const chooseScene = createReducer({
  showActive: true
}, {
  [SHOW_ACTIVE]: (state) => ({
    ...state,
    showActive: true
  }),

  [SHOW_INACTIVE]: (state) => ({
    ...state,
    showActive: false
  })
})

export const activeKi = createReducer(initialActiveKi, {

  [ACTIVATE_KI]: (state, {payload}) =>
    addTo(state, payload.id),

  [DEACTIVATE_KI]: (state, {payload}) =>
    removeFrom(state, payload.id)

})

export const inactiveKi = createReducer(initialInactiveKi, {

  [ACTIVATE_KI]: (state, {payload}) =>
    removeFrom(state, payload.id),

  [DEACTIVATE_KI]: (state, {payload}) =>
    addTo(state, payload.id)

})

export const entities = createReducer(hardcodedEntities, {
  [ACTIVATE_KI]: (state, {payload}) => ({
    ...state,
    ...{
      ...state[payload.id],
      active: false
    }
  }),

  [DEACTIVATE_KI]: (state, {payload}) => ({
    ...state,
    ...{
      ...state[payload.id],
      active: true
    }
  })

})

