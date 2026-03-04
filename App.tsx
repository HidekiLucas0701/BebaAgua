import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>BEBA ÁGUA 💧</Text>
        <Text style={styles.appSubtitle}> HIDRATAÇÃO DIÁRIA</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.outerCircle}>
          <View style={styles.waterLevel} />
        </View>
      </View>
      <Text>Corpo do texto</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0369A1'
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#38BDF8',
    letterSpacing: 2,
    marginTop: 4
  },
  content: {
    alignItems: 'center',
    width: '100%'
  },
  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  waterLevel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#0EA5E9',
    opacity: 0.3
  }
});
