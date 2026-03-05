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
        <View style={styles.outerCircleWrapper}>
          <View style={styles.outerCircle}>
            <View style={styles.waterLevel} />

            <Text style={styles.numberText}>5</Text>
            <Text style={styles.labelText}>COPOS</Text>
          </View>
        </View>
        <View style={styles.feedbackContainer}>
          <Text style={styles.statusText}>Faltam 0 copos para a meta.</Text>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBar}/>
          </View>
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
  },
  outerCircleWrapper: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: '#FFF',
    borderRadius: 110,
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
  },
  numberText: {
    fontSize: 72,
    fontWeight: '900',
    color: '#0284C7'
  },
  labelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0284C7'
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    marginTop: 15,
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0284C7',
    borderRadius: 6,
    width: '70%'
  },
  feedbackContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '80%'
  },
  statusText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#475569',
    textAlign: 'center'
  }

});
