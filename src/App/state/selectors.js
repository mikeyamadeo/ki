
export const selectActiveKi = ({entities: {ki}, activeKi}) =>
  activeKi.map(id => ki[id])

export const selectInactiveKi = ({entities: {ki}, inctiveKi}) =>
  inctiveKi.map(id => ki[id])
