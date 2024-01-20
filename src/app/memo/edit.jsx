import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native"

import { router } from "expo-router"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/icon"

const handlePress = () => {
  // ログイン
  router.back()
}

const Edit = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={"買い物\nリスト"} />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    backgroundColor: "red",
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
})

export default Edit