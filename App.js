import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import CoinItem from './components/CoinItem'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    const data = await res.json()
    setCoins(data)
    //console.log(coins)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#141414' />
      <View style={styles.header}>
        <Text style={styles.title}>
          Mercado de cryptomonedas
        </Text>
        <TextInput style={styles.search}
          placeholder='Search'
          placeholderTextColor='#858585'
          onChangeText={text => setSearch(text)} />
      </View>
      <FlatList
        style={styles.list}
        data={
          coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
        }
        renderItem={({ item }) => {
          return <CoinItem coin={item} />
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true)
          await loadData()
          setRefreshing(false)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    flex: 1
  },
  title: {
    color: '#ffffff',
    marginTop: 0,
    fontSize: 17
  },
  list: {
    width: '90%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 13,
    marginTop: 5
  },
  search: {
    color: '#fff',
    borderBottomColor: '#4657ce',
    borderBottomWidth: 1,
    textAlign: 'center',
    width: '40%'

  }
})

export default App