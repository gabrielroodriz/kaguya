// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './style/styles';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  const newLocal = {flex: 1, alignItems: 'center', justifyContent: 'center'};
  return (
    <View style={newLocal}>
      <Main />
    </View>
  );
}

// export function renderItem({item}) {
//   return (
//     <View style={styles.productContainer}>
//       <Text style={styles.productTitle}>{item.title}</Text>
//       <Text style={styles.productDescription}>{item.description}</Text>
//       <TouchableOpacity
//         style={styles.productButton}
//         onPress={() => navigation.navigate('Product')}>
//         <Text style={styles.productButtonText}>Acessar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#7161ef',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: 'Products',
            headerStyle: {
              backgroundColor: '#7161ef',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
