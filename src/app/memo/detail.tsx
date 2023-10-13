import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
  // ログイン
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style = {styles.container}>
      <View style = {styles.demoHeader}>
        <Text style = {styles.demoTitle}>買い物リスト</Text>
        <Text style = {styles.demoDate}>2023年10月1日 10:00</Text>
      </View>
      <ScrollView style = {styles.memobody}>
        <Text style={styles.memobodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います
          本文ようなので使い方を間違えると不自然に見えることがありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style = {{ top: 60, bottom: 'auto' }}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  demoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 24
  },
  demoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  demoDate: {
    color: '#ffffff',
    fontSizew: 12,
    lineheight: 16
  },
  memobody: {
    paddingVertical: 32,
    paddingHorizontal: 24
  },
  memobodyText: {
    fontSize: 16,
    lineheight: 24,
    color: 'black'
  }
})

export default Detail
