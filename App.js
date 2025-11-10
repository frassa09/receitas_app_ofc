import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Categories from './screens/Categories';
import DeleteRecipe from './components/DeleteRecipe';
import DeleteCategory from './components/DeleteCategory';
import { updateCategory } from './services/Category.service';
import UpdateCategory from './components/UpdateCategory';
import UpdateRecipe from './components/UpdateRecipe';

const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} options={{title: 'Início'}}/>
        <Stack.Screen name='Recipes' component={Recipes} options={{title: 'Receitas'}}/>
        <Stack.Screen name='Categories' component={Categories} options={{title: 'Categorias'}}/>
        <Stack.Screen name='DeleteRecipe' component={DeleteRecipe} options={{title: 'Deletar Receita'}}/>
        <Stack.Screen name='DeleteCategory' component={DeleteCategory} options={{title: 'Deletar Categoria'}}/>
        <Stack.Screen name='UpdateCategory' component={UpdateCategory} options={{title: 'Atualizar Categoria'}}/>
        <Stack.Screen name='UpdateRecipe' component={UpdateRecipe} options={{title: 'Atualizar Receita'}}/>
    
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
