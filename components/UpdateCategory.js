import { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TextInput, Picker } from "react-native-web";
import { updateCategory } from '../services/Category.service';


export default function UpdateCategory({ navigation, route}) {

    const { categoryName } = route.params
    const { categoryId } = route.params
    const [nome, setNome] = useState(categoryName)


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