import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.logo}>MONEY MAN</Text>
      <Text style={styles.subtitle}>Your Digital Exchange Platform</Text>

      <View style={styles.balance}>
        <Text style={styles.label}>Available Balance</Text>
        <Text style={styles.amount}>$0.00 USD</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buy}>
          <Text style={styles.buttonText}>BUY USDT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sell}>
          <Text style={styles.buttonText}>SELL USDT</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Exchange Currencies</Text>
      <View style={styles.card}>
        <Text style={styles.item}>USD ⇄ USDT</Text>
      </View>

      <Text style={styles.heading}>Payment Methods</Text>

      {['EVC Plus', 'eDahab', 'Premier Wallet', 'ZAAD'].map(item => (
        <View style={styles.card} key={item}>
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}

      <Text style={styles.footer}>
        Secure • Simple • Reliable
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    padding: 22,
    paddingTop: 65
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#123B68',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 28
  },
  balance: {
    backgroundColor: '#123B68',
    padding: 25,
    borderRadius: 16
  },
  label: {
    color: 'white',
    fontSize: 15
  },
  amount: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 25
  },
  buy: {
    backgroundColor: '#16865D',
    flex: 1,
    padding: 17,
    borderRadius: 12
  },
  sell: {
    backgroundColor: '#D18B26',
    flex: 1,
    padding: 17,
    borderRadius: 12
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#123B68',
    marginBottom: 12,
    marginTop: 15
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    marginBottom: 10
  },
  item: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333'
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 30
  }
});
