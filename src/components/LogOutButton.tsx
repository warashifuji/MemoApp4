import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Link } from 'expo-router'

const LogOutButton = (): JSX.Element => {
  return (
    <Link href='/auth/log_in'>
      <TouchableOpacity>
        <Text style={styles.text}>ログアウト</Text>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  }
})

export default LogOutButton
