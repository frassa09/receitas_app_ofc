import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";


export default function AddRecipes() {
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')

    function save() {
        const obj = {
            nome, ingredientes, modoPreparo
        }
        console.log(JSON.stringify(obj));
        
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar nova receita
            </Text>

            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome.."
            />
            <TextInput
                value={ingredientes}
                onChangeText={setIngredientes}
                placeholder="Digite os ingrediêntes.."
            />
            <TextInput
                value={modoPreparo}
                onChangeText={setModoPreparo}
                placeholder="Digite o modo de preparo.."
            />

            <TouchableOpacity 
                style={style.button}
                onPress={() => save()}>

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