import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const dados_fake = [
    {
        id: 1,
        nome: 'bolo de cenoura',
        modo_preparo: 'Mistura',
        ingredientes: 'cenoura, ovo, trigo',
        usuario_id: 1,
        categoria_id: 1
    },
    {
        id: 2,
        nome: 'bolo de milho',
        modo_preparo: 'Mistura',
        ingredientes: 'milho, ovo, trigo',
        usuario_id: 1,
        categoria_id: 1
    }
]

export default function Recipes() {

    const [view, setView] = useState('list')




  return (
    <View>
      <Text style={styles.title}>
        Bem vindo!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>
            opa
        </Text>
      </TouchableOpacity>

      {(view === 'list') ? (
        <View>
        <TouchableOpacity style={styles.button} onPress={() => setView('form')}>
        <Text style={styles.textButton}>
            Adicionar receita
        </Text>
        </TouchableOpacity>
        </View>
      ): (
        <View>
        <TouchableOpacity style={styles.button} onPress={() => setView('list')}>
        <Text style={styles.textButton}>
            Ver receitas
        </Text>
        </TouchableOpacity>
        </View>
      )}
    </View>
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
    }
})