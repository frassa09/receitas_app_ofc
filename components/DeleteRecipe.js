import { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TextInput, Picker } from "react-native-web";
import { deleteRecipe } from '../services/Recipes.service';


export default function DeleteRecipe({route}) {

    const { userId } = route.params

    const deletar = async () => {

        try{
            const resposta = await deleteRecipe(id)
            console.log(resposta)
        }
        catch(e){

        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Você tem certeza de que deseja deletar essa receita? {userId}
            </Text>

            <TouchableOpacity 
                style={style.button}
                onPress={() => deletar(id)}
                >

                <Text style={style.textButton}>
                    Deletar
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