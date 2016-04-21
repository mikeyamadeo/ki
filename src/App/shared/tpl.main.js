import React, {
  View,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
})

const MainTpl = (Component) => (props) =>
  <View style={styles.container}>
    <Component {...props} />
  </View>

export default MainTpl
