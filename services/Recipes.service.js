const url = 'http://10.3.116.212:3000'

export async function getRecipes() {
    
    const request = `${url}/receitas`

    try{

        const response = await fetch(request, {
            method: 'GET'
        }) 

        const resposta = await response.json()
        return resposta.data
    }
    catch(e){
        console.log(`erro ao solicitar receitas: ${e}`)
    }
}

export async function createRecipe(recipe){
    const request = `${url}/receitas`

    try{
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await response.json()
        return data
    }
    catch(e){

    }
}

export async function deleteRecipe(id) {
    const request = `${url}/receitas`

    try{
        const response = await fetch(`${request}/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    }
    catch(e){
        
    }
}