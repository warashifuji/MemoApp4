import { View, Text, StyleSheet } from "react-native"

const Hello = props => {
  const { children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16
  }
})

export default Hello
