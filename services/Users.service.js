const url = 'http://10.3.118.112:3000'

export async function getUsers() {
    
    const request = `${url}/usuarios`

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