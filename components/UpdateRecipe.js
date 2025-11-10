import { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TextInput, Picker } from "react-native-web";
import { getCategories, updateCategory } from '../services/Category.service';
import { getUsers } from '../services/Users.service';
import { getRecipes } from '../services/Recipes.service';


export default function UpdateRecipe({ navigation, route}) {

    const { recipeId } = route.params
    const [recipes, setRecipes] = useState([])
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')
    const [porcoes, setPorcoes] = useState('')
    const [tempoPreparoMinutos, setTempoPreparoMinutos] = useState('')
    const [categorias, setCategorias] = useState([])
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState('')
    const [categoryId, setCategoryId] = useState('')


    const loadRecipes = async () => {
          const data = await getRecipes()
          setRecipes(data)
        }
    
    useEffect(() => {
    
        loadRecipes()
          
    }, [clickDelete])


    const loadUsers = async () => {
        const data = await getUsers()
        setUsers(data)
    }
    const loadCategories = async () => {
        const data = await getCategories()
        setCategorias(data)
    }
    
    useEffect(() => {
        loadUsers()
        loadCategories()
    }, [])


    const clearForm = () => {
        setNome('')
    }


    async function save() {
        const obj = {
            nome: nome
        }
        console.log(JSON.stringify(obj));

        try{
            clearForm()
            const response = await updateCategory(categoryId, obj)
            console.log(response)
            navigation.navigate('Categories')
        }
        catch(e){

        }

    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Atualizar categoria
            </Text>

            <TextInput
                value={nome}
                onChangeText={(text) => setNome(text)}
                placeholder="Digite o nome.."
            />

            <TouchableOpacity 
                style={style.button}
                onPress={save}>

                <Text style={style.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    }
})