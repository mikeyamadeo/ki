import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
const Calendar = React.createClass({
  render () {
    return (
      <View style={styles.container}>
        <Text>Calendar</Text>
      </View>
    )
  }
})

export default Calendar
