import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Recipes from './screens/Recipes';

const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} options={{title: 'Início'}}/>
        <Stack.Screen name='Recipes' component={Recipes} options={{title: 'Receitas'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
