const url = 'http://10.3.118.112:3333'

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