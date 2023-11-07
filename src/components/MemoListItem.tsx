import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from './icon'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'

interface Props {
  memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = memo.updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={{ pathname: '/memo/detail', params: { id: memo.id } }}
      asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{memo.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={32} color='#B0B0B0'></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    color: '#848484'
  }
})

export default MemoListItem
