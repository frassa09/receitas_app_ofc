const url = 'http://10.3.118.112:3000'

export async function getCategories() {
    
    const request = `${url}/categorias`

    try{
        const response = await fetch(request, {
            method: 'GET'
        }) 
        const resposta = await response.json()
        return resposta
    }
    catch(e){

    }
}

