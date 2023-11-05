import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'

import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { db, auth } from '../../config'

const handlePress = (): void => {
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText: 'test'
  })
    .then((docRef) => {
      console.log('success', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value='' />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    backgroundColor: 'red',
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24

  }

})

export default Create
