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

const App = React.createClass({
  render () {
    return (
      <View {...this.props} style={styles.container}>
        <Button onPress={Actions.choose}>Mikey</Button>
      </View>
    )
  }
})

export default App
