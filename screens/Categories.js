import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/Category.service'
import AddCategory from '../components/AddCategory'

export default function Categories({ navigation }) {

    const [view, setView] = useState('list')
    const [categories, setCategories] = useState([])

    const loadCategories = async () => {
      const data = await getCategories()
      setCategories(data)
    }

    useEffect(() => {

      loadCategories()
      
    }, [])

    const renderItem = ({item}) => {


      return (
        <View style={styles.card}>
          <Text style={styles.textButton}>
            Título
          </Text>

          <Text style={styles.cardItem}>
            {item.nome}
          </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('UpdateCategory', {
            categoryId: item.id,
            categoryName: item.nome
          })}>
        <Text style={styles.textButton}>
            Editar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('DeleteCategory', {
                categoryId: item.id
              })
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
            Adicionar categoria
        </Text>
        </TouchableOpacity>

        <FlatList data={categories} keyExtractor={(item) => {item.id.toString()}} renderItem={(item) => renderItem(item)}></FlatList>
        </View>
      ): (
        <View>
        <TouchableOpacity style={styles.button} onPress={() => setView('list')}>
            Ver categorias
          <Text style={styles.textButton}>
        </Text>
        </TouchableOpacity>

        <AddCategory></AddCategory>
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