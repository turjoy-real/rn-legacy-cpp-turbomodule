import { Platform, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import NativeImageProcessor from './specs/NativeImageProcessor';

// Same call on both platforms. No Platform.OS check needed to reach the C++.
const result = NativeImageProcessor.process('photo.jpg');

const route =
  Platform.OS === 'android'
    ? 'JS → C++ TurboModule (JSI) → legacy C++'
    : 'JS → Obj-C++ native module → Swift → legacy C++';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? '#fff' : '#111';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#111' : '#fff' }]}>
        <Text style={[styles.title, { color }]}>NativeImageProcessor</Text>
        <Text style={[styles.label, { color }]}>{Platform.OS} route</Text>
        <Text testID="route" style={[styles.value, { color }]}>{route}</Text>
        <Text style={[styles.label, { color }]}>result</Text>
        <Text testID="result" style={[styles.value, { color }]}>{result}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 16 },
  label: { fontSize: 13, opacity: 0.6, marginTop: 12 },
  value: { fontSize: 16, fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }) },
});

export default App;
