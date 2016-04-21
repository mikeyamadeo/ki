import React, {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Btn from 'react-native-button'
import { selectActiveKi, selectInactiveKi } from '../../state/selectors'
import { colors } from '../../style/settings'

const kiStyles = {
  borderWidth: 1,
  padding: 8,
  alignSelf: 'stretch'
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  header: {
    padding: 10,
    alignSelf: 'flex-end'
  },
  active: {
    ...kiStyles,
    color: 'white',
    backgroundColor: colors.primary,
    borderColor: colors.primaryAccent
  },
  inactive: {
    ...kiStyles,
    color: colors.primaryAccent,
    backgroundColor: 'white',
    borderColor: colors.primaryAccent
  }
})

const ActiveKi = ({data: {title}, action}) =>
  <Text style={styles.active}>{title}</Text>

const InactiveKi = ({data: {title}, action}) =>
  <Text style={styles.inactive}>{title}</Text>

const renderActive = (k, i) =>
  <View key={i} style={{alignSelf: 'stretch', marginTop: i > 0 ? -1 : 0}}>
    <ActiveKi data={k} action={_ => _} />
  </View>

const renderInactive = (k, i) =>
  <View key={i} style={{alignSelf: 'stretch', marginTop: i > 0 ? -1 : 0}}>
    <InactiveKi key={i} data={k} action={_ => _} />
  </View>

const Choose = ({showActive, ki}) =>
  <View style={styles.container}>
    <View style={styles.header}>
      <Btn onPress={Actions.confirm}>
        <Image onPress={Actions.confirm} source={require('../../../../assets/arrow.png')}/>
      </Btn>
    </View>
    {ki.map(!showActive
      ? renderActive
      : renderInactive
    )}

  </View>

export default connect(state => {
  const { showActive } = state.chooseScene

  return {
    showActive,
    ki: showActive
      ? selectActiveKi(state)
      : selectInactiveKi(state)
  }
})(Choose)
