import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from "expo-sqlite";

const DB = SQLite.openDatabase('PFI.db')

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connection" component="ConnectionPage"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ConnectionPage = ({navigation}) => {
  <View>
    
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
