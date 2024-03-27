import {API_URL} from '../../constants'


export const getSales = async (token) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "GET",
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }
    
    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const getSaleById = async (id , token) => {
    const url = `${API_URL}/sale/crud?S_ID=${id}`

    const requestOptions = {
        "method" : "GET",
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }
    
    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const createSale = async (sale , token) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "POST",
        "body" : sale,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const updateSale = async (sale , token) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : sale,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
    
}

export const deleteSale = async (s_id , token) => {
    const url = `${API_URL}/sale/crud?S_ID=${s_id}`

    const requestOptions = {
        "method" : "PUT",
        "body" : s_id,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}