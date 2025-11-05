const url = 'http://10.3.116.184:3000'

export async function getCategories() {
    
    const request = `${url}/categorias`

    try{
        const response = await fetch(request, {
            method: 'GET'
        }) 
        const resposta = await response.json()
        return resposta.data
    }
    catch(e){

    }
}

export async function createCategory(category){

    const request = `${url}/categorias`

    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category) 
        })

        const data = await response.json()
        return data
    }
    catch(e){

    }
}
