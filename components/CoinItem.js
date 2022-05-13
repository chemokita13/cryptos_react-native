import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.cotainerItem} >
      <View style={styles.coinNames}>
        <Image
          style={styles.img}
          source={{ uri: coin.image }}
        />
        <View style={styles.containNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>{coin.current_price}€</Text>
        <Text style={[styles.sb, coin.price_change_percentage_24h > 0 ? styles.s : styles.b]}>{coin.price_change_percentage_24h}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cotainerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  coinNames: {
    flexDirection: 'row'
  },
  img: {
    width: 30,
    height: 30
  },
  text: {
    color: '#ffffff'
  },
  symbol: {
    color: '#434343',
    textTransform: 'uppercase'
  },
  containNames: {
    marginLeft: 10
  },
  sb: {
    color: '#fff',
    textAlign: 'right'
  },
  s: {
    color: '#00b5b9'
  },
  b: {
    color: '#fc4422'
  },
  textPrice: {
    color: '#fff',
    textAlign: 'right'
  }
})

export default CoinItem