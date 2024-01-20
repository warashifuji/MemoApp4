import { View, StyleSheet, FlatList } from "react-native"
import { useEffect, useState } from "react"
import { router, useNavigation } from "expo-router"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"

import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/icon"
import LogOutButton from "../../components/LogOutButton"
import { db, auth } from "../../config"
// import { type Memo } from '../../../types/memo'

const handlePress = () => {
  router.push("/memo/create")
}

const List = () => {
  const [memos, setMemos] = useState([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />
      }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) {
      return
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy("updatedAt", "desc"))
    const unsubscribe = onSnapshot(q, snapshot => {
      const remoteMemos = []
      snapshot.forEach(doc => {
        console.log("memo", doc.data())
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
        setMemos(remoteMemos)
      })
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
})
export default List