import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddRecipes from '../components/AddRecipe'
import { getRecipes } from '../services/Recipes.service'

export default function Recipes({ navigation }) {

    const [view, setView] = useState('list')
    const [recipes, setRecipes] = useState([])
    const [clickDelete, setClickDelete] = useState(false)

    const loadRecipes = async () => {
      const data = await getRecipes()
      setRecipes(data)
    }

    useEffect(() => {

      loadRecipes()
      
    }, [clickDelete])

    const renderItem = ({item}) => {


      return (
        <View style={styles.card}>
          <Text style={styles.textButton}>
            Título
          </Text>

          <Text style={styles.cardItem}>
            {item.nome}
          </Text>

          
          <Text style={styles.textButton}>
            Ingredientes
          </Text>
          <Text style={styles.cardItem}>
            {item.ingredientes}
          </Text>

          
          <Text style={styles.textButton}>
            Modo Preparo
          </Text>
          <Text style={styles.cardItem}>
            {item.modo_preparo}
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('UpdateRecipe', {
            recipeId: item.id,
            recipeName: item.nome,
            recipePrepareMode: item.modo_preparo,
            recipeIngredients: item.ingredientes,
            recipeUserId: item.usuario_id,
            recipeCategory: item.categoria_id,
            recipePortions: item.porcoes,
            recipePrepareTime: item.tempo_preparo_minutos
          })}>
        <Text style={styles.textButton}>
            Editar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('DeleteRecipe', {
          userId: item.id
        })
        setClickDelete(true)
      }}>
        <Text style={styles.textButton}>
            Deletar
        </Text>
      </TouchableOpacity>
        </View>
      )
    }


  return (
    <ScrollView>
      <Text style={styles.title}>
        Bem vindo!
      </Text>

      {(view === 'list') ? (
        <View>
        <TouchableOpacity style={styles.button} onPress={() => setView('form')}>
        <Text style={styles.textButton}>
            Adicionar receita
        </Text>
        </TouchableOpacity>

        <FlatList data={recipes} keyExtractor={(item) => {item.id.toString()}} renderItem={(item) => renderItem(item)}></FlatList>
        </View>
      ): (
        <View>
        <TouchableOpacity style={styles.button} onPress={() => setView('list')}>
        <Text style={styles.textButton}>
            Ver receitas
        </Text>
        </TouchableOpacity>

        <AddRecipes></AddRecipes>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
    card: {
      backgroundColor: '#1a2b4a',
      padding: 30,
      borderRadius: 10,
      marginBottom: 20
    },
    cardItem: {
      color: '#fff',
      marginBottom: 10
    }
})