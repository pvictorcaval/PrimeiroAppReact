import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/crudScreen';
import ListaScreen from './screens/listaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Listar">
        <Stack.Screen name="Listar" component={ListaScreen}/>
        <Stack.Screen name="Crud" component={CadastroScreen}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}
