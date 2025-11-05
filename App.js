import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Categories from './screens/Categories';
import DeleteRecipe from './components/DeleteRecipe';

const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} options={{title: 'Início'}}/>
        <Stack.Screen name='Recipes' component={Recipes} options={{title: 'Receitas'}}/>
        <Stack.Screen name='Categories' component={Categories} options={{title: 'Categorias'}}/>
        <Stack.Screen name='DeleteRecipe' component={DeleteRecipe} id={id} options={{title: 'Deletar Receita'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
