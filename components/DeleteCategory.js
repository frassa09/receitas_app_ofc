import { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteCategory } from '../services/Category.service';


export default function DeleteCategory({route, navigation}) {

    const { categoryId } = route.params
    const [categoriaDeletada, setCategoriaDeletada] = useState(false)

    const deletar = async (id) => {

        try{
            const resposta = await deleteCategory(id)
            console.log(resposta)
            setCategoriaDeletada(true)
        }
        catch(e){
            console.log(e)
        }
    }

    const getToCategories = () => {
        navigation.navigate('Categories')
    }


    return (

        <SafeAreaView>
        <View style={[!categoriaDeletada ? style.container : style.none]}>
            <Text style={style.title}>
                Você tem certeza de que deseja deletar essa categoria? {categoryId}
            </Text>

            <TouchableOpacity 
                style={style.button}
                onPress={() => deletar(categoryId)}
                >

                <Text style={style.textButton}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>

        <View style={[categoriaDeletada? style.container : style.none]}>
            <Text style={style.title}>
                Categoria deletada
            </Text>

            <TouchableOpacity 
                style={style.button}
                onPress={() => getToCategories()}
                >

                <Text style={style.textButton}>
                    Voltar para Categorias
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
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
    },
    none: {
        display: 'none'
    }
})