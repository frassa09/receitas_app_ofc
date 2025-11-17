import { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TextInput, Picker } from "react-native-web";
import { getCategories } from '../services/Category.service';
import { getUsers } from '../services/Users.service';import { updateRecipe } from '../services/Recipes.service';
;


export default function UpdateRecipe({ navigation, route}) {
    
    
    const { recipeId, recipeName, recipeIngredients, recipePrepareMode, recipeCategory, recipePortions, recipePrepareTime, recipeUserId} = route.params
    const [nome, setNome] = useState(recipeName)
    const [ingredientes, setIngredientes] = useState(recipeIngredients)
    const [modoPreparo, setModoPreparo] = useState(recipePrepareMode)
    const [porcoes, setPorcoes] = useState(recipePortions)
    const [tempoPreparoMinutos, setTempoPreparoMinutos] = useState(recipePrepareTime)
    const [categorias, setCategorias] = useState([])
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(recipeUserId)
    const [categoryId, setCategoryId] = useState(recipeCategory)
    



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
            nome: nome, 
            ingredientes: ingredientes, 
            modo_preparo: modoPreparo,
            porcoes: parseInt(porcoes),
            tempo_preparo_minutos: parseInt(tempoPreparoMinutos),
            usuario_id: parseInt(userId),
            categoria_id: parseInt(categoryId)
        }
        console.log(JSON.stringify(obj));

        try{
            clearForm()
            const response = await updateRecipe(userId, obj)
            console.log(response)
            navigation.navigate('Recipes')
        }
        catch(e){

        }

    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Editar receita
            </Text>

            <TextInput
                value={nome}
                onChangeText={(text) => setNome(text)}
                placeholder="Digite o nome.."
            />
            <TextInput
                value={ingredientes}
                onChangeText={(text) => setIngredientes(text)}
                placeholder="Digite os ingrediêntes.."
            />
            <TextInput
                value={modoPreparo}
                onChangeText={(text) => setModoPreparo(text)}
                placeholder="Digite o modo de preparo.."
            />
            <TextInput
                value={porcoes}
                onChangeText={(text) => setPorcoes(text)}
                placeholder="Digite a quantidade de porções.."
            />
            <TextInput
                value={tempoPreparoMinutos}
                onChangeText={(text) => setTempoPreparoMinutos(text)}
                placeholder="Digite o tempo de preparo em minutos.."
            />

            <Picker selectedValue={userId} onValueChange={(item) => setUserId(item)}>

                <Picker.Item label={'Selecione uma opção'} value={''} enabled={false}></Picker.Item>
                
                {users.map((user) => (
                    <Picker.Item key={user.id} label={user.nome} value={user.id.toString()}>

                    </Picker.Item>
                ))}
                
            </Picker>

            <Picker selectedValue={categoryId} onValueChange={(item) => setCategoryId(item)}>

                <Picker.Item label={'Selecione uma categoria'} value={''} enabled={false}></Picker.Item>

                {categorias.map((category) => (
                    <Picker.Item key={category.id} label={category.nome} value={category.id.toString()}></Picker.Item>
                ))}

            </Picker>

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