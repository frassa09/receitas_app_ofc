const url = 'http://10.3.118.112:3000'

export async function getRecipes() {
    
    const request = `${url}/receitas`

    try{

        const response = await fetch(request, {
            method: 'GET'
        }) 

        const resposta = await response.json()
        return data.data
    }
    catch(e){

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
    }
    catch(e){

    }
}